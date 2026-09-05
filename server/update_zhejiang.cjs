const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_fY31rponqRvA@ep-icy-boat-azi6srhv-pooler.c-3.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
});

async function update() {
  try {
    const res = await pool.query(`
      UPDATE universities 
      SET logo_url = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/Zhejiang_University_Logo.svg/1200px-Zhejiang_University_Logo.svg.png' 
      WHERE slug = 'zhejiang-university'
      RETURNING *;
    `);
    console.log(`Updated ${res.rowCount} row(s).`);
  } catch (err) {
    console.error('Error updating:', err);
  } finally {
    pool.end();
  }
}

update();
