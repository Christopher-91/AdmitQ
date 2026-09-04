-- ============================================================
-- AdmitQ OAuth Migration
-- Run this against the existing database to enable OAuth sign-in
-- and university reviews.
-- ============================================================

-- 1. Make password_hash nullable to support OAuth-only users
ALTER TABLE users ALTER COLUMN password_hash DROP NOT NULL;

-- 2. Add auth provider tracking and avatar_url if not already present
ALTER TABLE users ADD COLUMN IF NOT EXISTS auth_provider VARCHAR(20) DEFAULT 'local';

-- Avatar_url already exists in schema; ensure it's there
-- (This is a no-op if column exists already)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'avatar_url'
  ) THEN
    ALTER TABLE users ADD COLUMN avatar_url VARCHAR(500);
  END IF;
END $$;

-- 3. Create oauth_accounts table for multi-provider support
CREATE TABLE IF NOT EXISTS oauth_accounts (
  id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id             UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  provider            VARCHAR(20) NOT NULL,          -- 'google', 'apple'
  provider_account_id VARCHAR(255) NOT NULL,         -- google sub / apple sub
  id_token            TEXT,
  access_token        TEXT,
  refresh_token       TEXT,
  expires_at          TIMESTAMPTZ,
  scope               VARCHAR(500),
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(provider, provider_account_id)
);

-- 4. Create university reviews table
CREATE TABLE IF NOT EXISTS university_reviews (
  id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  university_id       UUID NOT NULL REFERENCES universities(id) ON DELETE CASCADE,
  user_id             UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  -- Review content
  rating              INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title               VARCHAR(200),
  body                TEXT NOT NULL,
  pros                TEXT,
  cons                TEXT,
  
  -- Context
  year_attended       INTEGER,
  program_studied     VARCHAR(200),
  degree_obtained     VARCHAR(50),
  
  -- Author verification (separate from OAuth authentication)
  is_verified_student BOOLEAN NOT NULL DEFAULT FALSE,
  is_verified_alumni  BOOLEAN NOT NULL DEFAULT FALSE,
  
  -- Moderation
  is_published        BOOLEAN NOT NULL DEFAULT TRUE,
  helpful_votes       INTEGER NOT NULL DEFAULT 0,
  
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  
  UNIQUE(university_id, user_id)  -- one review per user per university
);

CREATE INDEX IF NOT EXISTS idx_reviews_university ON university_reviews(university_id);
CREATE INDEX IF NOT EXISTS idx_reviews_user ON university_reviews(user_id);
CREATE INDEX IF NOT EXISTS idx_oauth_user ON oauth_accounts(user_id);

-- Update existing users to have 'local' auth_provider
UPDATE users SET auth_provider = 'local' WHERE auth_provider IS NULL;
