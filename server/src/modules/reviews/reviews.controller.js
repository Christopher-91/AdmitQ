import * as reviewsService from './reviews.service.js';
import { asyncHandler } from '../../middleware/errorHandler.js';
import { successResponse, createdResponse, paginatedResponse } from '../../utils/response.js';

export const getReviews = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const result = await reviewsService.getReviews(req.params.slug, {
    page: parseInt(page),
    limit: Math.min(parseInt(limit), 50),
  });
  res.json({
    success: true,
    data: {
      reviews: result.reviews,
      stats: result.stats,
    },
    meta: {
      pagination: {
        page: result.page,
        limit: result.limit,
        total: result.total,
        totalPages: Math.ceil(result.total / result.limit),
        hasMore: result.page * result.limit < result.total,
      },
    },
  });
});

export const createReview = asyncHandler(async (req, res) => {
  const review = await reviewsService.createReview(req.params.slug, req.user.id, req.body);
  createdResponse(res, review);
});

export const updateReview = asyncHandler(async (req, res) => {
  const review = await reviewsService.updateReview(req.params.reviewId, req.user.id, req.body);
  successResponse(res, review);
});

export const deleteReview = asyncHandler(async (req, res) => {
  await reviewsService.deleteReview(req.params.reviewId, req.user.id);
  successResponse(res, { message: 'Review deleted' });
});
