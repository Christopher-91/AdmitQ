import { query } from '../../config/database.js';
import { NotFoundError } from '../../middleware/errorHandler.js';

/**
 * Rule-based recommendation engine
 *
 * Score = academic_match × 0.25 + budget_match × 0.20 + career_match × 0.20
 *       + country_pref × 0.10 + language_match × 0.10 + test_match × 0.05
 *       + program_match × 0.10
 *
 * Categories: Safe (≥80%), Target (60-79%), Reach (<60%)
 */

const WEIGHTS = {
  academic: 0.25,
  budget: 0.20,
  career: 0.20,
  country: 0.10,
  language: 0.10,
  test: 0.05,
  program: 0.10,
};

export const getRecommendations = async (userId, filters = {}) => {
  const { limit = 20, degree, country } = filters;

  // Get user profile
  const profileResult = await query(
    `SELECT sp.*, u.first_name FROM student_profiles sp JOIN users u ON u.id = sp.user_id WHERE sp.user_id = $1`,
    [userId]
  );
  if (profileResult.rows.length === 0) {
    throw new NotFoundError('Please complete your profile to get recommendations');
  }
  const profile = profileResult.rows[0];

  // Get test scores
  const scoresResult = await query('SELECT * FROM student_test_scores WHERE user_id = $1', [userId]);
  const testScores = {};
  for (const s of scoresResult.rows) {
    testScores[s.test_name.toLowerCase()] = parseFloat(s.overall_score);
  }

  // Get career goals
  const goalsResult = await query(
    `SELECT scg.career_id, c.name, cdm.field, cdm.specialization
     FROM student_career_goals scg
     LEFT JOIN careers c ON c.id = scg.career_id
     LEFT JOIN career_degree_mappings cdm ON cdm.career_id = c.id
     WHERE scg.user_id = $1`,
    [userId]
  );
  const careerFields = goalsResult.rows.map(g => g.field).filter(Boolean);

  // Get programs with university and country info
  const conditions = ['p.is_active = TRUE', 'u.is_active = TRUE'];
  const params = [];
  let idx = 1;

  if (degree || profile.desired_degree) {
    conditions.push(`p.degree = $${idx}`);
    params.push(degree || profile.desired_degree);
    idx++;
  }

  if (country) {
    conditions.push(`c.slug = $${idx}`);
    params.push(country);
    idx++;
  }

  const programsResult = await query(
    `SELECT p.*, u.name as university_name, u.slug as university_slug,
            u.qs_ranking, u.logo_url as university_logo,
            u.avg_living_cost_usd as uni_living_cost,
            c.name as country_name, c.code as country_code, c.flag_emoji, c.slug as country_slug,
            c.avg_living_cost_usd as country_living_cost
     FROM programs p
     JOIN universities u ON u.id = p.university_id
     JOIN countries c ON c.id = u.country_id
     WHERE ${conditions.join(' AND ')}
     ORDER BY u.qs_ranking NULLS LAST
     LIMIT 200`,
    params
  );

  // Score each program
  const scored = programsResult.rows.map(program => {
    const scores = {};
    const reasons = [];

    // 1. Academic Match
    scores.academic = calculateAcademicMatch(profile, program, reasons);

    // 2. Budget Match
    scores.budget = calculateBudgetMatch(profile, program, reasons);

    // 3. Career Match
    scores.career = calculateCareerMatch(careerFields, profile, program, reasons);

    // 4. Country Preference
    scores.country = calculateCountryMatch(profile, program, reasons);

    // 5. Language Match
    scores.language = calculateLanguageMatch(profile, program, reasons);

    // 6. Test Score Match
    scores.test = calculateTestMatch(testScores, program, reasons);

    // 7. Program Match
    scores.program = calculateProgramMatch(profile, program, reasons);

    // Overall weighted score
    const overall = Object.entries(WEIGHTS).reduce((sum, [key, weight]) => {
      return sum + (scores[key] || 0) * weight;
    }, 0);

    const matchPercentage = Math.round(overall * 100);

    // Category
    let category;
    if (matchPercentage >= 80) category = 'safe';
    else if (matchPercentage >= 60) category = 'target';
    else category = 'reach';

    return {
      program: {
        id: program.id, name: program.name, slug: program.slug,
        degree: program.degree, field: program.field,
        specialization: program.specialization,
        tuitionUsd: program.tuition_usd, durationLabel: program.duration_label,
        language: program.language, applicationDeadline: program.application_deadline,
        minGpa: program.min_gpa, minIelts: program.min_ielts,
      },
      university: {
        id: program.university_id, name: program.university_name,
        slug: program.university_slug, qsRanking: program.qs_ranking,
        logoUrl: program.university_logo,
      },
      country: {
        name: program.country_name, code: program.country_code,
        slug: program.country_slug, flagEmoji: program.flag_emoji,
      },
      matchPercentage,
      category,
      reasons: reasons.filter(r => r.impact !== 'neutral').slice(0, 6),
      scores,
    };
  });

  // Sort by match percentage descending
  scored.sort((a, b) => b.matchPercentage - a.matchPercentage);

  const recommendations = scored.slice(0, parseInt(limit));

  return {
    recommendations,
    summary: {
      total: scored.length,
      safe: scored.filter(s => s.category === 'safe').length,
      target: scored.filter(s => s.category === 'target').length,
      reach: scored.filter(s => s.category === 'reach').length,
    },
    disclaimer: 'Match percentages represent profile compatibility scores, not admission predictions.',
  };
};

// ─── Scoring Functions ──────────────────────────

function calculateAcademicMatch(profile, program, reasons) {
  if (!program.min_gpa) {
    reasons.push({ text: 'No minimum GPA requirement listed', impact: 'positive' });
    return 0.8;
  }

  const userGpa = parseFloat(profile.gpa) || 0;
  const gpaScale = parseFloat(profile.gpa_scale) || 4.0;
  const normalizedGpa = (userGpa / gpaScale) * 4.0;
  const requiredGpa = parseFloat(program.min_gpa);

  if (normalizedGpa >= requiredGpa + 0.5) {
    reasons.push({ text: `Your GPA (${userGpa}) exceeds the requirement (${requiredGpa})`, impact: 'positive' });
    return 1.0;
  } else if (normalizedGpa >= requiredGpa) {
    reasons.push({ text: `Your GPA (${userGpa}) meets the requirement (${requiredGpa})`, impact: 'positive' });
    return 0.8;
  } else if (normalizedGpa >= requiredGpa - 0.3) {
    reasons.push({ text: `Your GPA (${userGpa}) is slightly below the requirement (${requiredGpa})`, impact: 'neutral' });
    return 0.5;
  } else {
    reasons.push({ text: `Your GPA (${userGpa}) is below the requirement (${requiredGpa})`, impact: 'negative' });
    return 0.2;
  }
}

function calculateBudgetMatch(profile, program, reasons) {
  const budgetMax = parseFloat(profile.budget_max) || 0;
  if (!budgetMax) return 0.5; // No budget set

  const tuition = parseFloat(program.tuition_usd) || 0;
  const living = parseFloat(program.country_living_cost) || 0;
  const yearlyTotal = tuition + (living * 12);

  if (budgetMax >= yearlyTotal * 1.2) {
    reasons.push({ text: `Estimated cost ($${Math.round(yearlyTotal).toLocaleString()}/yr) is well within your budget`, impact: 'positive' });
    return 1.0;
  } else if (budgetMax >= yearlyTotal) {
    reasons.push({ text: `Estimated cost ($${Math.round(yearlyTotal).toLocaleString()}/yr) fits your budget`, impact: 'positive' });
    return 0.8;
  } else if (budgetMax >= yearlyTotal * 0.8) {
    reasons.push({ text: `Estimated cost ($${Math.round(yearlyTotal).toLocaleString()}/yr) slightly exceeds your budget`, impact: 'neutral' });
    return 0.5;
  } else {
    reasons.push({ text: `Estimated cost ($${Math.round(yearlyTotal).toLocaleString()}/yr) exceeds your budget`, impact: 'negative' });
    return 0.2;
  }
}

function calculateCareerMatch(careerFields, profile, program, reasons) {
  if (careerFields.length === 0) return 0.5;

  const programField = (program.field || '').toLowerCase();
  const programSpec = (program.specialization || '').toLowerCase();

  for (const cf of careerFields) {
    if (programField.includes(cf.toLowerCase()) || programSpec.includes(cf.toLowerCase()) ||
        cf.toLowerCase().includes(programField)) {
      reasons.push({ text: `Program field aligns with your career goal`, impact: 'positive' });
      return 1.0;
    }
  }

  // Partial match
  const desiredField = (profile.desired_field || '').toLowerCase();
  if (desiredField && (programField.includes(desiredField) || desiredField.includes(programField))) {
    reasons.push({ text: `Program is in your desired field`, impact: 'positive' });
    return 0.7;
  }

  return 0.3;
}

function calculateCountryMatch(profile, program, reasons) {
  const preferred = (profile.preferred_countries || []).map(c => c.toLowerCase());
  if (preferred.length === 0) return 0.5;

  const programCountry = (program.country_name || '').toLowerCase();
  const programCountrySlug = (program.country_slug || '').toLowerCase();

  if (preferred.includes(programCountry) || preferred.includes(programCountrySlug)) {
    reasons.push({ text: `${program.country_name} is in your preferred countries`, impact: 'positive' });
    return 1.0;
  }

  return 0.3;
}

function calculateLanguageMatch(profile, program, reasons) {
  const programLang = (program.language || 'English').toLowerCase();
  const prefs = (profile.language_preferences || ['English']).map(l => l.toLowerCase());

  if (prefs.includes(programLang) || programLang === 'english') {
    return 1.0;
  }

  reasons.push({ text: `Program is taught in ${program.language}`, impact: 'neutral' });
  return 0.3;
}

function calculateTestMatch(testScores, program, reasons) {
  let matches = 0;
  let total = 0;

  if (program.min_ielts) {
    total++;
    const score = testScores.ielts;
    if (score && score >= parseFloat(program.min_ielts)) {
      reasons.push({ text: `Your IELTS score (${score}) meets the requirement (${program.min_ielts})`, impact: 'positive' });
      matches++;
    } else if (score) {
      reasons.push({ text: `Your IELTS score (${score}) is below the requirement (${program.min_ielts})`, impact: 'negative' });
    }
  }

  if (program.min_toefl) {
    total++;
    const score = testScores.toefl;
    if (score && score >= program.min_toefl) { matches++; }
  }

  if (program.min_gre) {
    total++;
    const score = testScores.gre;
    if (score && score >= program.min_gre) { matches++; }
  }

  if (program.min_gmat) {
    total++;
    const score = testScores.gmat;
    if (score && score >= program.min_gmat) { matches++; }
  }

  if (total === 0) return 0.8;
  return matches / total;
}

function calculateProgramMatch(profile, program, reasons) {
  let score = 0.5;

  if (profile.desired_field) {
    const desired = profile.desired_field.toLowerCase();
    const field = (program.field || '').toLowerCase();
    if (field.includes(desired) || desired.includes(field)) {
      score += 0.3;
    }
  }

  if (profile.desired_specialization) {
    const desired = profile.desired_specialization.toLowerCase();
    const spec = (program.specialization || '').toLowerCase();
    if (spec.includes(desired) || desired.includes(spec)) {
      score += 0.2;
    }
  }

  return Math.min(score, 1.0);
}
