import { query } from '../../config/database.js';
import { NotFoundError } from '../../middleware/errorHandler.js';

export const createDeadline = async (userId, data) => {
  const result = await query(
    `INSERT INTO deadlines (user_id, application_id, title, description, deadline_date, deadline_type, reminder_days)
     VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
    [userId, data.applicationId || null, data.title, data.description || null,
     data.deadlineDate, data.deadlineType || 'other', data.reminderDays || 7]);
  return formatDeadline(result.rows[0]);
};

export const getUserDeadlines = async (userId, filters = {}) => {
  const { upcoming, completed } = filters;
  const conditions = ['d.user_id = $1'];
  const params = [userId];

  if (upcoming === 'true') {
    conditions.push('d.deadline_date >= CURRENT_DATE');
    conditions.push('d.is_completed = FALSE');
  }
  if (completed === 'true') {
    conditions.push('d.is_completed = TRUE');
  } else if (completed === 'false') {
    conditions.push('d.is_completed = FALSE');
  }

  const result = await query(
    `SELECT d.*, a.status as app_status,
            p.name as program_name, u.name as university_name
     FROM deadlines d
     LEFT JOIN applications a ON a.id = d.application_id
     LEFT JOIN programs p ON p.id = a.program_id
     LEFT JOIN universities u ON u.id = a.university_id
     WHERE ${conditions.join(' AND ')}
     ORDER BY d.deadline_date ASC`,
    params);

  return result.rows.map(row => ({
    ...formatDeadline(row),
    application: row.program_name ? {
      status: row.app_status,
      programName: row.program_name,
      universityName: row.university_name,
    } : null,
    daysRemaining: Math.ceil((new Date(row.deadline_date) - new Date()) / (1000 * 60 * 60 * 24)),
  }));
};

export const updateDeadline = async (userId, id, data) => {
  const existing = await query('SELECT id FROM deadlines WHERE id = $1 AND user_id = $2', [id, userId]);
  if (existing.rows.length === 0) throw new NotFoundError('Deadline not found');

  const updates = [];
  const values = [];
  let idx = 1;

  if (data.title) { updates.push(`title = $${idx++}`); values.push(data.title); }
  if (data.description !== undefined) { updates.push(`description = $${idx++}`); values.push(data.description); }
  if (data.deadlineDate) { updates.push(`deadline_date = $${idx++}`); values.push(data.deadlineDate); }
  if (data.deadlineType) { updates.push(`deadline_type = $${idx++}`); values.push(data.deadlineType); }
  if (data.reminderDays !== undefined) { updates.push(`reminder_days = $${idx++}`); values.push(data.reminderDays); }
  if (data.isCompleted !== undefined) {
    updates.push(`is_completed = $${idx++}`); values.push(data.isCompleted);
    if (data.isCompleted) updates.push('completed_at = NOW()');
    else updates.push('completed_at = NULL');
  }

  values.push(id);
  await query(`UPDATE deadlines SET ${updates.join(', ')} WHERE id = $${idx}`, values);

  const result = await query('SELECT * FROM deadlines WHERE id = $1', [id]);
  return formatDeadline(result.rows[0]);
};

export const deleteDeadline = async (userId, id) => {
  const result = await query('DELETE FROM deadlines WHERE id = $1 AND user_id = $2 RETURNING id', [id, userId]);
  if (result.rows.length === 0) throw new NotFoundError('Deadline not found');
};

function formatDeadline(d) {
  return {
    id: d.id, title: d.title, description: d.description,
    deadlineDate: d.deadline_date, deadlineType: d.deadline_type,
    reminderDays: d.reminder_days, isCompleted: d.is_completed,
    completedAt: d.completed_at, createdAt: d.created_at,
  };
}
