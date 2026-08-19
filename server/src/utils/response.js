/**
 * Standard API response helpers
 */

export const successResponse = (res, data, statusCode = 200, meta = {}) => {
  const response = {
    success: true,
    data,
  };

  if (Object.keys(meta).length > 0) {
    response.meta = meta;
  }

  return res.status(statusCode).json(response);
};

export const paginatedResponse = (res, data, pagination) => {
  return res.status(200).json({
    success: true,
    data,
    meta: {
      pagination: {
        page: pagination.page,
        limit: pagination.limit,
        total: pagination.total,
        totalPages: Math.ceil(pagination.total / pagination.limit),
        hasMore: pagination.page * pagination.limit < pagination.total,
      },
    },
  });
};

export const createdResponse = (res, data) => {
  return successResponse(res, data, 201);
};

export const noContentResponse = (res) => {
  return res.status(204).end();
};

/**
 * Build pagination SQL clauses
 */
export const buildPagination = (page = 1, limit = 20) => {
  const offset = (page - 1) * limit;
  return { limit, offset, page };
};

/**
 * Build sort SQL clause (whitelist-based to prevent injection)
 */
export const buildSort = (sortField, order = 'asc', allowedFields = {}) => {
  const column = allowedFields[sortField];
  if (!column) return '';
  const dir = order === 'desc' ? 'DESC' : 'ASC';
  return `ORDER BY ${column} ${dir}`;
};
