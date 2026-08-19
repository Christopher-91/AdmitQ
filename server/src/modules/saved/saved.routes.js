import { Router } from 'express';
import * as ctrl from './saved.controller.js';
import { authenticate } from '../../middleware/auth.js';

const router = Router();
router.use(authenticate);
router.post('/', ctrl.save);
router.get('/', ctrl.list);
router.delete('/:id', ctrl.remove);
router.post('/unsave', ctrl.unsave);

export default router;
