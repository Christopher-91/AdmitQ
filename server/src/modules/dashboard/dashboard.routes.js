import { Router } from 'express';
import * as ctrl from './dashboard.controller.js';
import { authenticate } from '../../middleware/auth.js';

const router = Router();
router.get('/', authenticate, ctrl.getDashboard);

export default router;
