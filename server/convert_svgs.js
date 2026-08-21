import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logosDir = path.join(__dirname, '../client/public/logos');

const targets = [
  { slug: "kaplan-higher-education", url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Kaplan%2C_Inc._logo.svg" },
  { slug: "university-of-padua", url: "https://upload.wikimedia.org/wikipedia/en/d/db/University_of_Padua_seal.svg" }
];

async function run() {
  console.log("Launching puppeteer to screenshot raw SVGs from web...");
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  // Set viewport to get a good high-res SVG render
  await page.setViewport({ width: 1000, height: 1000, deviceScaleFactor: 2 });

  for (const t of targets) {
    try {
      console.log(`Rendering ${t.slug} from ${t.url}...`);
      await page.goto(t.url, { waitUntil: 'networkidle2' });
      
      const element = await page.$('svg, img');
      if (element) {
        const dest = path.join(logosDir, `${t.slug}.png`);
        await element.screenshot({ path: dest, omitBackground: true });
        console.log(`SUCCESS: Saved real high-res PNG for ${t.slug}`);
      } else {
        console.log(`Could not find element to screenshot for ${t.slug}`);
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
