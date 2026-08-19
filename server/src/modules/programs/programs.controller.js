import * as programsService from './programs.service.js';
import { asyncHandler } from '../../middleware/errorHandler.js';
import { successResponse, paginatedResponse } from '../../utils/response.js';

export const search = asyncHandler(async (req, res) => {
  const result = await programsService.searchPrograms(req.query);
  paginatedResponse(res, result.programs, { page: result.page, limit: result.limit, total: result.total });
});

export const getById = asyncHandler(async (req, res) => {
  const program = await programsService.getProgram(req.params.id);
  successResponse(res, program);
});
