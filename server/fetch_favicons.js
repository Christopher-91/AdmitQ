import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import { query } from './src/config/database.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logosDir = path.join(__dirname, '../client/public/logos');

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      }
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Failed with status code: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function run() {
  const res = await query('SELECT name, slug, website FROM universities');
  const universities = res.rows;
  
  // Also force redownload for ANU because the user said it was inaccurate
  const forceList = ['anu'];
  
  let downloaded = 0;
  for (const u of universities) {
    const filepath = path.join(logosDir, `${u.slug}.png`);
    const isMissing = !fs.existsSync(filepath);
    const isForced = forceList.includes(u.slug);
    
    if (isMissing || isForced) {
      if (!u.website) {
        console.log(`[SKIP] No website for ${u.name}`);
        continue;
      }
      
      try {
        const urlObj = new URL(u.website);
        const domain = urlObj.hostname;
        const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=256`;
        
        console.log(`Fetching favicon for ${u.name}...`);
        await downloadImage(faviconUrl, filepath);
        
        // Check size to see if it's the 726 byte default globe
        const stats = fs.statSync(filepath);
        if (stats.size === 726 || stats.size < 1000) {
           console.log(`[REJECTED] ${u.name} returned a generic globe or very small icon. Deleting.`);
           fs.unlinkSync(filepath);
        } else {
           console.log(`[SUCCESS] Saved high-res favicon for ${u.name} (${stats.size} bytes)`);
           downloaded++;
        }
      } catch (err) {
        console.log(`[ERROR] Failed to fetch favicon for ${u.name}: ${err.message}`);
      }
      
      // Delay to avoid rate limiting
      await new Promise(r => setTimeout(r, 300));
    }
  }
  
  console.log(`Finished! Downloaded ${downloaded} new logos.`);
  process.exit(0);
}

run().catch(console.error);
