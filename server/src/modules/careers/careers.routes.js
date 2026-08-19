import { Router } from 'express';
import * as ctrl from './careers.controller.js';
import { authenticate, optionalAuth } from '../../middleware/auth.js';

const router = Router();
router.get('/', ctrl.list);
router.get('/pathway', authenticate, ctrl.getPathway);
router.get('/:id', ctrl.getById);

export default router;
