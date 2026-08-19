import { Router } from 'express';
import * as ctrl from './costs.controller.js';

const router = Router();
router.post('/calculate', ctrl.calculate);

export default router;
