import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import https from 'https';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dest = path.join(__dirname, '../client/public/logos/canadian-university-dubai.png');

const download = (url, filepath) => new Promise((resolve, reject) => {
  https.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, res => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      return download(res.headers.location, filepath).then(resolve).catch(reject);
    }
    const file = fs.createWriteStream(filepath);
    res.pipe(file);
    file.on('finish', () => { file.close(); resolve(filepath); });
    file.on('error', reject);
  }).on('error', reject);
});

async function run() {
  console.log("Launching puppeteer for DuckDuckGo...");
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36");

  try {
    await page.goto("https://duckduckgo.com/?q=canadian+university+dubai+logo+png+transparent&iax=images&ia=images", { waitUntil: 'networkidle2' });
    
    // Wait for the image grid to load
    await page.waitForSelector('.tile--img__img', { timeout: 10000 });
    
    const imgUrl = await page.evaluate(() => {
      // Find the first image tile that looks like a real logo (not a medical slide)
      const imgs = Array.from(document.querySelectorAll('img.tile--img__img'));
      if (imgs.length > 0) {
          // Usually duckduckgo images uses src for thumbnails
          return imgs[0].src;
      }
      return null;
    });

    if (imgUrl) {
      console.log(`Found logo URL: ${imgUrl}`);
      if (imgUrl.startsWith('data:image')) {
          console.log("Saving base64 image...");
          const matches = imgUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
          if (matches && matches.length === 3) {
            fs.writeFileSync(dest, Buffer.from(matches[2], 'base64'));
            console.log(`SUCCESS: Saved base64 PNG`);
          }
      } else if (imgUrl.startsWith('//')) {
          await download('https:' + imgUrl, dest);
      } else {
          await download(imgUrl, dest);
          console.log(`SUCCESS: Downloaded PNG`);
      }
    } else {
      console.log(`No image found on DDG search page`);
    }
  } catch (err) {
    console.log(`ERROR: ${err.message}`);
  }

  await browser.close();
  console.log("Done.");
  process.exit(0);
}

run();
