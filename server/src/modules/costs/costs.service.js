/**
 * Cost Calculator
 * Country-specific base costs with user-adjustable amounts
 */

// Exchange rates (approximations — would be fetched from API in production)
const EXCHANGE_RATES = {
  USD: 1, EUR: 0.92, GBP: 0.79, CAD: 1.36, AUD: 1.53,
  CHF: 0.87, SEK: 10.5, SGD: 1.34, JPY: 149.5, KRW: 1320,
  NZD: 1.63, INR: 83.5, CNY: 7.23, DKK: 6.87, NOK: 10.82,
  AED: 3.67, RUB: 91.50, MYR: 4.75, PLN: 3.98,
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
  'china': { rent: 400, food: 200, transport: 30, insurance: 50, misc: 100 },
  'denmark': { rent: 800, food: 400, transport: 80, insurance: 0, misc: 200 },
  'finland': { rent: 700, food: 350, transport: 70, insurance: 0, misc: 180 },
  'norway': { rent: 900, food: 450, transport: 90, insurance: 0, misc: 250 },
  'uae': { rent: 1100, food: 400, transport: 100, insurance: 150, misc: 250 },
  'luxembourg': { rent: 1200, food: 450, transport: 0, insurance: 100, misc: 250 },
  'belgium': { rent: 700, food: 350, transport: 60, insurance: 100, misc: 180 },
  'austria': { rent: 750, food: 350, transport: 60, insurance: 100, misc: 180 },
  'russia': { rent: 300, food: 150, transport: 20, insurance: 30, misc: 80 },
  'spain': { rent: 600, food: 300, transport: 50, insurance: 80, misc: 150 },
  'malaysia': { rent: 300, food: 150, transport: 30, insurance: 50, misc: 100 },
  'portugal': { rent: 550, food: 250, transport: 50, insurance: 80, misc: 150 },
  'poland': { rent: 450, food: 250, transport: 40, insurance: 60, misc: 120 },
};

const WORST_CASE_COSTS = {
  'united-states': { rent: 2500, food: 700, transport: 200, insurance: 300, misc: 400 },
  'united-kingdom': { rent: 2000, food: 600, transport: 150, insurance: 0, misc: 300 },
  'canada': { rent: 2200, food: 600, transport: 150, insurance: 150, misc: 300 },
  'germany': { rent: 1200, food: 500, transport: 100, insurance: 150, misc: 250 },
  'netherlands': { rent: 1500, food: 600, transport: 100, insurance: 180, misc: 250 },
  'australia': { rent: 2000, food: 600, transport: 150, insurance: 200, misc: 350 },
  'ireland': { rent: 1800, food: 600, transport: 150, insurance: 150, misc: 300 },
  'france': { rent: 1500, food: 500, transport: 100, insurance: 0, misc: 300 },
  'switzerland': { rent: 2200, food: 800, transport: 150, insurance: 350, misc: 400 },
  'sweden': { rent: 1400, food: 600, transport: 100, insurance: 0, misc: 250 },
  'singapore': { rent: 2000, food: 600, transport: 150, insurance: 200, misc: 400 },
  'japan': { rent: 1200, food: 500, transport: 150, insurance: 60, misc: 250 },
  'south-korea': { rent: 1000, food: 450, transport: 100, insurance: 100, misc: 250 },
  'new-zealand': { rent: 1600, food: 500, transport: 100, insurance: 150, misc: 300 },
  'italy': { rent: 1200, food: 500, transport: 100, insurance: 150, misc: 250 },
  'china': { rent: 1000, food: 400, transport: 80, insurance: 100, misc: 200 },
  'denmark': { rent: 1400, food: 600, transport: 120, insurance: 0, misc: 300 },
  'finland': { rent: 1200, food: 500, transport: 100, insurance: 0, misc: 250 },
  'norway': { rent: 1500, food: 700, transport: 150, insurance: 0, misc: 350 },
  'uae': { rent: 2000, food: 700, transport: 200, insurance: 250, misc: 400 },
  'luxembourg': { rent: 1800, food: 700, transport: 0, insurance: 150, misc: 350 },
  'belgium': { rent: 1300, food: 500, transport: 100, insurance: 150, misc: 250 },
  'austria': { rent: 1300, food: 500, transport: 100, insurance: 150, misc: 250 },
  'russia': { rent: 800, food: 400, transport: 80, insurance: 80, misc: 200 },
  'spain': { rent: 1200, food: 500, transport: 100, insurance: 120, misc: 250 },
  'malaysia': { rent: 800, food: 350, transport: 80, insurance: 100, misc: 200 },
  'portugal': { rent: 1100, food: 450, transport: 90, insurance: 120, misc: 250 },
  'poland': { rent: 900, food: 400, transport: 80, insurance: 100, misc: 200 },
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
    estimationMode = 'average',
  } = data;

  const baseCosts = estimationMode === 'worst-case' 
    ? (WORST_CASE_COSTS[countrySlug] || WORST_CASE_COSTS['united-states'])
    : (COUNTRY_COSTS[countrySlug] || COUNTRY_COSTS['united-states']);
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
    disclaimer: estimationMode === 'worst-case' 
      ? 'Note: The cost calculator is currently providing a worst-case scenario for your expenses to ensure safe financial planning. Actual costs may be significantly lower.'
      : 'These are estimates based on average costs. Actual costs may vary. All amounts are approximate.',
  };
};
