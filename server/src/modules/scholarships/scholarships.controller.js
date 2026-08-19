import * as svc from './scholarships.service.js';
import { asyncHandler } from '../../middleware/errorHandler.js';
import { successResponse, paginatedResponse } from '../../utils/response.js';

export const search = asyncHandler(async (req, res) => {
  const result = await svc.searchScholarships(req.query);
  paginatedResponse(res, result.scholarships, { page: result.page, limit: result.limit, total: result.total });
});

export const getById = asyncHandler(async (req, res) => {
  const scholarship = await svc.getScholarship(req.params.id);
  successResponse(res, scholarship);
});
