import { Router } from 'express';
import * as ctrl from './programs.controller.js';
import { optionalAuth } from '../../middleware/auth.js';

const router = Router();
router.get('/', optionalAuth, ctrl.search);
router.get('/:id', optionalAuth, ctrl.getById);

export default router;
