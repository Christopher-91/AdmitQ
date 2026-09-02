import IMMIGRATION_DATA from './immigration.data.js';
import { cacheGet } from '../../config/redis.js';
import { NotFoundError } from '../../middleware/errorHandler.js';

// Cache TTL constants (seconds)
const PROFILE_CACHE_TTL = 86400;   // 24 hours (stale-while-revalidate)
const NEWS_CACHE_TTL = 21600;      // 6 hours
const GDELT_TIMEOUT_MS = 4000;     // 4-second request timeout

/**
 * Get all immigration profiles (cached 24h)
 */
export const getAllProfiles = async () => {
  return cacheGet('immigration:profiles:all', PROFILE_CACHE_TTL, async () => {
    return IMMIGRATION_DATA.map(p => ({
      countrySlug: p.countrySlug,
      countryName: p.countryName,
      countryCode: p.countryCode,
      officialPortalUrl: p.officialPortalUrl,
      lastVerifiedDate: p.lastVerifiedDate,
      verificationStatus: p.verificationStatus,
      // Quick metrics for the hub grid
      workHoursPerWeek: p.workDuringStudies?.allowedHoursPerWeek ?? null,
      postStudyWorkMin: p.postStudyWork?.durationMinMonths ?? null,
      postStudyWorkMax: p.postStudyWork?.durationMaxMonths ?? null,
      postStudyVisaName: p.postStudyWork?.visaName ?? null,
      studentVisaName: p.studentVisa?.name ?? null,
    }));
  });
};

/**
 * Get a single immigration profile by country slug (cached 24h)
 */
export const getProfile = async (slug) => {
  return cacheGet(`immigration:profile:${slug}`, PROFILE_CACHE_TTL, async () => {
    const profile = IMMIGRATION_DATA.find(p => p.countrySlug === slug);
    if (!profile) throw new NotFoundError(`Immigration profile not found for country: ${slug}`);
    return profile;
  });
};

/**
 * Fetch live immigration news using Google News RSS (cached 6h)
 *
 * Returns an array of { title, url, domain, seendate } articles.
 */
export const getNews = async (slug) => {
  const cacheKey = `immigration:news:v2:${slug}`;

  return cacheGet(cacheKey, NEWS_CACHE_TTL, async () => {
    const profile = IMMIGRATION_DATA.find(p => p.countrySlug === slug);
    if (!profile) return [];

    const countryName = profile.countryName;
    const queryTerms = encodeURIComponent(`("student visa" OR immigration OR "international students") ${countryName}`);
    const rssUrl = `https://news.google.com/rss/search?q=${queryTerms}&hl=en-US&gl=US&ceid=US:en`;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), GDELT_TIMEOUT_MS);

      const response = await fetch(rssUrl, {
        signal: controller.signal,
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        console.warn(`Google News returned ${response.status} for ${slug}`);
        return [];
      }

      const xml = await response.text();
      const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)];
      
      const results = [];
      const seen = new Set();

      for (const itemMatch of items) {
        const itemXml = itemMatch[1];
        let title = itemXml.match(/<title>([\s\S]*?)<\/title>/)?.[1] || '';
        const link = itemXml.match(/<link>([\s\S]*?)<\/link>/)?.[1] || '';
        const pubDate = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] || null;

        // Clean CDATA tags
        title = title.replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1');
        
        // Google news titles often end with " - Publisher Name". We can leave it or try to parse domain from url.
        // Google news links are redirect links, so we'll just say "Google News" or extract from title if possible.
        const publisherMatch = title.match(/ - ([^-]+)$/);
        const domain = publisherMatch ? publisherMatch[1].trim() : 'Google News';

        if (!link || seen.has(link)) continue;
        seen.add(link);

        results.push({
          title: sanitizeTitle(title),
          url: link,
          domain: domain,
          seendate: pubDate ? new Date(pubDate).toISOString() : null,
        });

        if (results.length >= 6) break;
      }

      return results;
    } catch (err) {
      if (err.name === 'AbortError') {
        console.warn(`Google News timeout for ${slug}`);
      } else {
        console.warn(`Google News fetch error for ${slug}:`, err.message);
      }
      return [];
    }
  });
};

/**
 * Sanitize article titles — remove excessive whitespace, decode HTML entities
 */
function sanitizeTitle(title) {
  return title
    .replace(/\s+/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .trim();
}

/**
 * Extract domain from URL
 */
function extractDomain(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}
