import { Router } from 'express';
import * as reviewsController from './reviews.controller.js';
import { authenticate, optionalAuth } from '../../middleware/auth.js';

const router = Router({ mergeParams: true }); // mergeParams to access :slug from parent

// GET /api/universities/:slug/reviews — public, but auth optional (to show "your review" state)
router.get('/', optionalAuth, reviewsController.getReviews);

// POST /api/universities/:slug/reviews — must be authenticated
router.post('/', authenticate, reviewsController.createReview);

// PATCH /api/universities/:slug/reviews/:reviewId — own review only
router.patch('/:reviewId', authenticate, reviewsController.updateReview);

// DELETE /api/universities/:slug/reviews/:reviewId — own review only
router.delete('/:reviewId', authenticate, reviewsController.deleteReview);

export default router;
