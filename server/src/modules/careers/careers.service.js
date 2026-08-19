import { query } from '../../config/database.js';
import { NotFoundError } from '../../middleware/errorHandler.js';

export const listCareers = async () => {
  const result = await query(
    `SELECT c.id, c.name, c.slug, c.description, c.required_skills,
            c.typical_industries, c.avg_salary_usd, c.growth_outlook, c.icon,
            (SELECT COUNT(*) FROM career_degree_mappings m WHERE m.career_id = c.id) as pathway_count
     FROM careers c ORDER BY c.name`
  );
  return result.rows.map(c => ({
    id: c.id, name: c.name, slug: c.slug, description: c.description,
    requiredSkills: c.required_skills, typicalIndustries: c.typical_industries,
    avgSalaryUsd: c.avg_salary_usd, growthOutlook: c.growth_outlook, icon: c.icon,
    pathwayCount: parseInt(c.pathway_count),
  }));
};

export const getCareer = async (idOrSlug) => {
  const isUuid = /^[0-9a-f]{8}-/.test(idOrSlug);
  const field = isUuid ? 'id' : 'slug';

  const result = await query(`SELECT * FROM careers WHERE ${field} = $1`, [idOrSlug]);
  if (result.rows.length === 0) throw new NotFoundError('Career not found');

  const c = result.rows[0];

  // Get degree mappings
  const mappings = await query(
    `SELECT id, degree_type, field, specialization, relevance, is_primary
     FROM career_degree_mappings WHERE career_id = $1 ORDER BY relevance DESC, is_primary DESC`,
    [c.id]
  );

  // Get relevant programs
  const programs = await query(
    `SELECT p.id, p.name, p.slug, p.degree, p.field, p.specialization,
            p.tuition_usd, p.duration_label,
            u.name as university_name, u.slug as university_slug,
            co.name as country_name, co.flag_emoji
     FROM programs p
     JOIN universities u ON u.id = p.university_id
     JOIN countries co ON co.id = u.country_id
     WHERE p.is_active = TRUE
       AND (p.field ILIKE ANY(
         SELECT '%' || m.field || '%' FROM career_degree_mappings m WHERE m.career_id = $1
       ))
     ORDER BY u.qs_ranking NULLS LAST
     LIMIT 20`,
    [c.id]
  );

  return {
    id: c.id, name: c.name, slug: c.slug, description: c.description,
    requiredSkills: c.required_skills, typicalIndustries: c.typical_industries,
    potentialEmployers: c.potential_employers, relatedCareers: c.related_careers,
    recommendedCountries: c.recommended_countries,
    avgSalaryUsd: c.avg_salary_usd, growthOutlook: c.growth_outlook, icon: c.icon,
    degreeMappings: mappings.rows.map(m => ({
      id: m.id, degreeType: m.degree_type, field: m.field,
      specialization: m.specialization, relevance: m.relevance, isPrimary: m.is_primary,
    })),
    relevantPrograms: programs.rows.map(p => ({
      id: p.id, name: p.name, slug: p.slug, degree: p.degree,
      field: p.field, specialization: p.specialization,
      tuitionUsd: p.tuition_usd, durationLabel: p.duration_label,
      university: { name: p.university_name, slug: p.university_slug },
      country: { name: p.country_name, flagEmoji: p.flag_emoji },
    })),
  };
};

/**
 * Generate education pathway based on career and current education
 */
export const generatePathway = async (userId) => {
  // Get user profile
  const profileResult = await query(
    `SELECT sp.*, u.first_name FROM student_profiles sp JOIN users u ON u.id = sp.user_id WHERE sp.user_id = $1`,
    [userId]
  );
  if (profileResult.rows.length === 0) throw new NotFoundError('Profile not found');
  const profile = profileResult.rows[0];

  // Get career goals
  const goalsResult = await query(
    `SELECT scg.*, c.name as career_name, c.slug, c.required_skills
     FROM student_career_goals scg
     LEFT JOIN careers c ON c.id = scg.career_id
     WHERE scg.user_id = $1`,
    [userId]
  );

  if (goalsResult.rows.length === 0) {
    return { pathway: [], message: 'Please set at least one career goal to generate a pathway.' };
  }

  const primaryGoal = goalsResult.rows.find(g => g.is_primary) || goalsResult.rows[0];

  // Get degree mappings for this career
  let mappings = [];
  if (primaryGoal.career_id) {
    const mappingResult = await query(
      'SELECT * FROM career_degree_mappings WHERE career_id = $1 ORDER BY relevance DESC',
      [primaryGoal.career_id]
    );
    mappings = mappingResult.rows;
  }

  // Build pathway
  const pathway = [];
  const currentLevel = profile.current_education_level || 'high_school';

  // Step 1: Current education
  pathway.push({
    step: 1,
    type: 'current',
    title: `Current: ${formatEducationLevel(currentLevel)}`,
    description: profile.school_university ? `Currently at ${profile.school_university}` : 'Your current education',
    status: 'completed',
  });

  // Step 2+: Recommended degrees
  const levelOrder = ['high_school', 'class_11', 'class_12', 'bachelors', 'masters', 'phd'];
  const currentIdx = levelOrder.indexOf(currentLevel);

  const primaryMapping = mappings.find(m => m.is_primary) || mappings[0];

  if (primaryMapping) {
    if (currentIdx < 3 && primaryMapping.degree_type !== 'bachelors') {
      // Need bachelor's first
      pathway.push({
        step: 2,
        type: 'degree',
        title: `Bachelor's in ${primaryMapping.field}`,
        description: `Foundation degree recommended for ${primaryGoal.career_name || primaryGoal.custom_career}`,
        reason: 'This degree provides the fundamental knowledge required for your career goal.',
        status: 'recommended',
      });
    }

    if (['masters', 'phd'].includes(primaryMapping.degree_type)) {
      pathway.push({
        step: pathway.length + 1,
        type: 'degree',
        title: `${formatEducationLevel(primaryMapping.degree_type)} in ${primaryMapping.specialization || primaryMapping.field}`,
        description: `Advanced specialization for ${primaryGoal.career_name || primaryGoal.custom_career}`,
        reason: `A ${primaryMapping.degree_type} degree increases career opportunities and earning potential in this field.`,
        status: 'recommended',
      });
    }
  }

  // Step: Internship/Experience
  pathway.push({
    step: pathway.length + 1,
    type: 'experience',
    title: 'Industry Experience / Internship',
    description: 'Gain practical experience through internships or entry-level positions',
    reason: 'Real-world experience is essential to transition from academic knowledge to professional competency.',
    status: 'future',
  });

  // Final step: Career
  pathway.push({
    step: pathway.length + 1,
    type: 'career',
    title: primaryGoal.career_name || primaryGoal.custom_career,
    description: `Your target career goal`,
    status: 'goal',
  });

  return { pathway, careerGoal: primaryGoal.career_name || primaryGoal.custom_career };
};

function formatEducationLevel(level) {
  const map = {
    high_school: 'High School',
    class_11: 'Class 11',
    class_12: 'Class 12',
    bachelors: "Bachelor's Degree",
    masters: "Master's Degree",
    phd: 'PhD',
    professional: 'Professional Degree',
  };
  return map[level] || level;
}
