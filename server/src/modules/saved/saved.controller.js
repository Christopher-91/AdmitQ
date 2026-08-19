import * as svc from './saved.service.js';
import { asyncHandler } from '../../middleware/errorHandler.js';
import { successResponse, createdResponse, noContentResponse } from '../../utils/response.js';

export const save = asyncHandler(async (req, res) => { createdResponse(res, await svc.saveItem(req.user.id, req.body)); });
export const list = asyncHandler(async (req, res) => { successResponse(res, await svc.getSavedItems(req.user.id, req.query)); });
export const remove = asyncHandler(async (req, res) => { await svc.removeSavedItem(req.user.id, req.params.id); noContentResponse(res); });
export const unsave = asyncHandler(async (req, res) => { await svc.unsaveItem(req.user.id, req.body.itemType, req.body.itemId); noContentResponse(res); });
