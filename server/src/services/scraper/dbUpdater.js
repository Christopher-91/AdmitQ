import pool from '../../config/database.js';

/**
 * Update the deadline of a scholarship and mark it as verified.
 * @param {string} slug The unique slug of the scholarship
 * @param {string|null} deadline The deadline string (YYYY-MM-DD) or null
 */
export async function updateScholarshipDeadline(slug, deadline) {
  try {
    const result = await pool.query(
      `UPDATE scholarships 
       SET deadline = $1, 
           last_verified = NOW(), 
           verification_status = 'verified' 
       WHERE slug = $2
       RETURNING id, name, slug, deadline`,
      [deadline, slug]
    );

    if (result.rowCount > 0) {
      console.log(`✅ Updated deadline for ${slug}: ${deadline || 'No specific date (rolling/varies)'}`);
    } else {
      console.warn(`⚠️ Scholarship not found for slug: ${slug}`);
    }
  } catch (error) {
    console.error(`❌ Error updating scholarship ${slug}:`, error.message);
  }
}
