import axios from 'axios';
import { query } from './src/config/database.js';

// Get your free API key at: https://api.data.gov/signup/
const API_KEY = process.env.SCORECARD_API_KEY; 

const BASE_URL = 'https://api.data.gov/ed/collegescorecard/v1/schools.json';

// Mapping Scorecard credential levels to our degree_type enum
const LEVEL_MAP = {
  3: 'bachelors', // Bachelor's Degree
  4: 'bachelors', // Post-Baccalaureate Certificate
  5: 'masters',   // Master's Degree
  6: 'phd',       // Post-Master's Certificate
  7: 'phd',       // Doctor's Degree - Research/Scholarship
  8: 'phd'        // Doctor's Degree - Professional Practice
};

const CIP_MAP = {
  '11': 'Computer Science',
  '14': 'Engineering',
  '52': 'Business & Management',
  '26': 'Biological Sciences',
  '40': 'Physical Sciences',
  '27': 'Mathematics',
  '45': 'Social Sciences',
  '51': 'Health Professions',
  '09': 'Communication & Journalism',
  '50': 'Visual & Performing Arts'
};

async function syncScorecardPrograms() {
  if (!API_KEY) {
    console.error('❌ Error: SCORECARD_API_KEY environment variable is not set.');
    console.log('Get a free API key at https://api.data.gov/signup/ and add it to your .env file.');
    process.exit(1);
  }

  try {
    // 1. Get US universities from our DB that don't have many programs yet
    const unisRes = await query(`
      SELECT u.id, u.name, u.slug 
      FROM universities u
      JOIN countries c ON c.id = u.country_id
      WHERE c.code = 'US' AND u.qs_ranking <= 50
    `);
    const universities = unisRes.rows;

    console.log(`Found ${universities.length} top US universities to sync.`);

    for (const uni of universities) {
      console.log(`\nFetching programs for ${uni.name}...`);
      
      // We search the scorecard API by the school's name
      // Note: We use a wildcard and limit fields to reduce payload size
      const res = await axios.get(BASE_URL, {
        params: {
          api_key: API_KEY,
          'school.name': uni.name.split(' ')[0], // e.g. "Massachusetts" or "Stanford"
          fields: 'school.name,school.school_url,latest.programs.cip_4_digit',
          per_page: 5
        }
      });

      // Find the best match
      const results = res.data.results;
      if (!results || results.length === 0) {
        console.warn(`⚠️ No matches found in Scorecard API for ${uni.name}`);
        continue;
      }

      // Simplistic match: take the first one that includes the first word
      const schoolData = results[0];
      const programs = schoolData['latest.programs.cip_4_digit'];
      
      if (!programs || programs.length === 0) {
        console.warn(`⚠️ No programs data returned for ${schoolData['school.name']}`);
        continue;
      }

      let insertedCount = 0;

      for (const prog of programs) {
        // Only insert Bachelor's, Master's, and PhDs
        const levelCode = prog.credential?.level;
        const degree = LEVEL_MAP[levelCode];
        
        if (!degree) continue; // Skip certificates/associates

        // Map CIP code to general field
        const cip2 = prog.code.substring(0, 2);
        const field = CIP_MAP[cip2] || 'Other/Interdisciplinary';
        
        const title = prog.title.replace('.,', '').trim();
        const programName = `${degree === 'bachelors' ? 'Bachelor in' : degree === 'masters' ? 'Master in' : 'PhD in'} ${title}`;
        
        // Generate a unique slug
        const baseSlug = `${uni.slug}-${programName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
        const slug = `${baseSlug}-${levelCode}`;
        
        try {
          await query(
            `INSERT INTO programs (
              university_id, name, slug, degree, field, specialization, 
              source_url, verification_status
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            ON CONFLICT (university_id, slug) DO NOTHING`,
            [
              uni.id, programName, slug, degree, field, title,
              'https://collegescorecard.ed.gov', 'verified'
            ]
          );
          insertedCount++;
        } catch (err) {
          console.error(`Error inserting ${programName}:`, err.message);
        }
      }

      console.log(`✅ Synced ${insertedCount} programs for ${schoolData['school.name']} (Matched DB: ${uni.name})`);
      
      // Rate limiting precaution (Scorecard API allows 1000/hr, but better safe than sorry)
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    console.log('\n🎉 Synchronization complete!');
    process.exit(0);
  } catch (err) {
    console.error('Fatal Error:', err?.response?.data || err.message);
    process.exit(1);
  }
}

syncScorecardPrograms();
