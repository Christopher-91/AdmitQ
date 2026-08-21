import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logosDir = path.join(__dirname, '../client/public/logos');

const download = (url, dest) => new Promise((resolve, reject) => {
  https.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, res => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      return download(res.headers.location, dest).then(resolve).catch(reject);
    }
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => { file.close(); resolve(dest); });
    file.on('error', reject);
  }).on('error', reject);
});

const targets = [
  { slug: "kyungpook-national-university", query: "Kyungpook National University logo transparent" },
  { slug: "canadian-university-dubai", query: "Canadian University Dubai logo transparent" },
  { slug: "national-university-of-ireland-galway", query: "University of Galway logo 2022 transparent" },
  { slug: "sapienza-university-of-rome", query: "Sapienza University of Rome logo transparent" },
  { slug: "university-of-padua", query: "University of Padua logo transparent" }
];

async function run() {
  console.log("Launching puppeteer for Bing Images...");
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64)");

  for (const t of targets) {
    try {
      console.log(`Searching Bing for: ${t.query}`);
      await page.goto(`https://www.bing.com/images/search?q=${encodeURIComponent(t.query)}`, { waitUntil: 'networkidle2' });
      
      const imgUrl = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img.mimg'));
        const validImgs = imgs.filter(img => img.src && !img.src.includes('data:image/gif'));
        return validImgs.length > 0 ? validImgs[0].src : null;
      });

      if (imgUrl) {
        const dest = path.join(logosDir, `${t.slug}.png`);
        
        if (imgUrl.startsWith('data:image')) {
          console.log(`Saving base64 image for ${t.slug}`);
          const matches = imgUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
          if (matches && matches.length === 3) {
            fs.writeFileSync(dest, Buffer.from(matches[2], 'base64'));
            console.log(`SUCCESS: ${t.slug}`);
          }
        } else if (imgUrl.startsWith('http')) {
          await download(imgUrl, dest);
          console.log(`SUCCESS: ${t.slug}`);
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
