export const config = {
  slug: 'knight-hennessy',
  url: 'https://knight-hennessy.stanford.edu/admission/dates-and-deadlines',
};

export async function parseDeadline(page) {
  try {
    await page.goto(config.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    
    // Extract all text from the main content area
    const contentText = await page.evaluate(() => {
      return document.body.innerText;
    });

    // Knight-Hennessy usually announces deadlines like "October 9, 2026" or similar
    const deadlineRegex = /(?:deadline|due).*?(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),\s+(\d{4})/i;
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
      
      const formattedDate = `${year}-${mm}-${dd}`;
      return formattedDate;
    }
    
    // Fallback if exact date isn't found
    return null;
  } catch (error) {
    console.error(`[Scraper] Failed to parse ${config.slug}:`, error.message);
    return null;
  }
}
