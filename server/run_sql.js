import { query } from './src/config/database.js';
import fs from 'fs';
import path from 'path';

async function runSql() {
  try {
    const sqlPath = path.join(process.cwd(), 'server', 'update_logos.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');
    console.log('Running SQL updates...');
    await query(sql);
    console.log('✅ Logos updated in database!');
  } catch (error) {
    console.error('Error executing SQL:', error);
  } finally {
    process.exit(0);
  }
}

runSql();
