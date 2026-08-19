import { query } from '../../config/database.js';

export const compareItems = async (data) => {
  const { type = 'university', ids } = data;

  if (type === 'university') {
    const result = await query(
      `SELECT u.*, c.name as country_name, c.code as country_code, c.flag_emoji,
              c.avg_living_cost_usd as country_living_cost,
              (SELECT COUNT(*) FROM programs WHERE university_id = u.id AND is_active = TRUE) as program_count,
              (SELECT COUNT(*) FROM scholarships WHERE university_id = u.id AND is_active = TRUE) as scholarship_count
       FROM universities u JOIN countries c ON c.id = u.country_id
       WHERE u.id = ANY($1)`, [ids]);

    return result.rows.map(u => ({
      id: u.id, name: u.name, slug: u.slug, city: u.city, logoUrl: u.logo_url,
      universityType: u.university_type, foundedYear: u.founded_year,
      country: { name: u.country_name, code: u.country_code, flagEmoji: u.flag_emoji },
      rankings: { qs: u.qs_ranking, the: u.the_ranking, arwu: u.arwu_ranking },
      financial: {
        avgTuitionUsd: u.avg_tuition_usd, avgLivingCostUsd: u.avg_living_cost_usd,
        accommodationUsd: u.accommodation_usd, insuranceUsd: u.insurance_usd,
        applicationFeeUsd: u.application_fee_usd,
        estimatedTotalYearlyUsd: (parseFloat(u.avg_tuition_usd) || 0) + (parseFloat(u.avg_living_cost_usd) || 0),
      },
      requirements: { minGpa: u.min_gpa, minIelts: u.min_ielts, minToefl: u.min_toefl, minGre: u.min_gre, minGmat: u.min_gmat },
      totalStudents: u.total_students, internationalStudentsPct: u.international_students_pct,
      programCount: parseInt(u.program_count), scholarshipCount: parseInt(u.scholarship_count),
      intakes: u.intakes,
    }));
  }

  if (type === 'program') {
    const result = await query(
      `SELECT p.*, u.name as university_name, u.slug as university_slug, u.qs_ranking, u.logo_url,
              c.name as country_name, c.flag_emoji, c.avg_living_cost_usd as country_living_cost
       FROM programs p JOIN universities u ON u.id = p.university_id JOIN countries c ON c.id = u.country_id
       WHERE p.id = ANY($1)`, [ids]);

    return result.rows.map(p => ({
      id: p.id, name: p.name, slug: p.slug, degree: p.degree, field: p.field,
      specialization: p.specialization, durationLabel: p.duration_label,
      language: p.language, deliveryMode: p.delivery_mode,
      university: { name: p.university_name, slug: p.university_slug, qsRanking: p.qs_ranking, logoUrl: p.logo_url },
      country: { name: p.country_name, flagEmoji: p.flag_emoji },
      financial: {
        tuitionUsd: p.tuition_usd, tuitionPer: p.tuition_per,
        livingCostUsd: p.country_living_cost,
        estimatedTotalYearlyUsd: (parseFloat(p.tuition_usd) || 0) + ((parseFloat(p.country_living_cost) || 0) * 12),
      },
      requirements: {
        minGpa: p.min_gpa, minIelts: p.min_ielts, minToefl: p.min_toefl,
        minGre: p.min_gre, minGmat: p.min_gmat,
        workExperienceYears: p.work_experience_years,
      },
      intakes: p.intakes, applicationDeadline: p.application_deadline,
      scholarshipAvailable: p.scholarship_available, careerOutcomes: p.career_outcomes,
    }));
  }

  return [];
};
