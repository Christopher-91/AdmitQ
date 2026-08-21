import path from 'path';
import pool from './src/config/database.js';

async function run() {
  try {
    const { rows } = await pool.query(`
      SELECT u.id, u.name 
      FROM universities u
      JOIN countries c ON u.country_id = c.id
      WHERE c.code = 'US'
    `);
    
    console.log(`Checking ${rows.length} US universities...`);
    
    let updated = 0;
    for (const uni of rows) {
      try {
        // College Scorecard API using DEMO_KEY
        // Using 'school.name' for exact match, or 'school.search' for partial
        const searchName = encodeURIComponent(uni.name);
        const url = `https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=${searchName}&fields=id,school.name,latest.cost.tuition.out_of_state&api_key=DEMO_KEY`;
        
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          if (data && data.results && data.results.length > 0) {
            // Find the most relevant result (first one that has tuition)
            const school = data.results.find(r => r['latest.cost.tuition.out_of_state']) || data.results[0];
            const tuition = school['latest.cost.tuition.out_of_state'];
            
            if (tuition) {
              await pool.query('UPDATE universities SET avg_tuition_usd = $1 WHERE id = $2', [tuition, uni.id]);
              console.log(`[+] Updated ${uni.name} -> $${tuition}`);
              updated++;
            } else {
              console.log(`[-] No tuition data for: ${uni.name}`);
            }
          } else {
            console.log(`[-] Not found in API: ${uni.name}`);
          }
        }
      } catch (err) {
        console.log(`[!] Error on ${uni.name}: ${err.message}`);
      }
      
      // Delay to avoid rate limiting
      await new Promise(r => setTimeout(r, 300));
    }
    
    console.log(`\n✅ Finished! Updated ${updated} US universities.`);
  } catch (err) {
    console.error("Fatal error:", err);
  } finally {
    await pool.end();
  }
}

run();
