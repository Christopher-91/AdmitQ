import { Router } from 'express';
import * as immigrationController from './immigration.controller.js';

const router = Router();

// GET /api/immigration -> List all profiles
router.get('/', immigrationController.list);

// GET /api/immigration/:slug -> Get full profile
router.get('/:slug', immigrationController.getBySlug);

// GET /api/immigration/:slug/news -> Get live news (GDELT)
router.get('/:slug/news', immigrationController.getNews);

export default router;
