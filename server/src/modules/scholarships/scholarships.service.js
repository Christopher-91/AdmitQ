import { query } from '../../config/database.js';
import { NotFoundError } from '../../middleware/errorHandler.js';
import { buildPagination } from '../../utils/response.js';

export const searchScholarships = async (filters = {}) => {
  const { page = 1, limit = 20, search, country, university, degree, field, nationality, sort = 'deadline', order = 'asc' } = filters;
  const { offset } = buildPagination(page, limit);
  const conditions = ['s.is_active = TRUE'];
  const params = [];
  let idx = 1;

  if (search) { conditions.push(`(s.name ILIKE $${idx} OR s.provider ILIKE $${idx})`); params.push(`%${search}%`); idx++; }
  if (country) { conditions.push(`c.slug = $${idx}`); params.push(country); idx++; }
  if (university) { conditions.push(`u.slug = $${idx}`); params.push(university); idx++; }
  if (degree) { conditions.push(`$${idx} = ANY(s.degree_eligibility)`); params.push(degree); idx++; }
  if (field) { conditions.push(`$${idx} = ANY(s.field_eligibility)`); params.push(field); idx++; }

  const where = `WHERE ${conditions.join(' AND ')}`;
  const sortMap = { deadline: 's.deadline', amount: 's.amount_usd', name: 's.name' };
  const sortCol = sortMap[sort] || 's.deadline';
  const sortDir = order === 'desc' ? 'DESC' : 'ASC';

  const countResult = await query(
    `SELECT COUNT(*) FROM scholarships s LEFT JOIN countries c ON c.id = s.country_id LEFT JOIN universities u ON u.id = s.university_id ${where}`,
    params
  );
  const total = parseInt(countResult.rows[0].count);

  params.push(limit, offset);
  const data = await query(
    `SELECT s.id, s.name, s.slug, s.provider, s.amount_usd, s.amount_currency, s.coverage,
            s.deadline, s.deadline_label, s.degree_eligibility, s.field_eligibility,
            s.description, s.min_gpa, s.application_url,
            c.name as country_name, c.code as country_code, c.flag_emoji,
            u.name as university_name, u.slug as university_slug
     FROM scholarships s
     LEFT JOIN countries c ON c.id = s.country_id
     LEFT JOIN universities u ON u.id = s.university_id
     ${where}
     ORDER BY ${sortCol} ${sortDir} NULLS LAST
     LIMIT $${idx} OFFSET $${idx + 1}`,
    params
  );

  return {
    scholarships: data.rows.map(s => ({
      id: s.id, name: s.name, slug: s.slug, provider: s.provider,
      amountUsd: s.amount_usd, amountCurrency: s.amount_currency, coverage: s.coverage,
      deadline: s.deadline, deadlineLabel: s.deadline_label,
      degreeEligibility: s.degree_eligibility, fieldEligibility: s.field_eligibility,
      description: s.description, minGpa: s.min_gpa, applicationUrl: s.application_url,
      country: s.country_name ? { name: s.country_name, code: s.country_code, flagEmoji: s.flag_emoji } : null,
      university: s.university_name ? { name: s.university_name, slug: s.university_slug } : null,
    })),
    total, page, limit,
  };
};

export const getScholarship = async (idOrSlug) => {
  const isUuid = /^[0-9a-f]{8}-/.test(idOrSlug);
  const field = isUuid ? 's.id' : 's.slug';

  const result = await query(
    `SELECT s.*, c.name as country_name, c.code as country_code, c.flag_emoji,
            u.name as university_name, u.slug as university_slug
     FROM scholarships s
     LEFT JOIN countries c ON c.id = s.country_id
     LEFT JOIN universities u ON u.id = s.university_id
     WHERE ${field} = $1 AND s.is_active = TRUE`,
    [idOrSlug]
  );
  if (result.rows.length === 0) throw new NotFoundError('Scholarship not found');

  const s = result.rows[0];
  return {
    id: s.id, name: s.name, slug: s.slug, provider: s.provider,
    description: s.description,
    degreeEligibility: s.degree_eligibility, fieldEligibility: s.field_eligibility,
    nationalityEligibility: s.nationality_eligibility,
    minGpa: s.min_gpa, incomeRequirement: s.income_requirement, otherRequirements: s.other_requirements,
    amountUsd: s.amount_usd, amountLocal: s.amount_local, amountCurrency: s.amount_currency,
    coverage: s.coverage, coverageDetails: s.coverage_details,
    deadline: s.deadline, deadlineLabel: s.deadline_label,
    requiredDocuments: s.required_documents, applicationUrl: s.application_url,
    dataVerification: { sourceUrl: s.source_url, lastVerified: s.last_verified, verificationStatus: s.verification_status },
    country: s.country_name ? { name: s.country_name, code: s.country_code, flagEmoji: s.flag_emoji } : null,
    university: s.university_name ? { name: s.university_name, slug: s.university_slug } : null,
  };
};
