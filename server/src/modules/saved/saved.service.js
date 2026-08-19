import { query } from '../../config/database.js';
import { ConflictError, NotFoundError } from '../../middleware/errorHandler.js';

export const saveItem = async (userId, data) => {
  const { itemType, itemId, notes } = data;
  try {
    const result = await query(
      `INSERT INTO saved_items (user_id, item_type, item_id, notes) VALUES ($1, $2, $3, $4)
       ON CONFLICT (user_id, item_type, item_id) DO NOTHING RETURNING *`,
      [userId, itemType, itemId, notes || null]);
    if (result.rows.length === 0) return { message: 'Item already saved' };
    return { message: 'Item saved', id: result.rows[0].id };
  } catch (err) {
    throw err;
  }
};

export const getSavedItems = async (userId, filters = {}) => {
  const { itemType } = filters;
  const conditions = ['si.user_id = $1'];
  const params = [userId];
  if (itemType) { conditions.push('si.item_type = $2'); params.push(itemType); }

  const result = await query(
    `SELECT si.* FROM saved_items si WHERE ${conditions.join(' AND ')} ORDER BY si.created_at DESC`,
    params);

  // Enrich with item details
  const enriched = [];
  for (const item of result.rows) {
    let details = null;
    if (item.item_type === 'university') {
      const r = await query(
        `SELECT u.id, u.name, u.slug, u.city, u.avg_tuition_usd, u.qs_ranking, u.logo_url,
                c.name as country_name, c.flag_emoji
         FROM universities u JOIN countries c ON c.id = u.country_id WHERE u.id = $1`, [item.item_id]);
      if (r.rows.length) details = r.rows[0];
    } else if (item.item_type === 'program') {
      const r = await query(
        `SELECT p.id, p.name, p.slug, p.degree, p.field, p.tuition_usd,
                u.name as university_name, c.name as country_name, c.flag_emoji
         FROM programs p JOIN universities u ON u.id = p.university_id JOIN countries c ON c.id = u.country_id WHERE p.id = $1`, [item.item_id]);
      if (r.rows.length) details = r.rows[0];
    } else if (item.item_type === 'scholarship') {
      const r = await query('SELECT id, name, slug, amount_usd, coverage, deadline FROM scholarships WHERE id = $1', [item.item_id]);
      if (r.rows.length) details = r.rows[0];
    } else if (item.item_type === 'country') {
      const r = await query('SELECT id, name, slug, flag_emoji FROM countries WHERE id = $1', [item.item_id]);
      if (r.rows.length) details = r.rows[0];
    }
    enriched.push({ id: item.id, itemType: item.item_type, itemId: item.item_id, notes: item.notes, createdAt: item.created_at, details });
  }
  return enriched;
};

export const removeSavedItem = async (userId, itemId) => {
  const result = await query('DELETE FROM saved_items WHERE id = $1 AND user_id = $2 RETURNING id', [itemId, userId]);
  if (result.rows.length === 0) throw new NotFoundError('Saved item not found');
};

export const unsaveItem = async (userId, itemType, itemId) => {
  await query('DELETE FROM saved_items WHERE user_id = $1 AND item_type = $2 AND item_id = $3', [userId, itemType, itemId]);
};
