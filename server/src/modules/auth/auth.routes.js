import { Router } from 'express';
import * as authController from './auth.controller.js';
import { validate } from '../../middleware/validate.js';
import { authenticate } from '../../middleware/auth.js';
import {
  registerSchema,
  loginSchema,
  refreshSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  verifyOtpSchema,
  resendOtpSchema,
} from './auth.validation.js';

const router = Router();

router.post('/register', validate(registerSchema), authController.register);
router.post('/verify-otp', validate(verifyOtpSchema), authController.verifyOtp);
router.post('/resend-otp', validate(resendOtpSchema), authController.resendOtp);
router.post('/login', validate(loginSchema), authController.login);
router.post('/refresh', validate(refreshSchema), authController.refresh);
router.post('/logout', authController.logout);
router.post('/forgot-password', validate(forgotPasswordSchema), authController.forgotPassword);
router.post('/reset-password', validate(resetPasswordSchema), authController.resetPassword);

// OAuth routes
router.post('/google', authController.googleLogin);
router.post('/apple', authController.appleLogin);
router.get('/connected-providers', authenticate, authController.connectedProviders);

export default router;
