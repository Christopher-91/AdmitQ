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
  
  let downloaded = 0;
  for (const u of universities) {
    const filepath = path.join(logosDir, `${u.slug}.png`);
    const isMissing = !fs.existsSync(filepath);
    
    if (isMissing && u.website) {
      try {
        const urlObj = new URL(u.website);
        let domain = urlObj.hostname;
        // Fix NUIG domain redirect
        if (domain === 'www.nuigalway.ie') domain = 'universityofgalway.ie';

        const faviconUrl = `https://icons.duckduckgo.com/ip3/${domain}.ico`;
        
        console.log(`Fetching DuckDuckGo icon for ${u.name}...`);
        await downloadImage(faviconUrl, filepath);
        
        // Check size to see if it's an error icon or extremely small
        const stats = fs.statSync(filepath);
        if (stats.size < 500) {
           console.log(`[REJECTED] ${u.name} returned a generic or tiny icon (${stats.size} bytes). Deleting.`);
           fs.unlinkSync(filepath);
        } else {
           console.log(`[SUCCESS] Saved DuckDuckGo favicon for ${u.name} (${stats.size} bytes)`);
           downloaded++;
        }
      } catch (err) {
        console.log(`[ERROR] Failed to fetch favicon for ${u.name}: ${err.message}`);
      }
      
      await new Promise(r => setTimeout(r, 200));
    }
  }
  
  console.log(`Finished! Downloaded ${downloaded} new logos using DuckDuckGo.`);
  process.exit(0);
}

run().catch(console.error);
