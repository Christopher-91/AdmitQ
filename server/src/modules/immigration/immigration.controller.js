import * as immigrationService from './immigration.service.js';
import { asyncHandler } from '../../middleware/errorHandler.js';
import { successResponse } from '../../utils/response.js';

/**
 * GET /api/immigration
 * List all immigration profiles (summary view for hub grid)
 */
export const list = asyncHandler(async (req, res) => {
  const profiles = await immigrationService.getAllProfiles();
  successResponse(res, profiles);
});

/**
 * GET /api/immigration/:slug
 * Get full immigration profile for a specific country
 */
export const getBySlug = asyncHandler(async (req, res) => {
  const profile = await immigrationService.getProfile(req.params.slug);
  successResponse(res, profile);
});

/**
 * GET /api/immigration/:slug/news
 * Fetch live immigration news for a specific country (GDELT proxy)
 */
export const getNews = asyncHandler(async (req, res) => {
  const articles = await immigrationService.getNews(req.params.slug);
  successResponse(res, articles);
});
