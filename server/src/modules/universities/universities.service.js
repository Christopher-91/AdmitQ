import { query } from '../../config/database.js';
import { cacheGet, cacheInvalidate } from '../../config/redis.js';
import { NotFoundError } from '../../middleware/errorHandler.js';
import { buildPagination } from '../../utils/response.js';

/**
 * Search & filter universities
 */
export const searchUniversities = async (filters = {}) => {
  const {
    page = 1, limit = 20,
    search, country, city, type, degree, field,
    minTuition, maxTuition, minIelts, maxIelts,
    sort = 'name', order = 'asc',
  } = filters;

  const { offset } = buildPagination(page, limit);
  const conditions = ['u.is_active = TRUE'];
  const params = [];
  let paramIdx = 1;

  if (search) {
    conditions.push(`(u.name ILIKE $${paramIdx} OR u.city ILIKE $${paramIdx} OR c.name ILIKE $${paramIdx})`);
    params.push(`%${search}%`);
    paramIdx++;
  }

  if (country) {
    conditions.push(`c.slug = $${paramIdx}`);
    params.push(country);
    paramIdx++;
  }

  if (city) {
    conditions.push(`u.city ILIKE $${paramIdx}`);
    params.push(`%${city}%`);
    paramIdx++;
  }

  if (type) {
    conditions.push(`u.university_type = $${paramIdx}`);
    params.push(type);
    paramIdx++;
  }

  if (minTuition) {
    conditions.push(`u.avg_tuition_usd >= $${paramIdx}`);
    params.push(minTuition);
    paramIdx++;
  }

  if (maxTuition) {
    conditions.push(`u.avg_tuition_usd <= $${paramIdx}`);
    params.push(maxTuition);
    paramIdx++;
  }

  if (minIelts) {
    conditions.push(`u.min_ielts >= $${paramIdx}`);
    params.push(minIelts);
    paramIdx++;
  }

  if (maxIelts) {
    conditions.push(`u.min_ielts <= $${paramIdx}`);
    params.push(maxIelts);
    paramIdx++;
  }

  // If filtering by degree/field, join programs
  if (degree || field) {
    conditions.push('EXISTS (SELECT 1 FROM programs p WHERE p.university_id = u.id AND p.is_active = TRUE' +
      (degree ? ` AND p.degree = $${paramIdx++}` : '') +
      (field ? ` AND p.field ILIKE $${paramIdx++}` : '') +
      ')');
    if (degree) params.push(degree);
    if (field) params.push(`%${field}%`);
  }

  const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

  // Sort mapping
  const sortMap = {
    name: 'u.name',
    tuition: 'u.avg_tuition_usd',
    ranking: 'u.qs_ranking',
    country: 'c.name',
  };
  const sortCol = sortMap[sort] || 'u.name';
  const sortDir = order === 'desc' ? 'DESC' : 'ASC';
  const nullsClause = sort === 'ranking' ? 'NULLS LAST' : '';

  // Count
  const countResult = await query(
    `SELECT COUNT(*) FROM universities u JOIN countries c ON c.id = u.country_id ${whereClause}`,
    params
  );
  const total = parseInt(countResult.rows[0].count);

  // Data
  params.push(limit, offset);
  const dataResult = await query(
    `SELECT u.id, u.name, u.slug, u.city, u.state_province, u.university_type,
            u.logo_url, u.website, u.avg_tuition_usd, u.qs_ranking, u.the_ranking,
            u.min_gpa, u.min_ielts, u.min_toefl, u.founded_year,
            u.total_students, u.international_students_pct,
            c.name as country_name, c.code as country_code, c.flag_emoji,
            (SELECT COUNT(*) FROM programs p WHERE p.university_id = u.id AND p.is_active = TRUE) as program_count
     FROM universities u
     JOIN countries c ON c.id = u.country_id
     ${whereClause}
     ORDER BY ${sortCol} ${sortDir} ${nullsClause}
     LIMIT $${paramIdx} OFFSET $${paramIdx + 1}`,
    params
  );

  return {
    universities: dataResult.rows.map(formatUniversityCard),
    total,
    page,
    limit,
  };
};

/**
 * Get university by ID or slug
 */
export const getUniversity = async (idOrSlug) => {
  const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(idOrSlug);
  const field = isUuid ? 'u.id' : 'u.slug';

  const result = await query(
    `SELECT u.*, c.name as country_name, c.code as country_code, c.flag_emoji, c.slug as country_slug
     FROM universities u
     JOIN countries c ON c.id = u.country_id
     WHERE ${field} = $1 AND u.is_active = TRUE`,
    [idOrSlug]
  );

  if (result.rows.length === 0) {
    throw new NotFoundError('University not found');
  }

  const uni = result.rows[0];

  // Get programs
  const programs = await query(
    `SELECT id, name, slug, degree, field, specialization, duration_label,
            tuition_usd, language, intakes, application_deadline, min_gpa, min_ielts
     FROM programs WHERE university_id = $1 AND is_active = TRUE
     ORDER BY degree, field, name`,
    [uni.id]
  );

  // Get scholarships
  const scholarships = await query(
    `SELECT id, name, slug, amount_usd, coverage, deadline, degree_eligibility
     FROM scholarships WHERE university_id = $1 AND is_active = TRUE
     ORDER BY deadline ASC NULLS LAST`,
    [uni.id]
  );

  return formatUniversityDetail(uni, programs.rows, scholarships.rows);
};

// ─── Formatters ────────────────────────────────

function formatUniversityCard(row) {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    city: row.city,
    stateProvince: row.state_province,
    universityType: row.university_type,
    website: row.website,
    logoUrl: row.logo_url,
    avgTuitionUsd: row.avg_tuition_usd,
    qsRanking: row.qs_ranking,
    theRanking: row.the_ranking,
    minGpa: row.min_gpa,
    minIelts: row.min_ielts,
    minToefl: row.min_toefl,
    foundedYear: row.founded_year,
    totalStudents: row.total_students,
    internationalStudentsPct: row.international_students_pct,
    programCount: parseInt(row.program_count) || 0,
    country: {
      name: row.country_name,
      code: row.country_code,
      flagEmoji: row.flag_emoji,
    },
  };
}

function formatUniversityDetail(uni, programs, scholarships) {
  return {
    id: uni.id,
    name: uni.name,
    slug: uni.slug,
    city: uni.city,
    stateProvince: uni.state_province,
    website: uni.website,
    universityType: uni.university_type,
    foundedYear: uni.founded_year,
    description: uni.description,
    logoUrl: uni.logo_url,
    coverImageUrl: uni.cover_image_url,
    faculties: uni.faculties,
    departments: uni.departments,
    totalStudents: uni.total_students,
    internationalStudentsPct: uni.international_students_pct,
    studentFacultyRatio: uni.student_faculty_ratio,
    languagesOfInstruction: uni.languages_of_instruction,
    intakes: uni.intakes,
    rankings: {
      qs: uni.qs_ranking,
      the: uni.the_ranking,
      arwu: uni.arwu_ranking,
      national: uni.national_ranking,
    },
    financial: {
      applicationFeeUsd: uni.application_fee_usd,
      avgTuitionUsd: uni.avg_tuition_usd,
      avgLivingCostUsd: uni.avg_living_cost_usd,
      accommodationUsd: uni.accommodation_usd,
      insuranceUsd: uni.insurance_usd,
    },
    requirements: {
      minGpa: uni.min_gpa,
      minIelts: uni.min_ielts,
      minToefl: uni.min_toefl,
      minGre: uni.min_gre,
      minGmat: uni.min_gmat,
    },
    applicationPortal: uni.application_portal,
    country: {
      name: uni.country_name,
      code: uni.country_code,
      slug: uni.country_slug,
      flagEmoji: uni.flag_emoji,
    },
    dataVerification: {
      sourceUrl: uni.source_url,
      lastVerified: uni.last_verified,
      verificationStatus: uni.verification_status,
    },
    programs: programs.map(p => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      degree: p.degree,
      field: p.field,
      specialization: p.specialization,
      durationLabel: p.duration_label,
      tuitionUsd: p.tuition_usd,
      language: p.language,
      intakes: p.intakes,
      applicationDeadline: p.application_deadline,
      minGpa: p.min_gpa,
      minIelts: p.min_ielts,
    })),
    scholarships: scholarships.map(s => ({
      id: s.id,
      name: s.name,
      slug: s.slug,
      amountUsd: s.amount_usd,
      coverage: s.coverage,
      deadline: s.deadline,
      degreeEligibility: s.degree_eligibility,
    })),
  };
}
