import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import { query } from './src/config/database.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logosDir = path.join(__dirname, '../client/public/logos');

if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const options = { headers: { 'User-Agent': 'AdmitQ/1.0 (admin@admitq.com)' } };
    https.get(url, options, (res) => {
      // Handle redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      }
      
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const options = { headers: { 'User-Agent': 'AdmitQ/1.0 (admin@admitq.com)' } };
    https.get(url, options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(body)); } 
        catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('Fetching universities from database...');
  const res = await query('SELECT name, slug FROM universities');
  const universities = res.rows;
  console.log(`Found ${universities.length} universities.`);

  for (const uni of universities) {
    const filepath = path.join(logosDir, `${uni.slug}.png`);
    
    // Always redownload to fix the building image issue!
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
    }

    try {
      // 1. Search Wikimedia Commons/Wikipedia for the logo
      const searchQuery = encodeURIComponent(`intitle:logo "${uni.name}"`);
      const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchQuery}&srnamespace=6&format=json`;
      const searchData = await fetchJson(searchUrl);
      
      let fileTitle = null;
      if (searchData.query?.search?.length > 0) {
        fileTitle = searchData.query.search[0].title;
      } else {
        // Fallback: search without quotes
        const fallbackQuery = encodeURIComponent(`intitle:logo ${uni.name}`);
        const fallbackUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${fallbackQuery}&srnamespace=6&format=json`;
        const fallbackData = await fetchJson(fallbackUrl);
        if (fallbackData.query?.search?.length > 0) {
          fileTitle = fallbackData.query.search[0].title;
        }
      }

      if (!fileTitle) {
        console.log(`[NOT FOUND] No logo file found for ${uni.name}`);
        continue;
      }

      // 2. Get the actual image URL from the File page
      // We use iiurlwidth=500 to automatically convert SVGs to PNGs and resize massive images
      const infoUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(fileTitle)}&prop=imageinfo&iiprop=url&iiurlwidth=500&format=json`;
      const infoData = await fetchJson(infoUrl);
      
      const pages = infoData.query?.pages;
      if (!pages) throw new Error('No pages found');
      
      const pageId = Object.keys(pages)[0];
      const imageInfo = pages[pageId]?.imageinfo?.[0];
      
      if (imageInfo && (imageInfo.thumburl || imageInfo.url)) {
        // Use thumburl if available (converted SVG), else url
        const downloadUrl = imageInfo.thumburl || imageInfo.url;
        await downloadImage(downloadUrl, filepath);
        console.log(`[SUCCESS] Downloaded REAL LOGO for ${uni.name}`);
      } else {
        console.log(`[NOT FOUND] Could not get image URL for ${uni.name}`);
      }
    } catch (e) {
      console.error(`[ERROR] Failed for ${uni.name}: ${e.message}`);
    }
    
    await new Promise(r => setTimeout(r, 200));
  }
  
  console.log('Finished downloading REAL logos.');
  process.exit(0);
}

run().catch(console.error);
