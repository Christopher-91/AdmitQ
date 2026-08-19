import * as svc from './recommendations.service.js';
import { asyncHandler } from '../../middleware/errorHandler.js';
import { successResponse } from '../../utils/response.js';

export const getRecommendations = asyncHandler(async (req, res) => {
  const result = await svc.getRecommendations(req.user.id, req.query);
  successResponse(res, result);
});
