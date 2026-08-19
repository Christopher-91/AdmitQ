import * as svc from './dashboard.service.js';
import { asyncHandler } from '../../middleware/errorHandler.js';
import { successResponse } from '../../utils/response.js';

export const getDashboard = asyncHandler(async (req, res) => {
  const data = await svc.getDashboard(req.user.id);
  successResponse(res, data);
});
