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
