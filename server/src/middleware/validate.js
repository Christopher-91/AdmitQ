import Joi from 'joi';
import { ValidationError } from './errorHandler.js';

/**
 * Validation middleware factory
 * @param {Joi.ObjectSchema} schema - Joi schema to validate against
 * @param {string} property - Request property to validate ('body', 'query', 'params')
 */
export const validate = (schema, property = 'body') => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[property], {
      abortEarly: false,
      stripUnknown: true,
      allowUnknown: false,
    });

    if (error) {
      const details = error.details.map((d) => ({
        field: d.path.join('.'),
        message: d.message.replace(/"/g, ''),
      }));
      return next(new ValidationError('Validation failed', details));
    }

    // Replace with sanitized values
    req[property] = value;
    next();
  };
};

// ─── Common Validation Schemas ──────────────────────────

export const paginationSchema = Joi.object({
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(1).max(100).default(20),
  sort: Joi.string().max(50),
  order: Joi.string().valid('asc', 'desc').default('asc'),
});

export const uuidParamSchema = Joi.object({
  id: Joi.string().uuid().required(),
});
