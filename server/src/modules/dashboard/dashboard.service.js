import { query } from '../../config/database.js';

export const getDashboard = async (userId) => {
  // Profile completion
  const profileResult = await query(
    'SELECT profile_completion, onboarding_completed FROM student_profiles WHERE user_id = $1', [userId]);
  const profile = profileResult.rows[0] || { profile_completion: 0, onboarding_completed: false };

  // Applications
  const appsResult = await query(
    `SELECT status, COUNT(*) as count FROM applications WHERE user_id = $1 GROUP BY status`, [userId]);
  const appsByStatus = {};
  let totalApps = 0;
  for (const row of appsResult.rows) {
    appsByStatus[row.status] = parseInt(row.count);
    totalApps += parseInt(row.count);
  }

  // Upcoming deadlines (next 30 days)
  const deadlinesResult = await query(
    `SELECT d.id, d.title, d.deadline_date, d.deadline_type, d.is_completed,
            p.name as program_name, u.name as university_name
     FROM deadlines d
     LEFT JOIN applications a ON a.id = d.application_id
     LEFT JOIN programs p ON p.id = a.program_id
     LEFT JOIN universities u ON u.id = a.university_id
     WHERE d.user_id = $1 AND d.is_completed = FALSE
       AND d.deadline_date >= CURRENT_DATE
       AND d.deadline_date <= CURRENT_DATE + INTERVAL '30 days'
     ORDER BY d.deadline_date ASC LIMIT 5`, [userId]);

  // Saved items counts
  const savedResult = await query(
    'SELECT item_type, COUNT(*) as count FROM saved_items WHERE user_id = $1 GROUP BY item_type', [userId]);
  const savedCounts = {};
  for (const row of savedResult.rows) { savedCounts[row.item_type] = parseInt(row.count); }

  // Recent recommendations count
  const recsAvailable = await query(
    `SELECT COUNT(*) FROM programs p
     JOIN universities u ON u.id = p.university_id
     WHERE p.is_active = TRUE AND u.is_active = TRUE`);

  return {
    profileCompletion: profile.profile_completion,
    onboardingCompleted: profile.onboarding_completed,
    applications: {
      total: totalApps,
      byStatus: appsByStatus,
    },
    upcomingDeadlines: deadlinesResult.rows.map(d => ({
      id: d.id, title: d.title, deadlineDate: d.deadline_date,
      deadlineType: d.deadline_type, isCompleted: d.is_completed,
      programName: d.program_name, universityName: d.university_name,
      daysRemaining: Math.ceil((new Date(d.deadline_date) - new Date()) / (1000 * 60 * 60 * 24)),
    })),
    saved: savedCounts,
    recommendationsAvailable: parseInt(recsAvailable.rows[0].count),
  };
};
