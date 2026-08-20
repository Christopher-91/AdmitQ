import { query } from '../../config/database.js';
import { NotFoundError } from '../../middleware/errorHandler.js';
import { buildPagination } from '../../utils/response.js';

export const searchPrograms = async (filters = {}) => {
  const {
    page = 1, limit = 20,
    search, country, university, degree, field, specialization,
    minTuition, maxTuition, language, intake,
    minIelts, minToefl, minGre, minGmat,
    scholarshipAvailable,
    sort = 'name', order = 'asc',
  } = filters;

  const { offset } = buildPagination(page, limit);
  const conditions = ['p.is_active = TRUE'];
  const params = [];
  let idx = 1;

  if (search) {
    conditions.push(`(p.name ILIKE $${idx} OR p.field ILIKE $${idx} OR p.specialization ILIKE $${idx} OR u.name ILIKE $${idx})`);
    params.push(`%${search}%`);
    idx++;
  }
  if (country) { conditions.push(`c.slug = $${idx}`); params.push(country); idx++; }
  if (university) { conditions.push(`u.slug = $${idx}`); params.push(university); idx++; }
  if (degree) { conditions.push(`p.degree = $${idx}`); params.push(degree); idx++; }
  if (field) {
    const fields = field.split(',').map(f => `%${f.trim()}%`);
    conditions.push(`p.field ILIKE ANY($${idx})`);
    params.push(fields);
    idx++;
  }
  if (specialization) { conditions.push(`p.specialization ILIKE $${idx}`); params.push(`%${specialization}%`); idx++; }
  if (minTuition) { conditions.push(`p.tuition_usd >= $${idx}`); params.push(minTuition); idx++; }
  if (maxTuition) { conditions.push(`p.tuition_usd <= $${idx}`); params.push(maxTuition); idx++; }
  if (language) { conditions.push(`p.language ILIKE $${idx}`); params.push(`%${language}%`); idx++; }
  if (intake) { conditions.push(`$${idx} = ANY(p.intakes)`); params.push(intake); idx++; }
  if (minIelts) { conditions.push(`p.min_ielts <= $${idx}`); params.push(minIelts); idx++; }
  if (minToefl) { conditions.push(`p.min_toefl <= $${idx}`); params.push(minToefl); idx++; }
  if (scholarshipAvailable === 'true') { conditions.push('p.scholarship_available = TRUE'); }

  const where = `WHERE ${conditions.join(' AND ')}`;
  const sortMap = { name: 'p.name', tuition: 'p.tuition_usd', university: 'u.name', duration: 'p.duration_months', deadline: 'p.application_deadline_date' };
  const sortCol = sortMap[sort] || 'p.name';
  const sortDir = order === 'desc' ? 'DESC' : 'ASC';

  const countResult = await query(
    `SELECT COUNT(*) FROM programs p JOIN universities u ON u.id = p.university_id JOIN countries c ON c.id = u.country_id ${where}`,
    params
  );
  const total = parseInt(countResult.rows[0].count);

  params.push(limit, offset);
  const data = await query(
    `SELECT p.id, p.name, p.slug, p.degree, p.field, p.specialization,
            p.duration_label, p.tuition_usd, p.tuition_currency, p.tuition_per,
            p.language, p.intakes, p.application_deadline,
            p.min_gpa, p.min_ielts, p.min_toefl, p.scholarship_available,
            p.career_outcomes, p.delivery_mode,
            u.id as university_id, u.name as university_name, u.slug as university_slug,
            u.logo_url as university_logo, u.qs_ranking,
            c.name as country_name, c.code as country_code, c.flag_emoji
     FROM programs p
     JOIN universities u ON u.id = p.university_id
     JOIN countries c ON c.id = u.country_id
     ${where}
     ORDER BY ${sortCol} ${sortDir} NULLS LAST
     LIMIT $${idx} OFFSET $${idx + 1}`,
    params
  );

  return {
    programs: data.rows.map(r => ({
      id: r.id, name: r.name, slug: r.slug, degree: r.degree,
      field: r.field, specialization: r.specialization,
      durationLabel: r.duration_label, tuitionUsd: r.tuition_usd,
      tuitionCurrency: r.tuition_currency, tuitionPer: r.tuition_per,
      language: r.language, intakes: r.intakes, applicationDeadline: r.application_deadline,
      minGpa: r.min_gpa, minIelts: r.min_ielts, minToefl: r.min_toefl,
      scholarshipAvailable: r.scholarship_available, careerOutcomes: r.career_outcomes,
      deliveryMode: r.delivery_mode,
      university: { id: r.university_id, name: r.university_name, slug: r.university_slug, logoUrl: r.university_logo, qsRanking: r.qs_ranking },
      country: { name: r.country_name, code: r.country_code, flagEmoji: r.flag_emoji },
    })),
    total, page, limit,
  };
};

export const getProgram = async (idOrSlug) => {
  const isUuid = /^[0-9a-f]{8}-/.test(idOrSlug);
  const field = isUuid ? 'p.id' : 'p.slug';

  const result = await query(
    `SELECT p.*, u.name as university_name, u.slug as university_slug, u.city, u.logo_url as university_logo,
            u.qs_ranking, u.website as university_website,
            c.name as country_name, c.code as country_code, c.flag_emoji, c.slug as country_slug
     FROM programs p
     JOIN universities u ON u.id = p.university_id
     JOIN countries c ON c.id = u.country_id
     WHERE ${field} = $1 AND p.is_active = TRUE`,
    [idOrSlug]
  );

  if (result.rows.length === 0) throw new NotFoundError('Program not found');

  const p = result.rows[0];

  // Get related scholarships
  const scholarships = await query(
    `SELECT id, name, slug, amount_usd, coverage, deadline
     FROM scholarships
     WHERE (university_id = $1 OR university_id IS NULL)
       AND is_active = TRUE
       AND ($2 = ANY(degree_eligibility) OR degree_eligibility IS NULL)
     ORDER BY deadline NULLS LAST LIMIT 10`,
    [p.university_id, p.degree]
  );

  return {
    id: p.id, name: p.name, slug: p.slug, degree: p.degree,
    field: p.field, specialization: p.specialization,
    description: p.description, durationMonths: p.duration_months,
    durationLabel: p.duration_label, language: p.language,
    deliveryMode: p.delivery_mode, intakes: p.intakes,
    applicationDeadline: p.application_deadline,
    applicationDeadlineDate: p.application_deadline_date,
    earlyDeadlineDate: p.early_deadline_date,
    financial: {
      tuitionUsd: p.tuition_usd, tuitionLocal: p.tuition_local,
      tuitionCurrency: p.tuition_currency, tuitionPer: p.tuition_per,
      scholarshipAvailable: p.scholarship_available,
    },
    requirements: {
      minGpa: p.min_gpa, minIelts: p.min_ielts, minToefl: p.min_toefl,
      minPte: p.min_pte, minGre: p.min_gre, minGmat: p.min_gmat,
      minSat: p.min_sat, minAct: p.min_act,
      workExperienceYears: p.work_experience_years,
      prerequisiteCourses: p.prerequisite_courses,
      requiredDocuments: p.required_documents,
    },
    career: {
      careerOutcomes: p.career_outcomes, employmentRate: p.employment_rate,
      avgSalaryAfterUsd: p.avg_salary_after_usd,
    },
    university: {
      id: p.university_id, name: p.university_name, slug: p.university_slug,
      city: p.city, logoUrl: p.university_logo, qsRanking: p.qs_ranking,
      website: p.university_website,
    },
    country: { name: p.country_name, code: p.country_code, slug: p.country_slug, flagEmoji: p.flag_emoji },
    dataVerification: { sourceUrl: p.source_url, lastVerified: p.last_verified, verificationStatus: p.verification_status },
    scholarships: scholarships.rows,
  };
};
