import * as countriesService from './countries.service.js';
import { asyncHandler } from '../../middleware/errorHandler.js';
import { successResponse } from '../../utils/response.js';

export const list = asyncHandler(async (req, res) => {
  const countries = await countriesService.listCountries();
  successResponse(res, countries);
});

export const getById = asyncHandler(async (req, res) => {
  const country = await countriesService.getCountry(req.params.id);
  successResponse(res, country);
});

export const compare = asyncHandler(async (req, res) => {
  const { slugs } = req.query;
  const slugArray = slugs ? slugs.split(',') : [];
  const countries = await countriesService.compareCountries(slugArray);
  successResponse(res, countries);
});
