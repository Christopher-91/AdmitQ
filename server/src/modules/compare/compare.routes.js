import { Router } from 'express';
import * as ctrl from './compare.controller.js';

const router = Router();
router.post('/', ctrl.compare);

export default router;
