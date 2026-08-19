import { Router } from 'express';
import * as ctrl from './recommendations.controller.js';
import { authenticate } from '../../middleware/auth.js';

const router = Router();
router.get('/', authenticate, ctrl.getRecommendations);

export default router;
