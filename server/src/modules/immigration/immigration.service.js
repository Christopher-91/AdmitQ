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
 * Fetch live immigration news from GDELT DOC 2.0 API (cached 6h)
 *
 * Returns an array of { title, url, domain, seendate } articles.
 * On failure/timeout, returns cached articles or an empty array.
 */
export const getNews = async (slug) => {
  const cacheKey = `immigration:news:${slug}`;

  // Try to get from cache first (we'll need the stale value as fallback)
  return cacheGet(cacheKey, NEWS_CACHE_TTL, async () => {
    const profile = IMMIGRATION_DATA.find(p => p.countrySlug === slug);
    if (!profile) return [];

    const countryName = profile.countryName;
    const queryTerms = encodeURIComponent(
      `(student visa OR immigration OR "post-study work" OR "international students") AND ${countryName}`
    );
    const gdeltUrl = `https://api.gdeltproject.org/api/v2/doc/doc?query=${queryTerms}+sourcelang:eng&mode=artlist&maxrecords=10&format=json&sort=datedesc`;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), GDELT_TIMEOUT_MS);

      const response = await fetch(gdeltUrl, {
        signal: controller.signal,
        headers: { 'User-Agent': 'AdmitQ/1.0' },
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        console.warn(`GDELT returned ${response.status} for ${slug}`);
        return [];
      }

      const data = await response.json();
      const articles = data?.articles || [];

      // Deduplicate by URL and sanitize
      const seen = new Set();
      const results = [];

      for (const article of articles) {
        if (!article.url || seen.has(article.url)) continue;
        seen.add(article.url);

        results.push({
          title: sanitizeTitle(article.title || ''),
          url: article.url,
          domain: article.domain || extractDomain(article.url),
          seendate: article.seendate || null,
        });

        if (results.length >= 6) break; // Cap at 6 articles
      }

      return results;
    } catch (err) {
      if (err.name === 'AbortError') {
        console.warn(`GDELT timeout for ${slug} (exceeded ${GDELT_TIMEOUT_MS}ms)`);
      } else {
        console.warn(`GDELT fetch error for ${slug}:`, err.message);
      }
      // Return empty — cacheGet will not cache an empty result from a failure
      // if there's already cached data, it would have been returned before this function ran
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
