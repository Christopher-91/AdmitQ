/**
 * Migration: Programs V2
 * Adds degree_type, department, application_method, official_requirements_url
 * columns to the programs table. All columns are nullable — safe on existing data.
 *
 * Run with: node src/config/migration-programs-v2.js
 */

import { query } from './database.js';

async function migrate() {
  console.log('🔧 Running migration: programs-v2...\n');

  const migrations = [
    {
      name: 'degree_type',
      sql: `ALTER TABLE programs ADD COLUMN IF NOT EXISTS degree_type VARCHAR(20)`,
    },
    {
      name: 'department',
      sql: `ALTER TABLE programs ADD COLUMN IF NOT EXISTS department VARCHAR(150)`,
    },
    {
      name: 'application_method',
      sql: `ALTER TABLE programs ADD COLUMN IF NOT EXISTS application_method VARCHAR(100)`,
    },
    {
      name: 'official_requirements_url',
      sql: `ALTER TABLE programs ADD COLUMN IF NOT EXISTS official_requirements_url VARCHAR(500)`,
    },
  ];

  for (const m of migrations) {
    try {
      await query(m.sql);
      console.log(`  ✅ Added column: ${m.name}`);
    } catch (err) {
      console.error(`  ❌ Failed to add column ${m.name}:`, err.message);
      throw err;
    }
  }

  console.log('\n✅ Migration complete.\n');
  process.exit(0);
}

migrate().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
