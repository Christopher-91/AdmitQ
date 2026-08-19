import * as svc from './compare.service.js';
import { asyncHandler } from '../../middleware/errorHandler.js';
import { successResponse } from '../../utils/response.js';

export const compare = asyncHandler(async (req, res) => {
  const result = await svc.compareItems(req.body);
  successResponse(res, result);
});
