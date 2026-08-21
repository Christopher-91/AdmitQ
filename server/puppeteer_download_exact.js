import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logosDir = path.join(__dirname, '../client/public/logos');

const targets = [
  { 
    slug: "sapienza-university-of-rome", 
    url: "https://commons.wikimedia.org/wiki/File:Logo_Sapienza_Universit%C3%A0_di_Roma.jpg",
    selector: ".fullImageLink a"
  },
  { 
    slug: "kaplan-higher-education", 
    url: "https://commons.wikimedia.org/wiki/File:Kaplan,_Inc._logo.svg",
    selector: ".fullImageLink a"
  },
  { 
    slug: "university-of-padua", 
    url: "https://en.wikipedia.org/wiki/File:University_of_Padua_seal.svg",
    selector: ".fullImageLink a"
  },
  { 
    slug: "canadian-university-dubai", 
    url: "https://www.cud.ac.ae",
    selector: "header img"
  },
  { 
    slug: "kyungpook-national-university", 
    url: "https://en.wikipedia.org/wiki/Kyungpook_National_University",
    selector: ".infobox img"
  }
];

async function run() {
  console.log("Launching puppeteer to scrape EXACT logos...");
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36");

  for (const t of targets) {
    try {
      console.log(`Navigating to ${t.url}...`);
      await page.goto(t.url, { waitUntil: 'networkidle2' });
      
      const imgUrl = await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        if (!el) return null;
        return el.href || el.src; // Handle both 'a' tags (Wikipedia original file links) and 'img' tags
      }, t.selector);

      if (imgUrl) {
        console.log(`Found image URL for ${t.slug}: ${imgUrl}`);
        
        // Use Puppeteer page.goto to download the image as a buffer (bypassing any WAF or anti-bot)
        const viewSource = await page.goto(imgUrl);
        const buffer = await viewSource.buffer();
        
        const dest = path.join(logosDir, `${t.slug}.png`);
        fs.writeFileSync(dest, buffer);
        console.log(`SUCCESS: Downloaded ${t.slug} (${buffer.length} bytes)`);
      } else {
        console.log(`No image found at selector ${t.selector} for ${t.slug}`);
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
