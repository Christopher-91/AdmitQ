import * as svc from './deadlines.service.js';
import { asyncHandler } from '../../middleware/errorHandler.js';
import { successResponse, createdResponse, noContentResponse } from '../../utils/response.js';

export const create = asyncHandler(async (req, res) => { createdResponse(res, await svc.createDeadline(req.user.id, req.body)); });
export const list = asyncHandler(async (req, res) => { successResponse(res, await svc.getUserDeadlines(req.user.id, req.query)); });
export const update = asyncHandler(async (req, res) => { successResponse(res, await svc.updateDeadline(req.user.id, req.params.id, req.body)); });
export const remove = asyncHandler(async (req, res) => { await svc.deleteDeadline(req.user.id, req.params.id); noContentResponse(res); });
