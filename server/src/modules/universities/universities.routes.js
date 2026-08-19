import { Router } from 'express';
import * as uniController from './universities.controller.js';
import { optionalAuth } from '../../middleware/auth.js';

const router = Router();

router.get('/', optionalAuth, uniController.search);
router.get('/:id', optionalAuth, uniController.getById);

export default router;
