import fs from 'fs';
import path from 'path';
import pool from './src/config/database.js';

async function run() {
  try {
    const { rows } = await pool.query("SELECT id, name FROM universities");
    console.log(`Checking ${rows.length} universities...`);
    
    let updated = 0;
    for (const uni of rows) {
      try {
        const res = await fetch(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${encodeURIComponent(uni.name)}`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            const domain = data[0].domain;
            const logo = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
            await pool.query('UPDATE universities SET website = $1, logo_url = $2 WHERE id = $3', [`https://${domain}`, logo, uni.id]);
            console.log(`[+] Updated ${uni.name} -> ${domain}`);
            updated++;
          } else {
            console.log(`[-] Not found: ${uni.name}`);
          }
        }
      } catch (err) {
        console.log(`[!] Error on ${uni.name}: ${err.message}`);
      }
      
      // Delay to avoid rate limiting
      await new Promise(r => setTimeout(r, 100));
    }
    
    console.log(`\n✅ Finished! Updated ${updated} universities.`);
  } catch (err) {
    console.error("Fatal error:", err);
  } finally {
    await pool.end();
  }
}

run();
