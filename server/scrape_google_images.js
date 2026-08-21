import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logosDir = path.join(__dirname, '../client/public/logos');

const download = (url, dest) => new Promise((resolve, reject) => {
  https.get(url, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36" } }, res => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      return download(res.headers.location, dest).then(resolve).catch(reject);
    }
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      resolve(dest);
    });
    file.on('error', reject);
  }).on('error', reject);
});

const targets = [
  { slug: "kyungpook-national-university", query: "Kyungpook National University logo png transparent" },
  { slug: "canadian-university-dubai", query: "Canadian University Dubai logo png transparent" },
  { slug: "national-university-of-ireland-galway", query: "University of Galway logo png transparent" },
  { slug: "kaplan-higher-education", query: "Kaplan Higher Education logo png transparent" },
  { slug: "sapienza-university-of-rome", query: "Sapienza University of Rome logo png transparent" },
  { slug: "university-of-padua", query: "University of Padua logo png transparent" }
];

async function run() {
  console.log("Launching puppeteer...");
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  // Spoof user agent to avoid basic blocks
  await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36");

  for (const t of targets) {
    try {
      console.log(`Searching for: ${t.query}`);
      await page.goto(`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(t.query)}`, { waitUntil: 'networkidle2' });
      
      // Get the first image result URL
      const imgUrl = await page.evaluate(() => {
        // In Google Images, the images are usually inside 'img' tags that have 'src' starting with 'http' or 'data:image'
        // But the high res original image url is often hidden. We can just grab the first standard image src which is usually a thumbnail if it's base64, or the original if we're lucky.
        // Actually, the thumbnail base64 is fine for logos! Let's get the first non-icon image.
        const imgs = Array.from(document.querySelectorAll('img'));
        const validImgs = imgs.filter(img => img.width > 50 && img.height > 20 && img.src && !img.src.includes('favicon'));
        return validImgs.length > 0 ? validImgs[0].src : null;
      });

      if (imgUrl) {
        const dest = path.join(logosDir, `${t.slug}.png`);
        
        if (imgUrl.startsWith('data:image')) {
          console.log(`Saving base64 image for ${t.slug}`);
          // Extract base64 data
          const matches = imgUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
          if (matches && matches.length === 3) {
            const buffer = Buffer.from(matches[2], 'base64');
            fs.writeFileSync(dest, buffer);
            console.log(`SUCCESS: ${t.slug}`);
          }
        } else if (imgUrl.startsWith('http')) {
          console.log(`Downloading URL for ${t.slug}: ${imgUrl}`);
          await download(imgUrl, dest);
          console.log(`SUCCESS: ${t.slug}`);
        } else {
          console.log(`Could not handle URL format for ${t.slug}`);
        }
      } else {
        console.log(`No images found for ${t.query}`);
      }
      
    } catch (err) {
      console.log(`ERROR for ${t.slug}: ${err.message}`);
    }
  }

  await browser.close();
  console.log("Done.");
  process.exit(0);
}

run();
