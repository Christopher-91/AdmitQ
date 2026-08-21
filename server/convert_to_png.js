import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logosDir = path.join(__dirname, '../client/public/logos');

const targets = [
  { slug: "canadian-university-dubai", url: "https://www.cud.ac.ae/themes/custom/cud/logo.svg" },
  { slug: "kaplan-higher-education", url: `file://${path.join(logosDir, 'kaplan-higher-education.png')}` },
  { slug: "university-of-padua", url: `file://${path.join(logosDir, 'university-of-padua.png')}` }
];

async function run() {
  console.log("Launching puppeteer to render SVGs as PNG...");
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64)");

  for (const t of targets) {
    try {
      console.log(`Rendering ${t.slug} from ${t.url}...`);
      await page.goto(t.url, { waitUntil: 'networkidle2' });
      
      // We wait for the image/svg to load. For direct SVGs or images, Chrome centers them.
      // We will select the SVG/img element and take a screenshot of it!
      const element = await page.$('svg, img');
      if (element) {
        const dest = path.join(logosDir, `${t.slug}.png`);
        await element.screenshot({ path: dest, omitBackground: true });
        console.log(`SUCCESS: Saved real PNG for ${t.slug}`);
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
