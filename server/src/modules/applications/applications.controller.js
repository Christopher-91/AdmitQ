import * as svc from './applications.service.js';
import { asyncHandler } from '../../middleware/errorHandler.js';
import { successResponse, createdResponse, noContentResponse } from '../../utils/response.js';

export const create = asyncHandler(async (req, res) => {
  const app = await svc.createApplication(req.user.id, req.body);
  createdResponse(res, app);
});

export const list = asyncHandler(async (req, res) => {
  const apps = await svc.getUserApplications(req.user.id);
  successResponse(res, apps);
});

export const getById = asyncHandler(async (req, res) => {
  const app = await svc.getApplicationById(req.user.id, req.params.id);
  successResponse(res, app);
});

export const update = asyncHandler(async (req, res) => {
  const app = await svc.updateApplication(req.user.id, req.params.id, req.body);
  successResponse(res, app);
});

export const updateDoc = asyncHandler(async (req, res) => {
  const app = await svc.updateDocumentStatus(req.user.id, req.params.id, req.params.docId, req.body);
  successResponse(res, app);
});

export const remove = asyncHandler(async (req, res) => {
  await svc.deleteApplication(req.user.id, req.params.id);
  noContentResponse(res);
});
