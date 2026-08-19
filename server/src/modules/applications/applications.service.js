import { query } from '../../config/database.js';
import { NotFoundError, ForbiddenError, ConflictError } from '../../middleware/errorHandler.js';

export const createApplication = async (userId, data) => {
  const { programId, intake, intakeYear, notes } = data;

  // Verify program exists
  const program = await query(
    `SELECT p.id, p.name, p.university_id, u.name as university_name
     FROM programs p JOIN universities u ON u.id = p.university_id
     WHERE p.id = $1`, [programId]);
  if (program.rows.length === 0) throw new NotFoundError('Program not found');

  // Check for duplicate
  const existing = await query(
    'SELECT id FROM applications WHERE user_id = $1 AND program_id = $2', [userId, programId]);
  if (existing.rows.length > 0) throw new ConflictError('Application already exists for this program');

  const result = await query(
    `INSERT INTO applications (user_id, program_id, university_id, intake, intake_year, notes)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [userId, programId, program.rows[0].university_id, intake, intakeYear, notes]);

  // Create default document checklist
  const defaultDocs = ['Transcript', 'SOP', 'LOR', 'Passport', 'Resume', 'Test Scores'];
  for (const doc of defaultDocs) {
    await query(
      'INSERT INTO application_documents (application_id, document_type) VALUES ($1, $2)',
      [result.rows[0].id, doc]);
  }

  return getApplicationById(userId, result.rows[0].id);
};

export const getUserApplications = async (userId) => {
  const result = await query(
    `SELECT a.*, p.name as program_name, p.slug as program_slug, p.degree, p.field,
            p.application_deadline, u.name as university_name, u.slug as university_slug, u.logo_url,
            c.name as country_name, c.flag_emoji
     FROM applications a
     JOIN programs p ON p.id = a.program_id
     JOIN universities u ON u.id = a.university_id
     JOIN countries c ON c.id = u.country_id
     WHERE a.user_id = $1
     ORDER BY a.created_at DESC`, [userId]);

  const apps = [];
  for (const row of result.rows) {
    const docs = await query(
      'SELECT id, document_type, status, notes FROM application_documents WHERE application_id = $1 ORDER BY document_type',
      [row.id]);

    const completedDocs = docs.rows.filter(d => d.status === 'completed' || d.status === 'submitted').length;
    const progress = docs.rows.length > 0 ? Math.round((completedDocs / docs.rows.length) * 100) : 0;

    apps.push({
      id: row.id, status: row.status, intake: row.intake, intakeYear: row.intake_year,
      progress, notes: row.notes, submittedAt: row.submitted_at, decisionAt: row.decision_at,
      createdAt: row.created_at,
      program: { id: row.program_id, name: row.program_name, slug: row.program_slug, degree: row.degree, field: row.field, applicationDeadline: row.application_deadline },
      university: { name: row.university_name, slug: row.university_slug, logoUrl: row.logo_url },
      country: { name: row.country_name, flagEmoji: row.flag_emoji },
      documents: docs.rows.map(d => ({ id: d.id, type: d.document_type, status: d.status, notes: d.notes })),
    });
  }
  return apps;
};

export const getApplicationById = async (userId, appId) => {
  const apps = await getUserApplications(userId);
  const app = apps.find(a => a.id === appId);
  if (!app) throw new NotFoundError('Application not found');
  return app;
};

export const updateApplication = async (userId, appId, data) => {
  // Verify ownership
  const existing = await query('SELECT id FROM applications WHERE id = $1 AND user_id = $2', [appId, userId]);
  if (existing.rows.length === 0) throw new NotFoundError('Application not found');

  const { status, intake, intakeYear, notes } = data;
  const updates = [];
  const values = [];
  let idx = 1;

  if (status) { updates.push(`status = $${idx++}`); values.push(status); }
  if (intake) { updates.push(`intake = $${idx++}`); values.push(intake); }
  if (intakeYear) { updates.push(`intake_year = $${idx++}`); values.push(intakeYear); }
  if (notes !== undefined) { updates.push(`notes = $${idx++}`); values.push(notes); }
  if (status === 'submitted') { updates.push(`submitted_at = NOW()`); }
  if (['accepted', 'rejected', 'waitlisted'].includes(status)) { updates.push(`decision_at = NOW()`); }

  if (updates.length > 0) {
    values.push(appId);
    await query(`UPDATE applications SET ${updates.join(', ')} WHERE id = $${idx}`, values);
  }

  return getApplicationById(userId, appId);
};

export const updateDocumentStatus = async (userId, appId, docId, data) => {
  const existing = await query(
    `SELECT ad.id FROM application_documents ad
     JOIN applications a ON a.id = ad.application_id
     WHERE ad.id = $1 AND a.id = $2 AND a.user_id = $3`, [docId, appId, userId]);
  if (existing.rows.length === 0) throw new NotFoundError('Document not found');

  await query(
    'UPDATE application_documents SET status = $1, notes = $2 WHERE id = $3',
    [data.status, data.notes || null, docId]);

  return getApplicationById(userId, appId);
};

export const deleteApplication = async (userId, appId) => {
  const result = await query('DELETE FROM applications WHERE id = $1 AND user_id = $2 RETURNING id', [appId, userId]);
  if (result.rows.length === 0) throw new NotFoundError('Application not found');
};
