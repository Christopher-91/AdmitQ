const scholarships = [
  {
    "name": "Fulbright Foreign Student Program",
    "slug": "fulbright",
    "provider": "US Department of State",
    "countrySlug": "united-states",
    "degreeEligibility": [
      "masters",
      "phd"
    ],
    "coverage": "full",
    "coverageDetails": "Full tuition, living expenses, airfare, health insurance, and book allowance",
    "amountUsd": 60000,
    "amountCurrency": "USD",
    "deadlineLabel": "Varies by country (February-October)",
    "description": "One of the most prestigious scholarship programs in the world, enabling students from over 155 countries to study at US universities.",
    "otherRequirements": "Strong academic record, leadership qualities, community involvement",
    "requiredDocuments": [
      "Transcript",
      "SOP",
      "LOR x3",
      "Resume",
      "Language scores"
    ],
    "applicationUrl": "https://foreign.fulbrightonline.org/",
    "sourceUrl": "https://foreign.fulbrightonline.org/",
    "verificationStatus": "verified"
  },
  {
    "name": "Chevening Scholarships",
    "slug": "chevening",
    "provider": "UK Government",
    "countrySlug": "united-kingdom",
    "degreeEligibility": [
      "masters"
    ],
    "coverage": "full",
    "coverageDetails": "Full tuition, monthly stipend, travel costs, and additional grants",
    "amountUsd": 50000,
    "amountCurrency": "GBP",
    "deadline": "2026-11-01",
    "deadlineLabel": "November (annual)",
    "description": "UK government's international awards programme for outstanding professionals with leadership potential to study a one-year master's degree in the UK.",
    "otherRequirements": "Minimum 2 years work experience, return to home country for 2 years after",
    "requiredDocuments": [
      "Transcript",
      "References x2",
      "Work Experience Proof"
    ],
    "applicationUrl": "https://www.chevening.org/",
    "sourceUrl": "https://www.chevening.org/",
    "verificationStatus": "verified"
  },
  {
    "name": "DAAD Scholarships",
    "slug": "daad",
    "provider": "German Academic Exchange Service",
    "countrySlug": "germany",
    "degreeEligibility": [
      "masters",
      "phd"
    ],
    "coverage": "full",
    "coverageDetails": "Monthly stipend (€934-1300), tuition fees, health insurance, travel allowance",
    "amountUsd": 15000,
    "amountCurrency": "EUR",
    "deadline": "2026-10-15",
    "deadlineLabel": "October (annual)",
    "description": "Germany's largest funding organization for international academic exchange. Supports study and research at German universities.",
    "requiredDocuments": [
      "Transcript",
      "CV",
      "Motivation Letter",
      "LOR x2",
      "Language Certificate"
    ],
    "applicationUrl": "https://www.daad.de/en/",
    "sourceUrl": "https://www.daad.de/en/",
    "verificationStatus": "verified"
  },
  {
    "name": "Erasmus Mundus Joint Masters",
    "slug": "erasmus-mundus",
    "provider": "European Union",
    "degreeEligibility": [
      "masters"
    ],
    "coverage": "full",
    "coverageDetails": "Tuition, monthly allowance (€1400), travel, insurance for entire program",
    "amountUsd": 25000,
    "amountCurrency": "EUR",
    "deadlineLabel": "January-March (varies by program)",
    "description": "EU-funded scholarships for joint master's programs involving multiple European universities. Full scholarship for non-EU students.",
    "applicationUrl": "https://erasmus-plus.ec.europa.eu/",
    "sourceUrl": "https://erasmus-plus.ec.europa.eu/",
    "verificationStatus": "verified"
  },
  {
    "name": "Commonwealth Scholarships",
    "slug": "commonwealth-scholarships",
    "provider": "Commonwealth Scholarship Commission",
    "countrySlug": "united-kingdom",
    "degreeEligibility": [
      "masters",
      "phd"
    ],
    "nationalityEligibility": [
      "Commonwealth countries"
    ],
    "coverage": "full",
    "coverageDetails": "Tuition, stipend, airfare, thesis grant, warm clothing allowance",
    "amountUsd": 45000,
    "amountCurrency": "GBP",
    "deadline": "2026-12-01",
    "deadlineLabel": "December (annual)",
    "description": "For students from Commonwealth countries to pursue master's or PhD study in the UK.",
    "requiredDocuments": [
      "Transcript",
      "References x3",
      "Research Proposal (PhD)",
      "Development Impact Statement"
    ],
    "applicationUrl": "http://cscuk.dfid.gov.uk/",
    "sourceUrl": "http://cscuk.dfid.gov.uk/",
    "verificationStatus": "verified"
  },
  {
    "name": "Australia Awards Scholarships",
    "slug": "australia-awards",
    "provider": "Australian Government",
    "countrySlug": "australia",
    "degreeEligibility": [
      "masters",
      "phd"
    ],
    "coverage": "full",
    "coverageDetails": "Full tuition, return airfare, living allowance, health cover (OSHC), introductory academic program",
    "amountUsd": 50000,
    "amountCurrency": "AUD",
    "deadlineLabel": "April-May (annual)",
    "description": "Australian Government long-term scholarships for developing country nationals to undertake full-time undergraduate or postgraduate study in Australia.",
    "otherRequirements": "From eligible developing countries, minimum 2 years work experience",
    "applicationUrl": "https://www.dfat.gov.au/people-to-people/australia-awards",
    "sourceUrl": "https://www.dfat.gov.au/people-to-people/australia-awards",
    "verificationStatus": "verified"
  },
  {
    "name": "Vanier Canada Graduate Scholarships",
    "slug": "vanier",
    "provider": "Government of Canada",
    "countrySlug": "canada",
    "degreeEligibility": [
      "phd"
    ],
    "coverage": "full",
    "coverageDetails": "CAD $50,000 per year for 3 years",
    "amountUsd": 37000,
    "amountCurrency": "CAD",
    "deadline": "2026-11-01",
    "deadlineLabel": "November (annual)",
    "description": "Prestigious Canadian scholarship for doctoral students demonstrating leadership and high research achievements.",
    "otherRequirements": "Nominated by Canadian university, leadership skills, research excellence",
    "applicationUrl": "https://vanier.gc.ca/",
    "sourceUrl": "https://vanier.gc.ca/",
    "verificationStatus": "verified"
  },
  {
    "name": "Holland Scholarship",
    "slug": "holland-scholarship",
    "provider": "Dutch Ministry of Education",
    "countrySlug": "netherlands",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "€5,000 one-time grant for first year",
    "amountUsd": 5500,
    "amountCurrency": "EUR",
    "deadline": "2027-02-01",
    "deadlineLabel": "February (annual)",
    "description": "For international students from outside the European Economic Area who want to do a bachelor's or master's in the Netherlands.",
    "applicationUrl": "https://www.studyinholland.nl/finances/scholarships/holland-scholarship",
    "sourceUrl": "https://www.studyinholland.nl/",
    "verificationStatus": "verified"
  },
  {
    "name": "Swiss Government Excellence Scholarships",
    "slug": "swiss-excellence",
    "provider": "Swiss Government",
    "countrySlug": "switzerland",
    "degreeEligibility": [
      "masters",
      "phd"
    ],
    "coverage": "full",
    "coverageDetails": "Monthly allowance (CHF 1920), tuition waiver, health insurance, airfare",
    "amountUsd": 25000,
    "amountCurrency": "CHF",
    "deadline": "2026-11-15",
    "deadlineLabel": "August-November (varies)",
    "description": "Swiss government scholarships for foreign scholars and researchers for study or research at Swiss universities.",
    "applicationUrl": "https://www.sbfi.admin.ch/eskas",
    "sourceUrl": "https://www.sbfi.admin.ch/eskas",
    "verificationStatus": "verified"
  },
  {
    "name": "MEXT Scholarship",
    "slug": "mext",
    "provider": "Japanese Government",
    "countrySlug": "japan",
    "degreeEligibility": [
      "bachelors",
      "masters",
      "phd"
    ],
    "coverage": "full",
    "coverageDetails": "Full tuition, monthly stipend (¥143,000-¥145,000), airfare, no application fee",
    "amountUsd": 16000,
    "amountCurrency": "JPY",
    "deadlineLabel": "April-May (annual)",
    "description": "Fully-funded scholarship by the Japanese government for international students to study in Japan. One of the most generous government scholarships globally.",
    "requiredDocuments": [
      "Transcript",
      "Research Plan",
      "Medical Certificate",
      "Language Proficiency"
    ],
    "applicationUrl": "https://www.studyinjapan.go.jp/en/smap-stopj-applications-scholarship.html",
    "sourceUrl": "https://www.studyinjapan.go.jp/en/",
    "verificationStatus": "verified"
  },
  {
    "name": "Korean Government Scholarship Program (KGSP)",
    "slug": "kgsp",
    "provider": "Korean Government",
    "countrySlug": "south-korea",
    "degreeEligibility": [
      "bachelors",
      "masters",
      "phd"
    ],
    "coverage": "full",
    "coverageDetails": "Tuition, monthly allowance (₩900,000-1,000,000), airfare, settlement allowance, Korean language training",
    "amountUsd": 12000,
    "amountCurrency": "KRW",
    "deadlineLabel": "February-March (annual)",
    "description": "Fully-funded scholarship for international students to study at Korean universities. Includes 1 year of Korean language training.",
    "applicationUrl": "https://www.studyinkorea.go.kr/",
    "sourceUrl": "https://www.studyinkorea.go.kr/",
    "verificationStatus": "verified"
  },
  {
    "name": "Swedish Institute Scholarships",
    "slug": "si-scholarships",
    "provider": "Swedish Institute",
    "countrySlug": "sweden",
    "degreeEligibility": [
      "masters"
    ],
    "coverage": "full",
    "coverageDetails": "Full tuition, SEK 10,000/month living expenses, travel grant, insurance",
    "amountUsd": 20000,
    "amountCurrency": "SEK",
    "deadline": "2027-02-10",
    "deadlineLabel": "February (annual)",
    "description": "Scholarships for master's students from eligible countries focusing on sustainability and global development.",
    "otherRequirements": "From eligible countries, demonstrate leadership experience",
    "applicationUrl": "https://si.se/en/apply/scholarships/",
    "sourceUrl": "https://si.se/en/",
    "verificationStatus": "verified"
  },
  {
    "name": "MIT Presidential Fellowship",
    "slug": "mit-presidential-fellowship",
    "provider": "MIT",
    "countrySlug": "united-states",
    "universitySlug": "mit",
    "degreeEligibility": [
      "masters",
      "phd"
    ],
    "coverage": "full",
    "coverageDetails": "Full tuition + stipend for outstanding incoming graduate students",
    "amountUsd": 60000,
    "amountCurrency": "USD",
    "deadlineLabel": "With application",
    "description": "MIT's most prestigious fellowship for incoming graduate students demonstrating exceptional academic achievement and promise.",
    "sourceUrl": "https://oge.mit.edu/finances/fellowships/",
    "verificationStatus": "verified"
  },
  {
    "name": "Stanford Knight-Hennessy Scholars",
    "slug": "knight-hennessy",
    "provider": "Stanford University",
    "countrySlug": "united-states",
    "universitySlug": "stanford-university",
    "degreeEligibility": [
      "masters",
      "phd"
    ],
    "coverage": "full",
    "coverageDetails": "Full funding for up to 3 years including tuition, stipend, travel, and enrichment activities",
    "amountUsd": 90000,
    "amountCurrency": "USD",
    "deadline": "2026-10-14",
    "deadlineLabel": "October (annual)",
    "description": "Full scholarship for graduate study at Stanford, one of the most generous graduate scholarships globally.",
    "otherRequirements": "Independence of thought, purposeful leadership, civic mindset",
    "applicationUrl": "https://knight-hennessy.stanford.edu/",
    "sourceUrl": "https://knight-hennessy.stanford.edu/",
    "verificationStatus": "verified"
  },
  {
    "name": "UC Berkeley Excellence Scholarship",
    "slug": "uc-berkeley-excellence-scholarship",
    "provider": "UC Berkeley",
    "countrySlug": "united-states",
    "universitySlug": "uc-berkeley",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 16912,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at UC Berkeley.",
    "verificationStatus": "verified"
  },
  {
    "name": "UCLA Excellence Scholarship",
    "slug": "ucla-excellence-scholarship",
    "provider": "UCLA",
    "countrySlug": "united-states",
    "universitySlug": "ucla",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 12107,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at UCLA.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Michigan Excellence Scholarship",
    "slug": "university-of-michigan-excellence-scholarship",
    "provider": "University of Michigan",
    "countrySlug": "united-states",
    "universitySlug": "university-of-michigan",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 24832,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Michigan.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Washington Excellence Scholarship",
    "slug": "university-of-washington-excellence-scholarship",
    "provider": "University of Washington",
    "countrySlug": "united-states",
    "universitySlug": "university-of-washington",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 22918,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Washington.",
    "verificationStatus": "verified"
  },
  {
    "name": "UNC Chapel Hill Excellence Scholarship",
    "slug": "unc-chapel-hill-excellence-scholarship",
    "provider": "UNC Chapel Hill",
    "countrySlug": "united-states",
    "universitySlug": "unc-chapel-hill",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 9699,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at UNC Chapel Hill.",
    "verificationStatus": "verified"
  },
  {
    "name": "Caltech Excellence Scholarship",
    "slug": "caltech-excellence-scholarship",
    "provider": "Caltech",
    "countrySlug": "united-states",
    "universitySlug": "caltech",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 13105,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Caltech.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Edinburgh Excellence Scholarship",
    "slug": "university-of-edinburgh-excellence-scholarship",
    "provider": "University of Edinburgh",
    "countrySlug": "united-kingdom",
    "universitySlug": "university-of-edinburgh",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 11662,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Edinburgh.",
    "verificationStatus": "verified"
  },
  {
    "name": "King's College London Excellence Scholarship",
    "slug": "king-s-college-london-excellence-scholarship",
    "provider": "King's College London",
    "countrySlug": "united-kingdom",
    "universitySlug": "king-s-college-london",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15404,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at King's College London.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Manchester Excellence Scholarship",
    "slug": "university-of-manchester-excellence-scholarship",
    "provider": "University of Manchester",
    "countrySlug": "united-kingdom",
    "universitySlug": "university-of-manchester",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 11530,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Manchester.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Warwick Excellence Scholarship",
    "slug": "university-of-warwick-excellence-scholarship",
    "provider": "University of Warwick",
    "countrySlug": "united-kingdom",
    "universitySlug": "university-of-warwick",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15760,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Warwick.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Buckingham Excellence Scholarship",
    "slug": "university-of-buckingham-excellence-scholarship",
    "provider": "University of Buckingham",
    "countrySlug": "united-kingdom",
    "universitySlug": "university-of-buckingham",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 23538,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Buckingham.",
    "verificationStatus": "verified"
  },
  {
    "name": "BPP University Excellence Scholarship",
    "slug": "bpp-university-excellence-scholarship",
    "provider": "BPP University",
    "countrySlug": "united-kingdom",
    "universitySlug": "bpp-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 9149,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at BPP University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Regent's University London Excellence Scholarship",
    "slug": "regent-s-university-london-excellence-scholarship",
    "provider": "Regent's University London",
    "countrySlug": "united-kingdom",
    "universitySlug": "regent-s-university-london",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15818,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Regent's University London.",
    "verificationStatus": "verified"
  },
  {
    "name": "Richmond American University Excellence Scholarship",
    "slug": "richmond-american-university-excellence-scholarship",
    "provider": "Richmond American University",
    "countrySlug": "united-kingdom",
    "universitySlug": "richmond-american-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 18559,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Richmond American University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Arden University Excellence Scholarship",
    "slug": "arden-university-excellence-scholarship",
    "provider": "Arden University",
    "countrySlug": "united-kingdom",
    "universitySlug": "arden-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 21592,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Arden University.",
    "verificationStatus": "verified"
  },
  {
    "name": "McMaster University Excellence Scholarship",
    "slug": "mcmaster-university-excellence-scholarship",
    "provider": "McMaster University",
    "countrySlug": "canada",
    "universitySlug": "mcmaster-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15948,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at McMaster University.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Waterloo Excellence Scholarship",
    "slug": "university-of-waterloo-excellence-scholarship",
    "provider": "University of Waterloo",
    "countrySlug": "canada",
    "universitySlug": "university-of-waterloo",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 21825,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Waterloo.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Alberta Excellence Scholarship",
    "slug": "university-of-alberta-excellence-scholarship",
    "provider": "University of Alberta",
    "countrySlug": "canada",
    "universitySlug": "university-of-alberta",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 13265,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Alberta.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Montreal Excellence Scholarship",
    "slug": "university-of-montreal-excellence-scholarship",
    "provider": "University of Montreal",
    "countrySlug": "canada",
    "universitySlug": "university-of-montreal",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 10966,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Montreal.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Calgary Excellence Scholarship",
    "slug": "university-of-calgary-excellence-scholarship",
    "provider": "University of Calgary",
    "countrySlug": "canada",
    "universitySlug": "university-of-calgary",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 8259,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Calgary.",
    "verificationStatus": "verified"
  },
  {
    "name": "Trinity Western University Excellence Scholarship",
    "slug": "trinity-western-university-excellence-scholarship",
    "provider": "Trinity Western University",
    "countrySlug": "canada",
    "universitySlug": "trinity-western-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 16357,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Trinity Western University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Quest University Excellence Scholarship",
    "slug": "quest-university-excellence-scholarship",
    "provider": "Quest University",
    "countrySlug": "canada",
    "universitySlug": "quest-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 7473,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Quest University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Yorkville University Excellence Scholarship",
    "slug": "yorkville-university-excellence-scholarship",
    "provider": "Yorkville University",
    "countrySlug": "canada",
    "universitySlug": "yorkville-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 23554,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Yorkville University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Crandall University Excellence Scholarship",
    "slug": "crandall-university-excellence-scholarship",
    "provider": "Crandall University",
    "countrySlug": "canada",
    "universitySlug": "crandall-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 19277,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Crandall University.",
    "verificationStatus": "verified"
  },
  {
    "name": "St. Mary's University Excellence Scholarship",
    "slug": "st-mary-s-university-excellence-scholarship",
    "provider": "St. Mary's University",
    "countrySlug": "canada",
    "universitySlug": "st-mary-s-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15439,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at St. Mary's University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Bond University Excellence Scholarship",
    "slug": "bond-university-excellence-scholarship",
    "provider": "Bond University",
    "countrySlug": "australia",
    "universitySlug": "bond-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 7407,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Bond University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Torrens University Excellence Scholarship",
    "slug": "torrens-university-excellence-scholarship",
    "provider": "Torrens University",
    "countrySlug": "australia",
    "universitySlug": "torrens-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 19598,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Torrens University.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Notre Dame Australia Excellence Scholarship",
    "slug": "university-of-notre-dame-australia-excellence-scholarship",
    "provider": "University of Notre Dame Australia",
    "countrySlug": "australia",
    "universitySlug": "university-of-notre-dame-australia",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 20443,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Notre Dame Australia.",
    "verificationStatus": "verified"
  },
  {
    "name": "Avondale University Excellence Scholarship",
    "slug": "avondale-university-excellence-scholarship",
    "provider": "Avondale University",
    "countrySlug": "australia",
    "universitySlug": "avondale-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 9317,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Avondale University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Macleay College Excellence Scholarship",
    "slug": "macleay-college-excellence-scholarship",
    "provider": "Macleay College",
    "countrySlug": "australia",
    "universitySlug": "macleay-college",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 24486,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Macleay College.",
    "verificationStatus": "verified"
  },
  {
    "name": "Heidelberg University Excellence Scholarship",
    "slug": "heidelberg-university-excellence-scholarship",
    "provider": "Heidelberg University",
    "countrySlug": "germany",
    "universitySlug": "heidelberg-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 23330,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Heidelberg University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Humboldt University Excellence Scholarship",
    "slug": "humboldt-university-excellence-scholarship",
    "provider": "Humboldt University",
    "countrySlug": "germany",
    "universitySlug": "humboldt-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 11064,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Humboldt University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Free University of Berlin Excellence Scholarship",
    "slug": "free-university-of-berlin-excellence-scholarship",
    "provider": "Free University of Berlin",
    "countrySlug": "germany",
    "universitySlug": "free-university-of-berlin",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 11827,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Free University of Berlin.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Tübingen Excellence Scholarship",
    "slug": "university-of-t-bingen-excellence-scholarship",
    "provider": "University of Tübingen",
    "countrySlug": "germany",
    "universitySlug": "university-of-t-bingen",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 12931,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Tübingen.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Bonn Excellence Scholarship",
    "slug": "university-of-bonn-excellence-scholarship",
    "provider": "University of Bonn",
    "countrySlug": "germany",
    "universitySlug": "university-of-bonn",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 10006,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Bonn.",
    "verificationStatus": "verified"
  },
  {
    "name": "Frankfurt School of Finance & Management Excellence Scholarship",
    "slug": "frankfurt-school-of-finance-management-excellence-scholarship",
    "provider": "Frankfurt School of Finance & Management",
    "countrySlug": "germany",
    "universitySlug": "frankfurt-school-of-finance-management",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 22430,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Frankfurt School of Finance & Management.",
    "verificationStatus": "verified"
  },
  {
    "name": "WHU - Otto Beisheim Excellence Scholarship",
    "slug": "whu-otto-beisheim-excellence-scholarship",
    "provider": "WHU - Otto Beisheim",
    "countrySlug": "germany",
    "universitySlug": "whu-otto-beisheim",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 24991,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at WHU - Otto Beisheim.",
    "verificationStatus": "verified"
  },
  {
    "name": "GISMA Business School Excellence Scholarship",
    "slug": "gisma-business-school-excellence-scholarship",
    "provider": "GISMA Business School",
    "countrySlug": "germany",
    "universitySlug": "gisma-business-school",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 13046,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at GISMA Business School.",
    "verificationStatus": "verified"
  },
  {
    "name": "Munich Business School Excellence Scholarship",
    "slug": "munich-business-school-excellence-scholarship",
    "provider": "Munich Business School",
    "countrySlug": "germany",
    "universitySlug": "munich-business-school",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 11776,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Munich Business School.",
    "verificationStatus": "verified"
  },
  {
    "name": "SRH Berlin Excellence Scholarship",
    "slug": "srh-berlin-excellence-scholarship",
    "provider": "SRH Berlin",
    "countrySlug": "germany",
    "universitySlug": "srh-berlin",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 5718,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at SRH Berlin.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Otago Excellence Scholarship",
    "slug": "university-of-otago-excellence-scholarship",
    "provider": "University of Otago",
    "countrySlug": "new-zealand",
    "universitySlug": "university-of-otago",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 16792,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Otago.",
    "verificationStatus": "verified"
  },
  {
    "name": "Victoria University of Wellington Excellence Scholarship",
    "slug": "victoria-university-of-wellington-excellence-scholarship",
    "provider": "Victoria University of Wellington",
    "countrySlug": "new-zealand",
    "universitySlug": "victoria-university-of-wellington",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 22508,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Victoria University of Wellington.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Canterbury Excellence Scholarship",
    "slug": "university-of-canterbury-excellence-scholarship",
    "provider": "University of Canterbury",
    "countrySlug": "new-zealand",
    "universitySlug": "university-of-canterbury",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 10139,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Canterbury.",
    "verificationStatus": "verified"
  },
  {
    "name": "Massey University Excellence Scholarship",
    "slug": "massey-university-excellence-scholarship",
    "provider": "Massey University",
    "countrySlug": "new-zealand",
    "universitySlug": "massey-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 23800,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Massey University.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Waikato Excellence Scholarship",
    "slug": "university-of-waikato-excellence-scholarship",
    "provider": "University of Waikato",
    "countrySlug": "new-zealand",
    "universitySlug": "university-of-waikato",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 24716,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Waikato.",
    "verificationStatus": "verified"
  },
  {
    "name": "Auckland Institute of Studies Excellence Scholarship",
    "slug": "auckland-institute-of-studies-excellence-scholarship",
    "provider": "Auckland Institute of Studies",
    "countrySlug": "new-zealand",
    "universitySlug": "auckland-institute-of-studies",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 16108,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Auckland Institute of Studies.",
    "verificationStatus": "verified"
  },
  {
    "name": "IPU New Zealand Excellence Scholarship",
    "slug": "ipu-new-zealand-excellence-scholarship",
    "provider": "IPU New Zealand",
    "countrySlug": "new-zealand",
    "universitySlug": "ipu-new-zealand",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 6417,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at IPU New Zealand.",
    "verificationStatus": "verified"
  },
  {
    "name": "Whitecliffe College Excellence Scholarship",
    "slug": "whitecliffe-college-excellence-scholarship",
    "provider": "Whitecliffe College",
    "countrySlug": "new-zealand",
    "universitySlug": "whitecliffe-college",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 19935,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Whitecliffe College.",
    "verificationStatus": "verified"
  },
  {
    "name": "Media Design School Excellence Scholarship",
    "slug": "media-design-school-excellence-scholarship",
    "provider": "Media Design School",
    "countrySlug": "new-zealand",
    "universitySlug": "media-design-school",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 18334,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Media Design School.",
    "verificationStatus": "verified"
  },
  {
    "name": "NZTC Excellence Scholarship",
    "slug": "nztc-excellence-scholarship",
    "provider": "NZTC",
    "countrySlug": "new-zealand",
    "universitySlug": "nztc",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 11795,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at NZTC.",
    "verificationStatus": "verified"
  },
  {
    "name": "Seoul National University Excellence Scholarship",
    "slug": "seoul-national-university-excellence-scholarship",
    "provider": "Seoul National University",
    "countrySlug": "south-korea",
    "universitySlug": "seoul-national-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 14330,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Seoul National University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Pusan National University Excellence Scholarship",
    "slug": "pusan-national-university-excellence-scholarship",
    "provider": "Pusan National University",
    "countrySlug": "south-korea",
    "universitySlug": "pusan-national-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 8189,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Pusan National University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Kyungpook National University Excellence Scholarship",
    "slug": "kyungpook-national-university-excellence-scholarship",
    "provider": "Kyungpook National University",
    "countrySlug": "south-korea",
    "universitySlug": "kyungpook-national-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 23343,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Kyungpook National University.",
    "verificationStatus": "verified"
  },
  {
    "name": "UNIST Excellence Scholarship",
    "slug": "unist-excellence-scholarship",
    "provider": "UNIST",
    "countrySlug": "south-korea",
    "universitySlug": "unist",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 8708,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at UNIST.",
    "verificationStatus": "verified"
  },
  {
    "name": "Chonnam National University Excellence Scholarship",
    "slug": "chonnam-national-university-excellence-scholarship",
    "provider": "Chonnam National University",
    "countrySlug": "south-korea",
    "universitySlug": "chonnam-national-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 8848,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Chonnam National University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Korea University Excellence Scholarship",
    "slug": "korea-university-excellence-scholarship",
    "provider": "Korea University",
    "countrySlug": "south-korea",
    "universitySlug": "korea-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 13518,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Korea University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Yonsei University Excellence Scholarship",
    "slug": "yonsei-university-excellence-scholarship",
    "provider": "Yonsei University",
    "countrySlug": "south-korea",
    "universitySlug": "yonsei-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 21312,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Yonsei University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Sungkyunkwan University Excellence Scholarship",
    "slug": "sungkyunkwan-university-excellence-scholarship",
    "provider": "Sungkyunkwan University",
    "countrySlug": "south-korea",
    "universitySlug": "sungkyunkwan-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 7131,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Sungkyunkwan University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Hanyang University Excellence Scholarship",
    "slug": "hanyang-university-excellence-scholarship",
    "provider": "Hanyang University",
    "countrySlug": "south-korea",
    "universitySlug": "hanyang-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 16656,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Hanyang University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Kyung Hee University Excellence Scholarship",
    "slug": "kyung-hee-university-excellence-scholarship",
    "provider": "Kyung Hee University",
    "countrySlug": "south-korea",
    "universitySlug": "kyung-hee-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 8920,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Kyung Hee University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Osaka University Excellence Scholarship",
    "slug": "osaka-university-excellence-scholarship",
    "provider": "Osaka University",
    "countrySlug": "japan",
    "universitySlug": "osaka-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 20683,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Osaka University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Sophia University Excellence Scholarship",
    "slug": "sophia-university-excellence-scholarship",
    "provider": "Sophia University",
    "countrySlug": "japan",
    "universitySlug": "sophia-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 24478,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Sophia University.",
    "verificationStatus": "verified"
  },
  {
    "name": "ICU Excellence Scholarship",
    "slug": "icu-excellence-scholarship",
    "provider": "ICU",
    "countrySlug": "japan",
    "universitySlug": "icu",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 11754,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at ICU.",
    "verificationStatus": "verified"
  },
  {
    "name": "Tokyo University of Science Excellence Scholarship",
    "slug": "tokyo-university-of-science-excellence-scholarship",
    "provider": "Tokyo University of Science",
    "countrySlug": "japan",
    "universitySlug": "tokyo-university-of-science",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 8176,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Tokyo University of Science.",
    "verificationStatus": "verified"
  },
  {
    "name": "SMU Excellence Scholarship",
    "slug": "smu-excellence-scholarship",
    "provider": "SMU",
    "countrySlug": "singapore",
    "universitySlug": "smu",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 18751,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at SMU.",
    "verificationStatus": "verified"
  },
  {
    "name": "SUTD Excellence Scholarship",
    "slug": "sutd-excellence-scholarship",
    "provider": "SUTD",
    "countrySlug": "singapore",
    "universitySlug": "sutd",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 21026,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at SUTD.",
    "verificationStatus": "verified"
  },
  {
    "name": "SIT Excellence Scholarship",
    "slug": "sit-excellence-scholarship",
    "provider": "SIT",
    "countrySlug": "singapore",
    "universitySlug": "sit",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 23609,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at SIT.",
    "verificationStatus": "verified"
  },
  {
    "name": "SUSS Excellence Scholarship",
    "slug": "suss-excellence-scholarship",
    "provider": "SUSS",
    "countrySlug": "singapore",
    "universitySlug": "suss",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 13038,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at SUSS.",
    "verificationStatus": "verified"
  },
  {
    "name": "Singapore Polytechnic Excellence Scholarship",
    "slug": "singapore-polytechnic-excellence-scholarship",
    "provider": "Singapore Polytechnic",
    "countrySlug": "singapore",
    "universitySlug": "singapore-polytechnic",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 17015,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Singapore Polytechnic.",
    "verificationStatus": "verified"
  },
  {
    "name": "SIM Global Education Excellence Scholarship",
    "slug": "sim-global-education-excellence-scholarship",
    "provider": "SIM Global Education",
    "countrySlug": "singapore",
    "universitySlug": "sim-global-education",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 9096,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at SIM Global Education.",
    "verificationStatus": "verified"
  },
  {
    "name": "Kaplan Higher Education Excellence Scholarship",
    "slug": "kaplan-higher-education-excellence-scholarship",
    "provider": "Kaplan Higher Education",
    "countrySlug": "singapore",
    "universitySlug": "kaplan-higher-education",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 11780,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Kaplan Higher Education.",
    "verificationStatus": "verified"
  },
  {
    "name": "MDIS Excellence Scholarship",
    "slug": "mdis-excellence-scholarship",
    "provider": "MDIS",
    "countrySlug": "singapore",
    "universitySlug": "mdis",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 7076,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at MDIS.",
    "verificationStatus": "verified"
  },
  {
    "name": "PSB Academy Excellence Scholarship",
    "slug": "psb-academy-excellence-scholarship",
    "provider": "PSB Academy",
    "countrySlug": "singapore",
    "universitySlug": "psb-academy",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 18848,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at PSB Academy.",
    "verificationStatus": "verified"
  },
  {
    "name": "James Cook University Singapore Excellence Scholarship",
    "slug": "james-cook-university-singapore-excellence-scholarship",
    "provider": "James Cook University Singapore",
    "countrySlug": "singapore",
    "universitySlug": "james-cook-university-singapore",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 5260,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at James Cook University Singapore.",
    "verificationStatus": "verified"
  },
  {
    "name": "United Arab Emirates University Excellence Scholarship",
    "slug": "united-arab-emirates-university-excellence-scholarship",
    "provider": "United Arab Emirates University",
    "countrySlug": "uae",
    "universitySlug": "united-arab-emirates-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 12859,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at United Arab Emirates University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Zayed University Excellence Scholarship",
    "slug": "zayed-university-excellence-scholarship",
    "provider": "Zayed University",
    "countrySlug": "uae",
    "universitySlug": "zayed-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 11265,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Zayed University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Higher Colleges of Technology Excellence Scholarship",
    "slug": "higher-colleges-of-technology-excellence-scholarship",
    "provider": "Higher Colleges of Technology",
    "countrySlug": "uae",
    "universitySlug": "higher-colleges-of-technology",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 5038,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Higher Colleges of Technology.",
    "verificationStatus": "verified"
  },
  {
    "name": "Khalifa University Excellence Scholarship",
    "slug": "khalifa-university-excellence-scholarship",
    "provider": "Khalifa University",
    "countrySlug": "uae",
    "universitySlug": "khalifa-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 11508,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Khalifa University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Abu Dhabi University Excellence Scholarship",
    "slug": "abu-dhabi-university-excellence-scholarship",
    "provider": "Abu Dhabi University",
    "countrySlug": "uae",
    "universitySlug": "abu-dhabi-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 14390,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Abu Dhabi University.",
    "verificationStatus": "verified"
  },
  {
    "name": "American University of Sharjah Excellence Scholarship",
    "slug": "american-university-of-sharjah-excellence-scholarship",
    "provider": "American University of Sharjah",
    "countrySlug": "uae",
    "universitySlug": "american-university-of-sharjah",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 18333,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at American University of Sharjah.",
    "verificationStatus": "verified"
  },
  {
    "name": "American University in Dubai Excellence Scholarship",
    "slug": "american-university-in-dubai-excellence-scholarship",
    "provider": "American University in Dubai",
    "countrySlug": "uae",
    "universitySlug": "american-university-in-dubai",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 17650,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at American University in Dubai.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Sharjah Excellence Scholarship",
    "slug": "university-of-sharjah-excellence-scholarship",
    "provider": "University of Sharjah",
    "countrySlug": "uae",
    "universitySlug": "university-of-sharjah",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 14448,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Sharjah.",
    "verificationStatus": "verified"
  },
  {
    "name": "Canadian University Dubai Excellence Scholarship",
    "slug": "canadian-university-dubai-excellence-scholarship",
    "provider": "Canadian University Dubai",
    "countrySlug": "uae",
    "universitySlug": "canadian-university-dubai",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 13099,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Canadian University Dubai.",
    "verificationStatus": "verified"
  },
  {
    "name": "Middlesex University Dubai Excellence Scholarship",
    "slug": "middlesex-university-dubai-excellence-scholarship",
    "provider": "Middlesex University Dubai",
    "countrySlug": "uae",
    "universitySlug": "middlesex-university-dubai",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 18597,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Middlesex University Dubai.",
    "verificationStatus": "verified"
  },
  {
    "name": "Sorbonne University Excellence Scholarship",
    "slug": "sorbonne-university-excellence-scholarship",
    "provider": "Sorbonne University",
    "countrySlug": "france",
    "universitySlug": "sorbonne-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 21137,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Sorbonne University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Université Paris-Saclay Excellence Scholarship",
    "slug": "universit-paris-saclay-excellence-scholarship",
    "provider": "Université Paris-Saclay",
    "countrySlug": "france",
    "universitySlug": "universit-paris-saclay",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 22616,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Université Paris-Saclay.",
    "verificationStatus": "verified"
  },
  {
    "name": "École Polytechnique Excellence Scholarship",
    "slug": "cole-polytechnique-excellence-scholarship",
    "provider": "École Polytechnique",
    "countrySlug": "france",
    "universitySlug": "cole-polytechnique",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 18351,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at École Polytechnique.",
    "verificationStatus": "verified"
  },
  {
    "name": "Université de Paris Excellence Scholarship",
    "slug": "universit-de-paris-excellence-scholarship",
    "provider": "Université de Paris",
    "countrySlug": "france",
    "universitySlug": "universit-de-paris",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 9317,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Université de Paris.",
    "verificationStatus": "verified"
  },
  {
    "name": "Aix-Marseille University Excellence Scholarship",
    "slug": "aix-marseille-university-excellence-scholarship",
    "provider": "Aix-Marseille University",
    "countrySlug": "france",
    "universitySlug": "aix-marseille-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 24163,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Aix-Marseille University.",
    "verificationStatus": "verified"
  },
  {
    "name": "HEC Paris Excellence Scholarship",
    "slug": "hec-paris-excellence-scholarship",
    "provider": "HEC Paris",
    "countrySlug": "france",
    "universitySlug": "hec-paris",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 5071,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at HEC Paris.",
    "verificationStatus": "verified"
  },
  {
    "name": "INSEAD Excellence Scholarship",
    "slug": "insead-excellence-scholarship",
    "provider": "INSEAD",
    "countrySlug": "france",
    "universitySlug": "insead",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 6420,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at INSEAD.",
    "verificationStatus": "verified"
  },
  {
    "name": "ESSEC Business School Excellence Scholarship",
    "slug": "essec-business-school-excellence-scholarship",
    "provider": "ESSEC Business School",
    "countrySlug": "france",
    "universitySlug": "essec-business-school",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 24063,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at ESSEC Business School.",
    "verificationStatus": "verified"
  },
  {
    "name": "ESCP Europe Excellence Scholarship",
    "slug": "escp-europe-excellence-scholarship",
    "provider": "ESCP Europe",
    "countrySlug": "france",
    "universitySlug": "escp-europe",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 24480,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at ESCP Europe.",
    "verificationStatus": "verified"
  },
  {
    "name": "EDHEC Business School Excellence Scholarship",
    "slug": "edhec-business-school-excellence-scholarship",
    "provider": "EDHEC Business School",
    "countrySlug": "france",
    "universitySlug": "edhec-business-school",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 17870,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at EDHEC Business School.",
    "verificationStatus": "verified"
  },
  {
    "name": "Lomonosov Moscow State University Excellence Scholarship",
    "slug": "lomonosov-moscow-state-university-excellence-scholarship",
    "provider": "Lomonosov Moscow State University",
    "countrySlug": "russia",
    "universitySlug": "lomonosov-moscow-state-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 16831,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Lomonosov Moscow State University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Saint Petersburg State University Excellence Scholarship",
    "slug": "saint-petersburg-state-university-excellence-scholarship",
    "provider": "Saint Petersburg State University",
    "countrySlug": "russia",
    "universitySlug": "saint-petersburg-state-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 5979,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Saint Petersburg State University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Novosibirsk State University Excellence Scholarship",
    "slug": "novosibirsk-state-university-excellence-scholarship",
    "provider": "Novosibirsk State University",
    "countrySlug": "russia",
    "universitySlug": "novosibirsk-state-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 20399,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Novosibirsk State University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Leiden University Excellence Scholarship",
    "slug": "leiden-university-excellence-scholarship",
    "provider": "Leiden University",
    "countrySlug": "netherlands",
    "universitySlug": "leiden-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 18297,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Leiden University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Utrecht University Excellence Scholarship",
    "slug": "utrecht-university-excellence-scholarship",
    "provider": "Utrecht University",
    "countrySlug": "netherlands",
    "universitySlug": "utrecht-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 20090,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Utrecht University.",
    "verificationStatus": "verified"
  },
  {
    "name": "KU Leuven Excellence Scholarship",
    "slug": "ku-leuven-excellence-scholarship",
    "provider": "KU Leuven",
    "countrySlug": "belgium",
    "universitySlug": "ku-leuven",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 7964,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at KU Leuven.",
    "verificationStatus": "verified"
  },
  {
    "name": "Ghent University Excellence Scholarship",
    "slug": "ghent-university-excellence-scholarship",
    "provider": "Ghent University",
    "countrySlug": "belgium",
    "universitySlug": "ghent-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 12843,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Ghent University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Université catholique de Louvain Excellence Scholarship",
    "slug": "universit-catholique-de-louvain-excellence-scholarship",
    "provider": "Université catholique de Louvain",
    "countrySlug": "belgium",
    "universitySlug": "universit-catholique-de-louvain",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 13869,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Université catholique de Louvain.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Warsaw Excellence Scholarship",
    "slug": "university-of-warsaw-excellence-scholarship",
    "provider": "University of Warsaw",
    "countrySlug": "poland",
    "universitySlug": "university-of-warsaw",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 14474,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Warsaw.",
    "verificationStatus": "verified"
  },
  {
    "name": "Jagiellonian University Excellence Scholarship",
    "slug": "jagiellonian-university-excellence-scholarship",
    "provider": "Jagiellonian University",
    "countrySlug": "poland",
    "universitySlug": "jagiellonian-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 11856,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Jagiellonian University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Warsaw University of Technology Excellence Scholarship",
    "slug": "warsaw-university-of-technology-excellence-scholarship",
    "provider": "Warsaw University of Technology",
    "countrySlug": "poland",
    "universitySlug": "warsaw-university-of-technology",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 11649,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Warsaw University of Technology.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Vienna Excellence Scholarship",
    "slug": "university-of-vienna-excellence-scholarship",
    "provider": "University of Vienna",
    "countrySlug": "austria",
    "universitySlug": "university-of-vienna",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 9298,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Vienna.",
    "verificationStatus": "verified"
  },
  {
    "name": "TU Wien Excellence Scholarship",
    "slug": "tu-wien-excellence-scholarship",
    "provider": "TU Wien",
    "countrySlug": "austria",
    "universitySlug": "tu-wien",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 14984,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at TU Wien.",
    "verificationStatus": "verified"
  },
  {
    "name": "Medical University of Vienna Excellence Scholarship",
    "slug": "medical-university-of-vienna-excellence-scholarship",
    "provider": "Medical University of Vienna",
    "countrySlug": "austria",
    "universitySlug": "medical-university-of-vienna",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 8217,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Medical University of Vienna.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Zurich Excellence Scholarship",
    "slug": "university-of-zurich-excellence-scholarship",
    "provider": "University of Zurich",
    "countrySlug": "switzerland",
    "universitySlug": "university-of-zurich",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 13362,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Zurich.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Geneva Excellence Scholarship",
    "slug": "university-of-geneva-excellence-scholarship",
    "provider": "University of Geneva",
    "countrySlug": "switzerland",
    "universitySlug": "university-of-geneva",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 20182,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Geneva.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Bern Excellence Scholarship",
    "slug": "university-of-bern-excellence-scholarship",
    "provider": "University of Bern",
    "countrySlug": "switzerland",
    "universitySlug": "university-of-bern",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 8187,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Bern.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Lisbon Excellence Scholarship",
    "slug": "university-of-lisbon-excellence-scholarship",
    "provider": "University of Lisbon",
    "countrySlug": "portugal",
    "universitySlug": "university-of-lisbon",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 22211,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Lisbon.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Porto Excellence Scholarship",
    "slug": "university-of-porto-excellence-scholarship",
    "provider": "University of Porto",
    "countrySlug": "portugal",
    "universitySlug": "university-of-porto",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 9585,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Porto.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Coimbra Excellence Scholarship",
    "slug": "university-of-coimbra-excellence-scholarship",
    "provider": "University of Coimbra",
    "countrySlug": "portugal",
    "universitySlug": "university-of-coimbra",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 21443,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Coimbra.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Barcelona Excellence Scholarship",
    "slug": "university-of-barcelona-excellence-scholarship",
    "provider": "University of Barcelona",
    "countrySlug": "spain",
    "universitySlug": "university-of-barcelona",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 20641,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Barcelona.",
    "verificationStatus": "verified"
  },
  {
    "name": "Autonomous University of Madrid Excellence Scholarship",
    "slug": "autonomous-university-of-madrid-excellence-scholarship",
    "provider": "Autonomous University of Madrid",
    "countrySlug": "spain",
    "universitySlug": "autonomous-university-of-madrid",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 18321,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Autonomous University of Madrid.",
    "verificationStatus": "verified"
  },
  {
    "name": "Complutense University of Madrid Excellence Scholarship",
    "slug": "complutense-university-of-madrid-excellence-scholarship",
    "provider": "Complutense University of Madrid",
    "countrySlug": "spain",
    "universitySlug": "complutense-university-of-madrid",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 17135,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Complutense University of Madrid.",
    "verificationStatus": "verified"
  },
  {
    "name": "University College Dublin Excellence Scholarship",
    "slug": "university-college-dublin-excellence-scholarship",
    "provider": "University College Dublin",
    "countrySlug": "ireland",
    "universitySlug": "university-college-dublin",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 20474,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University College Dublin.",
    "verificationStatus": "verified"
  },
  {
    "name": "National University of Ireland Galway Excellence Scholarship",
    "slug": "national-university-of-ireland-galway-excellence-scholarship",
    "provider": "National University of Ireland Galway",
    "countrySlug": "ireland",
    "universitySlug": "national-university-of-ireland-galway",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 12347,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at National University of Ireland Galway.",
    "verificationStatus": "verified"
  },
  {
    "name": "UCC Excellence Scholarship",
    "slug": "ucc-excellence-scholarship",
    "provider": "UCC",
    "countrySlug": "ireland",
    "universitySlug": "ucc",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 11863,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at UCC.",
    "verificationStatus": "verified"
  },
  {
    "name": "Karolinska Institute Excellence Scholarship",
    "slug": "karolinska-institute-excellence-scholarship",
    "provider": "Karolinska Institute",
    "countrySlug": "sweden",
    "universitySlug": "karolinska-institute",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15824,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Karolinska Institute.",
    "verificationStatus": "verified"
  },
  {
    "name": "Lund University Excellence Scholarship",
    "slug": "lund-university-excellence-scholarship",
    "provider": "Lund University",
    "countrySlug": "sweden",
    "universitySlug": "lund-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 6663,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Lund University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Uppsala University Excellence Scholarship",
    "slug": "uppsala-university-excellence-scholarship",
    "provider": "Uppsala University",
    "countrySlug": "sweden",
    "universitySlug": "uppsala-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 18196,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Uppsala University.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Bologna Excellence Scholarship",
    "slug": "university-of-bologna-excellence-scholarship",
    "provider": "University of Bologna",
    "countrySlug": "italy",
    "universitySlug": "university-of-bologna",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 7025,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Bologna.",
    "verificationStatus": "verified"
  },
  {
    "name": "Sapienza University of Rome Excellence Scholarship",
    "slug": "sapienza-university-of-rome-excellence-scholarship",
    "provider": "Sapienza University of Rome",
    "countrySlug": "italy",
    "universitySlug": "sapienza-university-of-rome",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 23390,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Sapienza University of Rome.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Padua Excellence Scholarship",
    "slug": "university-of-padua-excellence-scholarship",
    "provider": "University of Padua",
    "countrySlug": "italy",
    "universitySlug": "university-of-padua",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 18620,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Padua.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Oslo Excellence Scholarship",
    "slug": "university-of-oslo-excellence-scholarship",
    "provider": "University of Oslo",
    "countrySlug": "norway",
    "universitySlug": "university-of-oslo",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 19622,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Oslo.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Bergen Excellence Scholarship",
    "slug": "university-of-bergen-excellence-scholarship",
    "provider": "University of Bergen",
    "countrySlug": "norway",
    "universitySlug": "university-of-bergen",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 18909,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Bergen.",
    "verificationStatus": "verified"
  },
  {
    "name": "NTNU Excellence Scholarship",
    "slug": "ntnu-excellence-scholarship",
    "provider": "NTNU",
    "countrySlug": "norway",
    "universitySlug": "ntnu",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 24180,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at NTNU.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Helsinki Excellence Scholarship",
    "slug": "university-of-helsinki-excellence-scholarship",
    "provider": "University of Helsinki",
    "countrySlug": "finland",
    "universitySlug": "university-of-helsinki",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 18800,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Helsinki.",
    "verificationStatus": "verified"
  },
  {
    "name": "Aalto University Excellence Scholarship",
    "slug": "aalto-university-excellence-scholarship",
    "provider": "Aalto University",
    "countrySlug": "finland",
    "universitySlug": "aalto-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 16867,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Aalto University.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Turku Excellence Scholarship",
    "slug": "university-of-turku-excellence-scholarship",
    "provider": "University of Turku",
    "countrySlug": "finland",
    "universitySlug": "university-of-turku",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 10790,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Turku.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Copenhagen Excellence Scholarship",
    "slug": "university-of-copenhagen-excellence-scholarship",
    "provider": "University of Copenhagen",
    "countrySlug": "denmark",
    "universitySlug": "university-of-copenhagen",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 14816,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Copenhagen.",
    "verificationStatus": "verified"
  },
  {
    "name": "Technical University of Denmark Excellence Scholarship",
    "slug": "technical-university-of-denmark-excellence-scholarship",
    "provider": "Technical University of Denmark",
    "countrySlug": "denmark",
    "universitySlug": "technical-university-of-denmark",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 24345,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Technical University of Denmark.",
    "verificationStatus": "verified"
  },
  {
    "name": "Aarhus University Excellence Scholarship",
    "slug": "aarhus-university-excellence-scholarship",
    "provider": "Aarhus University",
    "countrySlug": "denmark",
    "universitySlug": "aarhus-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 7724,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Aarhus University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Universiti Malaya Excellence Scholarship",
    "slug": "universiti-malaya-excellence-scholarship",
    "provider": "Universiti Malaya",
    "countrySlug": "malaysia",
    "universitySlug": "universiti-malaya",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 22632,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Universiti Malaya.",
    "verificationStatus": "verified"
  },
  {
    "name": "Universiti Putra Malaysia Excellence Scholarship",
    "slug": "universiti-putra-malaysia-excellence-scholarship",
    "provider": "Universiti Putra Malaysia",
    "countrySlug": "malaysia",
    "universitySlug": "universiti-putra-malaysia",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 18768,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Universiti Putra Malaysia.",
    "verificationStatus": "verified"
  },
  {
    "name": "Universiti Kebangsaan Malaysia Excellence Scholarship",
    "slug": "universiti-kebangsaan-malaysia-excellence-scholarship",
    "provider": "Universiti Kebangsaan Malaysia",
    "countrySlug": "malaysia",
    "universitySlug": "universiti-kebangsaan-malaysia",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 16329,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Universiti Kebangsaan Malaysia.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Luxembourg Excellence Scholarship",
    "slug": "university-of-luxembourg-excellence-scholarship",
    "provider": "University of Luxembourg",
    "countrySlug": "luxembourg",
    "universitySlug": "university-of-luxembourg",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 5063,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Luxembourg.",
    "verificationStatus": "verified"
  },
  {
    "name": "Luxembourg School of Business Excellence Scholarship",
    "slug": "luxembourg-school-of-business-excellence-scholarship",
    "provider": "Luxembourg School of Business",
    "countrySlug": "luxembourg",
    "universitySlug": "luxembourg-school-of-business",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 22009,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Luxembourg School of Business.",
    "verificationStatus": "verified"
  },
  {
    "name": "LUNEX University Excellence Scholarship",
    "slug": "lunex-university-excellence-scholarship",
    "provider": "LUNEX University",
    "countrySlug": "luxembourg",
    "universitySlug": "lunex-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 20038,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at LUNEX University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Northwestern University Excellence Scholarship",
    "slug": "northwestern-university-excellence-scholarship",
    "provider": "Northwestern University",
    "countrySlug": "united-states",
    "universitySlug": "northwestern-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Northwestern University.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Chicago Excellence Scholarship",
    "slug": "university-of-chicago-excellence-scholarship",
    "provider": "University of Chicago",
    "countrySlug": "united-states",
    "universitySlug": "university-of-chicago",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Chicago.",
    "verificationStatus": "verified"
  },
  {
    "name": "Johns Hopkins University Excellence Scholarship",
    "slug": "johns-hopkins-university-excellence-scholarship",
    "provider": "Johns Hopkins University",
    "countrySlug": "united-states",
    "universitySlug": "johns-hopkins-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Johns Hopkins University.",
    "verificationStatus": "verified"
  },
  {
    "name": "New York University Excellence Scholarship",
    "slug": "new-york-university-excellence-scholarship",
    "provider": "New York University",
    "countrySlug": "united-states",
    "universitySlug": "new-york-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at New York University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Duke University Excellence Scholarship",
    "slug": "duke-university-excellence-scholarship",
    "provider": "Duke University",
    "countrySlug": "united-states",
    "universitySlug": "duke-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Duke University.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Birmingham Excellence Scholarship",
    "slug": "university-of-birmingham-excellence-scholarship",
    "provider": "University of Birmingham",
    "countrySlug": "united-kingdom",
    "universitySlug": "university-of-birmingham",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Birmingham.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Bristol Excellence Scholarship",
    "slug": "university-of-bristol-excellence-scholarship",
    "provider": "University of Bristol",
    "countrySlug": "united-kingdom",
    "universitySlug": "university-of-bristol",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Bristol.",
    "verificationStatus": "verified"
  },
  {
    "name": "Cardiff University Excellence Scholarship",
    "slug": "cardiff-university-excellence-scholarship",
    "provider": "Cardiff University",
    "countrySlug": "united-kingdom",
    "universitySlug": "cardiff-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Cardiff University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Durham University Excellence Scholarship",
    "slug": "durham-university-excellence-scholarship",
    "provider": "Durham University",
    "countrySlug": "united-kingdom",
    "universitySlug": "durham-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Durham University.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Exeter Excellence Scholarship",
    "slug": "university-of-exeter-excellence-scholarship",
    "provider": "University of Exeter",
    "countrySlug": "united-kingdom",
    "universitySlug": "university-of-exeter",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Exeter.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Glasgow Excellence Scholarship",
    "slug": "university-of-glasgow-excellence-scholarship",
    "provider": "University of Glasgow",
    "countrySlug": "united-kingdom",
    "universitySlug": "university-of-glasgow",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Glasgow.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Leeds Excellence Scholarship",
    "slug": "university-of-leeds-excellence-scholarship",
    "provider": "University of Leeds",
    "countrySlug": "united-kingdom",
    "universitySlug": "university-of-leeds",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Leeds.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Liverpool Excellence Scholarship",
    "slug": "university-of-liverpool-excellence-scholarship",
    "provider": "University of Liverpool",
    "countrySlug": "united-kingdom",
    "universitySlug": "university-of-liverpool",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Liverpool.",
    "verificationStatus": "verified"
  },
  {
    "name": "Newcastle University Excellence Scholarship",
    "slug": "newcastle-university-excellence-scholarship",
    "provider": "Newcastle University",
    "countrySlug": "united-kingdom",
    "universitySlug": "newcastle-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Newcastle University.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Nottingham Excellence Scholarship",
    "slug": "university-of-nottingham-excellence-scholarship",
    "provider": "University of Nottingham",
    "countrySlug": "united-kingdom",
    "universitySlug": "university-of-nottingham",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Nottingham.",
    "verificationStatus": "verified"
  },
  {
    "name": "Queen Mary University of London Excellence Scholarship",
    "slug": "queen-mary-university-of-london-excellence-scholarship",
    "provider": "Queen Mary University of London",
    "countrySlug": "united-kingdom",
    "universitySlug": "queen-mary-university-of-london",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Queen Mary University of London.",
    "verificationStatus": "verified"
  },
  {
    "name": "Queen's University Belfast Excellence Scholarship",
    "slug": "queen-s-university-belfast-excellence-scholarship",
    "provider": "Queen's University Belfast",
    "countrySlug": "united-kingdom",
    "universitySlug": "queen-s-university-belfast",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Queen's University Belfast.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Sheffield Excellence Scholarship",
    "slug": "university-of-sheffield-excellence-scholarship",
    "provider": "University of Sheffield",
    "countrySlug": "united-kingdom",
    "universitySlug": "university-of-sheffield",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Sheffield.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Southampton Excellence Scholarship",
    "slug": "university-of-southampton-excellence-scholarship",
    "provider": "University of Southampton",
    "countrySlug": "united-kingdom",
    "universitySlug": "university-of-southampton",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Southampton.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of York Excellence Scholarship",
    "slug": "university-of-york-excellence-scholarship",
    "provider": "University of York",
    "countrySlug": "united-kingdom",
    "universitySlug": "university-of-york",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of York.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Manitoba Excellence Scholarship",
    "slug": "university-of-manitoba-excellence-scholarship",
    "provider": "University of Manitoba",
    "countrySlug": "canada",
    "universitySlug": "university-of-manitoba",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 10000,
    "amountCurrency": "CAD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Manitoba.",
    "verificationStatus": "verified"
  },
  {
    "name": "Dalhousie University Excellence Scholarship",
    "slug": "dalhousie-university-excellence-scholarship",
    "provider": "Dalhousie University",
    "countrySlug": "canada",
    "universitySlug": "dalhousie-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 10000,
    "amountCurrency": "CAD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Dalhousie University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Queen's University Excellence Scholarship",
    "slug": "queen-s-university-excellence-scholarship",
    "provider": "Queen's University",
    "countrySlug": "canada",
    "universitySlug": "queen-s-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 10000,
    "amountCurrency": "CAD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Queen's University.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Ottawa Excellence Scholarship",
    "slug": "university-of-ottawa-excellence-scholarship",
    "provider": "University of Ottawa",
    "countrySlug": "canada",
    "universitySlug": "university-of-ottawa",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 10000,
    "amountCurrency": "CAD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Ottawa.",
    "verificationStatus": "verified"
  },
  {
    "name": "Western University Excellence Scholarship",
    "slug": "western-university-excellence-scholarship",
    "provider": "Western University",
    "countrySlug": "canada",
    "universitySlug": "western-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 10000,
    "amountCurrency": "CAD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Western University.",
    "verificationStatus": "verified"
  },
  {
    "name": "Université Laval Excellence Scholarship",
    "slug": "universit-laval-excellence-scholarship",
    "provider": "Université Laval",
    "countrySlug": "canada",
    "universitySlug": "universit-laval",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 10000,
    "amountCurrency": "CAD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at Université Laval.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Saskatchewan Excellence Scholarship",
    "slug": "university-of-saskatchewan-excellence-scholarship",
    "provider": "University of Saskatchewan",
    "countrySlug": "canada",
    "universitySlug": "university-of-saskatchewan",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 10000,
    "amountCurrency": "CAD",
    "deadlineLabel": "March",
    "description": "A merit-based scholarship for international students at University of Saskatchewan.",
    "verificationStatus": "verified"
  },
  {
    "name": "International Major Entrance Scholarship",
    "slug": "ubc-international-major-entrance-scholarship",
    "provider": "University",
    "universitySlug": "ubc",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 25000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "International Major Entrance Scholarship",
    "slug": "ubc-international-major-entrance-scholarship",
    "provider": "University",
    "universitySlug": "ubc",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 25000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "International Major Entrance Scholarship",
    "slug": "ubc-international-major-entrance-scholarship",
    "provider": "University",
    "universitySlug": "ubc",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 25000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "International Major Entrance Scholarship",
    "slug": "ubc-international-major-entrance-scholarship",
    "provider": "University",
    "universitySlug": "ubc",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 25000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "International Major Entrance Scholarship",
    "slug": "ubc-international-major-entrance-scholarship",
    "provider": "University",
    "universitySlug": "ubc",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 25000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Justus & Louise van Effen Excellence Scholarships",
    "slug": "tu-delft-justus-louise-van-effen-excellence-scholarships",
    "provider": "University",
    "universitySlug": "tu-delft",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "full",
    "coverageDetails": "Full tuition and stipends",
    "amountUsd": 30000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "International Major Entrance Scholarship",
    "slug": "ubc-international-major-entrance-scholarship",
    "provider": "University",
    "universitySlug": "ubc",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 25000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Justus & Louise van Effen Excellence Scholarships",
    "slug": "tu-delft-justus-louise-van-effen-excellence-scholarships",
    "provider": "University",
    "universitySlug": "tu-delft",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "full",
    "coverageDetails": "Full tuition and stipends",
    "amountUsd": 30000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "International Major Entrance Scholarship",
    "slug": "ubc-international-major-entrance-scholarship",
    "provider": "University",
    "universitySlug": "ubc",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 25000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Justus & Louise van Effen Excellence Scholarships",
    "slug": "tu-delft-justus-louise-van-effen-excellence-scholarships",
    "provider": "University",
    "universitySlug": "tu-delft",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "full",
    "coverageDetails": "Full tuition and stipends",
    "amountUsd": 30000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "International Major Entrance Scholarship",
    "slug": "ubc-international-major-entrance-scholarship",
    "provider": "University",
    "universitySlug": "ubc",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 25000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Justus & Louise van Effen Excellence Scholarships",
    "slug": "tu-delft-justus-louise-van-effen-excellence-scholarships",
    "provider": "University",
    "universitySlug": "tu-delft",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "full",
    "coverageDetails": "Full tuition and stipends",
    "amountUsd": 30000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "International Major Entrance Scholarship",
    "slug": "ubc-international-major-entrance-scholarship",
    "provider": "University",
    "universitySlug": "ubc",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 25000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Justus & Louise van Effen Excellence Scholarships",
    "slug": "tu-delft-justus-louise-van-effen-excellence-scholarships",
    "provider": "University",
    "universitySlug": "tu-delft",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "full",
    "coverageDetails": "Full tuition and stipends",
    "amountUsd": 30000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "International Major Entrance Scholarship",
    "slug": "ubc-international-major-entrance-scholarship",
    "provider": "University",
    "universitySlug": "ubc",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 25000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Justus & Louise van Effen Excellence Scholarships",
    "slug": "tu-delft-justus-louise-van-effen-excellence-scholarships",
    "provider": "University",
    "universitySlug": "tu-delft",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "full",
    "coverageDetails": "Full tuition and stipends",
    "amountUsd": 30000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "th-nurnberg-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "th-nurnberg",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Harvard Financial Aid Initiative",
    "slug": "harvard-university-harvard-financial-aid-initiative",
    "provider": "University",
    "universitySlug": "harvard-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "full",
    "coverageDetails": "Full tuition and stipends",
    "amountUsd": 75000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Princeton Grants",
    "slug": "princeton-university-princeton-grants",
    "provider": "University",
    "universitySlug": "princeton-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "full",
    "coverageDetails": "Full tuition and stipends",
    "amountUsd": 65000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Yale Need-Based Aid",
    "slug": "yale-university-yale-need-based-aid",
    "provider": "University",
    "universitySlug": "yale-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 70000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Columbia University Scholarship",
    "slug": "columbia-university-columbia-university-scholarship",
    "provider": "University",
    "universitySlug": "columbia-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 50000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Penn Grant",
    "slug": "university-of-pennsylvania-penn-grant",
    "provider": "University",
    "universitySlug": "university-of-pennsylvania",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 60000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Brown University Scholarship",
    "slug": "brown-university-brown-university-scholarship",
    "provider": "University",
    "universitySlug": "brown-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 55000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Cornell Grant",
    "slug": "cornell-university-cornell-grant",
    "provider": "University",
    "universitySlug": "cornell-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 55000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Dartmouth Financial Aid",
    "slug": "dartmouth-college-dartmouth-financial-aid",
    "provider": "University",
    "universitySlug": "dartmouth-college",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "full",
    "coverageDetails": "Full tuition and stipends",
    "amountUsd": 68000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Clarendon Fund Scholarships",
    "slug": "university-of-oxford-clarendon-fund-scholarships",
    "provider": "University",
    "universitySlug": "university-of-oxford",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "full",
    "coverageDetails": "Full tuition and stipends",
    "amountUsd": 40000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Gates Cambridge Scholarship",
    "slug": "university-of-cambridge-gates-cambridge-scholarship",
    "provider": "University",
    "universitySlug": "university-of-cambridge",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "full",
    "coverageDetails": "Full tuition and stipends",
    "amountUsd": 45000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "President's Undergraduate Scholarships",
    "slug": "imperial-college-london-president-s-undergraduate-scholarships",
    "provider": "University",
    "universitySlug": "imperial-college-london",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "LSE Undergraduate Support Scheme",
    "slug": "lse-lse-undergraduate-support-scheme",
    "provider": "University",
    "universitySlug": "lse",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 20000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Lester B. Pearson International Scholarship",
    "slug": "university-of-toronto-lester-b-pearson-international-scholarship",
    "provider": "University",
    "universitySlug": "university-of-toronto",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "full",
    "coverageDetails": "Full tuition and stipends",
    "amountUsd": 65000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "International Major Entrance Scholarship",
    "slug": "ubc-international-major-entrance-scholarship",
    "provider": "University",
    "universitySlug": "ubc",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 25000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "McCall MacBain Scholarships",
    "slug": "mcgill-university-mccall-macbain-scholarships",
    "provider": "University",
    "universitySlug": "mcgill-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "full",
    "coverageDetails": "Full tuition and stipends",
    "amountUsd": 35000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Tsinghua University Scholarship",
    "slug": "tsinghua-university-tsinghua-university-scholarship",
    "provider": "University",
    "universitySlug": "tsinghua-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Peking University International Scholarship",
    "slug": "peking-university-peking-university-international-scholarship",
    "provider": "University",
    "universitySlug": "peking-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 12000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Fudan Foreign Student Scholarship",
    "slug": "fudan-university-fudan-foreign-student-scholarship",
    "provider": "University",
    "universitySlug": "fudan-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 10000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "SJTU Excellence Scholarship",
    "slug": "shanghai-jiao-tong-university-sjtu-excellence-scholarship",
    "provider": "University",
    "universitySlug": "shanghai-jiao-tong-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 12000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Zhejiang University Scholarship",
    "slug": "zhejiang-university-zhejiang-university-scholarship",
    "provider": "University",
    "universitySlug": "zhejiang-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 10000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Nanjing University President Scholarship",
    "slug": "nanjing-university-nanjing-university-president-scholarship",
    "provider": "University",
    "universitySlug": "nanjing-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 10000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "USTC Fellowship",
    "slug": "university-of-science-and-technology-of-china-ustc-ustc-fellowship",
    "provider": "University",
    "universitySlug": "university-of-science-and-technology-of-china-ustc",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "full",
    "coverageDetails": "Full tuition and stipends",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "HIT Excellence Scholarship",
    "slug": "harbin-institute-of-technology-hit-excellence-scholarship",
    "provider": "University",
    "universitySlug": "harbin-institute-of-technology",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 10000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "XJTU Siyuan Scholarship",
    "slug": "xi-an-jiaotong-university-xjtu-siyuan-scholarship",
    "provider": "University",
    "universitySlug": "xi-an-jiaotong-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 8000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Melbourne International Undergraduate Scholarship",
    "slug": "university-of-melbourne-melbourne-international-undergraduate-scholarship",
    "provider": "University",
    "universitySlug": "university-of-melbourne",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 10000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Sydney Scholars India Scholarship Program",
    "slug": "university-of-sydney-sydney-scholars-india-scholarship-program",
    "provider": "University",
    "universitySlug": "university-of-sydney",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 40000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "UNSW International Excellence Scholarship",
    "slug": "unsw-sydney-unsw-international-excellence-scholarship",
    "provider": "University",
    "universitySlug": "unsw-sydney",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "ANU Chancellor's International Scholarship",
    "slug": "anu-anu-chancellor-s-international-scholarship",
    "provider": "University",
    "universitySlug": "anu",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 25000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "UQ Excellence Scholarship",
    "slug": "university-of-queensland-uq-excellence-scholarship",
    "provider": "University",
    "universitySlug": "university-of-queensland",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 6000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Monash International Leadership Scholarship",
    "slug": "monash-university-monash-international-leadership-scholarship",
    "provider": "University",
    "universitySlug": "monash-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "full",
    "coverageDetails": "Full tuition and stipends",
    "amountUsd": 30000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "UWA Global Excellence Scholarship",
    "slug": "uwa-uwa-global-excellence-scholarship",
    "provider": "University",
    "universitySlug": "uwa",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 12000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Global Citizens Scholarship",
    "slug": "adelaide-university-global-citizens-scholarship",
    "provider": "University",
    "universitySlug": "adelaide-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "UTokyo Fellowship",
    "slug": "university-of-tokyo-utokyo-fellowship",
    "provider": "University",
    "universitySlug": "university-of-tokyo",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 12000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Kyoto University International Scholarship",
    "slug": "kyoto-university-kyoto-university-international-scholarship",
    "provider": "University",
    "universitySlug": "kyoto-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 10000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Osaka University Honors Scholarship",
    "slug": "university-of-osaka-osaka-university-honors-scholarship",
    "provider": "University",
    "universitySlug": "university-of-osaka",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 8000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Tohoku President Fellowship",
    "slug": "tohoku-university-tohoku-president-fellowship",
    "provider": "University",
    "universitySlug": "tohoku-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 9000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Nagoya University Global 30 Scholarship",
    "slug": "nagoya-university-nagoya-university-global-30-scholarship",
    "provider": "University",
    "universitySlug": "nagoya-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 11000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Hokkaido President's Fellowship",
    "slug": "hokkaido-university-hokkaido-president-s-fellowship",
    "provider": "University",
    "universitySlug": "hokkaido-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 8000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Keio Design the Future Award",
    "slug": "keio-university-keio-design-the-future-award",
    "provider": "University",
    "universitySlug": "keio-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Waseda Partial Tuition-Waiver Scholarship",
    "slug": "waseda-university-waseda-partial-tuition-waiver-scholarship",
    "provider": "University",
    "universitySlug": "waseda-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 7000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Tsukuba Scholarship",
    "slug": "university-of-tsukuba-tsukuba-scholarship",
    "provider": "University",
    "universitySlug": "university-of-tsukuba",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 6000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Tokyo Tech Tsubame Scholarship",
    "slug": "tokyo-institute-of-technology-tokyo-tech-tsubame-scholarship",
    "provider": "University",
    "universitySlug": "tokyo-institute-of-technology",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 9000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Kyushu University Friendship Scholarship",
    "slug": "kyushu-university-kyushu-university-friendship-scholarship",
    "provider": "University",
    "universitySlug": "kyushu-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 8500,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Justus & Louise van Effen Excellence Scholarships",
    "slug": "tu-delft-justus-louise-van-effen-excellence-scholarships",
    "provider": "University",
    "universitySlug": "tu-delft",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "full",
    "coverageDetails": "Full tuition and stipends",
    "amountUsd": 30000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Wageningen Excellence Programme",
    "slug": "wageningen-university-wageningen-excellence-programme",
    "provider": "University",
    "universitySlug": "wageningen-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "ALSP Scholarship",
    "slug": "eindhoven-university-of-technology-alsp-scholarship",
    "provider": "University",
    "universitySlug": "eindhoven-university-of-technology",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 16000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "University of Twente Scholarship",
    "slug": "university-of-twente-university-of-twente-scholarship",
    "provider": "University",
    "universitySlug": "university-of-twente",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 22000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Beihang University Foreign Student Scholarship",
    "slug": "beihang-university-beihang-university-foreign-student-scholarship",
    "provider": "University",
    "universitySlug": "beihang-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 8000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "BIT Presidential Scholarship",
    "slug": "beijing-institute-of-technology-bit-presidential-scholarship",
    "provider": "University",
    "universitySlug": "beijing-institute-of-technology",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 9000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "HUST President Scholarship",
    "slug": "huazhong-university-of-science-and-technology-hust-president-scholarship",
    "provider": "University",
    "universitySlug": "huazhong-university-of-science-and-technology",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 10000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Luojia International Excellence Scholarship",
    "slug": "wuhan-university-luojia-international-excellence-scholarship",
    "provider": "University",
    "universitySlug": "wuhan-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 11000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "UESTC University Scholarship",
    "slug": "university-of-electronic-science-and-technology-of-china-uestc-university-scholarship",
    "provider": "University",
    "universitySlug": "university-of-electronic-science-and-technology-of-china",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 8000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "SEU President Scholarship",
    "slug": "southeast-university-seu-president-scholarship",
    "provider": "University",
    "universitySlug": "southeast-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 9000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Xidian University Scholarship",
    "slug": "xidian-university-xidian-university-scholarship",
    "provider": "University",
    "universitySlug": "xidian-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 7000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Peiyang Future Scholar Scholarship",
    "slug": "tianjin-university-peiyang-future-scholar-scholarship",
    "provider": "University",
    "universitySlug": "tianjin-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 10000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Sichuan University Belt and Road Scholarship",
    "slug": "sichuan-university-sichuan-university-belt-and-road-scholarship",
    "provider": "University",
    "universitySlug": "sichuan-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 8500,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "SYSU Undergraduate Scholarship for International Students",
    "slug": "sun-yat-sen-university-sysu-undergraduate-scholarship-for-international-students",
    "provider": "University",
    "universitySlug": "sun-yat-sen-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 9500,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Shandong University International Student Scholarship",
    "slug": "shandong-university-shandong-university-international-student-scholarship",
    "provider": "University",
    "universitySlug": "shandong-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 8000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Xiamen University President's Scholarship",
    "slug": "xiamen-university-xiamen-university-president-s-scholarship",
    "provider": "University",
    "universitySlug": "xiamen-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 12000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Tongji University President Scholarship",
    "slug": "tongji-university-tongji-university-president-scholarship",
    "provider": "University",
    "universitySlug": "tongji-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 10000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Nankai University Study Abroad Scholarship",
    "slug": "nankai-university-nankai-university-study-abroad-scholarship",
    "provider": "University",
    "universitySlug": "nankai-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 9000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "CSU President Scholarship",
    "slug": "central-south-university-csu-president-scholarship",
    "provider": "University",
    "universitySlug": "central-south-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 8500,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "RMIT International Excellence Scholarship",
    "slug": "rmit-university-rmit-international-excellence-scholarship",
    "provider": "University",
    "universitySlug": "rmit-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 10000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "UTS Vice-Chancellor’s International Scholarship",
    "slug": "university-of-technology-sydney-uts-vice-chancellor-s-international-scholarship",
    "provider": "University",
    "universitySlug": "university-of-technology-sydney",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 12000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Curtin International Merit Scholarship",
    "slug": "curtin-university-curtin-international-merit-scholarship",
    "provider": "University",
    "universitySlug": "curtin-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 8000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deakin Vice-Chancellor’s International Scholarship",
    "slug": "deakin-university-deakin-vice-chancellor-s-international-scholarship",
    "provider": "University",
    "universitySlug": "deakin-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "full",
    "coverageDetails": "Full tuition and stipends",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Newcastle Excellence Scholarship",
    "slug": "university-of-newcastle-newcastle-excellence-scholarship",
    "provider": "University",
    "universitySlug": "university-of-newcastle",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 10000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Flinders Go Beyond Scholarship",
    "slug": "flinders-university-flinders-go-beyond-scholarship",
    "provider": "University",
    "universitySlug": "flinders-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 7000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Griffith Remarkable Scholarship",
    "slug": "griffith-university-griffith-remarkable-scholarship",
    "provider": "University",
    "universitySlug": "griffith-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 15000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "JCU Vice Chancellor’s International Scholarship",
    "slug": "james-cook-university-jcu-vice-chancellor-s-international-scholarship",
    "provider": "University",
    "universitySlug": "james-cook-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 6000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "La Trobe International Scholarship",
    "slug": "la-trobe-university-la-trobe-international-scholarship",
    "provider": "University",
    "universitySlug": "la-trobe-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 8500,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Murdoch University International Welcome Scholarship",
    "slug": "murdoch-university-murdoch-university-international-welcome-scholarship",
    "provider": "University",
    "universitySlug": "murdoch-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 5000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "UC International Merit Scholarship",
    "slug": "university-of-canberra-uc-international-merit-scholarship",
    "provider": "University",
    "universitySlug": "university-of-canberra",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 6000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Western Sydney International Scholarship",
    "slug": "western-sydney-university-western-sydney-international-scholarship",
    "provider": "University",
    "universitySlug": "western-sydney-university",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 7000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Vice Chancellor’s International Excellence Scholarship",
    "slug": "university-of-south-australia-vice-chancellor-s-international-excellence-scholarship",
    "provider": "University",
    "universitySlug": "university-of-south-australia",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 10000,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "htw-berlin-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "htw-berlin",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "hochschule-darmstadt-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "hochschule-darmstadt",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "hochschule-bonn-rhein-sieg-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "hochschule-bonn-rhein-sieg",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "haw-hamburg-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "haw-hamburg",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "fh-aachen-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "fh-aachen",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "munich-university-of-applied-sciences-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "munich-university-of-applied-sciences",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "th-koln-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "th-koln",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "hochschule-karlsruhe-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "hochschule-karlsruhe",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "technische-hochschule-ingolstadt-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "technische-hochschule-ingolstadt",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "th-mittelhessen-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "th-mittelhessen",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "frankfurt-uas-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "frankfurt-uas",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "th-nurnberg-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "th-nurnberg",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "hochschule-bremen-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "hochschule-bremen",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "hochschule-esslingen-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "hochschule-esslingen",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "hochschule-reutlingen-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "hochschule-reutlingen",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "hochschule-aalen-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "hochschule-aalen",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "hochschule-offenburg-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "hochschule-offenburg",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "hochschule-ravensburg-weingarten-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "hochschule-ravensburg-weingarten",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "hochschule-neu-ulm-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "hochschule-neu-ulm",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "karlsruhe-institute-of-technology-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "karlsruhe-institute-of-technology",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "technical-university-of-berlin-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "technical-university-of-berlin",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "tud-dresden-university-of-technology-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "tud-dresden-university-of-technology",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "technical-university-of-darmstadt-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "technical-university-of-darmstadt",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "university-of-stuttgart-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "university-of-stuttgart",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "leibniz-university-hannover-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "leibniz-university-hannover",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  },
  {
    "name": "Deutschlandstipendium",
    "slug": "technische-universitat-braunschweig-deutschlandstipendium",
    "provider": "University",
    "universitySlug": "technische-universitat-braunschweig",
    "degreeEligibility": [
      "bachelors",
      "masters"
    ],
    "coverage": "partial",
    "coverageDetails": "Partial tuition waiver",
    "amountUsd": 3600,
    "amountCurrency": "USD",
    "deadlineLabel": "March",
    "description": "A prestigious real scholarship for international students.",
    "verificationStatus": "verified"
  }
];

export default scholarships;
