import puppeteer from 'puppeteer';
import { updateScholarshipDeadline } from './dbUpdater.js';
import * as stanfordTarget from './targets/stanford.js';
import * as mextTarget from './targets/mext.js';

// Map scholarship slugs to their specific scraper implementations
const targets = {
  [stanfordTarget.config.slug]: stanfordTarget,
  [mextTarget.config.slug]: mextTarget,
};

async function runScraper() {
  console.log('🚀 Starting Scholarship Scraper Pipeline...\n');
  
  // Launch browser once for all scraping targets to save overhead
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    for (const [slug, target] of Object.entries(targets)) {
      console.log(`⏳ Scraping ${slug}...`);
      const page = await browser.newPage();
      
      // Set user agent to avoid basic bot blocks
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
      
      const newDeadline = await target.parseDeadline(page);
      
      await page.close();
      
      if (newDeadline) {
        console.log(`✅ Found new deadline for ${slug}: ${newDeadline}`);
        await updateScholarshipDeadline(slug, newDeadline);
      } else {
        console.log(`⚠️ Could not find exact deadline for ${slug}, or it requires manual review.`);
        // Mark as verified but no exact date found
        await updateScholarshipDeadline(slug, null); 
      }
      console.log('--------------------------------------------------');
    }
  } catch (error) {
    console.error('❌ Scraper Pipeline Error:', error);
  } finally {
    await browser.close();
    console.log('✨ Scraper Pipeline Completed.');
    process.exit(0);
  }
}

// Run if called directly
runScraper();
