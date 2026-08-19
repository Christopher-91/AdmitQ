import { query, getClient } from './database.js';

async function reset() {
  console.log('⚠️  Resetting database...\n');

  const client = await getClient();

  try {
    // Drop all tables
    await client.query(`
      DO $$ DECLARE
        r RECORD;
      BEGIN
        FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
          EXECUTE 'DROP TABLE IF EXISTS ' || quote_ident(r.tablename) || ' CASCADE';
        END LOOP;
      END $$;
    `);

    // Drop custom types
    await client.query(`
      DO $$ DECLARE
        r RECORD;
      BEGIN
        FOR r IN (SELECT typname FROM pg_type WHERE typtype = 'e' AND typnamespace = 'public'::regnamespace) LOOP
          EXECUTE 'DROP TYPE IF EXISTS ' || quote_ident(r.typname) || ' CASCADE';
        END LOOP;
      END $$;
    `);

    console.log('✅ Database reset complete\n');
  } catch (err) {
    console.error('❌ Reset failed:', err.message);
    throw err;
  } finally {
    client.release();
  }

  process.exit(0);
}

reset().catch(() => process.exit(1));
