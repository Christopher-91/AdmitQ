import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logosDir = path.join(__dirname, '../client/public/logos');

async function run() {
  console.log("Launching puppeteer to find CUD logo...");
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });
  await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64)");

  try {
    await page.goto("https://www.cud.ac.ae", { waitUntil: 'networkidle2' });
    
    // Evaluate the DOM to find the logo
    const logoSrc = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      for (const img of imgs) {
        if (img.src && img.src.toLowerCase().includes('logo')) {
          return img.src;
        }
      }
      return null;
    });

    if (logoSrc) {
        console.log(`Found logo src: ${logoSrc}`);
        // Go directly to the logo URL
        await page.goto(logoSrc, { waitUntil: 'networkidle2' });
        
        const dest = path.join(logosDir, `canadian-university-dubai.png`);
        
        // Find the image/svg element on the page
        const element = await page.$('svg, img');
        if (element) {
            await element.screenshot({ path: dest, omitBackground: true });
            console.log(`SUCCESS: Saved real PNG for canadian-university-dubai`);
        } else {
            console.log(`Could not find element to screenshot after navigating to logo URL`);
        }
    } else {
        console.log("No img tag with 'logo' in src found.");
    }

  } catch (err) {
    console.log(`ERROR: ${err.message}`);
  }

  await browser.close();
  console.log("Done.");
  process.exit(0);
}

run();
