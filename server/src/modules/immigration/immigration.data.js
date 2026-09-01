/**
 * Immigration & Visa Baseline Data
 * ─────────────────────────────────
 * Structured, verified immigration profiles for every country in AdmitQ.
 *
 * IMPORTANT: All policy data is sourced from official government portals.
 * Values that could not be verified are set to null.
 * verificationStatus: 'verified' | 'pending_revalidation'
 */

const DISCLAIMER = 'This information is provided for general guidance only and does not constitute official immigration or legal advice. Immigration policies change frequently — always verify details on the official government portal linked above before making decisions.';

const IMMIGRATION_DATA = [
  // ═══════════════════════════════════════════════
  // 1. UNITED STATES
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'united-states',
    countryName: 'United States',
    countryCode: 'US',
    officialPortalUrl: 'https://studyinthestates.dhs.gov/',
    lastVerifiedDate: '2026-06-15T00:00:00Z',
    verificationSource: 'U.S. Department of Homeland Security — Study in the States',
    verificationStatus: 'verified',
    studentVisa: {
      name: 'F-1 Student Visa',
      requirements: [
        'Acceptance at a SEVP-certified school (Form I-20)',
        'Payment of SEVIS fee (I-901)',
        'Proof of financial support for the first year',
        'Valid passport (6 months beyond stay)',
        'Visa interview at U.S. Embassy/Consulate',
        'Evidence of intent to return to home country',
      ],
      financialProof: 'Must demonstrate funds to cover first year of tuition and living costs. Bank statements, sponsor letters, or scholarship letters accepted.',
      sourceUrl: 'https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 20,
      holidayRules: 'Full-time work permitted during official school breaks and annual vacation',
      conditions: [
        'On-campus employment: up to 20 hrs/week during term, full-time during breaks',
        'Curricular Practical Training (CPT): authorized by school DSO, must be integral to curriculum',
        'Economic hardship authorization available in certain cases',
        'Off-campus work generally not permitted without CPT/OPT authorization',
      ],
      sourceUrl: 'https://studyinthestates.dhs.gov/students/working-in-the-united-states',
    },
    postStudyWork: {
      visaName: 'Optional Practical Training (OPT)',
      durationMinMonths: 12,
      durationMaxMonths: 36,
      eligibilitySummary: '12 months of OPT for all F-1 graduates. STEM degree holders can apply for a 24-month extension (total 36 months). Must apply within 60 days of graduation.',
      sourceUrl: 'https://studyinthestates.dhs.gov/students/training-opportunities-in-the-united-states',
    },
    prPathways: {
      summary: 'No direct path from student visa to permanent residency. Typical route: OPT → H-1B work visa (employer-sponsored, lottery-based) → Employment-based Green Card (EB-2/EB-3). Process can take several years.',
      keyRequirements: [
        'Employer sponsorship required for H-1B visa',
        'H-1B subject to annual lottery (85,000 cap)',
        'EB Green Card requires labor certification (PERM)',
        'Advanced degree holders may qualify for EB-2 NIW (National Interest Waiver)',
      ],
      sourceUrl: 'https://www.uscis.gov/green-card/green-card-eligibility/green-card-for-employment-based-immigrants',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 2. UNITED KINGDOM
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'united-kingdom',
    countryName: 'United Kingdom',
    countryCode: 'GB',
    officialPortalUrl: 'https://www.gov.uk/student-visa',
    lastVerifiedDate: '2026-06-15T00:00:00Z',
    verificationSource: 'UK Government — GOV.UK',
    verificationStatus: 'verified',
    studentVisa: {
      name: 'Student Visa (formerly Tier 4)',
      requirements: [
        'Confirmation of Acceptance for Studies (CAS) from a licensed sponsor',
        'Proof of financial support (tuition + 9 months living costs)',
        'English language proficiency (IELTS/equivalent at CEFR B2+)',
        'Valid passport',
        'Tuberculosis test (for some countries)',
        'Academic Technology Approval Scheme (ATAS) certificate (for certain subjects)',
      ],
      financialProof: '£1,334/month for London or £1,023/month outside London for 9 months, plus outstanding tuition fees.',
      sourceUrl: 'https://www.gov.uk/student-visa',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 20,
      holidayRules: 'Full-time work permitted during official vacation periods',
      conditions: [
        '20 hrs/week during term time for degree-level courses',
        'Full-time during vacations',
        'Cannot be self-employed or engage in professional sport',
        'Cannot fill a permanent full-time vacancy',
      ],
      sourceUrl: 'https://www.gov.uk/student-visa/what-you-can-and-cannot-do',
    },
    postStudyWork: {
      visaName: 'Graduate Route',
      durationMinMonths: 24,
      durationMaxMonths: 36,
      eligibilitySummary: '2 years for bachelor\'s/master\'s graduates, 3 years for PhD graduates. No employer sponsorship required. Can work in any job at any skill level.',
      sourceUrl: 'https://www.gov.uk/graduate-visa',
    },
    prPathways: {
      summary: 'Indefinite Leave to Remain (ILR) after 5 years of continuous lawful residence. Graduate Route time counts toward the 5-year requirement if followed by a Skilled Worker visa.',
      keyRequirements: [
        '5 years continuous residence on qualifying visa',
        'Skilled Worker visa (employer-sponsored) needed after Graduate Route',
        'Meet minimum salary threshold (currently £38,700 or going rate)',
        'Pass Life in the UK test and English language requirement',
      ],
      sourceUrl: 'https://www.gov.uk/indefinite-leave-to-remain',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 3. CANADA
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'canada',
    countryName: 'Canada',
    countryCode: 'CA',
    officialPortalUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html',
    lastVerifiedDate: '2026-06-15T00:00:00Z',
    verificationSource: 'Immigration, Refugees and Citizenship Canada (IRCC)',
    verificationStatus: 'verified',
    studentVisa: {
      name: 'Study Permit',
      requirements: [
        'Letter of acceptance from a Designated Learning Institution (DLI)',
        'Proof of sufficient funds (tuition + C$20,635/year living costs, or C$8,514 for Quebec)',
        'Valid passport',
        'Clean criminal record (police clearance)',
        'Medical exam (if required)',
        'Provincial Attestation Letter (PAL) — required since 2024',
      ],
      financialProof: 'Full first-year tuition plus C$20,635 for living expenses (outside Quebec). GIC or bank statements accepted.',
      sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 20,
      holidayRules: 'Full-time work permitted during scheduled breaks (winter/summer holidays)',
      conditions: [
        'Off-campus: up to 20 hrs/week during academic sessions',
        'Full-time during scheduled breaks',
        'Co-op/internship work permits available for programs with work placements',
        'Must have valid study permit and be enrolled full-time at a DLI',
      ],
      sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work.html',
    },
    postStudyWork: {
      visaName: 'Post-Graduation Work Permit (PGWP)',
      durationMinMonths: 8,
      durationMaxMonths: 36,
      eligibilitySummary: 'Duration matches length of study program (min 8 months, max 3 years). Must apply within 180 days of final marks. Open work permit — no employer restriction.',
      sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation.html',
    },
    prPathways: {
      summary: 'One of the most immigration-friendly countries. Canadian Experience Class (CEC) through Express Entry is the primary pathway. Work experience gained on PGWP counts toward CEC eligibility.',
      keyRequirements: [
        '1 year of skilled work experience in Canada (NOC TEER 0/1/2/3)',
        'Meet language requirements (CLB 7 for NOC TEER 0/1, CLB 5 for TEER 2/3)',
        'Express Entry Comprehensive Ranking System (CRS) score',
        'Provincial Nominee Programs (PNP) offer additional pathways',
      ],
      sourceUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 4. GERMANY
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'germany',
    countryName: 'Germany',
    countryCode: 'DE',
    officialPortalUrl: 'https://www.make-it-in-germany.com/en/',
    lastVerifiedDate: '2026-06-15T00:00:00Z',
    verificationSource: 'Make it in Germany (Federal Government)',
    verificationStatus: 'verified',
    studentVisa: {
      name: 'National Visa for Study Purposes (§16b AufenthG)',
      requirements: [
        'University admission letter (Zulassungsbescheid)',
        'Blocked account (Sperrkonto) with €11,208/year',
        'Valid passport',
        'Health insurance coverage',
        'Proof of previous qualifications (translated and certified)',
        'Motivation letter and CV',
      ],
      financialProof: 'Blocked account (Sperrkonto) with at least €11,208 for one year. Alternative: scholarship letter, formal obligation (Verpflichtungserklärung), or bank guarantee.',
      sourceUrl: 'https://www.make-it-in-germany.com/en/visa-residence/types/studying',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 20,
      holidayRules: 'Can work full days during lecture-free periods within the 120/240-day annual limit',
      conditions: [
        '120 full days or 240 half days per year',
        'No additional work permit required for jobs within this limit',
        'Student jobs (Werkstudent) and mini-jobs (€520/month) popular',
        'Working as a research/teaching assistant at the university has no hour limit',
      ],
      sourceUrl: 'https://www.make-it-in-germany.com/en/study-training/study/working-while-studying',
    },
    postStudyWork: {
      visaName: 'Job-Seeking Visa for Graduates (§20 AufenthG)',
      durationMinMonths: 18,
      durationMaxMonths: 18,
      eligibilitySummary: '18-month residence permit to find a job commensurate with qualifications. Can take any employment during this period. Converts to work/EU Blue Card visa once a qualifying job is found.',
      sourceUrl: 'https://www.make-it-in-germany.com/en/visa-residence/types/job-search-graduates',
    },
    prPathways: {
      summary: 'Permanent settlement permit (Niederlassungserlaubnis) possible after 2 years on an EU Blue Card, or after 5 years on a standard residence permit. Germany actively recruits skilled workers.',
      keyRequirements: [
        'EU Blue Card holders: 21–27 months with B1 German, or 33 months without',
        'Standard path: 5 years of residence + adequate German language skills',
        'Contributions to pension system',
        'Sufficient income and housing',
      ],
      sourceUrl: 'https://www.make-it-in-germany.com/en/visa-residence/living-permanently-in-germany/settlement-permit',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 5. NETHERLANDS
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'netherlands',
    countryName: 'Netherlands',
    countryCode: 'NL',
    officialPortalUrl: 'https://www.studyinholland.nl/',
    lastVerifiedDate: '2026-06-15T00:00:00Z',
    verificationSource: 'Nuffic / Immigration and Naturalisation Service (IND)',
    verificationStatus: 'verified',
    studentVisa: {
      name: 'MVV + Residence Permit for Study',
      requirements: [
        'Admission to a Dutch higher education institution',
        'University applies for residence permit on your behalf',
        'Proof of sufficient funds (€13,876/year as of 2025)',
        'Valid passport',
        'Health insurance',
        'MVV entry visa (collected at Dutch embassy)',
      ],
      financialProof: '€13,876 for one year of living costs. Shown through bank statement, scholarship letter, or sponsor declaration.',
      sourceUrl: 'https://ind.nl/en/residence-permits/study/study-at-university-or-higher-education',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 16,
      holidayRules: 'Full-time work permitted during June, July, and August',
      conditions: [
        '16 hrs/week during academic year (employer needs TWV work permit)',
        'Full-time in summer months (June–August)',
        'Alternatively: internship as part of study program (no hour limit)',
        'Self-employment possible but requires separate permit',
      ],
      sourceUrl: 'https://ind.nl/en/work/working-in-the-netherlands/work-as-a-student',
    },
    postStudyWork: {
      visaName: 'Orientation Year Visa (Zoekjaar)',
      durationMinMonths: 12,
      durationMaxMonths: 12,
      eligibilitySummary: '1-year permit to find employment or start a business after graduation from a Dutch institution. Must apply within 3 years of graduation.',
      sourceUrl: 'https://ind.nl/en/residence-permits/work/residence-permit-for-orientation-year',
    },
    prPathways: {
      summary: 'Permanent residence after 5 years of continuous legal residence. Highly Skilled Migrant (Kennismigrant) visa is the primary work pathway after the orientation year.',
      keyRequirements: [
        '5 years continuous legal residence',
        'Meet income requirement on Highly Skilled Migrant permit',
        'Pass civic integration exam (Inburgeringsexamen)',
        'Sufficient and sustainable income',
      ],
      sourceUrl: 'https://ind.nl/en/permanent-residence/permanent-residence-permit',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 6. AUSTRALIA
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'australia',
    countryName: 'Australia',
    countryCode: 'AU',
    officialPortalUrl: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
    lastVerifiedDate: '2026-06-15T00:00:00Z',
    verificationSource: 'Australian Department of Home Affairs',
    verificationStatus: 'verified',
    studentVisa: {
      name: 'Student Visa (Subclass 500)',
      requirements: [
        'Confirmation of Enrolment (CoE) from a CRICOS-registered institution',
        'Genuine Temporary Entrant (GTE) requirement',
        'Overseas Student Health Cover (OSHC)',
        'Proof of financial capacity (AUD 24,505/year living costs)',
        'English proficiency test results',
        'Valid passport and character requirements',
      ],
      financialProof: 'AUD 24,505 per year for living costs + tuition fees + school-age dependants\' costs + return airfare. Bank statements for preceding 3 months.',
      sourceUrl: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 48,
      holidayRules: 'Unlimited hours during scheduled course breaks',
      conditions: [
        '48 hours per fortnight (24 hrs/week average) during academic sessions',
        'Unlimited hours during scheduled course breaks',
        'Work rights begin once course has commenced',
        'Conditions vary for vocational vs higher education',
      ],
      sourceUrl: 'https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions',
    },
    postStudyWork: {
      visaName: 'Temporary Graduate Visa (Subclass 485)',
      durationMinMonths: 24,
      durationMaxMonths: 48,
      eligibilitySummary: '2 years for bachelor\'s, 3 years for master\'s (by research), 4 years for PhD. Graduates studying in regional areas may receive additional years. Open work rights.',
      sourceUrl: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-graduate-485',
    },
    prPathways: {
      summary: 'Multiple pathways: Skilled Independent (subclass 189), Skilled Nominated (190), or Skilled Work Regional (491→191). Points-based system considers age, qualifications, work experience, and English.',
      keyRequirements: [
        'Skills assessment in nominated occupation',
        'Minimum 65 points on points test',
        'Age under 45 at time of invitation',
        'Competent English (IELTS 6.0 or equivalent)',
        'Occupation on relevant skilled occupation list',
      ],
      sourceUrl: 'https://immi.homeaffairs.gov.au/visas/working-in-australia/skillselect',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 7. IRELAND
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'ireland',
    countryName: 'Ireland',
    countryCode: 'IE',
    officialPortalUrl: 'https://www.irishimmigration.ie/coming-to-study-in-ireland/',
    lastVerifiedDate: '2026-06-15T00:00:00Z',
    verificationSource: 'Irish Immigration Service (ISD)',
    verificationStatus: 'verified',
    studentVisa: {
      name: 'Study Visa (Stamp 2)',
      requirements: [
        'Acceptance at a recognized Irish institution',
        'Proof of payment of course fees',
        'Proof of finances (€10,000 available)',
        'Private medical insurance',
        'Evidence of academic ability (transcripts)',
        'Valid passport',
      ],
      financialProof: 'Must show evidence of €10,000 in an Irish or home-country bank account, plus fees paid. If course >1 year, €10,000 available each subsequent year.',
      sourceUrl: 'https://www.irishimmigration.ie/coming-to-study-in-ireland/',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 20,
      holidayRules: 'Full-time (40 hrs/week) permitted during June–September and 15 December–15 January',
      conditions: [
        '20 hrs/week during academic term',
        '40 hrs/week during holiday periods',
        'Must have Stamp 2 immigration permission',
        'Employment permit not required',
      ],
      sourceUrl: 'https://www.irishimmigration.ie/coming-to-study-in-ireland/what-are-my-study-options/working-during-studies/',
    },
    postStudyWork: {
      visaName: 'Third Level Graduate Scheme (Stamp 1G)',
      durationMinMonths: 12,
      durationMaxMonths: 24,
      eligibilitySummary: '12 months for Level 8 (Honours Bachelor\'s), 24 months for Level 9/10 (Master\'s/PhD). Can seek employment and work full-time.',
      sourceUrl: 'https://www.irishimmigration.ie/coming-to-study-in-ireland/what-are-my-study-options/third-level-graduate-programme/',
    },
    prPathways: {
      summary: 'Stamp 4 (long-term residency) after legally residing for 5 years on work authorization. Critical Skills Employment Permit is the primary route after graduation.',
      keyRequirements: [
        'Critical Skills Employment Permit for occupations on the critical skills list',
        'Salary threshold of €38,000 (critical skills) or €34,000 (general)',
        '5 years legal residence for long-term residency',
        'Citizenship possible after 5 years total residence (1 year continuous)',
      ],
      sourceUrl: 'https://www.irishimmigration.ie/my-situation-has-changed-since-i-arrived-in-ireland/long-term-residency/',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 8. FRANCE
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'france',
    countryName: 'France',
    countryCode: 'FR',
    officialPortalUrl: 'https://www.campusfrance.org/en',
    lastVerifiedDate: '2026-06-15T00:00:00Z',
    verificationSource: 'Campus France / French Ministry of Interior',
    verificationStatus: 'verified',
    studentVisa: {
      name: 'Long-Stay Student Visa (VLS-TS)',
      requirements: [
        'Pre-registration through Campus France (Études en France procedure)',
        'University acceptance letter',
        'Proof of financial resources (€615/month minimum)',
        'Valid passport',
        'Health insurance or CVEC contribution',
        'Accommodation proof',
      ],
      financialProof: '€615/month minimum (approx. €7,380/year). Bank statements, scholarship letters, or guarantor declarations accepted.',
      sourceUrl: 'https://france-visas.gouv.fr/en/web/france-visas/student',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 20,
      holidayRules: 'Annual limit of 964 hours applies; hours can be distributed flexibly',
      conditions: [
        '964 hours per year (approximately 60% of full-time)',
        'No separate work permit needed for EU/EEA students',
        'Non-EU students: work authorization included in residence permit',
        'Students from certain countries may need a provisional work authorization (APT)',
      ],
      sourceUrl: 'https://www.campusfrance.org/en/working-while-studying-in-france',
    },
    postStudyWork: {
      visaName: 'Temporary Residence Permit for Job Seeking (APS)',
      durationMinMonths: 12,
      durationMaxMonths: 12,
      eligibilitySummary: '12-month non-renewable permit to find employment related to your studies or start a business. Must apply before current visa expires.',
      sourceUrl: 'https://www.campusfrance.org/en/post-study-options-for-staying-in-france',
    },
    prPathways: {
      summary: 'Carte de résident (10-year renewable) after 5 years of legal residence. Talent Passport is the primary skilled worker pathway.',
      keyRequirements: [
        '5 years continuous legal residence',
        'Stable and sufficient income',
        'Integration into French society',
        'Talent Passport available for highly qualified graduates (salary ≥ 1.5x minimum wage)',
      ],
      sourceUrl: 'https://www.service-public.fr/particuliers/vosdroits/F11201',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 9. SWITZERLAND
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'switzerland',
    countryName: 'Switzerland',
    countryCode: 'CH',
    officialPortalUrl: 'https://www.sem.admin.ch/sem/en/home.html',
    lastVerifiedDate: '2026-06-15T00:00:00Z',
    verificationSource: 'Swiss State Secretariat for Migration (SEM)',
    verificationStatus: 'verified',
    studentVisa: {
      name: 'National Visa D + Residence Permit B',
      requirements: [
        'Confirmation of enrollment from a Swiss institution',
        'Proof of financial resources (CHF 21,000/year minimum)',
        'Proof of accommodation',
        'Health insurance (Swiss-recognized)',
        'Valid passport',
        'Written commitment to leave Switzerland after studies',
      ],
      financialProof: 'CHF 21,000 per year. Bank guarantee, scholarship confirmation, or sponsor declaration.',
      sourceUrl: 'https://www.sem.admin.ch/sem/en/home/themen/einreise/lebensunterhalt.html',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 15,
      holidayRules: 'Full-time work permitted during official semester breaks',
      conditions: [
        'Up to 15 hrs/week during semester (after first 6 months of enrollment)',
        'Full-time during semester breaks',
        'Employer must obtain work permit from cantonal authorities',
        'Work must not negatively impact studies',
      ],
      sourceUrl: 'https://www.sem.admin.ch/sem/en/home/themen/arbeit/nicht-eu_efta-angehoerige/studierende.html',
    },
    postStudyWork: {
      visaName: 'Job-Seeking Residence Permit',
      durationMinMonths: 6,
      durationMaxMonths: 6,
      eligibilitySummary: '6-month extension to find employment. Converts to work permit (B permit) once a job matching qualifications is secured.',
      sourceUrl: 'https://www.sem.admin.ch/sem/en/home/themen/arbeit.html',
    },
    prPathways: {
      summary: 'Permanent residence (C permit) typically after 10 years (5 years for nationals of certain countries). Swiss naturalization possible after 10 years of residence.',
      keyRequirements: [
        '10 years of continuous residence (years 8–18 count double)',
        'Integration into Swiss society',
        'No dependency on social assistance',
        'Knowledge of national language (German/French/Italian)',
      ],
      sourceUrl: 'https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/eu_efta/ausweis_c_eu_efta.html',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 10. SWEDEN
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'sweden',
    countryName: 'Sweden',
    countryCode: 'SE',
    officialPortalUrl: 'https://www.migrationsverket.se/English/Private-individuals/Studying-in-Sweden.html',
    lastVerifiedDate: '2026-06-15T00:00:00Z',
    verificationSource: 'Swedish Migration Agency (Migrationsverket)',
    verificationStatus: 'verified',
    studentVisa: {
      name: 'Residence Permit for Higher Education Studies',
      requirements: [
        'Acceptance at a Swedish higher education institution',
        'Payment of first installment of tuition fees',
        'Proof of sufficient funds (SEK 9,450/month)',
        'Valid passport',
        'Comprehensive health insurance',
      ],
      financialProof: 'SEK 9,450 per month for the planned period of study. Bank statements or scholarship letters.',
      sourceUrl: 'https://www.migrationsverket.se/English/Private-individuals/Studying-in-Sweden/Higher-education.html',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 'No limit',
      holidayRules: 'No distinction — unlimited hours at all times',
      conditions: [
        'No restrictions on working hours for students with a residence permit',
        'Must maintain full-time enrollment',
        'Self-employment also permitted',
      ],
      sourceUrl: 'https://www.migrationsverket.se/English/Private-individuals/Studying-in-Sweden/Higher-education.html',
    },
    postStudyWork: {
      visaName: 'Residence Permit for Job Seeking',
      durationMinMonths: 12,
      durationMaxMonths: 12,
      eligibilitySummary: '12-month permit to look for work or start a business. Must apply before current permit expires.',
      sourceUrl: 'https://www.migrationsverket.se/English/Private-individuals/Working-in-Sweden/Looking-for-work-after-studies.html',
    },
    prPathways: {
      summary: 'Permanent residence after 4 years on a work permit. Work permit requires a job with a salary of at least SEK 28,480/month (2025).',
      keyRequirements: [
        '4 years of work permit within 7-year period',
        'Employment with terms in line with Swedish standards',
        'Salary at least SEK 28,480/month',
        'Health and life insurance through employer',
      ],
      sourceUrl: 'https://www.migrationsverket.se/English/Private-individuals/Working-in-Sweden/Employed/Permanent-residence-permit.html',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 11. SINGAPORE
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'singapore',
    countryName: 'Singapore',
    countryCode: 'SG',
    officialPortalUrl: 'https://www.ica.gov.sg/pass/studentpass',
    lastVerifiedDate: '2026-06-15T00:00:00Z',
    verificationSource: 'Immigration & Checkpoints Authority (ICA) Singapore',
    verificationStatus: 'verified',
    studentVisa: {
      name: 'Student Pass (Student\'s Pass)',
      requirements: [
        'Acceptance at an approved educational institution in Singapore',
        'Institution submits Student\'s Pass application through SOLAR+',
        'Valid passport (6 months validity)',
        'Recent passport-sized photograph',
        'Proof of financial capability',
        'Local sponsor/guarantor (provided by institution)',
      ],
      financialProof: 'No fixed amount specified — institution verifies financial capacity during admission. Tuition fees and living costs must be demonstrable.',
      sourceUrl: 'https://www.ica.gov.sg/pass/studentpass',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 16,
      holidayRules: 'Full-time work permitted during official vacation breaks (institution must confirm)',
      conditions: [
        '16 hrs/week during term at approved institutions (NUS, NTU, SMU, SIT, SUTD, SUSS)',
        'Full-time during official school vacations',
        'Work at unapproved institutions requires a separate work pass',
        'Industrial attachment/internship as part of curriculum permitted',
      ],
      sourceUrl: 'https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-student',
    },
    postStudyWork: {
      visaName: 'Long-Term Visit Pass (LTVP) / Employment Pass',
      durationMinMonths: 12,
      durationMaxMonths: 12,
      eligibilitySummary: '1-year LTVP for job seeking. Must transition to Employment Pass (EP), S Pass, or Work Permit for continued employment. EP requires minimum salary of S$5,600 (2025).',
      sourceUrl: 'https://www.mom.gov.sg/passes-and-permits/employment-pass',
    },
    prPathways: {
      summary: 'Can apply for PR after working for 6+ months on a valid work pass. COMPASS framework scores EP applications on salary, qualifications, diversity, and skills.',
      keyRequirements: [
        'Employment on qualifying work pass (EP/S Pass)',
        'At least 6 months of employment in Singapore',
        'Evaluated on age, income, qualifications, family ties',
        'Graduates from Singapore universities have favorable consideration',
      ],
      sourceUrl: 'https://www.ica.gov.sg/PR/apply',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 12. JAPAN
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'japan',
    countryName: 'Japan',
    countryCode: 'JP',
    officialPortalUrl: 'https://www.studyinjapan.go.jp/en/',
    lastVerifiedDate: '2026-06-15T00:00:00Z',
    verificationSource: 'Japan Student Services Organization (JASSO) / Immigration Services Agency',
    verificationStatus: 'verified',
    studentVisa: {
      name: 'Student Visa (留学 — Ryūgaku)',
      requirements: [
        'Certificate of Eligibility (CoE) obtained by institution',
        'Acceptance at a Japanese educational institution',
        'Proof of financial support (approx. ¥2,000,000/year)',
        'Valid passport',
        'Application at Japanese embassy/consulate',
        'Recent photographs',
      ],
      financialProof: 'Approximately ¥2,000,000 (≈$13,500) per year for living expenses. Bank statements or sponsor\'s financial documents.',
      sourceUrl: 'https://www.mofa.go.jp/j_info/visit/visa/long/visa9.html',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 28,
      holidayRules: '8 hrs/day (approx. 40 hrs/week) during official long vacations',
      conditions: [
        '28 hrs/week during academic sessions (requires "Permission to Engage in Activity other than that Permitted under the Status of Residence")',
        'Up to 8 hrs/day during long school breaks',
        'Cannot work in entertainment/adult establishments',
        'Must apply for permission at immigration office or airport on arrival',
      ],
      sourceUrl: 'https://www.isa.go.jp/en/publications/materials/newimmiact_3_procedure_sisetsu.html',
    },
    postStudyWork: {
      visaName: 'Designated Activities Visa (Job Seeking)',
      durationMinMonths: 6,
      durationMaxMonths: 12,
      eligibilitySummary: 'Initially 6 months, extendable once to 12 months. Must actively seek employment related to studies. Converts to work visa (Engineer/Specialist in Humanities) upon job offer.',
      sourceUrl: 'https://www.isa.go.jp/en/publications/materials/nyukan_nyukan85.html',
    },
    prPathways: {
      summary: 'Permanent residence possible after 10 years of continuous residence (reducible to 1–3 years under Highly Skilled Professional point system if score ≥70–80 points).',
      keyRequirements: [
        '10 years continuous residence (standard), or',
        'Highly Skilled Professional (HSP) visa: 1 year at ≥80 points or 3 years at ≥70 points',
        'Good conduct and sufficient assets/income',
        'Guarantor in Japan',
      ],
      sourceUrl: 'https://www.isa.go.jp/en/publications/materials/nyukan_nyukan50.html',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 13. SOUTH KOREA
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'south-korea',
    countryName: 'South Korea',
    countryCode: 'KR',
    officialPortalUrl: 'https://www.studyinkorea.go.kr/',
    lastVerifiedDate: '2026-06-15T00:00:00Z',
    verificationSource: 'Korea Immigration Service / Study in Korea',
    verificationStatus: 'verified',
    studentVisa: {
      name: 'D-2 Student Visa',
      requirements: [
        'Acceptance letter from a Korean university',
        'Proof of financial ability (approx. $10,000/year)',
        'Valid passport',
        'Academic transcripts and diploma',
        'Health certificate',
        'Study plan',
      ],
      financialProof: 'Approximately US$10,000 per year or KRW equivalent in bank account. Scholarship confirmation accepted.',
      sourceUrl: 'https://www.immigration.go.kr/immigration_eng/1832/subview.do',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 20,
      holidayRules: 'Unlimited hours during official vacation periods',
      conditions: [
        '20 hrs/week after 6 months of study (D-2 visa holders)',
        'Unlimited hours during official vacations',
        'Must obtain part-time employment permit',
        'TOPIK level 3+ may be required depending on job type',
      ],
      sourceUrl: 'https://www.immigration.go.kr/immigration_eng/1832/subview.do',
    },
    postStudyWork: {
      visaName: 'D-10 Job Seeking Visa',
      durationMinMonths: 6,
      durationMaxMonths: 24,
      eligibilitySummary: 'Initially 6 months, extendable up to 2 years total. Allows part-time work while seeking full-time employment.',
      sourceUrl: 'https://www.immigration.go.kr/immigration_eng/1832/subview.do',
    },
    prPathways: {
      summary: 'F-5 permanent residence visa available after meeting specific criteria. Points-based system for skilled workers.',
      keyRequirements: [
        'Continuous stay on qualifying visa (typically 5 years)',
        'Meet income threshold',
        'Points-based evaluation: age, education, Korean language, income',
        'TOPIK level 5+ advantageous',
      ],
      sourceUrl: 'https://www.immigration.go.kr/immigration_eng/1832/subview.do',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 14. NEW ZEALAND
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'new-zealand',
    countryName: 'New Zealand',
    countryCode: 'NZ',
    officialPortalUrl: 'https://www.immigration.govt.nz/new-zealand-visas/visas/visa/full-fee-paying-student-visa',
    lastVerifiedDate: '2026-06-15T00:00:00Z',
    verificationSource: 'Immigration New Zealand (INZ)',
    verificationStatus: 'verified',
    studentVisa: {
      name: 'Fee Paying Student Visa',
      requirements: [
        'Offer of place from a New Zealand institution',
        'Evidence of tuition fees paid or financed',
        'Proof of funds for living costs (NZ$20,000/year)',
        'Valid passport',
        'Medical and X-ray certificates',
        'Return travel or funds for return',
      ],
      financialProof: 'NZ$20,000 per year for living costs, plus tuition fees and return airfare.',
      sourceUrl: 'https://www.immigration.govt.nz/new-zealand-visas/visas/visa/full-fee-paying-student-visa',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 20,
      holidayRules: 'Full-time work permitted during scheduled holidays',
      conditions: [
        '20 hrs/week during academic year',
        'Full-time during scheduled holidays',
        'PhD and research master\'s students can work full-time',
        'Must have valid student visa with work conditions',
      ],
      sourceUrl: 'https://www.immigration.govt.nz/new-zealand-visas/preparing-a-visa-application/working-in-nz/working-while-studying',
    },
    postStudyWork: {
      visaName: 'Post-Study Work Visa',
      durationMinMonths: 12,
      durationMaxMonths: 36,
      eligibilitySummary: '1–3 years depending on qualification level and location of study. Level 7 Bachelor\'s: 3 years. Open work visa — any employer.',
      sourceUrl: 'https://www.immigration.govt.nz/new-zealand-visas/visas/visa/post-study-work-visa',
    },
    prPathways: {
      summary: 'Skilled Migrant Category (SMC) resident visa is the main pathway. Points-based system considering age, qualifications, work experience in NZ, and job offer.',
      keyRequirements: [
        'Job offer or employment in NZ in a skilled occupation',
        'Minimum 6 points on SMC points scale (160 points to be selected)',
        'Age under 55',
        'Meet health and character requirements',
      ],
      sourceUrl: 'https://www.immigration.govt.nz/new-zealand-visas/visas/visa/skilled-migrant-category-resident-visa',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 15. ITALY
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'italy',
    countryName: 'Italy',
    countryCode: 'IT',
    officialPortalUrl: 'https://www.universitaly.it/',
    lastVerifiedDate: '2026-06-15T00:00:00Z',
    verificationSource: 'Italian Ministry of University and Research / Universitaly',
    verificationStatus: 'verified',
    studentVisa: {
      name: 'Type D Student Visa (Visto per Studio)',
      requirements: [
        'Pre-enrollment (preiscrizione) at Italian embassy or via Universitaly',
        'University admission confirmation',
        'Proof of financial means (€6,197/year minimum)',
        'Health insurance',
        'Valid passport',
        'Proof of accommodation in Italy',
      ],
      financialProof: '€6,197 per year minimum (updated annually). Scholarship, bank statement, or sponsor declaration.',
      sourceUrl: 'https://vistoperitalia.esteri.it/home/en',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 20,
      holidayRules: 'Annual limit of 1,040 hours applies',
      conditions: [
        '20 hrs/week (1,040 hours per year)',
        'No additional work permit required',
        'Internships as part of curriculum have separate rules',
        'Self-employment possible with additional authorization',
      ],
      sourceUrl: 'https://www.universitaly.it/',
    },
    postStudyWork: {
      visaName: 'Residence Permit for Job Seeking (Attesa Occupazione)',
      durationMinMonths: 12,
      durationMaxMonths: 12,
      eligibilitySummary: '12-month permit to seek employment or convert student permit to work permit. Must find employment within this period.',
      sourceUrl: 'https://www.integrazionemigranti.gov.it/',
    },
    prPathways: {
      summary: 'EU long-term residence permit after 5 years of legal residence. Student years count toward the requirement.',
      keyRequirements: [
        '5 years continuous legal residence in Italy',
        'Minimum income (approx. €6,197/year for single person)',
        'Pass Italian language test (A2 level)',
        'Suitable accommodation',
      ],
      sourceUrl: 'https://www.integrazionemigranti.gov.it/',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 16. FINLAND
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'finland',
    countryName: 'Finland',
    countryCode: 'FI',
    officialPortalUrl: 'https://migri.fi/en/studying-in-finland',
    lastVerifiedDate: '2026-06-01T00:00:00Z',
    verificationSource: 'Finnish Immigration Service (Migri)',
    verificationStatus: 'verified',
    studentVisa: {
      name: 'Residence Permit for Studies (Type B)',
      requirements: [
        'Admission to a Finnish higher education institution',
        'Proof of sufficient funds (€6,720/year or €560/month)',
        'Valid passport',
        'Health insurance (if studies < 2 years)',
        'Tuition fees paid (for non-EU/EEA)',
      ],
      financialProof: '€6,720 per year (€560/month). Bank statement or scholarship letter.',
      sourceUrl: 'https://migri.fi/en/studying-in-finland',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 30,
      holidayRules: 'Unlimited hours during official holiday periods',
      conditions: [
        '30 hrs/week during academic term (as of 2024 reform)',
        'Unlimited during official holidays',
        'Work related to studies: no hour limit',
        'Thesis-related work or compulsory internship: no limit',
      ],
      sourceUrl: 'https://migri.fi/en/working-while-studying',
    },
    postStudyWork: {
      visaName: 'Residence Permit for Job Seeking (A-permit)',
      durationMinMonths: 12,
      durationMaxMonths: 24,
      eligibilitySummary: 'Up to 2 years for graduates to find employment or start a business. A-type permit allows full-time work.',
      sourceUrl: 'https://migri.fi/en/looking-for-work-after-graduating',
    },
    prPathways: {
      summary: 'Permanent residence (P-permit) after 4 years of continuous A-type residence. Finland encourages international talent retention.',
      keyRequirements: [
        '4 years of continuous A-type residence permit',
        'Secure means of support',
        'No criminal record',
        'Finnish or Swedish language skills recommended',
      ],
      sourceUrl: 'https://migri.fi/en/permanent-residence-permit',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 17. DENMARK
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'denmark',
    countryName: 'Denmark',
    countryCode: 'DK',
    officialPortalUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study',
    lastVerifiedDate: '2026-06-01T00:00:00Z',
    verificationSource: 'Danish Agency for International Recruitment and Integration (SIRI)',
    verificationStatus: 'verified',
    studentVisa: {
      name: 'Residence Permit for Studies',
      requirements: [
        'Admission to an approved Danish educational institution',
        'Proof of sufficient funds (DKK 6,397/month)',
        'Valid passport',
        'Tuition fees paid or scholarship confirmation',
        'Health insurance for first two years',
      ],
      financialProof: 'DKK 6,397 per month for the entire study period. Bank statements required.',
      sourceUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 20,
      holidayRules: 'Full-time work permitted during June, July, and August',
      conditions: [
        '20 hrs/week during academic year',
        'Full-time during June–August',
        'Full-time work in December also permitted',
        'No separate work permit needed',
      ],
      sourceUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Study',
    },
    postStudyWork: {
      visaName: 'Establishment Card',
      durationMinMonths: 24,
      durationMaxMonths: 36,
      eligibilitySummary: 'Up to 3 years for master\'s/PhD graduates to seek employment or start a business. Must apply before student permit expires.',
      sourceUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Establishment-card',
    },
    prPathways: {
      summary: 'Permanent residence after 8 years of legal residence (reducible to 4 years with supplementary conditions). Points-based system.',
      keyRequirements: [
        'Full-time employment for 3.5 of past 4 years',
        'Pass Danish language test (PD3 or equivalent)',
        'Self-supporting with no public benefits',
        'No criminal record',
      ],
      sourceUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Permanent-residence-permit',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 18. NORWAY
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'norway',
    countryName: 'Norway',
    countryCode: 'NO',
    officialPortalUrl: 'https://www.udi.no/en/want-to-apply/studies/',
    lastVerifiedDate: '2026-06-01T00:00:00Z',
    verificationSource: 'Norwegian Directorate of Immigration (UDI)',
    verificationStatus: 'verified',
    studentVisa: {
      name: 'Student Residence Permit',
      requirements: [
        'Admission to a Norwegian educational institution',
        'Proof of sufficient funds (NOK 137,907/year for 2025)',
        'Valid passport',
        'Housing confirmation',
        'Full-time study plan',
      ],
      financialProof: 'NOK 137,907 for one academic year. Must be available in a Norwegian bank account in your name.',
      sourceUrl: 'https://www.udi.no/en/want-to-apply/studies/',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 20,
      holidayRules: 'Full-time work permitted during official holidays and semester breaks',
      conditions: [
        '20 hrs/week during academic year',
        'Full-time during official holidays',
        'Part-time work permit included in student residence permit',
        'Must not replace regular employment positions',
      ],
      sourceUrl: 'https://www.udi.no/en/want-to-apply/studies/',
    },
    postStudyWork: {
      visaName: 'Job Seeker Residence Permit',
      durationMinMonths: 12,
      durationMaxMonths: 12,
      eligibilitySummary: '12 months to find a relevant job. Must have completed a degree program. Full-time work permitted during the search period.',
      sourceUrl: 'https://www.udi.no/en/want-to-apply/work-immigration/',
    },
    prPathways: {
      summary: 'Permanent residence after 3 years of continuous legal residence with a work or study permit.',
      keyRequirements: [
        '3 years of continuous residence on qualifying permit',
        'Completed Norwegian language and social studies course (for some nationalities)',
        'No criminal record',
        'Self-supporting',
      ],
      sourceUrl: 'https://www.udi.no/en/want-to-apply/permanent-residence/',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 19. LUXEMBOURG
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'luxembourg',
    countryName: 'Luxembourg',
    countryCode: 'LU',
    officialPortalUrl: 'https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/etudiant.html',
    lastVerifiedDate: '2026-06-01T00:00:00Z',
    verificationSource: 'Luxembourg Government (Guichet.lu)',
    verificationStatus: 'pending_revalidation',
    studentVisa: {
      name: 'Student Residence Permit (Autorisation de séjour)',
      requirements: [
        'Enrollment certificate from a Luxembourg institution',
        'Proof of sufficient financial resources',
        'Valid passport',
        'Health insurance',
        'Proof of accommodation',
        'Clean criminal record',
      ],
      financialProof: 'Sufficient funds to cover living costs (approximately €1,200/month). Scholarship or bank statement.',
      sourceUrl: 'https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/etudiant.html',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 15,
      holidayRules: 'Full-time work permitted during official vacation periods',
      conditions: [
        '15 hrs/week during academic year',
        'Full-time during official vacation periods',
        'Must obtain work permit (occupational activity as a student)',
        'Work must not interfere with studies',
      ],
      sourceUrl: 'https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/etudiant.html',
    },
    postStudyWork: {
      visaName: 'Job-Seeking Residence Permit',
      durationMinMonths: 9,
      durationMaxMonths: 9,
      eligibilitySummary: '9-month permit for graduates to find employment. Must apply before student permit expires.',
      sourceUrl: 'https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/etudiant.html',
    },
    prPathways: {
      summary: 'Long-term resident status after 5 years of continuous legal residence.',
      keyRequirements: [
        '5 years of continuous legal residence',
        'Stable and regular income',
        'Health insurance',
        'Adequate housing',
      ],
      sourceUrl: 'https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/resident-longue-duree.html',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 20. MALAYSIA
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'malaysia',
    countryName: 'Malaysia',
    countryCode: 'MY',
    officialPortalUrl: 'https://educationmalaysia.gov.my/',
    lastVerifiedDate: '2026-06-01T00:00:00Z',
    verificationSource: 'Education Malaysia Global Services (EMGS)',
    verificationStatus: 'pending_revalidation',
    studentVisa: {
      name: 'Student Pass',
      requirements: [
        'Offer letter from a Malaysian institution approved by MQA',
        'Valid passport (minimum 18 months validity)',
        'Medical examination report',
        'Financial guarantee letter',
        'Academic transcripts and certificates',
        'Passport-sized photographs',
      ],
      financialProof: 'Institution-specific requirements. Generally must show ability to cover tuition and living costs.',
      sourceUrl: 'https://educationmalaysia.gov.my/',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 20,
      holidayRules: 'Full-time work permitted during semester breaks (minimum 7-day break)',
      conditions: [
        '20 hrs/week during semester',
        'Full-time during semester breaks of 7+ days',
        'Only in approved sectors (restaurant, hotel, petrol station, mini-market)',
        'Must obtain approval from Immigration Department',
      ],
      sourceUrl: 'https://www.imi.gov.my/',
    },
    postStudyWork: {
      visaName: null,
      durationMinMonths: null,
      durationMaxMonths: null,
      eligibilitySummary: 'No dedicated post-study work visa. Graduates must secure employment and obtain an Employment Pass or apply for the Talent Pass (if eligible).',
      sourceUrl: null,
    },
    prPathways: {
      summary: 'Permanent residence generally difficult for foreign graduates. MyPR application available after extended legal residence with qualifying employment.',
      keyRequirements: [
        'Extended period of legal residence and employment',
        'Contribution to Malaysian economy',
        'Application through Immigration Department',
        'Processing can take several years',
      ],
      sourceUrl: 'https://www.imi.gov.my/',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 21. UNITED ARAB EMIRATES
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'uae',
    countryName: 'United Arab Emirates',
    countryCode: 'AE',
    officialPortalUrl: 'https://u.ae/en/information-and-services/education/higher-education',
    lastVerifiedDate: '2026-06-01T00:00:00Z',
    verificationSource: 'UAE Government Portal (u.ae)',
    verificationStatus: 'pending_revalidation',
    studentVisa: {
      name: 'Student Residence Visa',
      requirements: [
        'Admission letter from a UAE-accredited institution',
        'Valid passport (minimum 6 months validity)',
        'Passport-sized photographs',
        'Medical fitness test',
        'Emirates ID registration',
        'Health insurance',
      ],
      financialProof: 'Institution-specific. Must demonstrate ability to cover tuition and living expenses.',
      sourceUrl: 'https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visa/student-visa',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 20,
      holidayRules: 'Varies by institution and emirate',
      conditions: [
        'Part-time work permit available (hours vary by emirate)',
        'Must obtain permit from Ministry of Human Resources',
        'On-campus employment often facilitated by institution',
        'Internships as part of curriculum are permitted',
      ],
      sourceUrl: 'https://u.ae/en/information-and-services/education/higher-education',
    },
    postStudyWork: {
      visaName: 'Job Exploration Visa / Golden Visa (for top graduates)',
      durationMinMonths: 6,
      durationMaxMonths: 120,
      eligibilitySummary: 'Top graduates (GPA 3.8+) may qualify for 10-year Golden Visa. Others can apply for employment visa with employer sponsorship.',
      sourceUrl: 'https://u.ae/en/information-and-services/visa-and-emirates-id/golden-visa',
    },
    prPathways: {
      summary: 'No traditional permanent residency. Golden Visa (5 or 10 years) is the closest equivalent, available to investors, skilled workers, and outstanding graduates.',
      keyRequirements: [
        'Golden Visa: exceptional academic achievement (GPA 3.8+) or employer nomination',
        'Standard employment visa requires employer sponsorship',
        'No path to citizenship for most foreigners',
        'Long-term visas (5-10 years) available for qualified individuals',
      ],
      sourceUrl: 'https://u.ae/en/information-and-services/visa-and-emirates-id/golden-visa',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 22. RUSSIA
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'russia',
    countryName: 'Russia',
    countryCode: 'RU',
    officialPortalUrl: 'https://studyinrussia.ru/en/',
    lastVerifiedDate: '2026-06-01T00:00:00Z',
    verificationSource: 'Study in Russia portal (Ministry of Education)',
    verificationStatus: 'pending_revalidation',
    studentVisa: {
      name: 'Student Visa (учебная виза)',
      requirements: [
        'Invitation letter from the educational institution',
        'Valid passport',
        'Medical certificate (HIV test required)',
        'Health insurance',
        'Application form and photographs',
        'Proof of financial support',
      ],
      financialProof: 'No fixed minimum. Must demonstrate ability to cover tuition and living costs.',
      sourceUrl: 'https://studyinrussia.ru/en/',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 20,
      holidayRules: 'Full-time work permitted during official vacation periods',
      conditions: [
        'Full-time students can work without a work permit at their university',
        'Off-campus work requires a work permit (relaxed rules since 2020)',
        'Full-time work during holidays',
        'Work at the educational institution: no restrictions',
      ],
      sourceUrl: 'https://studyinrussia.ru/en/',
    },
    postStudyWork: {
      visaName: null,
      durationMinMonths: null,
      durationMaxMonths: null,
      eligibilitySummary: 'No dedicated post-study work visa. Graduates must obtain a work visa through employer sponsorship or apply for a temporary residence permit.',
      sourceUrl: null,
    },
    prPathways: {
      summary: 'Temporary residence permit (RVP) available, leading to permanent residence (VNZh) after 1 year. Citizenship possible after 5 years of permanent residence.',
      keyRequirements: [
        'Temporary residence permit: annual quota applies',
        'Permanent residence after 1 year on temporary permit',
        'Knowledge of Russian language, history, and law',
        'Proof of income and accommodation',
      ],
      sourceUrl: 'https://studyinrussia.ru/en/',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 23. CHINA
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'china',
    countryName: 'China',
    countryCode: 'CN',
    officialPortalUrl: 'http://www.campuschina.org/en/',
    lastVerifiedDate: '2026-06-01T00:00:00Z',
    verificationSource: 'China Scholarship Council / Campus China',
    verificationStatus: 'pending_revalidation',
    studentVisa: {
      name: 'X1 Student Visa (long-term) / X2 (short-term)',
      requirements: [
        'Admission notice from a Chinese institution',
        'JW201 or JW202 form (issued by institution)',
        'Valid passport',
        'Foreigner Physical Examination Form',
        'Passport-sized photographs',
        'Application at Chinese embassy/consulate',
      ],
      financialProof: 'No fixed minimum specified by immigration. University admission typically requires proof of ability to pay tuition and living costs.',
      sourceUrl: 'http://www.campuschina.org/en/',
    },
    workDuringStudies: {
      allowedHoursPerWeek: null,
      holidayRules: null,
      eligibilitySummary: 'Part-time work for international students is generally restricted. On-campus work or university-approved internships may be permitted with special authorization. Policies vary by institution and city.',
      conditions: [
        'Part-time work generally not permitted on student visa',
        'Internships as part of curriculum may be approved',
        'On-campus work (teaching assistant, lab assistant) may be available',
        'Must obtain permission from university and local authorities',
      ],
      sourceUrl: 'http://www.campuschina.org/en/',
    },
    postStudyWork: {
      visaName: null,
      durationMinMonths: null,
      durationMaxMonths: null,
      eligibilitySummary: 'No dedicated post-study work visa. Graduates must obtain a Z-visa (work visa) through employer sponsorship. Some cities offer pilot programs for graduates of Chinese universities.',
      sourceUrl: null,
    },
    prPathways: {
      summary: 'Chinese permanent residence (Green Card) is highly selective. Typically requires 4+ years of continuous employment with minimum salary threshold, or significant investment/contribution.',
      keyRequirements: [
        '4 years continuous employment in China with clean tax record',
        'Annual salary/tax above specified threshold',
        'Stable residence',
        'Chinese Permanent Residence Card application',
      ],
      sourceUrl: 'https://www.nia.gov.cn/',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 24. BELGIUM
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'belgium',
    countryName: 'Belgium',
    countryCode: 'BE',
    officialPortalUrl: 'https://www.studyinbelgium.be/',
    lastVerifiedDate: '2026-06-01T00:00:00Z',
    verificationSource: 'Study in Belgium / Belgian Immigration Office',
    verificationStatus: 'pending_revalidation',
    studentVisa: {
      name: 'Type D Student Visa + Residence Permit',
      requirements: [
        'Enrollment certificate from a Belgian higher education institution',
        'Proof of sufficient financial means (€727/month)',
        'Valid passport',
        'Medical certificate',
        'Clean criminal record certificate',
        'Proof of accommodation',
      ],
      financialProof: '€727/month (updated annually). Scholarship, blocked account, or guarantor declaration.',
      sourceUrl: 'https://www.studyinbelgium.be/',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 20,
      holidayRules: 'Full-time work permitted during official school holidays',
      conditions: [
        '20 hrs/week during academic year',
        'Full-time during school holidays (July–September, Christmas, Easter)',
        'No separate work permit needed for up to 20 hrs/week',
        'Must maintain full-time enrollment status',
      ],
      sourceUrl: 'https://www.studyinbelgium.be/',
    },
    postStudyWork: {
      visaName: 'Job-Seeking Residence Permit',
      durationMinMonths: 12,
      durationMaxMonths: 12,
      eligibilitySummary: '12-month permit to find employment. Must have completed studies in Belgium. Can work full-time during this period.',
      sourceUrl: 'https://dofi.ibz.be/en',
    },
    prPathways: {
      summary: 'Long-term resident status after 5 years of legal residence in Belgium.',
      keyRequirements: [
        '5 years of continuous legal residence',
        'Stable and regular income',
        'Health insurance coverage',
        'Integration efforts (language knowledge)',
      ],
      sourceUrl: 'https://dofi.ibz.be/en',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 25. POLAND
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'poland',
    countryName: 'Poland',
    countryCode: 'PL',
    officialPortalUrl: 'https://www.studyinpoland.pl/',
    lastVerifiedDate: '2026-06-01T00:00:00Z',
    verificationSource: 'Study in Poland / Polish Immigration',
    verificationStatus: 'pending_revalidation',
    studentVisa: {
      name: 'National Visa D + Temporary Residence Permit',
      requirements: [
        'Confirmation of admission to a Polish institution',
        'Proof of sufficient funds (PLN 776/month)',
        'Valid passport',
        'Health insurance',
        'Proof of accommodation',
        'Tuition fee payment confirmation',
      ],
      financialProof: 'PLN 776/month (updated annually). Bank statements or scholarship letter.',
      sourceUrl: 'https://www.studyinpoland.pl/',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 'No limit',
      holidayRules: 'No distinction — students with temporary residence for studies can work without a work permit',
      conditions: [
        'No work permit required for full-time students at Polish institutions',
        'No hourly restrictions',
        'Must maintain student status',
        'Both on-campus and off-campus work permitted',
      ],
      sourceUrl: 'https://www.studyinpoland.pl/',
    },
    postStudyWork: {
      visaName: 'Temporary Residence Permit for Job Seeking',
      durationMinMonths: 9,
      durationMaxMonths: 9,
      eligibilitySummary: '9-month permit to find employment after graduation from a Polish institution.',
      sourceUrl: 'https://www.studyinpoland.pl/',
    },
    prPathways: {
      summary: 'Permanent residence after 5 years of continuous residence on temporary permit, or 10 years total legal stay.',
      keyRequirements: [
        '5 years on temporary residence permit (or 10 years total stay)',
        'Stable and regular income',
        'Health insurance',
        'Polish language knowledge (B1 certificate)',
      ],
      sourceUrl: 'https://www.studyinpoland.pl/',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 26. AUSTRIA
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'austria',
    countryName: 'Austria',
    countryCode: 'AT',
    officialPortalUrl: 'https://www.studyinaustria.at/',
    lastVerifiedDate: '2026-06-01T00:00:00Z',
    verificationSource: 'Study in Austria / OeAD',
    verificationStatus: 'pending_revalidation',
    studentVisa: {
      name: 'Residence Permit — Student (Aufenthaltsbewilligung Studierende)',
      requirements: [
        'Admission to an Austrian university or higher education institution',
        'Proof of sufficient financial means (€1,217.96/month for students under 24)',
        'Health insurance covering all risks in Austria',
        'Valid passport',
        'Proof of accommodation',
        'Clean criminal record',
      ],
      financialProof: '€1,217.96/month for students under 24, €1,921.46/month for students over 24. Bank statements or scholarship.',
      sourceUrl: 'https://www.studyinaustria.at/',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 20,
      holidayRules: 'Same hourly limits apply year-round',
      conditions: [
        '20 hrs/week for bachelor\'s students',
        '20 hrs/week for master\'s/PhD students',
        'No separate work permit required',
        'Must maintain enrollment and academic progress',
      ],
      sourceUrl: 'https://www.studyinaustria.at/',
    },
    postStudyWork: {
      visaName: 'Red-White-Red Card (Job-Seeking)',
      durationMinMonths: 12,
      durationMaxMonths: 12,
      eligibilitySummary: '12-month job-seeking permit after graduating in Austria. Can work up to 20 hrs/week during search. Converts to Red-White-Red Card upon qualifying employment.',
      sourceUrl: 'https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/red-white-red-card/',
    },
    prPathways: {
      summary: 'Permanent residence (Daueraufenthalt-EU) after 5 years of continuous residence. Red-White-Red Card Plus provides open labor market access.',
      keyRequirements: [
        '5 years continuous legal residence',
        'Stable and regular income',
        'Health insurance',
        'German language skills (B1 level) or integration agreement',
      ],
      sourceUrl: 'https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 27. PORTUGAL
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'portugal',
    countryName: 'Portugal',
    countryCode: 'PT',
    officialPortalUrl: 'https://www.study-research.pt/',
    lastVerifiedDate: '2026-06-01T00:00:00Z',
    verificationSource: 'Study & Research in Portugal / SEF',
    verificationStatus: 'pending_revalidation',
    studentVisa: {
      name: 'Residence Visa for Study (D4)',
      requirements: [
        'Acceptance letter from a Portuguese institution',
        'Proof of financial means (Portuguese minimum wage/month)',
        'Valid passport',
        'Health insurance or access to Portuguese NHS',
        'Clean criminal record',
        'Proof of accommodation',
      ],
      financialProof: 'Portuguese minimum wage per month (€820 as of 2025). Bank statements, scholarship, or sponsor letter.',
      sourceUrl: 'https://www.study-research.pt/',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 20,
      holidayRules: 'Full-time work permitted during vacation periods',
      conditions: [
        'Part-time work (up to 20 hrs/week) during academic year',
        'Full-time during official vacation periods',
        'No separate work permit needed for students',
        'Self-employment possible',
      ],
      sourceUrl: 'https://www.study-research.pt/',
    },
    postStudyWork: {
      visaName: 'Residence Permit for Job Seeking',
      durationMinMonths: 12,
      durationMaxMonths: 12,
      eligibilitySummary: '12-month permit for graduates to seek employment or start a business in Portugal.',
      sourceUrl: 'https://www.study-research.pt/',
    },
    prPathways: {
      summary: 'Permanent residence after 5 years of legal residence. Portugal also offers favorable citizenship after 5 years.',
      keyRequirements: [
        '5 years of legal residence',
        'Sufficient income',
        'Basic knowledge of Portuguese (A2 level)',
        'No serious criminal record',
        'Citizenship possible after 5 years (among the fastest in EU)',
      ],
      sourceUrl: 'https://www.sef.pt/',
    },
    disclaimer: DISCLAIMER,
  },

  // ═══════════════════════════════════════════════
  // 28. SPAIN
  // ═══════════════════════════════════════════════
  {
    countrySlug: 'spain',
    countryName: 'Spain',
    countryCode: 'ES',
    officialPortalUrl: 'https://www.exteriores.gob.es/en/ServiciosAlCiudadano/Paginas/Estudiar.aspx',
    lastVerifiedDate: '2026-06-01T00:00:00Z',
    verificationSource: 'Spanish Ministry of Foreign Affairs',
    verificationStatus: 'pending_revalidation',
    studentVisa: {
      name: 'Student Visa (Visado de Estudios)',
      requirements: [
        'Acceptance letter from a Spanish educational institution',
        'Proof of financial means (100% IPREM monthly — approx. €600/month)',
        'Valid passport',
        'Health insurance with full coverage in Spain',
        'Clean criminal record',
        'Medical certificate',
      ],
      financialProof: '100% of the IPREM (approximately €600/month as of 2025). Bank statements or scholarship letter.',
      sourceUrl: 'https://www.exteriores.gob.es/en/ServiciosAlCiudadano/Paginas/Estudiar.aspx',
    },
    workDuringStudies: {
      allowedHoursPerWeek: 20,
      holidayRules: 'Same restrictions apply year-round',
      conditions: [
        'Up to 20 hrs/week with separate work authorization',
        'Work must not interfere with studies',
        'Employer must apply for work authorization',
        'Full-time internships permitted if part of the study program',
      ],
      sourceUrl: 'https://www.exteriores.gob.es/en/ServiciosAlCiudadano/Paginas/Estudiar.aspx',
    },
    postStudyWork: {
      visaName: 'Residence Permit for Job Seeking or Entrepreneurship',
      durationMinMonths: 12,
      durationMaxMonths: 12,
      eligibilitySummary: '12-month permit for graduates to seek employment or start a business. Can be converted to work or self-employment permit.',
      sourceUrl: 'https://www.exteriores.gob.es/en/ServiciosAlCiudadano/Paginas/Estudiar.aspx',
    },
    prPathways: {
      summary: 'Permanent residence after 5 years of legal and continuous residence. Student years count fully toward this requirement.',
      keyRequirements: [
        '5 years of continuous legal residence',
        'No criminal record',
        'Sufficient financial means',
        'Health insurance',
      ],
      sourceUrl: 'https://www.exteriores.gob.es/en/ServiciosAlCiudadano/Paginas/Estudiar.aspx',
    },
    disclaimer: DISCLAIMER,
  },
];

export default IMMIGRATION_DATA;
