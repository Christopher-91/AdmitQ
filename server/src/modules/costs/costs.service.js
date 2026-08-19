/**
 * Cost Calculator
 * Country-specific base costs with user-adjustable amounts
 */

// Exchange rates (approximations — would be fetched from API in production)
const EXCHANGE_RATES = {
  USD: 1, EUR: 0.92, GBP: 0.79, CAD: 1.36, AUD: 1.53,
  CHF: 0.87, SEK: 10.5, SGD: 1.34, JPY: 149.5, KRW: 1320,
  NZD: 1.63, INR: 83.5,
};

// Country-specific monthly cost baselines (USD)
const COUNTRY_COSTS = {
  'united-states': { rent: 1200, food: 400, transport: 100, insurance: 200, misc: 200 },
  'united-kingdom': { rent: 1000, food: 350, transport: 80, insurance: 0, misc: 180 },
  'canada': { rent: 1000, food: 350, transport: 100, insurance: 80, misc: 180 },
  'germany': { rent: 600, food: 300, transport: 50, insurance: 120, misc: 150 },
  'netherlands': { rent: 800, food: 350, transport: 60, insurance: 130, misc: 170 },
  'australia': { rent: 1100, food: 350, transport: 80, insurance: 150, misc: 200 },
  'ireland': { rent: 900, food: 350, transport: 80, insurance: 100, misc: 170 },
  'france': { rent: 700, food: 300, transport: 60, insurance: 0, misc: 150 },
  'switzerland': { rent: 1400, food: 500, transport: 80, insurance: 250, misc: 250 },
  'sweden': { rent: 700, food: 300, transport: 60, insurance: 0, misc: 150 },
  'singapore': { rent: 1000, food: 350, transport: 80, insurance: 100, misc: 200 },
  'japan': { rent: 600, food: 300, transport: 80, insurance: 30, misc: 150 },
  'south-korea': { rent: 500, food: 250, transport: 50, insurance: 50, misc: 130 },
  'new-zealand': { rent: 900, food: 300, transport: 60, insurance: 100, misc: 160 },
  'italy': { rent: 600, food: 300, transport: 50, insurance: 100, misc: 140 },
};

export const calculateCosts = (data) => {
  const {
    countrySlug,
    tuitionUsd = 0,
    durationMonths = 12,
    currency = 'USD',
    // User overrides (monthly)
    customRent,
    customFood,
    customTransport,
    customInsurance,
    customMisc,
  } = data;

  const baseCosts = COUNTRY_COSTS[countrySlug] || COUNTRY_COSTS['united-states'];
  const rate = EXCHANGE_RATES[currency] || 1;

  const monthly = {
    rent: customRent ?? baseCosts.rent,
    food: customFood ?? baseCosts.food,
    transport: customTransport ?? baseCosts.transport,
    insurance: customInsurance ?? baseCosts.insurance,
    miscellaneous: customMisc ?? baseCosts.misc,
  };

  const monthlyTotal = Object.values(monthly).reduce((sum, v) => sum + v, 0);

  // One-time costs
  const oneTime = {
    visaFee: data.visaFee ?? 200,
    applicationFee: data.applicationFee ?? 100,
    travel: data.travel ?? 800,
    booksMaterials: data.booksMaterials ?? 500,
    deposit: data.deposit ?? 500,
  };

  const oneTimeTotal = Object.values(oneTime).reduce((sum, v) => sum + v, 0);

  const tuitionYearly = parseFloat(tuitionUsd) || 0;
  const totalMonths = parseInt(durationMonths) || 12;
  const years = totalMonths / 12;

  const yearlyLiving = monthlyTotal * 12;
  const firstYear = tuitionYearly + yearlyLiving + oneTimeTotal;
  const totalProgram = (tuitionYearly * years) + (yearlyLiving * years) + oneTimeTotal;
  const monthlyEstimate = tuitionYearly / 12 + monthlyTotal;

  // Convert to target currency
  const convert = (usd) => Math.round(usd * rate);

  return {
    currency,
    exchangeRate: rate,
    monthly: {
      tuition: convert(tuitionYearly / 12),
      rent: convert(monthly.rent),
      food: convert(monthly.food),
      transport: convert(monthly.transport),
      insurance: convert(monthly.insurance),
      miscellaneous: convert(monthly.miscellaneous),
      total: convert(monthlyEstimate),
    },
    firstYear: {
      tuition: convert(tuitionYearly),
      living: convert(yearlyLiving),
      oneTimeCosts: convert(oneTimeTotal),
      total: convert(firstYear),
    },
    totalProgram: {
      tuition: convert(tuitionYearly * years),
      living: convert(yearlyLiving * years),
      oneTimeCosts: convert(oneTimeTotal),
      total: convert(totalProgram),
    },
    durationMonths: totalMonths,
    breakdown: {
      monthly: Object.entries(monthly).map(([key, value]) => ({ category: key, amountUsd: value, amount: convert(value) })),
      oneTime: Object.entries(oneTime).map(([key, value]) => ({ category: key, amountUsd: value, amount: convert(value) })),
    },
    disclaimer: 'These are estimates based on average costs. Actual costs may vary. All amounts are approximate.',
  };
};
