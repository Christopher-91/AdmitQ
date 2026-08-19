import { Router } from 'express';
import * as ctrl from './countries.controller.js';

const router = Router();
router.get('/', ctrl.list);
router.get('/compare', ctrl.compare);
router.get('/:id', ctrl.getById);

export default router;
