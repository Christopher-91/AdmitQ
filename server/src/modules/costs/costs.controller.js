import { calculateCosts } from './costs.service.js';
import { asyncHandler } from '../../middleware/errorHandler.js';
import { successResponse } from '../../utils/response.js';

export const calculate = asyncHandler(async (req, res) => {
  const result = calculateCosts(req.body);
  successResponse(res, result);
});
