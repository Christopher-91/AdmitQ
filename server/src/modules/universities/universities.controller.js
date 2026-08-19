import * as uniService from './universities.service.js';
import { asyncHandler } from '../../middleware/errorHandler.js';
import { successResponse, paginatedResponse } from '../../utils/response.js';

export const search = asyncHandler(async (req, res) => {
  const result = await uniService.searchUniversities(req.query);
  paginatedResponse(res, result.universities, {
    page: result.page,
    limit: result.limit,
    total: result.total,
  });
});

export const getById = asyncHandler(async (req, res) => {
  const university = await uniService.getUniversity(req.params.id);
  successResponse(res, university);
});
