export const config = {
  slug: 'mext',
  url: 'https://www.studyinjapan.go.jp/en/smap-stopj-applications-scholarship.html',
};

export async function parseDeadline(page) {
  try {
    await page.goto(config.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    
    // MEXT deadlines vary by embassy, often there is no single global deadline.
    // However, for the sake of the proof of concept, we look for any specific date on the main page.
    const contentText = await page.evaluate(() => {
      return document.body.innerText;
    });

    const deadlineRegex = /(?:deadline|application period).*?(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),\s+(\d{4})/i;
    const match = contentText.match(deadlineRegex);

    if (match) {
      const month = match[1];
      const day = match[2];
      const year = match[3];
      
      const months = {
        january: '01', february: '02', march: '03', april: '04', may: '05', june: '06',
        july: '07', august: '08', september: '09', october: '10', november: '11', december: '12'
      };
      
      const mm = months[month.toLowerCase()];
      const dd = day.padStart(2, '0');
      
      return `${year}-${mm}-${dd}`;
    }
    
    return null;
  } catch (error) {
    console.error(`[Scraper] Failed to parse ${config.slug}:`, error.message);
    return null;
  }
}
