import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { OAuth2Client } from 'google-auth-library';
import config from '../../config/index.js';
import { query } from '../../config/database.js';
import {
  BadRequestError,
  ConflictError,
  UnauthorizedError,
  NotFoundError,
} from '../../middleware/errorHandler.js';

const googleClient = new OAuth2Client(config.google?.clientId);

const SALT_ROUNDS = 12;

/**
 * Register a new user
 */
export const register = async ({ email, password, firstName, lastName }) => {
  // Check if user exists
  const existing = await query('SELECT id FROM users WHERE email = $1', [
    email.toLowerCase(),
  ]);
  if (existing.rows.length > 0) {
    throw new ConflictError('An account with this email already exists');
  }

  // Hash password
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

  // Create user
  const result = await query(
    `INSERT INTO users (email, password_hash, first_name, last_name, role)
     VALUES ($1, $2, $3, $4, 'student')
     RETURNING id, email, first_name, last_name, role, created_at`,
    [email.toLowerCase(), passwordHash, firstName, lastName]
  );

  const user = result.rows[0];

  // Create empty student profile
  await query(
    'INSERT INTO student_profiles (user_id) VALUES ($1)',
    [user.id]
  );

  // Generate tokens
  const tokens = generateTokens(user);
  await storeRefreshToken(user.id, tokens.refreshToken);

  // Generate email verification token (console log for dev)
  const verificationToken = crypto.randomBytes(32).toString('hex');
  await query(
    `INSERT INTO email_verifications (user_id, token, expires_at)
     VALUES ($1, $2, NOW() + INTERVAL '24 hours')`,
    [user.id, verificationToken]
  );

  if (config.env === 'development') {
    console.log(`📧 Email verification link: /verify-email?token=${verificationToken}`);
  }

  return {
    user: formatUser(user),
    ...tokens,
  };
};

/**
 * Login with email and password
 */
export const login = async ({ email, password }) => {
  const result = await query(
    `SELECT id, email, password_hash, first_name, last_name, role, is_active, email_verified
     FROM users WHERE email = $1`,
    [email.toLowerCase()]
  );

  if (result.rows.length === 0) {
    throw new UnauthorizedError('Invalid email or password');
  }

  const user = result.rows[0];

  if (!user.is_active) {
    throw new UnauthorizedError('Account has been deactivated');
  }

  const isValid = await bcrypt.compare(password, user.password_hash);
  if (!isValid) {
    throw new UnauthorizedError('Invalid email or password');
  }

  // Update last login
  await query('UPDATE users SET last_login = NOW() WHERE id = $1', [user.id]);

  // Generate tokens
  const tokens = generateTokens(user);
  await storeRefreshToken(user.id, tokens.refreshToken);

  return {
    user: formatUser(user),
    ...tokens,
  };
};

/**
 * Refresh access token
 */
export const refreshAccessToken = async (refreshToken) => {
  // Verify the refresh token
  let decoded;
  try {
    decoded = jwt.verify(refreshToken, config.jwt.refreshSecret);
  } catch {
    throw new UnauthorizedError('Invalid refresh token');
  }

  // Check if token exists and is not revoked
  const tokenResult = await query(
    'SELECT id, user_id, revoked, expires_at FROM refresh_tokens WHERE token = $1',
    [refreshToken]
  );

  if (tokenResult.rows.length === 0 || tokenResult.rows[0].revoked) {
    throw new UnauthorizedError('Refresh token has been revoked');
  }

  // Get user
  const userResult = await query(
    'SELECT id, email, first_name, last_name, role, is_active FROM users WHERE id = $1',
    [decoded.userId]
  );

  if (userResult.rows.length === 0 || !userResult.rows[0].is_active) {
    throw new UnauthorizedError('User not found or inactive');
  }

  const user = userResult.rows[0];

  // Revoke old refresh token (rotation)
  await query('UPDATE refresh_tokens SET revoked = TRUE WHERE token = $1', [
    refreshToken,
  ]);

  // Generate new tokens
  const tokens = generateTokens(user);
  await storeRefreshToken(user.id, tokens.refreshToken);

  return {
    user: formatUser(user),
    ...tokens,
  };
};

/**
 * Logout — revoke refresh token
 */
export const logout = async (refreshToken) => {
  if (refreshToken) {
    await query('UPDATE refresh_tokens SET revoked = TRUE WHERE token = $1', [
      refreshToken,
    ]);
  }
};

/**
 * Request password reset
 */
export const forgotPassword = async (email) => {
  const result = await query('SELECT id FROM users WHERE email = $1', [
    email.toLowerCase(),
  ]);

  // Always return success to prevent email enumeration
  if (result.rows.length === 0) return;

  const token = crypto.randomBytes(32).toString('hex');

  await query(
    `INSERT INTO password_resets (user_id, token, expires_at)
     VALUES ($1, $2, NOW() + INTERVAL '1 hour')`,
    [result.rows[0].id, token]
  );

  if (config.env === 'development') {
    console.log(`🔑 Password reset link: /reset-password?token=${token}`);
  }
};

/**
 * Reset password with token
 */
export const resetPassword = async ({ token, password }) => {
  const result = await query(
    `SELECT pr.id, pr.user_id FROM password_resets pr
     WHERE pr.token = $1 AND pr.used = FALSE AND pr.expires_at > NOW()`,
    [token]
  );

  if (result.rows.length === 0) {
    throw new BadRequestError('Invalid or expired reset token');
  }

  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

  // Update password
  await query('UPDATE users SET password_hash = $1 WHERE id = $2', [
    passwordHash,
    result.rows[0].user_id,
  ]);

  // Mark token as used
  await query('UPDATE password_resets SET used = TRUE WHERE id = $1', [
    result.rows[0].id,
  ]);

  // Revoke all refresh tokens for this user
  await query(
    'UPDATE refresh_tokens SET revoked = TRUE WHERE user_id = $1',
    [result.rows[0].user_id]
  );
};

// ─── Helpers ──────────────────────────────────────

function generateTokens(user) {
  const accessToken = jwt.sign(
    { userId: user.id, email: user.email, role: user.role },
    config.jwt.secret,
    { expiresIn: config.jwt.expiresIn }
  );

  const refreshToken = jwt.sign(
    { userId: user.id, jti: crypto.randomUUID() },
    config.jwt.refreshSecret,
    { expiresIn: config.jwt.refreshExpiresIn }
  );

  return { accessToken, refreshToken };
}

async function storeRefreshToken(userId, token) {
  // Parse expiry from config
  const days = parseInt(config.jwt.refreshExpiresIn) || 7;
  await query(
    `INSERT INTO refresh_tokens (user_id, token, expires_at)
     VALUES ($1, $2, NOW() + INTERVAL '${days} days')`,
    [userId, token]
  );
}

function formatUser(user) {
  return {
    id: user.id,
    email: user.email,
    firstName: user.first_name,
    lastName: user.last_name,
    role: user.role,
    emailVerified: user.email_verified || false,
    avatarUrl: user.avatar_url || null,
    authProvider: user.auth_provider || 'local',
  };
}

/**
 * OAuth login — Google or Apple
 * Finds or creates a user from an OAuth provider payload.
 * Safely handles account linking and Apple's name-only-on-first-login rule.
 */
export const oauthLogin = async ({ provider, profile }) => {
  const {
    providerAccountId, // unique ID from the provider
    email,            // may be private relay for Apple
    firstName,        // Apple: only present on first login
    lastName,         // Apple: only present on first login
    avatarUrl,        // Google: profile picture URL
    idToken,
  } = profile;

  // 1. Check if OAuth account already exists
  const existingOAuth = await query(
    'SELECT user_id FROM oauth_accounts WHERE provider = $1 AND provider_account_id = $2',
    [provider, providerAccountId]
  );

  if (existingOAuth.rows.length > 0) {
    const userId = existingOAuth.rows[0].user_id;

    // Update avatar_url for Google (may change)
    if (avatarUrl && provider === 'google') {
      await query('UPDATE users SET avatar_url = $1 WHERE id = $2', [avatarUrl, userId]);
    }

    // Update oauth_accounts token
    await query(
      `UPDATE oauth_accounts SET id_token = $1, updated_at = NOW()
       WHERE provider = $2 AND provider_account_id = $3`,
      [idToken || null, provider, providerAccountId]
    );

    await query('UPDATE users SET last_login = NOW() WHERE id = $1', [userId]);

    const userResult = await query(
      'SELECT id, email, first_name, last_name, role, is_active, email_verified, avatar_url, auth_provider FROM users WHERE id = $1',
      [userId]
    );

    if (!userResult.rows[0].is_active) {
      throw new UnauthorizedError('Account has been deactivated');
    }

    const user = userResult.rows[0];
    const tokens = generateTokens(user);
    await storeRefreshToken(user.id, tokens.refreshToken);
    return { user: formatUser(user), ...tokens };
  }

  // 2. No existing OAuth account — check if user with same email exists
  let user;
  if (email && !email.includes('@privaterelay.appleid.com')) {
    const existingUser = await query(
      'SELECT id, email, first_name, last_name, role, is_active, email_verified, avatar_url, auth_provider FROM users WHERE email = $1',
      [email.toLowerCase()]
    );

    if (existingUser.rows.length > 0) {
      // Link OAuth provider to existing account
      user = existingUser.rows[0];
      if (!user.is_active) throw new UnauthorizedError('Account has been deactivated');

      await query(
        `INSERT INTO oauth_accounts (user_id, provider, provider_account_id, id_token)
         VALUES ($1, $2, $3, $4)`,
        [user.id, provider, providerAccountId, idToken || null]
      );

      // Update avatar and mark email as verified via OAuth
      const updates = ['last_login = NOW()', 'email_verified = TRUE'];
      const params = [user.id];
      if (avatarUrl && !user.avatar_url) {
        params.unshift(avatarUrl);
        updates.unshift(`avatar_url = $${params.length - 1}`);
      }
      await query(`UPDATE users SET ${updates.join(', ')} WHERE id = $${params.length}`, params);

      const updatedUser = await query(
        'SELECT id, email, first_name, last_name, role, is_active, email_verified, avatar_url, auth_provider FROM users WHERE id = $1',
        [user.id]
      );
      user = updatedUser.rows[0];
      const tokens = generateTokens(user);
      await storeRefreshToken(user.id, tokens.refreshToken);
      return { user: formatUser(user), ...tokens };
    }
  }

  // 3. Brand new user — create account
  // CRITICAL: Apple only sends name on first login. Use it if present.
  const safeFirstName = firstName || email?.split('@')[0] || 'User';
  const safeLastName = lastName || '';

  const newUserResult = await query(
    `INSERT INTO users (email, first_name, last_name, role, email_verified, avatar_url, auth_provider)
     VALUES ($1, $2, $3, 'student', TRUE, $4, $5)
     RETURNING id, email, first_name, last_name, role, is_active, email_verified, avatar_url, auth_provider`,
    [
      email ? email.toLowerCase() : null,
      safeFirstName,
      safeLastName,
      avatarUrl || null,
      provider,
    ]
  );

  user = newUserResult.rows[0];

  // Create student profile
  await query('INSERT INTO student_profiles (user_id) VALUES ($1)', [user.id]);

  // Link OAuth account
  await query(
    `INSERT INTO oauth_accounts (user_id, provider, provider_account_id, id_token)
     VALUES ($1, $2, $3, $4)`,
    [user.id, provider, providerAccountId, idToken || null]
  );

  const tokens = generateTokens(user);
  await storeRefreshToken(user.id, tokens.refreshToken);
  return { user: formatUser(user), ...tokens };
};

/**
 * Verify a Google token — handles both:
 * 1. ID token (credential) from Google One Tap
 * 2. access_token + userInfo from implicit OAuth flow
 */
export const verifyGoogleToken = async (credential, userInfo = null) => {
  // If we received userInfo directly (implicit flow), use it
  if (userInfo && userInfo.sub) {
    return {
      providerAccountId: userInfo.sub,
      email: userInfo.email,
      firstName: userInfo.given_name,
      lastName: userInfo.family_name,
      avatarUrl: userInfo.picture,
      idToken: credential,
      emailVerified: userInfo.email_verified,
    };
  }

  // Otherwise treat credential as a Google ID token and verify it
  if (!config.google?.clientId) {
    throw new BadRequestError('Google Sign-In is not configured. Add GOOGLE_CLIENT_ID to .env');
  }
  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: config.google.clientId,
    });
    const payload = ticket.getPayload();
    return {
      providerAccountId: payload.sub,
      email: payload.email,
      firstName: payload.given_name,
      lastName: payload.family_name,
      avatarUrl: payload.picture,
      idToken: credential,
      emailVerified: payload.email_verified,
    };
  } catch (err) {
    throw new UnauthorizedError('Invalid Google token');
  }
};

/**
 * Get connected OAuth providers for a user
 */
export const getConnectedProviders = async (userId) => {
  const result = await query(
    'SELECT provider, created_at FROM oauth_accounts WHERE user_id = $1',
    [userId]
  );
  return result.rows;
};
