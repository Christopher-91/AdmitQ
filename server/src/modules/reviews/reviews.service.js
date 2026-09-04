import { query } from '../../config/database.js';
import { NotFoundError, BadRequestError } from '../../middleware/errorHandler.js';

/**
 * Get reviews for a university
 */
export const getReviews = async (universitySlug, { page = 1, limit = 10 } = {}) => {
  const offset = (page - 1) * limit;

  // Get university id from slug
  const uniResult = await query('SELECT id, name FROM universities WHERE slug = $1', [universitySlug]);
  if (uniResult.rows.length === 0) throw new NotFoundError('University not found');
  const universityId = uniResult.rows[0].id;

  const countResult = await query(
    'SELECT COUNT(*) FROM university_reviews WHERE university_id = $1 AND is_published = TRUE',
    [universityId]
  );
  const total = parseInt(countResult.rows[0].count);

  const reviewsResult = await query(
    `SELECT 
      r.id, r.rating, r.title, r.body, r.pros, r.cons,
      r.year_attended, r.program_studied, r.degree_obtained,
      r.is_verified_student, r.is_verified_alumni, r.helpful_votes,
      r.created_at, r.updated_at,
      u.id as author_id,
      u.first_name as author_first_name,
      u.last_name as author_last_name,
      u.avatar_url as author_avatar_url,
      u.auth_provider as author_provider
     FROM university_reviews r
     JOIN users u ON u.id = r.user_id
     WHERE r.university_id = $1 AND r.is_published = TRUE
     ORDER BY r.created_at DESC
     LIMIT $2 OFFSET $3`,
    [universityId, limit, offset]
  );

  // Aggregate rating stats
  const statsResult = await query(
    `SELECT 
      AVG(rating)::NUMERIC(3,1) as avg_rating,
      COUNT(*) as total_count,
      COUNT(*) FILTER (WHERE rating = 5) as five_star,
      COUNT(*) FILTER (WHERE rating = 4) as four_star,
      COUNT(*) FILTER (WHERE rating = 3) as three_star,
      COUNT(*) FILTER (WHERE rating = 2) as two_star,
      COUNT(*) FILTER (WHERE rating = 1) as one_star
     FROM university_reviews
     WHERE university_id = $1 AND is_published = TRUE`,
    [universityId]
  );

  return {
    reviews: reviewsResult.rows.map(formatReview),
    stats: formatStats(statsResult.rows[0]),
    total,
    page,
    limit,
  };
};

/**
 * Create a review — author identity derived from the authenticated user (req.user)
 */
export const createReview = async (universitySlug, userId, data) => {
  const uniResult = await query('SELECT id FROM universities WHERE slug = $1', [universitySlug]);
  if (uniResult.rows.length === 0) throw new NotFoundError('University not found');
  const universityId = uniResult.rows[0].id;

  // Check for existing review from this user
  const existing = await query(
    'SELECT id FROM university_reviews WHERE university_id = $1 AND user_id = $2',
    [universityId, userId]
  );
  if (existing.rows.length > 0) {
    throw new BadRequestError('You have already submitted a review for this university');
  }

  const { rating, title, body, pros, cons, yearAttended, programStudied, degreeObtained } = data;

  if (!rating || rating < 1 || rating > 5) throw new BadRequestError('Rating must be between 1 and 5');
  if (!body || body.trim().length < 20) throw new BadRequestError('Review body must be at least 20 characters');

  const result = await query(
    `INSERT INTO university_reviews
      (university_id, user_id, rating, title, body, pros, cons, year_attended, program_studied, degree_obtained)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
     RETURNING id`,
    [
      universityId, userId,
      parseInt(rating), title || null, body.trim(),
      pros || null, cons || null,
      yearAttended ? parseInt(yearAttended) : null,
      programStudied || null, degreeObtained || null
    ]
  );

  // Fetch the full review with author info
  const reviewResult = await query(
    `SELECT 
      r.id, r.rating, r.title, r.body, r.pros, r.cons,
      r.year_attended, r.program_studied, r.degree_obtained,
      r.is_verified_student, r.is_verified_alumni, r.helpful_votes,
      r.created_at, r.updated_at,
      u.id as author_id,
      u.first_name as author_first_name,
      u.last_name as author_last_name,
      u.avatar_url as author_avatar_url,
      u.auth_provider as author_provider
     FROM university_reviews r
     JOIN users u ON u.id = r.user_id
     WHERE r.id = $1`,
    [result.rows[0].id]
  );

  return formatReview(reviewResult.rows[0]);
};

/**
 * Update own review
 */
export const updateReview = async (reviewId, userId, data) => {
  const existing = await query(
    'SELECT id FROM university_reviews WHERE id = $1 AND user_id = $2',
    [reviewId, userId]
  );
  if (existing.rows.length === 0) throw new NotFoundError('Review not found or not yours');

  const { rating, title, body, pros, cons, yearAttended, programStudied, degreeObtained } = data;

  await query(
    `UPDATE university_reviews SET
      rating = COALESCE($1, rating),
      title = COALESCE($2, title),
      body = COALESCE($3, body),
      pros = COALESCE($4, pros),
      cons = COALESCE($5, cons),
      year_attended = COALESCE($6, year_attended),
      program_studied = COALESCE($7, program_studied),
      degree_obtained = COALESCE($8, degree_obtained),
      updated_at = NOW()
     WHERE id = $9`,
    [rating, title, body, pros, cons, yearAttended, programStudied, degreeObtained, reviewId]
  );

  const updated = await query(
    `SELECT r.*, u.first_name as author_first_name, u.last_name as author_last_name,
            u.avatar_url as author_avatar_url, u.auth_provider as author_provider, u.id as author_id
     FROM university_reviews r JOIN users u ON u.id = r.user_id WHERE r.id = $1`,
    [reviewId]
  );
  return formatReview(updated.rows[0]);
};

/**
 * Delete own review
 */
export const deleteReview = async (reviewId, userId) => {
  const result = await query(
    'DELETE FROM university_reviews WHERE id = $1 AND user_id = $2 RETURNING id',
    [reviewId, userId]
  );
  if (result.rows.length === 0) throw new NotFoundError('Review not found or not yours');
};

// ─── Helpers ──────────────────────────────────────

function formatReview(row) {
  return {
    id: row.id,
    rating: row.rating,
    title: row.title,
    body: row.body,
    pros: row.pros,
    cons: row.cons,
    yearAttended: row.year_attended,
    programStudied: row.program_studied,
    degreeObtained: row.degree_obtained,
    isVerifiedStudent: row.is_verified_student,
    isVerifiedAlumni: row.is_verified_alumni,
    helpfulVotes: row.helpful_votes,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    author: {
      id: row.author_id,
      firstName: row.author_first_name,
      lastName: row.author_last_name,
      avatarUrl: row.author_avatar_url || null,
      authProvider: row.author_provider || 'local',
      // Display name — never editable by user
      displayName: `${row.author_first_name} ${row.author_last_name}`.trim() || 'Anonymous',
    },
  };
}

function formatStats(row) {
  if (!row) return null;
  const total = parseInt(row.total_count) || 0;
  return {
    avgRating: parseFloat(row.avg_rating) || 0,
    totalCount: total,
    distribution: {
      5: parseInt(row.five_star) || 0,
      4: parseInt(row.four_star) || 0,
      3: parseInt(row.three_star) || 0,
      2: parseInt(row.two_star) || 0,
      1: parseInt(row.one_star) || 0,
    },
  };
}
