import * as svc from './careers.service.js';
import { asyncHandler } from '../../middleware/errorHandler.js';
import { successResponse } from '../../utils/response.js';

export const list = asyncHandler(async (req, res) => {
  const careers = await svc.listCareers();
  successResponse(res, careers);
});

export const getById = asyncHandler(async (req, res) => {
  const career = await svc.getCareer(req.params.id);
  successResponse(res, career);
});

export const getPathway = asyncHandler(async (req, res) => {
  const pathway = await svc.generatePathway(req.user.id);
  successResponse(res, pathway);
});
