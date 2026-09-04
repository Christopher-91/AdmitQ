import * as authService from './auth.service.js';
import { asyncHandler } from '../../middleware/errorHandler.js';
import { successResponse, createdResponse } from '../../utils/response.js';

export const register = asyncHandler(async (req, res) => {
  const result = await authService.register(req.body);
  createdResponse(res, result);
});

export const login = asyncHandler(async (req, res) => {
  const result = await authService.login(req.body);
  successResponse(res, result);
});

export const refresh = asyncHandler(async (req, res) => {
  const result = await authService.refreshAccessToken(req.body.refreshToken);
  successResponse(res, result);
});

export const logout = asyncHandler(async (req, res) => {
  await authService.logout(req.body.refreshToken);
  successResponse(res, { message: 'Logged out successfully' });
});

export const forgotPassword = asyncHandler(async (req, res) => {
  await authService.forgotPassword(req.body.email);
  // Always return success to prevent email enumeration
  successResponse(res, {
    message: 'If an account with that email exists, a reset link has been sent',
  });
});

export const resetPassword = asyncHandler(async (req, res) => {
  await authService.resetPassword(req.body);
  successResponse(res, { message: 'Password reset successfully' });
});

/**
 * POST /auth/google
 * Receives the Google ID token from the frontend and exchanges it for an AdmitQ JWT.
 */
export const googleLogin = asyncHandler(async (req, res) => {
  const { credential, userInfo } = req.body;
  if (!credential) {
    return res.status(400).json({ success: false, error: { message: 'Google credential is required' } });
  }
  const profile = await authService.verifyGoogleToken(credential, userInfo || null);
  const result = await authService.oauthLogin({ provider: 'google', profile });
  successResponse(res, result);
});

/**
 * POST /auth/apple
 * Scaffold — Apple token verification requires Apple Developer credentials.
 * Once you have your Apple Services ID and private key, implement verifyAppleToken in auth.service.js.
 */
export const appleLogin = asyncHandler(async (req, res) => {
  const { identityToken, authorizationCode, user: appleUser } = req.body;
  if (!identityToken) {
    return res.status(400).json({ success: false, error: { message: 'Apple identity token is required' } });
  }
  // TODO: Implement verifyAppleToken once you have Apple credentials
  // const profile = await authService.verifyAppleToken({ identityToken, authorizationCode, appleUser });
  return res.status(501).json({ success: false, error: { message: 'Apple Sign-In credentials not yet configured. Add APPLE_CLIENT_ID, APPLE_TEAM_ID, APPLE_KEY_ID, APPLE_PRIVATE_KEY to .env' } });
});

/**
 * GET /auth/connected-providers
 * Returns the OAuth providers linked to the currently authenticated user.
 */
export const connectedProviders = asyncHandler(async (req, res) => {
  const providers = await authService.getConnectedProviders(req.user.id);
  successResponse(res, providers);
});
