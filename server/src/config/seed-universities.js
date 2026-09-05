const universities = [
  // ── United States ──
  { name: 'Massachusetts Institute of Technology', slug: 'mit', countrySlug: 'united-states', city: 'Cambridge', stateProvince: 'Massachusetts', website: 'https://www.mit.edu', universityType: 'private', foundedYear: 1861, description: 'World-leading research university known for innovation in science, engineering, and technology.', faculties: ['Engineering', 'Science', 'Architecture', 'Management', 'Humanities'], totalStudents: 11500, internationalStudentsPct: 33, languagesOfInstruction: ['English'], intakes: ['Fall'], qsRanking: 1, theRanking: 3, applicationFeeUsd: 85, avgTuitionUsd: 57986, avgLivingCostUsd: 21000, accommodationUsd: 12000, insuranceUsd: 3500, minGpa: 3.5, minIelts: 7.0, minToefl: 100, minGre: 320, applicationPortal: 'https://apply.mit.edu', sourceUrl: 'https://www.mit.edu/admissions', verificationStatus: 'verified' },
  { name: 'Stanford University', slug: 'stanford-university', countrySlug: 'united-states', city: 'Stanford', stateProvince: 'California', website: 'https://www.stanford.edu', universityType: 'private', foundedYear: 1885, description: 'Premier research university in Silicon Valley, renowned for entrepreneurship and innovation.', faculties: ['Engineering', 'Business', 'Medicine', 'Law', 'Sciences', 'Humanities'], totalStudents: 17000, internationalStudentsPct: 23, intakes: ['Fall'], qsRanking: 2, theRanking: 2, applicationFeeUsd: 90, avgTuitionUsd: 56169, avgLivingCostUsd: 22000, minGpa: 3.5, minIelts: 7.0, minToefl: 100, minGre: 325, sourceUrl: 'https://www.stanford.edu', verificationStatus: 'verified' },
  { name: 'Carnegie Mellon University', slug: 'carnegie-mellon', countrySlug: 'united-states', city: 'Pittsburgh', stateProvince: 'Pennsylvania', website: 'https://www.cmu.edu', universityType: 'private', foundedYear: 1900, description: 'Global leader in computer science, robotics, AI, and engineering education and research.', faculties: ['Computer Science', 'Engineering', 'Business', 'Fine Arts', 'Sciences'], totalStudents: 15000, internationalStudentsPct: 42, intakes: ['Fall'], qsRanking: 52, theRanking: 28, applicationFeeUsd: 75, avgTuitionUsd: 52732, avgLivingCostUsd: 18000, minGpa: 3.3, minIelts: 7.0, minToefl: 100, minGre: 320, sourceUrl: 'https://www.cmu.edu', verificationStatus: 'verified' },
  { name: 'Georgia Institute of Technology', slug: 'georgia-tech', countrySlug: 'united-states', city: 'Atlanta', stateProvince: 'Georgia', website: 'https://www.gatech.edu', universityType: 'public', foundedYear: 1885, description: 'Top-ranked public research university known for engineering, computing, and business programs.', faculties: ['Engineering', 'Computing', 'Sciences', 'Business', 'Design'], totalStudents: 45000, internationalStudentsPct: 28, intakes: ['Fall', 'Spring'], qsRanking: 61, theRanking: 45, applicationFeeUsd: 75, avgTuitionUsd: 33794, avgLivingCostUsd: 15000, minGpa: 3.2, minIelts: 7.0, minToefl: 95, minGre: 315, sourceUrl: 'https://www.gatech.edu', verificationStatus: 'verified' },

  // ── United Kingdom ──
  { name: 'University of Oxford', slug: 'university-of-oxford', countrySlug: 'united-kingdom', city: 'Oxford', website: 'https://www.ox.ac.uk', universityType: 'public', foundedYear: 1096, description: 'World\'s oldest English-speaking university, consistently ranked among the top globally.', faculties: ['Humanities', 'Mathematical Sciences', 'Medical Sciences', 'Social Sciences'], totalStudents: 26000, internationalStudentsPct: 46, intakes: ['Autumn'], qsRanking: 3, theRanking: 1, applicationFeeUsd: 95, avgTuitionUsd: 38000, avgLivingCostUsd: 16000, minGpa: 3.7, minIelts: 7.0, minToefl: 100, sourceUrl: 'https://www.ox.ac.uk', verificationStatus: 'verified' },
  { name: 'University of Cambridge', slug: 'university-of-cambridge', countrySlug: 'united-kingdom', city: 'Cambridge', website: 'https://www.cam.ac.uk', universityType: 'public', foundedYear: 1209, description: 'One of the world\'s most prestigious universities with a tradition of academic excellence spanning 800 years.', faculties: ['Arts & Humanities', 'Sciences', 'Technology', 'Clinical Medicine', 'Business'], totalStudents: 24000, internationalStudentsPct: 38, intakes: ['Autumn'], qsRanking: 5, theRanking: 5, applicationFeeUsd: 90, avgTuitionUsd: 36000, avgLivingCostUsd: 15000, minGpa: 3.6, minIelts: 7.0, minToefl: 100, sourceUrl: 'https://www.cam.ac.uk', verificationStatus: 'verified' },
  { name: 'Imperial College London', slug: 'imperial-college-london', countrySlug: 'united-kingdom', city: 'London', website: 'https://www.imperial.ac.uk', universityType: 'public', foundedYear: 1907, description: 'World-leading science, engineering, medicine, and business university in the heart of London.', faculties: ['Engineering', 'Natural Sciences', 'Medicine', 'Business'], totalStudents: 20000, internationalStudentsPct: 57, intakes: ['Autumn'], qsRanking: 6, theRanking: 8, applicationFeeUsd: 85, avgTuitionUsd: 38000, avgLivingCostUsd: 18000, minGpa: 3.5, minIelts: 6.5, minToefl: 92, sourceUrl: 'https://www.imperial.ac.uk', verificationStatus: 'verified' },
  { name: 'University College London', slug: 'ucl', countrySlug: 'united-kingdom', city: 'London', website: 'https://www.ucl.ac.uk', universityType: 'public', foundedYear: 1826, description: 'London\'s leading multidisciplinary university with strong research output across all disciplines.', faculties: ['Engineering', 'Medical Sciences', 'Arts & Humanities', 'Social Sciences', 'Laws'], totalStudents: 43000, internationalStudentsPct: 52, intakes: ['Autumn'], qsRanking: 9, theRanking: 22, applicationFeeUsd: 85, avgTuitionUsd: 32000, avgLivingCostUsd: 17000, minGpa: 3.3, minIelts: 6.5, minToefl: 92, sourceUrl: 'https://www.ucl.ac.uk', verificationStatus: 'verified' },

  // ── Canada ──
  { name: 'University of Toronto', slug: 'university-of-toronto', countrySlug: 'canada', city: 'Toronto', stateProvince: 'Ontario', website: 'https://www.utoronto.ca', universityType: 'public', foundedYear: 1827, description: 'Canada\'s top-ranked university with world-class research in AI, medicine, and engineering.', faculties: ['Engineering', 'Arts & Science', 'Medicine', 'Business', 'Law', 'Computer Science'], totalStudents: 97000, internationalStudentsPct: 25, intakes: ['Fall', 'Winter'], qsRanking: 21, theRanking: 18, applicationFeeUsd: 125, avgTuitionUsd: 45000, avgLivingCostUsd: 16000, minGpa: 3.3, minIelts: 6.5, minToefl: 89, sourceUrl: 'https://www.utoronto.ca', verificationStatus: 'verified' },
  { name: 'University of British Columbia', slug: 'ubc', countrySlug: 'canada', city: 'Vancouver', stateProvince: 'British Columbia', website: 'https://www.ubc.ca', universityType: 'public', foundedYear: 1908, description: 'Global research university in one of the world\'s most liveable cities. Strong in sustainability and engineering.', faculties: ['Engineering', 'Science', 'Arts', 'Business', 'Medicine', 'Forestry'], totalStudents: 68000, internationalStudentsPct: 28, intakes: ['Fall', 'Winter'], qsRanking: 34, theRanking: 34, applicationFeeUsd: 110, avgTuitionUsd: 40000, avgLivingCostUsd: 14000, minGpa: 3.2, minIelts: 6.5, minToefl: 90, sourceUrl: 'https://www.ubc.ca', verificationStatus: 'verified' },
  { name: 'McGill University', slug: 'mcgill-university', countrySlug: 'canada', city: 'Montreal', stateProvince: 'Quebec', website: 'https://www.mcgill.ca', universityType: 'public', foundedYear: 1821, description: 'Canada\'s most internationally diverse research-intensive university, located in vibrant Montreal.', faculties: ['Engineering', 'Science', 'Arts', 'Medicine', 'Business', 'Law'], totalStudents: 40000, internationalStudentsPct: 31, intakes: ['Fall', 'Winter'], qsRanking: 30, theRanking: 49, applicationFeeUsd: 115, avgTuitionUsd: 35000, avgLivingCostUsd: 12000, minGpa: 3.2, minIelts: 6.5, minToefl: 86, sourceUrl: 'https://www.mcgill.ca', verificationStatus: 'verified' },

  // ── Germany ──
  { name: 'Technical University of Munich', slug: 'tu-munich', countrySlug: 'germany', city: 'Munich', stateProvince: 'Bavaria', website: 'https://www.tum.de', universityType: 'public', foundedYear: 1868, description: 'Germany\'s top technical university, leading in engineering, natural sciences, and technology. Part of TU9 alliance.', faculties: ['Engineering', 'Natural Sciences', 'Computer Science', 'Medicine', 'Architecture'], totalStudents: 50000, internationalStudentsPct: 35, intakes: ['Winter', 'Summer'], qsRanking: 37, theRanking: 30, applicationFeeUsd: 0, avgTuitionUsd: 300, avgLivingCostUsd: 10800, minGpa: 2.5, minIelts: 6.5, minToefl: 88, sourceUrl: 'https://www.tum.de', verificationStatus: 'verified' },
  { name: 'RWTH Aachen University', slug: 'rwth-aachen', countrySlug: 'germany', city: 'Aachen', stateProvince: 'North Rhine-Westphalia', website: 'https://www.rwth-aachen.de', universityType: 'public', foundedYear: 1870, description: 'One of Europe\'s leading technical universities, especially strong in engineering and computer science.', faculties: ['Mechanical Engineering', 'Electrical Engineering', 'Computer Science', 'Natural Sciences', 'Medicine'], totalStudents: 47000, internationalStudentsPct: 27, intakes: ['Winter', 'Summer'], qsRanking: 106, theRanking: 87, applicationFeeUsd: 0, avgTuitionUsd: 550, avgLivingCostUsd: 9600, minGpa: 2.5, minIelts: 6.0, minToefl: 80, sourceUrl: 'https://www.rwth-aachen.de', verificationStatus: 'verified' },
  { name: 'Ludwig Maximilian University of Munich', slug: 'lmu-munich', countrySlug: 'germany', city: 'Munich', stateProvince: 'Bavaria', website: 'https://www.lmu.de', universityType: 'public', foundedYear: 1472, description: 'One of Germany\'s most prestigious universities with a strong research tradition across all disciplines.', faculties: ['Medicine', 'Law', 'Business', 'Social Sciences', 'Physics', 'Biology'], totalStudents: 52000, internationalStudentsPct: 18, intakes: ['Winter', 'Summer'], qsRanking: 54, theRanking: 32, applicationFeeUsd: 0, avgTuitionUsd: 250, avgLivingCostUsd: 10800, minGpa: 2.5, minIelts: 6.0, minToefl: 80, sourceUrl: 'https://www.lmu.de', verificationStatus: 'verified' },

  // ── Netherlands ──
  { name: 'Delft University of Technology', slug: 'tu-delft', countrySlug: 'netherlands', city: 'Delft', website: 'https://www.tudelft.nl', universityType: 'public', foundedYear: 1842, description: 'The largest and oldest public technical university in the Netherlands, known for engineering and design.', faculties: ['Aerospace Engineering', 'Civil Engineering', 'Computer Science', 'Mechanical Engineering', 'Architecture'], totalStudents: 25000, internationalStudentsPct: 30, intakes: ['September', 'February'], qsRanking: 47, theRanking: 48, applicationFeeUsd: 110, avgTuitionUsd: 16100, avgLivingCostUsd: 13200, minGpa: 3.0, minIelts: 6.5, minToefl: 90, sourceUrl: 'https://www.tudelft.nl', verificationStatus: 'verified' },
  { name: 'University of Amsterdam', slug: 'university-of-amsterdam', countrySlug: 'netherlands', city: 'Amsterdam', website: 'https://www.uva.nl', universityType: 'public', foundedYear: 1632, description: 'Netherlands\' largest research university with broad range of programs in sciences and humanities.', faculties: ['Science', 'Social Sciences', 'Humanities', 'Economics', 'Medicine', 'Law'], totalStudents: 39000, internationalStudentsPct: 19, intakes: ['September', 'February'], qsRanking: 53, theRanking: 60, applicationFeeUsd: 110, avgTuitionUsd: 14500, avgLivingCostUsd: 13200, minGpa: 3.0, minIelts: 6.5, minToefl: 90, sourceUrl: 'https://www.uva.nl', verificationStatus: 'verified' },

  // ── Australia ──
  { name: 'University of Melbourne', slug: 'university-of-melbourne', countrySlug: 'australia', city: 'Melbourne', stateProvince: 'Victoria', website: 'https://www.unimelb.edu.au', universityType: 'public', foundedYear: 1853, description: 'Australia\'s top-ranked university with a strong tradition of research excellence and innovation.', faculties: ['Engineering', 'Science', 'Medicine', 'Business', 'Arts', 'Law'], totalStudents: 55000, internationalStudentsPct: 42, intakes: ['February', 'July'], qsRanking: 13, theRanking: 13, applicationFeeUsd: 100, avgTuitionUsd: 35000, avgLivingCostUsd: 16000, minGpa: 3.2, minIelts: 6.5, minToefl: 79, sourceUrl: 'https://www.unimelb.edu.au', verificationStatus: 'verified' },
  { name: 'University of Sydney', slug: 'university-of-sydney', countrySlug: 'australia', city: 'Sydney', stateProvince: 'New South Wales', website: 'https://www.sydney.edu.au', universityType: 'public', foundedYear: 1850, description: 'Australia\'s first university, known for comprehensive programs and strong international reputation.', faculties: ['Engineering', 'Science', 'Business', 'Medicine', 'Arts', 'Architecture'], totalStudents: 73000, internationalStudentsPct: 38, intakes: ['February', 'July'], qsRanking: 18, theRanking: 27, applicationFeeUsd: 100, avgTuitionUsd: 36000, avgLivingCostUsd: 17000, minGpa: 3.0, minIelts: 6.5, minToefl: 85, sourceUrl: 'https://www.sydney.edu.au', verificationStatus: 'verified' },

  // ── Switzerland ──
  { name: 'ETH Zurich', slug: 'eth-zurich', countrySlug: 'switzerland', city: 'Zurich', website: 'https://ethz.ch', universityType: 'public', foundedYear: 1855, description: 'One of the world\'s leading universities for technology and natural sciences. Alma mater of 21 Nobel laureates including Albert Einstein.', faculties: ['Engineering', 'Natural Sciences', 'Mathematics', 'Computer Science', 'Architecture'], totalStudents: 24000, internationalStudentsPct: 40, intakes: ['Fall', 'Spring'], qsRanking: 7, theRanking: 11, applicationFeeUsd: 170, avgTuitionUsd: 1500, avgLivingCostUsd: 24000, minGpa: 3.3, minIelts: 7.0, minToefl: 100, sourceUrl: 'https://ethz.ch', verificationStatus: 'verified' },
  { name: 'EPFL', slug: 'epfl', countrySlug: 'switzerland', city: 'Lausanne', website: 'https://www.epfl.ch', universityType: 'public', foundedYear: 1853, description: 'Swiss Federal Institute of Technology in Lausanne, world-class in engineering, technology, and life sciences.', faculties: ['Engineering', 'Computer Science', 'Life Sciences', 'Basic Sciences', 'Architecture'], totalStudents: 12000, internationalStudentsPct: 55, intakes: ['Fall'], qsRanking: 12, theRanking: 14, applicationFeeUsd: 55, avgTuitionUsd: 1500, avgLivingCostUsd: 22000, minGpa: 3.2, minIelts: 6.5, minToefl: 90, sourceUrl: 'https://www.epfl.ch', verificationStatus: 'verified' },

  // ── Singapore ──
  { name: 'National University of Singapore', slug: 'nus', countrySlug: 'singapore', city: 'Singapore', website: 'https://www.nus.edu.sg', universityType: 'public', foundedYear: 1905, description: 'Asia\'s leading global university, ranked consistently in the top 10 worldwide.', faculties: ['Engineering', 'Computing', 'Business', 'Science', 'Medicine', 'Law'], totalStudents: 42000, internationalStudentsPct: 30, intakes: ['August', 'January'], qsRanking: 8, theRanking: 19, applicationFeeUsd: 40, avgTuitionUsd: 29000, avgLivingCostUsd: 14400, minGpa: 3.2, minIelts: 6.5, minToefl: 85, sourceUrl: 'https://www.nus.edu.sg', verificationStatus: 'verified' },
  { name: 'Nanyang Technological University', slug: 'ntu-singapore', countrySlug: 'singapore', city: 'Singapore', website: 'https://www.ntu.edu.sg', universityType: 'public', foundedYear: 1991, description: 'Young but highly-ranked research-intensive university, known for engineering, AI, and sustainability.', faculties: ['Engineering', 'Science', 'Business', 'Computing', 'Humanities'], totalStudents: 33000, internationalStudentsPct: 28, intakes: ['August', 'January'], qsRanking: 15, theRanking: 20, applicationFeeUsd: 30, avgTuitionUsd: 27000, avgLivingCostUsd: 14400, minGpa: 3.0, minIelts: 6.5, minToefl: 85, sourceUrl: 'https://www.ntu.edu.sg', verificationStatus: 'verified' },

  // ── Ireland ──
  { name: 'Trinity College Dublin', slug: 'trinity-college-dublin', countrySlug: 'ireland', city: 'Dublin', website: 'https://www.tcd.ie', universityType: 'public', foundedYear: 1592, description: 'Ireland\'s leading university and one of the oldest in the world, known for arts, humanities, and tech.', faculties: ['Engineering', 'Science', 'Arts', 'Business', 'Health Sciences', 'Law'], totalStudents: 18000, internationalStudentsPct: 35, intakes: ['September'], qsRanking: 81, theRanking: 99, applicationFeeUsd: 60, avgTuitionUsd: 25000, avgLivingCostUsd: 14400, minGpa: 3.0, minIelts: 6.5, minToefl: 90, sourceUrl: 'https://www.tcd.ie', verificationStatus: 'verified' },

  // ── Japan ──
  { name: 'University of Tokyo', slug: 'university-of-tokyo', countrySlug: 'japan', city: 'Tokyo', website: 'https://www.u-tokyo.ac.jp', universityType: 'public', foundedYear: 1877, description: 'Japan\'s most prestigious university, leading research in science, technology, and humanities.', faculties: ['Engineering', 'Science', 'Medicine', 'Law', 'Economics', 'Agriculture'], totalStudents: 28000, internationalStudentsPct: 13, intakes: ['April', 'October'], qsRanking: 28, theRanking: 29, applicationFeeUsd: 250, avgTuitionUsd: 5000, avgLivingCostUsd: 10800, minGpa: 3.0, minIelts: 6.5, minToefl: 80, sourceUrl: 'https://www.u-tokyo.ac.jp', verificationStatus: 'verified' },

  // ── South Korea ──
  { name: 'KAIST', slug: 'kaist', countrySlug: 'south-korea', city: 'Daejeon', website: 'https://www.kaist.ac.kr', universityType: 'public', foundedYear: 1971, description: 'Korea\'s leading science and technology university, tuition-free for most programs.', faculties: ['Engineering', 'Computer Science', 'Natural Sciences', 'Business', 'Bioengineering'], totalStudents: 11000, internationalStudentsPct: 12, intakes: ['March', 'September'], qsRanking: 40, theRanking: 52, applicationFeeUsd: 60, avgTuitionUsd: 4000, avgLivingCostUsd: 7200, minGpa: 3.0, minIelts: 6.5, minToefl: 80, sourceUrl: 'https://www.kaist.ac.kr', verificationStatus: 'verified' },

  // ── Sweden ──
  { name: 'KTH Royal Institute of Technology', slug: 'kth-stockholm', countrySlug: 'sweden', city: 'Stockholm', website: 'https://www.kth.se', universityType: 'public', foundedYear: 1827, description: 'Sweden\'s largest and most prestigious technical university, strong in engineering and technology.', faculties: ['Engineering', 'Architecture', 'Computer Science', 'Electrical Engineering', 'Industrial Economics'], totalStudents: 13000, internationalStudentsPct: 25, intakes: ['August'], qsRanking: 73, theRanking: 75, applicationFeeUsd: 100, avgTuitionUsd: 16000, avgLivingCostUsd: 12000, minGpa: 3.0, minIelts: 6.5, minToefl: 90, sourceUrl: 'https://www.kth.se', verificationStatus: 'verified' },

  // ── France ──
  { name: 'Université PSL (Paris Sciences et Lettres)', slug: 'psl-university', countrySlug: 'france', city: 'Paris', website: 'https://www.psl.eu', universityType: 'public', foundedYear: 2010, description: 'France\'s top-ranked university cluster, combining excellence in sciences, humanities, and engineering.', faculties: ['Sciences', 'Engineering', 'Humanities', 'Arts', 'Social Sciences'], totalStudents: 17000, internationalStudentsPct: 35, intakes: ['September'], qsRanking: 24, theRanking: 40, applicationFeeUsd: 50, avgTuitionUsd: 400, avgLivingCostUsd: 12000, minGpa: 3.0, minIelts: 6.5, minToefl: 85, sourceUrl: 'https://www.psl.eu', verificationStatus: 'verified' },

  // ── New Zealand ──
  { name: 'University of Auckland', slug: 'university-of-auckland', countrySlug: 'new-zealand', city: 'Auckland', website: 'https://www.auckland.ac.nz', universityType: 'public', foundedYear: 1883, description: 'New Zealand\'s top-ranked university with comprehensive programs and strong research output.', faculties: ['Engineering', 'Science', 'Business', 'Medical Sciences', 'Arts', 'Creative Arts'], totalStudents: 42000, internationalStudentsPct: 25, intakes: ['February', 'July'], qsRanking: 68, theRanking: 123, applicationFeeUsd: 100, avgTuitionUsd: 28000, avgLivingCostUsd: 13200, minGpa: 3.0, minIelts: 6.5, minToefl: 80, sourceUrl: 'https://www.auckland.ac.nz', verificationStatus: 'verified' },

  // ── Italy ──
  { name: 'Politecnico di Milano', slug: 'polimi', countrySlug: 'italy', city: 'Milan', website: 'https://www.polimi.it', universityType: 'public', foundedYear: 1863, description: 'Italy\'s best technical university, internationally recognized for engineering, architecture, and design.', faculties: ['Engineering', 'Architecture', 'Design', 'Urban Planning'], totalStudents: 47000, internationalStudentsPct: 25, intakes: ['September', 'February'], qsRanking: 111, theRanking: 175, applicationFeeUsd: 35, avgTuitionUsd: 4000, avgLivingCostUsd: 10800, minGpa: 3.0, minIelts: 6.0, minToefl: 78, sourceUrl: 'https://www.polimi.it', verificationStatus: 'verified' },
];


const generatedUniversities = [

  {   // ── USA ──
    "name": "UC Berkeley",
    "slug": "uc-berkeley",
    "countrySlug": "united-states",
    "city": "Berkeley",
    "website": "https://www.berkeley.edu",
    "universityType": "public",
    "foundedYear": 1901,
    "description": "A top public university located in united-states.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 33159,
    "internationalStudentsPct": 22,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 807,
    "applicationFeeUsd": 74,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "UCLA",
    "slug": "ucla",
    "countrySlug": "united-states",
    "city": "Los Angeles",
    "website": "https://www.ucla.edu",
    "universityType": "public",
    "foundedYear": 1916,
    "description": "A top public university located in united-states.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 24945,
    "internationalStudentsPct": 17,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 29,
    "applicationFeeUsd": 144,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Michigan",
    "slug": "university-of-michigan",
    "countrySlug": "united-states",
    "city": "Ann Arbor",
    "website": "https://umich.edu",
    "universityType": "public",
    "foundedYear": 1989,
    "description": "A top public university located in united-states.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 11321,
    "internationalStudentsPct": 11,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 33,
    "applicationFeeUsd": 98,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Washington",
    "slug": "university-of-washington",
    "countrySlug": "united-states",
    "city": "Seattle",
    "website": "https://www.washington.edu",
    "universityType": "public",
    "foundedYear": 1952,
    "description": "A top public university located in united-states.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 13537,
    "internationalStudentsPct": 36,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 63,
    "applicationFeeUsd": 51,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "UNC Chapel Hill",
    "slug": "unc-chapel-hill",
    "countrySlug": "united-states",
    "city": "Chapel Hill",
    "website": "https://www.unc.edu",
    "universityType": "public",
    "foundedYear": 1965,
    "description": "A top public university located in united-states.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 30265,
    "internationalStudentsPct": 39,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 772,
    "applicationFeeUsd": 60,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Harvard University",
    "slug": "harvard-university",
    "countrySlug": "united-states",
    "city": "Cambridge",
    "website": "https://www.harvard.edu",
    "universityType": "private",
    "foundedYear": 1943,
    "description": "A top private university located in united-states.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 21885,
    "internationalStudentsPct": 19,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 4,
    "applicationFeeUsd": 142,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Caltech",
    "slug": "caltech",
    "countrySlug": "united-states",
    "city": "Pasadena",
    "website": "https://www.caltech.edu",
    "universityType": "private",
    "foundedYear": 1980,
    "description": "A top private university located in united-states.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 29211,
    "internationalStudentsPct": 26,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 855,
    "applicationFeeUsd": 96,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Princeton University",
    "slug": "princeton-university",
    "countrySlug": "united-states",
    "city": "Princeton",
    "website": "https://www.princeton.edu",
    "universityType": "private",
    "foundedYear": 1948,
    "description": "A top private university located in united-states.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 14070,
    "internationalStudentsPct": 31,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 18,
    "applicationFeeUsd": 55,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Yale University",
    "slug": "yale-university",
    "countrySlug": "united-states",
    "city": "New Haven",
    "website": "https://www.yale.edu",
    "universityType": "private",
    "foundedYear": 1914,
    "description": "A top private university located in united-states.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 16808,
    "internationalStudentsPct": 32,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 16,
    "applicationFeeUsd": 84,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Columbia University",
    "slug": "columbia-university",
    "countrySlug": "united-states",
    "city": "New York City",
    "website": "https://www.columbia.edu",
    "universityType": "private",
    "foundedYear": 1974,
    "description": "A top private university located in united-states.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 36978,
    "internationalStudentsPct": 16,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 23,
    "applicationFeeUsd": 131,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {   // ── UK ──
    "name": "University of Edinburgh",
    "slug": "university-of-edinburgh",
    "countrySlug": "united-kingdom",
    "city": "Edinburgh",
    "website": "https://www.ed.ac.uk",
    "universityType": "public",
    "foundedYear": 1995,
    "description": "A top public university located in united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 38837,
    "internationalStudentsPct": 15,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 22,
    "applicationFeeUsd": 67,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "King's College London",
    "slug": "king-s-college-london",
    "countrySlug": "united-kingdom",
    "city": "London",
    "website": "https://www.kcl.ac.uk",
    "universityType": "public",
    "foundedYear": 1953,
    "description": "A top public university located in united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 20274,
    "internationalStudentsPct": 25,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 40,
    "applicationFeeUsd": 128,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "LSE",
    "slug": "lse",
    "countrySlug": "united-kingdom",
    "city": "London",
    "website": "https://www.lse.ac.uk",
    "universityType": "public",
    "foundedYear": 1914,
    "description": "A top public university located in united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 19738,
    "internationalStudentsPct": 15,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 45,
    "applicationFeeUsd": 124,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Manchester",
    "slug": "university-of-manchester",
    "countrySlug": "united-kingdom",
    "city": "Manchester",
    "website": "https://www.manchester.ac.uk",
    "universityType": "public",
    "foundedYear": 1984,
    "description": "A top public university located in united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 19331,
    "internationalStudentsPct": 39,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 32,
    "applicationFeeUsd": 88,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Warwick",
    "slug": "university-of-warwick",
    "countrySlug": "united-kingdom",
    "city": "Coventry",
    "website": "https://warwick.ac.uk",
    "universityType": "public",
    "foundedYear": 1923,
    "description": "A top public university located in united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 11975,
    "internationalStudentsPct": 31,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 67,
    "applicationFeeUsd": 100,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Buckingham",
    "slug": "university-of-buckingham",
    "countrySlug": "united-kingdom",
    "city": "Buckingham",
    "website": "https://www.buckingham.ac.uk",
    "universityType": "private",
    "foundedYear": 1965,
    "description": "A top private university located in united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 13967,
    "internationalStudentsPct": 28,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 877,
    "applicationFeeUsd": 66,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "BPP University",
    "slug": "bpp-university",
    "countrySlug": "united-kingdom",
    "city": "London",
    "website": "https://www.bpp.com",
    "universityType": "private",
    "foundedYear": 1932,
    "description": "A top private university located in united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 20594,
    "internationalStudentsPct": 13,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 997,
    "applicationFeeUsd": 88,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Regent's University London",
    "slug": "regent-s-university-london",
    "countrySlug": "united-kingdom",
    "city": "London",
    "website": "https://www.regents.ac.uk",
    "universityType": "private",
    "foundedYear": 1967,
    "description": "A top private university located in united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 36085,
    "internationalStudentsPct": 12,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 620,
    "applicationFeeUsd": 132,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Richmond American University",
    "slug": "richmond-american-university",
    "countrySlug": "united-kingdom",
    "city": "London",
    "website": "https://www.richmond.ac.uk",
    "universityType": "private",
    "foundedYear": 1974,
    "description": "A top private university located in united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 17240,
    "internationalStudentsPct": 19,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 34,
    "applicationFeeUsd": 104,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Arden University",
    "slug": "arden-university",
    "countrySlug": "united-kingdom",
    "city": "Coventry",
    "website": "https://arden.ac.uk",
    "universityType": "private",
    "foundedYear": 1996,
    "description": "A top private university located in united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 13533,
    "internationalStudentsPct": 14,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 967,
    "applicationFeeUsd": 91,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {  // ── Canada ──
    "name": "McMaster University",
    "slug": "mcmaster-university",
    "countrySlug": "canada",
    "city": "Hamilton",
    "website": "https://www.mcmaster.ca",
    "universityType": "public",
    "foundedYear": 1999,
    "description": "A top public university located in canada.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 11622,
    "internationalStudentsPct": 38,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 189,
    "applicationFeeUsd": 107,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Waterloo",
    "slug": "university-of-waterloo",
    "countrySlug": "canada",
    "city": "Waterloo",
    "website": "https://uwaterloo.ca",
    "universityType": "public",
    "foundedYear": 1985,
    "description": "A top public university located in canada.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 29356,
    "internationalStudentsPct": 13,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 112,
    "applicationFeeUsd": 117,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Alberta",
    "slug": "university-of-alberta",
    "countrySlug": "canada",
    "city": "Edmonton",
    "website": "https://www.ualberta.ca",
    "universityType": "public",
    "foundedYear": 1997,
    "description": "A top public university located in canada.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 28233,
    "internationalStudentsPct": 33,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 111,
    "applicationFeeUsd": 86,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Montreal",
    "slug": "university-of-montreal",
    "countrySlug": "canada",
    "city": "Montreal",
    "website": "https://www.umontreal.ca",
    "universityType": "public",
    "foundedYear": 1961,
    "description": "A top public university located in canada.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 34540,
    "internationalStudentsPct": 37,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 141,
    "applicationFeeUsd": 99,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Calgary",
    "slug": "university-of-calgary",
    "countrySlug": "canada",
    "city": "Calgary",
    "website": "https://ucalgary.ca",
    "universityType": "public",
    "foundedYear": 1915,
    "description": "A top public university located in canada.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 13154,
    "internationalStudentsPct": 34,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 182,
    "applicationFeeUsd": 73,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Trinity Western University",
    "slug": "trinity-western-university",
    "countrySlug": "canada",
    "city": "Langley",
    "website": "https://www.twu.ca",
    "universityType": "private",
    "foundedYear": 1990,
    "description": "A top private university located in canada.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 24007,
    "internationalStudentsPct": 35,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 865,
    "applicationFeeUsd": 126,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Quest University",
    "slug": "quest-university",
    "countrySlug": "canada",
    "city": "Squamish",
    "website": "https://questu.ca",
    "universityType": "private",
    "foundedYear": 1941,
    "description": "A top private university located in canada.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 34691,
    "internationalStudentsPct": 14,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 638,
    "applicationFeeUsd": 62,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Yorkville University",
    "slug": "yorkville-university",
    "countrySlug": "canada",
    "city": "Fredericton",
    "website": "https://www.yorkvilleu.ca",
    "universityType": "private",
    "foundedYear": 1901,
    "description": "A top private university located in canada.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 26328,
    "internationalStudentsPct": 30,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 780,
    "applicationFeeUsd": 129,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Crandall University",
    "slug": "crandall-university",
    "countrySlug": "canada",
    "city": "Moncton",
    "website": "https://www.crandallu.ca",
    "universityType": "private",
    "foundedYear": 1909,
    "description": "A top private university located in canada.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 21052,
    "internationalStudentsPct": 19,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 856,
    "applicationFeeUsd": 92,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "St. Mary's University",
    "slug": "st-mary-s-university",
    "countrySlug": "canada",
    "city": "Calgary",
    "website": "https://stmu.ca",
    "universityType": "private",
    "foundedYear": 1955,
    "description": "A top private university located in canada.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 30567,
    "internationalStudentsPct": 35,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 612,
    "applicationFeeUsd": 84,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {  // ── Australia ──
    "name": "UNSW Sydney",
    "slug": "unsw-sydney",
    "countrySlug": "australia",
    "city": "Sydney",
    "website": "https://www.unsw.edu.au",
    "universityType": "public",
    "foundedYear": 1943,
    "description": "A top public university located in australia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 21584,
    "internationalStudentsPct": 19,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 19,
    "applicationFeeUsd": 127,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "ANU",
    "slug": "anu",
    "countrySlug": "australia",
    "city": "Canberra",
    "website": "https://www.anu.edu.au",
    "universityType": "public",
    "foundedYear": 1912,
    "description": "A top public university located in australia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 22516,
    "internationalStudentsPct": 29,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 34,
    "applicationFeeUsd": 96,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Queensland",
    "slug": "university-of-queensland",
    "countrySlug": "australia",
    "city": "Brisbane",
    "website": "https://www.uq.edu.au",
    "universityType": "public",
    "foundedYear": 1985,
    "description": "A top public university located in australia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 23459,
    "internationalStudentsPct": 24,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 43,
    "applicationFeeUsd": 64,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Monash University",
    "slug": "monash-university",
    "countrySlug": "australia",
    "city": "Melbourne",
    "website": "https://www.monash.edu",
    "universityType": "public",
    "foundedYear": 1904,
    "description": "A top public university located in australia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 31091,
    "internationalStudentsPct": 22,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 42,
    "applicationFeeUsd": 64,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "UWA",
    "slug": "uwa",
    "countrySlug": "australia",
    "city": "Perth",
    "website": "https://www.uwa.edu.au",
    "universityType": "public",
    "foundedYear": 1991,
    "description": "A top public university located in australia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 31630,
    "internationalStudentsPct": 24,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 72,
    "applicationFeeUsd": 126,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Bond University",
    "slug": "bond-university",
    "countrySlug": "australia",
    "city": "Gold Coast",
    "website": "https://bond.edu.au",
    "universityType": "private",
    "foundedYear": 1966,
    "description": "A top private university located in australia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 39590,
    "internationalStudentsPct": 17,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 825,
    "applicationFeeUsd": 137,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Torrens University",
    "slug": "torrens-university",
    "countrySlug": "australia",
    "city": "Adelaide",
    "website": "https://www.torrens.edu.au",
    "universityType": "private",
    "foundedYear": 1965,
    "description": "A top private university located in australia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 12572,
    "internationalStudentsPct": 32,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 701,
    "applicationFeeUsd": 120,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Notre Dame Australia",
    "slug": "university-of-notre-dame-australia",
    "countrySlug": "australia",
    "city": "Fremantle",
    "website": "https://www.notredame.edu.au",
    "universityType": "private",
    "foundedYear": 1928,
    "description": "A top private university located in australia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 18001,
    "internationalStudentsPct": 29,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 829,
    "applicationFeeUsd": 93,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Avondale University",
    "slug": "avondale-university",
    "countrySlug": "australia",
    "city": "Cooranbong",
    "website": "https://www.avondale.edu.au",
    "universityType": "private",
    "foundedYear": 1975,
    "description": "A top private university located in australia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 14694,
    "internationalStudentsPct": 37,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 734,
    "applicationFeeUsd": 58,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Macleay College",
    "slug": "macleay-college",
    "countrySlug": "australia",
    "city": "Sydney",
    "website": "https://macleay.edu.au",
    "universityType": "private",
    "foundedYear": 1900,
    "description": "A top private university located in australia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 37895,
    "internationalStudentsPct": 39,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 902,
    "applicationFeeUsd": 128,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {  // ── Germany ──
    "name": "Heidelberg University",
    "slug": "heidelberg-university",
    "countrySlug": "germany",
    "city": "Heidelberg",
    "website": "https://www.uni-heidelberg.de",
    "universityType": "public",
    "foundedYear": 1923,
    "description": "A top public university located in germany.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 38734,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 87,
    "applicationFeeUsd": 105,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Humboldt University",
    "slug": "humboldt-university",
    "countrySlug": "germany",
    "city": "Berlin",
    "website": "https://www.hu-berlin.de",
    "universityType": "public",
    "foundedYear": 1959,
    "description": "A top public university located in germany.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 20217,
    "internationalStudentsPct": 38,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 120,
    "applicationFeeUsd": 114,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Free University of Berlin",
    "slug": "free-university-of-berlin",
    "countrySlug": "germany",
    "city": "Berlin",
    "website": "https://www.fu-berlin.de",
    "universityType": "public",
    "foundedYear": 1926,
    "description": "A top public university located in germany.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 24664,
    "internationalStudentsPct": 30,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 98,
    "applicationFeeUsd": 57,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Tübingen",
    "slug": "university-of-t-bingen",
    "countrySlug": "germany",
    "city": "Tübingen",
    "website": "https://uni-tuebingen.de",
    "universityType": "public",
    "foundedYear": 1946,
    "description": "A top public university located in germany.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 33683,
    "internationalStudentsPct": 25,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 885,
    "applicationFeeUsd": 88,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Bonn",
    "slug": "university-of-bonn",
    "countrySlug": "germany",
    "city": "Bonn",
    "website": "https://www.uni-bonn.de",
    "universityType": "public",
    "foundedYear": 1978,
    "description": "A top public university located in germany.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 30675,
    "internationalStudentsPct": 14,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 239,
    "applicationFeeUsd": 142,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Frankfurt School of Finance & Management",
    "slug": "frankfurt-school-of-finance-management",
    "countrySlug": "germany",
    "city": "Frankfurt",
    "website": "https://www.frankfurt-school.de",
    "universityType": "private",
    "foundedYear": 1977,
    "description": "A top private university located in germany.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 38437,
    "internationalStudentsPct": 22,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 552,
    "applicationFeeUsd": 52,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "WHU - Otto Beisheim",
    "slug": "whu-otto-beisheim",
    "countrySlug": "germany",
    "city": "Vallendar",
    "website": "https://www.whu.edu",
    "universityType": "private",
    "foundedYear": 1906,
    "description": "A top private university located in germany.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 11324,
    "internationalStudentsPct": 19,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 513,
    "applicationFeeUsd": 142,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "GISMA Business School",
    "slug": "gisma-business-school",
    "countrySlug": "germany",
    "city": "Hanover",
    "website": "https://www.gisma.com",
    "universityType": "private",
    "foundedYear": 1912,
    "description": "A top private university located in germany.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 31887,
    "internationalStudentsPct": 24,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 960,
    "applicationFeeUsd": 52,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Munich Business School",
    "slug": "munich-business-school",
    "countrySlug": "germany",
    "city": "Munich",
    "website": "https://www.munich-business-school.de",
    "universityType": "private",
    "foundedYear": 1999,
    "description": "A top private university located in germany.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 12989,
    "internationalStudentsPct": 13,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 508,
    "applicationFeeUsd": 146,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "SRH Berlin",
    "slug": "srh-berlin",
    "countrySlug": "germany",
    "city": "Berlin",
    "website": "https://www.srh-berlin.de",
    "universityType": "private",
    "foundedYear": 1993,
    "description": "A top private university located in germany.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 19160,
    "internationalStudentsPct": 34,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 821,
    "applicationFeeUsd": 99,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {  // ── New Zealand ──
    "name": "University of Otago",
    "slug": "university-of-otago",
    "countrySlug": "new-zealand",
    "city": "Dunedin",
    "website": "https://www.otago.ac.nz",
    "universityType": "public",
    "foundedYear": 1968,
    "description": "A top public university located in new-zealand.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 24911,
    "internationalStudentsPct": 28,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 678,
    "applicationFeeUsd": 120,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Victoria University of Wellington",
    "slug": "victoria-university-of-wellington",
    "countrySlug": "new-zealand",
    "city": "Wellington",
    "website": "https://www.wgtn.ac.nz",
    "universityType": "public",
    "foundedYear": 1911,
    "description": "A top public university located in new-zealand.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 19114,
    "internationalStudentsPct": 12,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 999,
    "applicationFeeUsd": 117,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Canterbury",
    "slug": "university-of-canterbury",
    "countrySlug": "new-zealand",
    "city": "Christchurch",
    "website": "https://www.canterbury.ac.nz",
    "universityType": "public",
    "foundedYear": 1919,
    "description": "A top public university located in new-zealand.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 24482,
    "internationalStudentsPct": 27,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 757,
    "applicationFeeUsd": 90,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Massey University",
    "slug": "massey-university",
    "countrySlug": "new-zealand",
    "city": "Palmerston North",
    "website": "https://www.massey.ac.nz",
    "universityType": "public",
    "foundedYear": 1903,
    "description": "A top public university located in new-zealand.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 35181,
    "internationalStudentsPct": 35,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 719,
    "applicationFeeUsd": 90,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Waikato",
    "slug": "university-of-waikato",
    "countrySlug": "new-zealand",
    "city": "Hamilton",
    "website": "https://www.waikato.ac.nz",
    "universityType": "public",
    "foundedYear": 1912,
    "description": "A top public university located in new-zealand.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 13936,
    "internationalStudentsPct": 12,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 654,
    "applicationFeeUsd": 99,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Auckland Institute of Studies",
    "slug": "auckland-institute-of-studies",
    "countrySlug": "new-zealand",
    "city": "Auckland",
    "website": "https://www.ais.ac.nz",
    "universityType": "private",
    "foundedYear": 1991,
    "description": "A top private university located in new-zealand.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 16381,
    "internationalStudentsPct": 34,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 825,
    "applicationFeeUsd": 135,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "IPU New Zealand",
    "slug": "ipu-new-zealand",
    "countrySlug": "new-zealand",
    "city": "Palmerston North",
    "website": "https://www.ipu.ac.nz",
    "universityType": "private",
    "foundedYear": 1964,
    "description": "A top private university located in new-zealand.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 36690,
    "internationalStudentsPct": 24,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 738,
    "applicationFeeUsd": 86,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Whitecliffe College",
    "slug": "whitecliffe-college",
    "countrySlug": "new-zealand",
    "city": "Auckland",
    "website": "https://www.whitecliffe.ac.nz",
    "universityType": "private",
    "foundedYear": 1985,
    "description": "A top private university located in new-zealand.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 22922,
    "internationalStudentsPct": 18,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 981,
    "applicationFeeUsd": 139,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Media Design School",
    "slug": "media-design-school",
    "countrySlug": "new-zealand",
    "city": "Auckland",
    "website": "https://www.mediadesignschool.com",
    "universityType": "private",
    "foundedYear": 1947,
    "description": "A top private university located in new-zealand.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 24819,
    "internationalStudentsPct": 32,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 527,
    "applicationFeeUsd": 90,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "NZTC",
    "slug": "nztc",
    "countrySlug": "new-zealand",
    "city": "Auckland",
    "website": "https://www.nztertiarycollege.ac.nz",
    "universityType": "private",
    "foundedYear": 1976,
    "description": "A top private university located in new-zealand.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 20719,
    "internationalStudentsPct": 23,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 962,
    "applicationFeeUsd": 96,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {  // ── South Korea ──
    "name": "Seoul National University",
    "slug": "seoul-national-university",
    "countrySlug": "south-korea",
    "city": "Seoul",
    "website": "https://en.snu.ac.kr",
    "universityType": "public",
    "foundedYear": 1982,
    "description": "A top public university located in south-korea.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 24506,
    "internationalStudentsPct": 10,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 41,
    "applicationFeeUsd": 138,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Pusan National University",
    "slug": "pusan-national-university",
    "countrySlug": "south-korea",
    "city": "Busan",
    "website": "https://www.pusan.ac.kr",
    "universityType": "public",
    "foundedYear": 1900,
    "description": "A top public university located in south-korea.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 24580,
    "internationalStudentsPct": 16,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 980,
    "applicationFeeUsd": 51,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Kyungpook National University",
    "slug": "kyungpook-national-university",
    "countrySlug": "south-korea",
    "city": "Daegu",
    "website": "https://en.knu.ac.kr",
    "universityType": "public",
    "foundedYear": 1957,
    "description": "A top public university located in south-korea.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 24744,
    "internationalStudentsPct": 25,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 831,
    "applicationFeeUsd": 85,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "UNIST",
    "slug": "unist",
    "countrySlug": "south-korea",
    "city": "Ulsan",
    "website": "https://www.unist.ac.kr",
    "universityType": "public",
    "foundedYear": 1941,
    "description": "A top public university located in south-korea.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 32966,
    "internationalStudentsPct": 21,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 867,
    "applicationFeeUsd": 135,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Chonnam National University",
    "slug": "chonnam-national-university",
    "countrySlug": "south-korea",
    "city": "Gwangju",
    "website": "https://global.jnu.ac.kr",
    "universityType": "public",
    "foundedYear": 1973,
    "description": "A top public university located in south-korea.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 22563,
    "internationalStudentsPct": 11,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 725,
    "applicationFeeUsd": 63,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Korea University",
    "slug": "korea-university",
    "countrySlug": "south-korea",
    "city": "Seoul",
    "website": "https://korea.edu",
    "universityType": "private",
    "foundedYear": 1912,
    "description": "A top private university located in south-korea.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 34098,
    "internationalStudentsPct": 15,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 79,
    "applicationFeeUsd": 126,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Yonsei University",
    "slug": "yonsei-university",
    "countrySlug": "south-korea",
    "city": "Seoul",
    "website": "https://www.yonsei.ac.kr",
    "universityType": "private",
    "foundedYear": 1929,
    "description": "A top private university located in south-korea.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 26162,
    "internationalStudentsPct": 16,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 76,
    "applicationFeeUsd": 54,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Sungkyunkwan University",
    "slug": "sungkyunkwan-university",
    "countrySlug": "south-korea",
    "city": "Seoul",
    "website": "https://www.skku.edu",
    "universityType": "private",
    "foundedYear": 1971,
    "description": "A top private university located in south-korea.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 19395,
    "internationalStudentsPct": 12,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 34,
    "applicationFeeUsd": 135,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Hanyang University",
    "slug": "hanyang-university",
    "countrySlug": "south-korea",
    "city": "Seoul",
    "website": "https://www.hanyang.ac.kr",
    "universityType": "private",
    "foundedYear": 1998,
    "description": "A top private university located in south-korea.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 34490,
    "internationalStudentsPct": 38,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 805,
    "applicationFeeUsd": 88,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Kyung Hee University",
    "slug": "kyung-hee-university",
    "countrySlug": "south-korea",
    "city": "Seoul",
    "website": "https://www.khu.ac.kr",
    "universityType": "private",
    "foundedYear": 1963,
    "description": "A top private university located in south-korea.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 18240,
    "internationalStudentsPct": 36,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 657,
    "applicationFeeUsd": 104,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {  // ── Japan ──
    "name": "Kyoto University",
    "slug": "kyoto-university",
    "countrySlug": "japan",
    "city": "Kyoto",
    "website": "https://www.kyoto-u.ac.jp",
    "universityType": "public",
    "foundedYear": 1935,
    "description": "A top public university located in japan.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 34186,
    "internationalStudentsPct": 30,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 46,
    "applicationFeeUsd": 112,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Osaka",
    "slug": "university-of-osaka",
    "countrySlug": "japan",
    "city": "Osaka",
    "website": "https://www.osaka-u.ac.jp",
    "universityType": "public",
    "foundedYear": 1981,
    "description": "A top public university located in japan.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 19115,
    "internationalStudentsPct": 12,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 80,
    "applicationFeeUsd": 103,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Tohoku University",
    "slug": "tohoku-university",
    "countrySlug": "japan",
    "city": "Sendai",
    "website": "https://www.tohoku.ac.jp",
    "universityType": "public",
    "foundedYear": 1948,
    "description": "A top public university located in japan.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 11444,
    "internationalStudentsPct": 31,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 113,
    "applicationFeeUsd": 56,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Nagoya University",
    "slug": "nagoya-university",
    "countrySlug": "japan",
    "city": "Nagoya",
    "website": "https://en.nagoya-u.ac.jp",
    "universityType": "public",
    "foundedYear": 1932,
    "description": "A top public university located in japan.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 28338,
    "internationalStudentsPct": 24,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 176,
    "applicationFeeUsd": 144,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Hokkaido University",
    "slug": "hokkaido-university",
    "countrySlug": "japan",
    "city": "Sapporo",
    "website": "https://www.global.hokudai.ac.jp",
    "universityType": "public",
    "foundedYear": 1952,
    "description": "A top public university located in japan.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 29545,
    "internationalStudentsPct": 28,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 196,
    "applicationFeeUsd": 145,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Keio University",
    "slug": "keio-university",
    "countrySlug": "japan",
    "city": "Tokyo",
    "website": "https://www.keio.ac.jp",
    "universityType": "private",
    "foundedYear": 1921,
    "description": "A top private university located in japan.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 13755,
    "internationalStudentsPct": 37,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 214,
    "applicationFeeUsd": 98,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Waseda University",
    "slug": "waseda-university",
    "countrySlug": "japan",
    "city": "Tokyo",
    "website": "https://www.waseda.jp",
    "universityType": "private",
    "foundedYear": 1978,
    "description": "A top private university located in japan.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 14329,
    "internationalStudentsPct": 23,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 199,
    "applicationFeeUsd": 118,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Sophia University",
    "slug": "sophia-university",
    "countrySlug": "japan",
    "city": "Tokyo",
    "website": "https://www.sophia.ac.jp",
    "universityType": "private",
    "foundedYear": 1953,
    "description": "A top private university located in japan.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 11536,
    "internationalStudentsPct": 38,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 630,
    "applicationFeeUsd": 109,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "ICU",
    "slug": "icu",
    "countrySlug": "japan",
    "city": "Tokyo",
    "website": "https://www.icu.ac.jp",
    "universityType": "private",
    "foundedYear": 1976,
    "description": "A top private university located in japan.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 34182,
    "internationalStudentsPct": 23,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 925,
    "applicationFeeUsd": 56,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Tokyo University of Science",
    "slug": "tokyo-university-of-science",
    "countrySlug": "japan",
    "city": "Tokyo",
    "website": "https://www.tus.ac.jp",
    "universityType": "private",
    "foundedYear": 1947,
    "description": "A top private university located in japan.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 14791,
    "internationalStudentsPct": 13,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 949,
    "applicationFeeUsd": 113,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "SMU",
    "slug": "smu",
    "countrySlug": "singapore",
    "city": "Singapore",
    "website": "https://www.smu.edu.sg",
    "universityType": "public",
    "foundedYear": 1971,
    "description": "A top public university located in singapore.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 18347,
    "internationalStudentsPct": 14,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 429,
    "applicationFeeUsd": 54,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "SUTD",
    "slug": "sutd",
    "countrySlug": "singapore",
    "city": "Singapore",
    "website": "https://www.sutd.edu.sg",
    "universityType": "public",
    "foundedYear": 1955,
    "description": "A top public university located in singapore.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 30171,
    "internationalStudentsPct": 17,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 983,
    "applicationFeeUsd": 53,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "SIT",
    "slug": "sit",
    "countrySlug": "singapore",
    "city": "Singapore",
    "website": "https://www.singaporetech.edu.sg",
    "universityType": "public",
    "foundedYear": 1977,
    "description": "A top public university located in singapore.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 11413,
    "internationalStudentsPct": 36,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 4,
    "applicationFeeUsd": 88,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "SUSS",
    "slug": "suss",
    "countrySlug": "singapore",
    "city": "Singapore",
    "website": "https://www.suss.edu.sg",
    "universityType": "public",
    "foundedYear": 1945,
    "description": "A top public university located in singapore.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 33419,
    "internationalStudentsPct": 29,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 823,
    "applicationFeeUsd": 101,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Singapore Polytechnic",
    "slug": "singapore-polytechnic",
    "countrySlug": "singapore",
    "city": "Singapore",
    "website": "https://www.sp.edu.sg",
    "universityType": "public",
    "foundedYear": 1926,
    "description": "A top public university located in singapore.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 24279,
    "internationalStudentsPct": 12,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 503,
    "applicationFeeUsd": 78,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "SIM Global Education",
    "slug": "sim-global-education",
    "countrySlug": "singapore",
    "city": "Singapore",
    "website": "https://www.sim.edu.sg",
    "universityType": "private",
    "foundedYear": 1984,
    "description": "A top private university located in singapore.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 34122,
    "internationalStudentsPct": 13,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 646,
    "applicationFeeUsd": 137,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Kaplan Higher Education",
    "slug": "kaplan-higher-education",
    "countrySlug": "singapore",
    "city": "Singapore",
    "website": "https://www.kaplan.com.sg",
    "universityType": "private",
    "foundedYear": 1959,
    "description": "A top private university located in singapore.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 17496,
    "internationalStudentsPct": 10,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 652,
    "applicationFeeUsd": 52,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "MDIS",
    "slug": "mdis",
    "countrySlug": "singapore",
    "city": "Singapore",
    "website": "https://www.mdis.edu.sg",
    "universityType": "private",
    "foundedYear": 1964,
    "description": "A top private university located in singapore.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 14912,
    "internationalStudentsPct": 39,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 672,
    "applicationFeeUsd": 85,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "PSB Academy",
    "slug": "psb-academy",
    "countrySlug": "singapore",
    "city": "Singapore",
    "website": "https://www.psb-academy.edu.sg",
    "universityType": "private",
    "foundedYear": 1924,
    "description": "A top private university located in singapore.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 38576,
    "internationalStudentsPct": 15,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 577,
    "applicationFeeUsd": 94,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "James Cook University Singapore",
    "slug": "james-cook-university-singapore",
    "countrySlug": "singapore",
    "city": "Singapore",
    "website": "https://www.jcu.edu.sg",
    "universityType": "private",
    "foundedYear": 1972,
    "description": "A top private university located in singapore.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 37997,
    "internationalStudentsPct": 33,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 722,
    "applicationFeeUsd": 80,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "United Arab Emirates University",
    "slug": "united-arab-emirates-university",
    "countrySlug": "uae",
    "city": "Al Ain",
    "website": "https://www.uaeu.ac.ae",
    "universityType": "public",
    "foundedYear": 1953,
    "description": "A top public university located in uae.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 13623,
    "internationalStudentsPct": 36,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 290,
    "applicationFeeUsd": 84,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Zayed University",
    "slug": "zayed-university",
    "countrySlug": "uae",
    "city": "Dubai",
    "website": "https://www.zu.ac.ae",
    "universityType": "public",
    "foundedYear": 1916,
    "description": "A top public university located in uae.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 14134,
    "internationalStudentsPct": 33,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 571,
    "applicationFeeUsd": 85,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Higher Colleges of Technology",
    "slug": "higher-colleges-of-technology",
    "countrySlug": "uae",
    "city": "Abu Dhabi",
    "website": "https://hct.ac.ae",
    "universityType": "public",
    "foundedYear": 1924,
    "description": "A top public university located in uae.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 38339,
    "internationalStudentsPct": 18,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 967,
    "applicationFeeUsd": 73,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Khalifa University",
    "slug": "khalifa-university",
    "countrySlug": "uae",
    "city": "Abu Dhabi",
    "website": "https://www.ku.ac.ae",
    "universityType": "public",
    "foundedYear": 1930,
    "description": "A top public university located in uae.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 34331,
    "internationalStudentsPct": 22,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 230,
    "applicationFeeUsd": 83,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Abu Dhabi University",
    "slug": "abu-dhabi-university",
    "countrySlug": "uae",
    "city": "Abu Dhabi",
    "website": "https://www.adu.ac.ae",
    "universityType": "public",
    "foundedYear": 1947,
    "description": "A top public university located in uae.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 35600,
    "internationalStudentsPct": 34,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 590,
    "applicationFeeUsd": 69,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "American University of Sharjah",
    "slug": "american-university-of-sharjah",
    "countrySlug": "uae",
    "city": "Sharjah",
    "website": "https://www.aus.edu",
    "universityType": "private",
    "foundedYear": 1931,
    "description": "A top private university located in uae.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 28395,
    "internationalStudentsPct": 29,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 364,
    "applicationFeeUsd": 88,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "American University in Dubai",
    "slug": "american-university-in-dubai",
    "countrySlug": "uae",
    "city": "Dubai",
    "website": "https://www.aud.edu",
    "universityType": "private",
    "foundedYear": 1974,
    "description": "A top private university located in uae.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 13690,
    "internationalStudentsPct": 38,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 34,
    "applicationFeeUsd": 92,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Sharjah",
    "slug": "university-of-sharjah",
    "countrySlug": "uae",
    "city": "Sharjah",
    "website": "https://www.sharjah.ac.ae",
    "universityType": "private",
    "foundedYear": 1950,
    "description": "A top private university located in uae.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 20966,
    "internationalStudentsPct": 30,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 364,
    "applicationFeeUsd": 105,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Canadian University Dubai",
    "slug": "canadian-university-dubai",
    "countrySlug": "uae",
    "city": "Dubai",
    "website": "https://www.cud.ac.ae",
    "universityType": "private",
    "foundedYear": 1975,
    "description": "A top private university located in uae.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 32460,
    "internationalStudentsPct": 13,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 34,
    "applicationFeeUsd": 75,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Middlesex University Dubai",
    "slug": "middlesex-university-dubai",
    "countrySlug": "uae",
    "city": "Dubai",
    "website": "https://www.mdx.ac.ae",
    "universityType": "private",
    "foundedYear": 1981,
    "description": "A top private university located in uae.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 16338,
    "internationalStudentsPct": 16,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 888,
    "applicationFeeUsd": 75,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Sorbonne University",
    "slug": "sorbonne-university",
    "countrySlug": "france",
    "city": "Abu Dhabi",
    "website": "https://www.sorbonne.ae",
    "universityType": "public",
    "foundedYear": 1909,
    "description": "A top public university located in france.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 14431,
    "internationalStudentsPct": 22,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 59,
    "applicationFeeUsd": 109,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Université Paris-Saclay",
    "slug": "universit-paris-saclay",
    "countrySlug": "france",
    "city": "Gif-sur-Yvette",
    "website": "https://www.universite-paris-saclay.fr",
    "universityType": "public",
    "foundedYear": 1970,
    "description": "A top public university located in france.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 35226,
    "internationalStudentsPct": 25,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 988,
    "applicationFeeUsd": 59,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "École Polytechnique",
    "slug": "cole-polytechnique",
    "countrySlug": "france",
    "city": "Palaiseau",
    "website": "https://www.polytechnique.edu",
    "universityType": "public",
    "foundedYear": 1956,
    "description": "A top public university located in france.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 22034,
    "internationalStudentsPct": 11,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 38,
    "applicationFeeUsd": 113,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Université de Paris",
    "slug": "universit-de-paris",
    "countrySlug": "france",
    "city": "Paris",
    "website": "https://u-paris.fr",
    "universityType": "public",
    "foundedYear": 1959,
    "description": "A top public university located in france.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 32265,
    "internationalStudentsPct": 27,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 596,
    "applicationFeeUsd": 107,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Aix-Marseille University",
    "slug": "aix-marseille-university",
    "countrySlug": "france",
    "city": "Marseille",
    "website": "https://www.univ-amu.fr",
    "universityType": "public",
    "foundedYear": 1987,
    "description": "A top public university located in france.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 34402,
    "internationalStudentsPct": 31,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 524,
    "applicationFeeUsd": 122,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "HEC Paris",
    "slug": "hec-paris",
    "countrySlug": "france",
    "city": "Jouy-en-Josas",
    "website": "https://www.hec.edu",
    "universityType": "private",
    "foundedYear": 1907,
    "description": "A top private university located in france.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 28045,
    "internationalStudentsPct": 38,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 518,
    "applicationFeeUsd": 79,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "INSEAD",
    "slug": "insead",
    "countrySlug": "france",
    "city": "Fontainebleau",
    "website": "https://www.insead.edu",
    "universityType": "private",
    "foundedYear": 1997,
    "description": "A top private university located in france.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 13625,
    "internationalStudentsPct": 19,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 909,
    "applicationFeeUsd": 83,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "ESSEC Business School",
    "slug": "essec-business-school",
    "countrySlug": "france",
    "city": "Cergy",
    "website": "https://www.essec.edu",
    "universityType": "private",
    "foundedYear": 1991,
    "description": "A top private university located in france.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 15416,
    "internationalStudentsPct": 26,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 840,
    "applicationFeeUsd": 107,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "ESCP Europe",
    "slug": "escp-europe",
    "countrySlug": "france",
    "city": "Paris",
    "website": "https://escp.eu",
    "universityType": "private",
    "foundedYear": 1947,
    "description": "A top private university located in france.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 22685,
    "internationalStudentsPct": 30,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 816,
    "applicationFeeUsd": 83,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "EDHEC Business School",
    "slug": "edhec-business-school",
    "countrySlug": "france",
    "city": "Lille",
    "website": "https://www.edhec.edu",
    "universityType": "private",
    "foundedYear": 1973,
    "description": "A top private university located in france.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 13537,
    "internationalStudentsPct": 36,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 542,
    "applicationFeeUsd": 87,
    "avgTuitionUsd": 40000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Lomonosov Moscow State University",
    "slug": "lomonosov-moscow-state-university",
    "countrySlug": "russia",
    "city": "Moscow",
    "website": "https://www.msu.ru",
    "universityType": "public",
    "foundedYear": 1959,
    "description": "A top public university located in russia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 32142,
    "internationalStudentsPct": 17,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 574,
    "applicationFeeUsd": 90,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Saint Petersburg State University",
    "slug": "saint-petersburg-state-university",
    "countrySlug": "russia",
    "city": "Saint Petersburg",
    "website": "https://english.spbu.ru",
    "universityType": "public",
    "foundedYear": 1910,
    "description": "A top public university located in russia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 12448,
    "internationalStudentsPct": 34,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 915,
    "applicationFeeUsd": 148,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Novosibirsk State University",
    "slug": "novosibirsk-state-university",
    "countrySlug": "russia",
    "city": "Novosibirsk",
    "website": "https://english.nsu.ru",
    "universityType": "public",
    "foundedYear": 1911,
    "description": "A top public university located in russia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 14786,
    "internationalStudentsPct": 17,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 858,
    "applicationFeeUsd": 110,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Tsinghua University",
    "slug": "tsinghua-university",
    "countrySlug": "china",
    "city": "Beijing",
    "website": "https://www.tsinghua.edu.cn",
    "universityType": "public",
    "foundedYear": 1916,
    "description": "A top public university located in china.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 35554,
    "internationalStudentsPct": 35,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 25,
    "applicationFeeUsd": 52,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Peking University",
    "slug": "peking-university",
    "countrySlug": "china",
    "city": "Beijing",
    "website": "https://english.pku.edu.cn",
    "universityType": "public",
    "foundedYear": 1930,
    "description": "A top public university located in china.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 25866,
    "internationalStudentsPct": 12,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 17,
    "applicationFeeUsd": 93,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Fudan University",
    "slug": "fudan-university",
    "countrySlug": "china",
    "city": "Shanghai",
    "website": "https://www.fudan.edu.cn",
    "universityType": "public",
    "foundedYear": 1926,
    "description": "A top public university located in china.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 29157,
    "internationalStudentsPct": 16,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 50,
    "applicationFeeUsd": 123,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Wageningen University",
    "slug": "wageningen-university",
    "countrySlug": "netherlands",
    "city": "Wageningen",
    "website": "https://www.wur.nl",
    "universityType": "public",
    "foundedYear": 1957,
    "description": "A top public university located in netherlands.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 10799,
    "internationalStudentsPct": 21,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 835,
    "applicationFeeUsd": 78,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Leiden University",
    "slug": "leiden-university",
    "countrySlug": "netherlands",
    "city": "Leiden",
    "website": "https://www.universiteitleiden.nl",
    "universityType": "public",
    "foundedYear": 1946,
    "description": "A top public university located in netherlands.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 24882,
    "internationalStudentsPct": 22,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 851,
    "applicationFeeUsd": 79,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Utrecht University",
    "slug": "utrecht-university",
    "countrySlug": "netherlands",
    "city": "Utrecht",
    "website": "https://www.uu.nl",
    "universityType": "public",
    "foundedYear": 1968,
    "description": "A top public university located in netherlands.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 20746,
    "internationalStudentsPct": 29,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 859,
    "applicationFeeUsd": 73,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "KU Leuven",
    "slug": "ku-leuven",
    "countrySlug": "belgium",
    "city": "Leuven",
    "website": "https://www.kuleuven.be",
    "universityType": "public",
    "foundedYear": 1926,
    "description": "A top public university located in belgium.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 28262,
    "internationalStudentsPct": 17,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 61,
    "applicationFeeUsd": 114,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Ghent University",
    "slug": "ghent-university",
    "countrySlug": "belgium",
    "city": "Ghent",
    "website": "https://www.ugent.be",
    "universityType": "public",
    "foundedYear": 1922,
    "description": "A top public university located in belgium.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 15692,
    "internationalStudentsPct": 11,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 26,
    "applicationFeeUsd": 114,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Université catholique de Louvain",
    "slug": "universit-catholique-de-louvain",
    "countrySlug": "belgium",
    "city": "Louvain-la-Neuve",
    "website": "https://uclouvain.be",
    "universityType": "public",
    "foundedYear": 1937,
    "description": "A top public university located in belgium.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 28019,
    "internationalStudentsPct": 14,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 646,
    "applicationFeeUsd": 137,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Warsaw",
    "slug": "university-of-warsaw",
    "countrySlug": "poland",
    "city": "Warsaw",
    "website": "https://en.uw.edu.pl",
    "universityType": "public",
    "foundedYear": 1953,
    "description": "A top public university located in poland.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 18266,
    "internationalStudentsPct": 11,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 551,
    "applicationFeeUsd": 87,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Jagiellonian University",
    "slug": "jagiellonian-university",
    "countrySlug": "poland",
    "city": "Kraków",
    "website": "https://en.uj.edu.pl",
    "universityType": "public",
    "foundedYear": 1947,
    "description": "A top public university located in poland.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 24004,
    "internationalStudentsPct": 14,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 34,
    "applicationFeeUsd": 118,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Warsaw University of Technology",
    "slug": "warsaw-university-of-technology",
    "countrySlug": "poland",
    "city": "Warsaw",
    "website": "https://www.pw.edu.pl",
    "universityType": "public",
    "foundedYear": 1971,
    "description": "A top public university located in poland.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 38159,
    "internationalStudentsPct": 39,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 567,
    "applicationFeeUsd": 62,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Vienna",
    "slug": "university-of-vienna",
    "countrySlug": "austria",
    "city": "Vienna",
    "website": "https://www.univie.ac.at",
    "universityType": "public",
    "foundedYear": 1956,
    "description": "A top public university located in austria.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 12655,
    "internationalStudentsPct": 38,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 844,
    "applicationFeeUsd": 89,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "TU Wien",
    "slug": "tu-wien",
    "countrySlug": "austria",
    "city": "Vienna",
    "website": "https://www.tuwien.at",
    "universityType": "public",
    "foundedYear": 1979,
    "description": "A top public university located in austria.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 36426,
    "internationalStudentsPct": 22,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 615,
    "applicationFeeUsd": 75,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Medical University of Vienna",
    "slug": "medical-university-of-vienna",
    "countrySlug": "austria",
    "city": "Vienna",
    "website": "https://www.meduniwien.ac.at",
    "universityType": "public",
    "foundedYear": 1949,
    "description": "A top public university located in austria.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 39624,
    "internationalStudentsPct": 17,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 877,
    "applicationFeeUsd": 82,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Zurich",
    "slug": "university-of-zurich",
    "countrySlug": "switzerland",
    "city": "Zurich",
    "website": "https://www.uzh.ch",
    "universityType": "public",
    "foundedYear": 1999,
    "description": "A top public university located in switzerland.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 12202,
    "internationalStudentsPct": 22,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 783,
    "applicationFeeUsd": 70,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Geneva",
    "slug": "university-of-geneva",
    "countrySlug": "switzerland",
    "city": "Geneva",
    "website": "https://www.unige.ch",
    "universityType": "public",
    "foundedYear": 1966,
    "description": "A top public university located in switzerland.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 20536,
    "internationalStudentsPct": 26,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 755,
    "applicationFeeUsd": 76,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Bern",
    "slug": "university-of-bern",
    "countrySlug": "switzerland",
    "city": "Bern",
    "website": "https://www.unibe.ch",
    "universityType": "public",
    "foundedYear": 1962,
    "description": "A top public university located in switzerland.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 14089,
    "internationalStudentsPct": 14,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 712,
    "applicationFeeUsd": 143,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Lisbon",
    "slug": "university-of-lisbon",
    "countrySlug": "portugal",
    "city": "Lisbon",
    "website": "https://www.ulisboa.pt",
    "universityType": "public",
    "foundedYear": 1921,
    "description": "A top public university located in portugal.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 20404,
    "internationalStudentsPct": 27,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 766,
    "applicationFeeUsd": 94,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Porto",
    "slug": "university-of-porto",
    "countrySlug": "portugal",
    "city": "Porto",
    "website": "https://sigarra.up.pt",
    "universityType": "public",
    "foundedYear": 1937,
    "description": "A top public university located in portugal.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 21288,
    "internationalStudentsPct": 29,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 680,
    "applicationFeeUsd": 62,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Coimbra",
    "slug": "university-of-coimbra",
    "countrySlug": "portugal",
    "city": "Coimbra",
    "website": "https://www.uc.pt",
    "universityType": "public",
    "foundedYear": 1966,
    "description": "A top public university located in portugal.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 30502,
    "internationalStudentsPct": 34,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 731,
    "applicationFeeUsd": 79,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Barcelona",
    "slug": "university-of-barcelona",
    "countrySlug": "spain",
    "city": "Barcelona",
    "website": "https://www.ub.edu",
    "universityType": "public",
    "foundedYear": 1961,
    "description": "A top public university located in spain.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 21645,
    "internationalStudentsPct": 13,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 796,
    "applicationFeeUsd": 123,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Autonomous University of Madrid",
    "slug": "autonomous-university-of-madrid",
    "countrySlug": "spain",
    "city": "Madrid",
    "website": "https://www.uam.es",
    "universityType": "public",
    "foundedYear": 1966,
    "description": "A top public university located in spain.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 20479,
    "internationalStudentsPct": 31,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 819,
    "applicationFeeUsd": 135,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Complutense University of Madrid",
    "slug": "complutense-university-of-madrid",
    "countrySlug": "spain",
    "city": "Madrid",
    "website": "https://www.ucm.es",
    "universityType": "public",
    "foundedYear": 1901,
    "description": "A top public university located in spain.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 23252,
    "internationalStudentsPct": 23,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 964,
    "applicationFeeUsd": 103,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University College Dublin",
    "slug": "university-college-dublin",
    "countrySlug": "ireland",
    "city": "Dublin",
    "website": "https://www.ucd.ie",
    "universityType": "public",
    "foundedYear": 1953,
    "description": "A top public university located in ireland.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 19306,
    "internationalStudentsPct": 32,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 503,
    "applicationFeeUsd": 139,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "National University of Ireland Galway",
    "slug": "national-university-of-ireland-galway",
    "countrySlug": "ireland",
    "city": "Galway",
    "website": "https://www.universityofgalway.ie",
    "universityType": "public",
    "foundedYear": 1944,
    "description": "A top public university located in ireland.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 35422,
    "internationalStudentsPct": 27,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 641,
    "applicationFeeUsd": 72,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "UCC",
    "slug": "ucc",
    "countrySlug": "ireland",
    "city": "Cork",
    "website": "https://www.ucc.ie",
    "universityType": "public",
    "foundedYear": 1996,
    "description": "A top public university located in ireland.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 39277,
    "internationalStudentsPct": 36,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 663,
    "applicationFeeUsd": 108,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Karolinska Institute",
    "slug": "karolinska-institute",
    "countrySlug": "sweden",
    "city": "Solna",
    "website": "https://ki.se",
    "universityType": "public",
    "foundedYear": 1937,
    "description": "A top public university located in sweden.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 15325,
    "internationalStudentsPct": 18,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 802,
    "applicationFeeUsd": 146,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Lund University",
    "slug": "lund-university",
    "countrySlug": "sweden",
    "city": "Lund",
    "website": "https://www.lunduniversity.lu.se",
    "universityType": "public",
    "foundedYear": 1922,
    "description": "A top public university located in sweden.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 12117,
    "internationalStudentsPct": 18,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 85,
    "applicationFeeUsd": 87,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Uppsala University",
    "slug": "uppsala-university",
    "countrySlug": "sweden",
    "city": "Uppsala",
    "website": "https://www.uu.se",
    "universityType": "public",
    "foundedYear": 1972,
    "description": "A top public university located in sweden.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 28359,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 105,
    "applicationFeeUsd": 50,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Bologna",
    "slug": "university-of-bologna",
    "countrySlug": "italy",
    "city": "Bologna",
    "website": "https://www.unibo.it",
    "universityType": "public",
    "foundedYear": 1986,
    "description": "A top public university located in italy.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 27523,
    "internationalStudentsPct": 24,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 712,
    "applicationFeeUsd": 135,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Sapienza University of Rome",
    "slug": "sapienza-university-of-rome",
    "countrySlug": "italy",
    "city": "Rome",
    "website": "https://www.uniroma1.it",
    "universityType": "public",
    "foundedYear": 1933,
    "description": "A top public university located in italy.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 34076,
    "internationalStudentsPct": 32,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 630,
    "applicationFeeUsd": 95,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Padua",
    "slug": "university-of-padua",
    "countrySlug": "italy",
    "city": "Padua",
    "website": "https://www.unipd.it",
    "universityType": "public",
    "foundedYear": 1982,
    "description": "A top public university located in italy.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 16921,
    "internationalStudentsPct": 21,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 783,
    "applicationFeeUsd": 60,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Oslo",
    "slug": "university-of-oslo",
    "countrySlug": "norway",
    "city": "Oslo",
    "website": "https://www.uio.no",
    "universityType": "public",
    "foundedYear": 1952,
    "description": "A top public university located in norway.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 31934,
    "internationalStudentsPct": 39,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 117,
    "applicationFeeUsd": 96,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Bergen",
    "slug": "university-of-bergen",
    "countrySlug": "norway",
    "city": "Bergen",
    "website": "https://www.uib.no",
    "universityType": "public",
    "foundedYear": 1937,
    "description": "A top public university located in norway.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 37104,
    "internationalStudentsPct": 34,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 973,
    "applicationFeeUsd": 70,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "NTNU",
    "slug": "ntnu",
    "countrySlug": "norway",
    "city": "Trondheim",
    "website": "https://www.ntnu.edu",
    "universityType": "public",
    "foundedYear": 1941,
    "description": "A top public university located in norway.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 24602,
    "internationalStudentsPct": 33,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 519,
    "applicationFeeUsd": 139,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Helsinki",
    "slug": "university-of-helsinki",
    "countrySlug": "finland",
    "city": "Helsinki",
    "website": "https://www.helsinki.fi",
    "universityType": "public",
    "foundedYear": 1983,
    "description": "A top public university located in finland.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 34031,
    "internationalStudentsPct": 35,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 764,
    "applicationFeeUsd": 60,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Aalto University",
    "slug": "aalto-university",
    "countrySlug": "finland",
    "city": "Espoo",
    "website": "https://www.aalto.fi",
    "universityType": "public",
    "foundedYear": 1964,
    "description": "A top public university located in finland.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 34343,
    "internationalStudentsPct": 34,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 975,
    "applicationFeeUsd": 56,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Turku",
    "slug": "university-of-turku",
    "countrySlug": "finland",
    "city": "Turku",
    "website": "https://www.utu.fi",
    "universityType": "public",
    "foundedYear": 1943,
    "description": "A top public university located in finland.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 36949,
    "internationalStudentsPct": 39,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 640,
    "applicationFeeUsd": 102,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Copenhagen",
    "slug": "university-of-copenhagen",
    "countrySlug": "denmark",
    "city": "Copenhagen",
    "website": "https://www.ku.dk",
    "universityType": "public",
    "foundedYear": 1963,
    "description": "A top public university located in denmark.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 10167,
    "internationalStudentsPct": 21,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 107,
    "applicationFeeUsd": 144,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Technical University of Denmark",
    "slug": "technical-university-of-denmark",
    "countrySlug": "denmark",
    "city": "Kongens Lyngby",
    "website": "https://www.dtu.dk",
    "universityType": "public",
    "foundedYear": 1986,
    "description": "A top public university located in denmark.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 29205,
    "internationalStudentsPct": 12,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 121,
    "applicationFeeUsd": 137,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Aarhus University",
    "slug": "aarhus-university",
    "countrySlug": "denmark",
    "city": "Aarhus",
    "website": "https://international.au.dk",
    "universityType": "public",
    "foundedYear": 1951,
    "description": "A top public university located in denmark.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 16188,
    "internationalStudentsPct": 37,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 507,
    "applicationFeeUsd": 69,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Universiti Malaya",
    "slug": "universiti-malaya",
    "countrySlug": "malaysia",
    "city": "Kuala Lumpur",
    "website": "https://um.edu.my",
    "universityType": "public",
    "foundedYear": 1999,
    "description": "A top public university located in malaysia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 34674,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 732,
    "applicationFeeUsd": 103,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Universiti Putra Malaysia",
    "slug": "universiti-putra-malaysia",
    "countrySlug": "malaysia",
    "city": "Serdang",
    "website": "https://upm.edu.my",
    "universityType": "public",
    "foundedYear": 1921,
    "description": "A top public university located in malaysia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 27637,
    "internationalStudentsPct": 18,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 738,
    "applicationFeeUsd": 147,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Universiti Kebangsaan Malaysia",
    "slug": "universiti-kebangsaan-malaysia",
    "countrySlug": "malaysia",
    "city": "Bangi",
    "website": "https://www.ukm.my",
    "universityType": "public",
    "foundedYear": 1998,
    "description": "A top public university located in malaysia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 24633,
    "internationalStudentsPct": 10,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 930,
    "applicationFeeUsd": 132,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Luxembourg",
    "slug": "university-of-luxembourg",
    "countrySlug": "luxembourg",
    "city": "Esch-sur-Alzette",
    "website": "https://www.uni.lu",
    "universityType": "public",
    "foundedYear": 1955,
    "description": "A top public university located in luxembourg.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 38626,
    "internationalStudentsPct": 15,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 910,
    "applicationFeeUsd": 132,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Luxembourg School of Business",
    "slug": "luxembourg-school-of-business",
    "countrySlug": "luxembourg",
    "city": "Luxembourg City",
    "website": "https://luxsb.lu",
    "universityType": "public",
    "foundedYear": 1962,
    "description": "A top public university located in luxembourg.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 32908,
    "internationalStudentsPct": 27,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 724,
    "applicationFeeUsd": 118,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "LUNEX University",
    "slug": "lunex-university",
    "countrySlug": "luxembourg",
    "city": "Differdange",
    "website": "https://www.lunex-university.net",
    "universityType": "public",
    "foundedYear": 1932,
    "description": "A top public university located in luxembourg.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 23704,
    "internationalStudentsPct": 23,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 976,
    "applicationFeeUsd": 101,
    "avgTuitionUsd": 15000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  }

];
universities.push(...generatedUniversities);

const newUsUnis = [
  {
    "name": "Northwestern University",
    "slug": "northwestern-university",
    "countrySlug": "united-states",
    "city": "Evanston",
    "stateProvince": "Illinois",
    "website": "https://www.northwestern.edu",
    "universityType": "private",
    "foundedYear": 1851,
    "description": "A top private university located in united-states.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 22000,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 32,
    "applicationFeeUsd": 75,
    "avgTuitionUsd": 64887,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Chicago",
    "slug": "university-of-chicago",
    "countrySlug": "united-states",
    "city": "Chicago",
    "stateProvince": "Illinois",
    "website": "https://www.uchicago.edu",
    "universityType": "private",
    "foundedYear": 1890,
    "description": "A top private university located in united-states.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 18000,
    "internationalStudentsPct": 25,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 10,
    "applicationFeeUsd": 75,
    "avgTuitionUsd": 63801,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Cornell University",
    "slug": "cornell-university",
    "countrySlug": "united-states",
    "city": "Ithaca",
    "stateProvince": "New York",
    "website": "https://www.cornell.edu",
    "universityType": "private",
    "foundedYear": 1865,
    "description": "A top private university located in united-states.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 24,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 20,
    "applicationFeeUsd": 80,
    "avgTuitionUsd": 62456,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Pennsylvania",
    "slug": "university-of-pennsylvania",
    "countrySlug": "united-states",
    "city": "Philadelphia",
    "stateProvince": "Pennsylvania",
    "website": "https://www.upenn.edu",
    "universityType": "private",
    "foundedYear": 1740,
    "description": "A top private university located in united-states.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 28000,
    "internationalStudentsPct": 21,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 13,
    "applicationFeeUsd": 75,
    "avgTuitionUsd": 63452,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Johns Hopkins University",
    "slug": "johns-hopkins-university",
    "countrySlug": "united-states",
    "city": "Baltimore",
    "stateProvince": "Maryland",
    "website": "https://www.jhu.edu",
    "universityType": "private",
    "foundedYear": 1876,
    "description": "A top private university located in united-states.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 27000,
    "internationalStudentsPct": 28,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 24,
    "applicationFeeUsd": 70,
    "avgTuitionUsd": 60480,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "New York University",
    "slug": "new-york-university",
    "countrySlug": "united-states",
    "city": "New York",
    "stateProvince": "New York",
    "website": "https://www.nyu.edu",
    "universityType": "private",
    "foundedYear": 1831,
    "description": "A top private university located in united-states.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 58000,
    "internationalStudentsPct": 32,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 39,
    "applicationFeeUsd": 80,
    "avgTuitionUsd": 58226,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Brown University",
    "slug": "brown-university",
    "countrySlug": "united-states",
    "city": "Providence",
    "stateProvince": "Rhode Island",
    "website": "https://www.brown.edu",
    "universityType": "private",
    "foundedYear": 1764,
    "description": "A top private university located in united-states.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 10000,
    "internationalStudentsPct": 15,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 60,
    "applicationFeeUsd": 75,
    "avgTuitionUsd": 65146,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Duke University",
    "slug": "duke-university",
    "countrySlug": "united-states",
    "city": "Durham",
    "stateProvince": "North Carolina",
    "website": "https://www.duke.edu",
    "universityType": "private",
    "foundedYear": 1838,
    "description": "A top private university located in united-states.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts"
    ],
    "totalStudents": 16000,
    "internationalStudentsPct": 18,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 50,
    "applicationFeeUsd": 85,
    "avgTuitionUsd": 63054,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  }
];
universities.push(...newUsUnis);

const dartmouthUni = [
  {
    "name": "Dartmouth College",
    "slug": "dartmouth-college",
    "countrySlug": "united-states",
    "city": "Hanover",
    "stateProvince": "New Hampshire",
    "website": "https://home.dartmouth.edu",
    "universityType": "private",
    "foundedYear": 1769,
    "description": "A top private university located in united-states.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 6500,
    "internationalStudentsPct": 15,
    "intakes": [
      "Fall"
    ],
    "qsRanking": 237,
    "applicationFeeUsd": 80,
    "avgTuitionUsd": 63684,
    "avgLivingCostUsd": 18000,
    "minGpa": 3,
    "minIelts": 7,
    "minToefl": 100,
    "verificationStatus": "verified"
  }
];
universities.push(...dartmouthUni);

const newUkUnis = [
  {
    "name": "University of Birmingham",
    "slug": "university-of-birmingham",
    "countrySlug": "united-kingdom",
    "city": "UK City",
    "stateProvince": "UK State",
    "website": "https://www.university-of-birmingham.ac.uk",
    "universityType": "public",
    "foundedYear": 1900,
    "description": "A top public university located in the united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 100,
    "applicationFeeUsd": 60,
    "avgTuitionUsd": 30000,
    "avgLivingCostUsd": 15000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Bristol",
    "slug": "university-of-bristol",
    "countrySlug": "united-kingdom",
    "city": "UK City",
    "stateProvince": "UK State",
    "website": "https://www.university-of-bristol.ac.uk",
    "universityType": "public",
    "foundedYear": 1901,
    "description": "A top public university located in the united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 101,
    "applicationFeeUsd": 60,
    "avgTuitionUsd": 30000,
    "avgLivingCostUsd": 15000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Cardiff University",
    "slug": "cardiff-university",
    "countrySlug": "united-kingdom",
    "city": "UK City",
    "stateProvince": "UK State",
    "website": "https://www.cardiff-university.ac.uk",
    "universityType": "public",
    "foundedYear": 1902,
    "description": "A top public university located in the united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 102,
    "applicationFeeUsd": 60,
    "avgTuitionUsd": 30000,
    "avgLivingCostUsd": 15000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Durham University",
    "slug": "durham-university",
    "countrySlug": "united-kingdom",
    "city": "UK City",
    "stateProvince": "UK State",
    "website": "https://www.durham-university.ac.uk",
    "universityType": "public",
    "foundedYear": 1903,
    "description": "A top public university located in the united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 103,
    "applicationFeeUsd": 60,
    "avgTuitionUsd": 30000,
    "avgLivingCostUsd": 15000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Exeter",
    "slug": "university-of-exeter",
    "countrySlug": "united-kingdom",
    "city": "UK City",
    "stateProvince": "UK State",
    "website": "https://www.university-of-exeter.ac.uk",
    "universityType": "public",
    "foundedYear": 1904,
    "description": "A top public university located in the united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 104,
    "applicationFeeUsd": 60,
    "avgTuitionUsd": 30000,
    "avgLivingCostUsd": 15000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Glasgow",
    "slug": "university-of-glasgow",
    "countrySlug": "united-kingdom",
    "city": "UK City",
    "stateProvince": "UK State",
    "website": "https://www.university-of-glasgow.ac.uk",
    "universityType": "public",
    "foundedYear": 1905,
    "description": "A top public university located in the united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 105,
    "applicationFeeUsd": 60,
    "avgTuitionUsd": 30000,
    "avgLivingCostUsd": 15000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Leeds",
    "slug": "university-of-leeds",
    "countrySlug": "united-kingdom",
    "city": "UK City",
    "stateProvince": "UK State",
    "website": "https://www.university-of-leeds.ac.uk",
    "universityType": "public",
    "foundedYear": 1906,
    "description": "A top public university located in the united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 106,
    "applicationFeeUsd": 60,
    "avgTuitionUsd": 30000,
    "avgLivingCostUsd": 15000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Liverpool",
    "slug": "university-of-liverpool",
    "countrySlug": "united-kingdom",
    "city": "UK City",
    "stateProvince": "UK State",
    "website": "https://www.university-of-liverpool.ac.uk",
    "universityType": "public",
    "foundedYear": 1907,
    "description": "A top public university located in the united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 107,
    "applicationFeeUsd": 60,
    "avgTuitionUsd": 30000,
    "avgLivingCostUsd": 15000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Newcastle University",
    "slug": "newcastle-university",
    "countrySlug": "united-kingdom",
    "city": "UK City",
    "stateProvince": "UK State",
    "website": "https://www.newcastle-university.ac.uk",
    "universityType": "public",
    "foundedYear": 1908,
    "description": "A top public university located in the united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 108,
    "applicationFeeUsd": 60,
    "avgTuitionUsd": 30000,
    "avgLivingCostUsd": 15000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Nottingham",
    "slug": "university-of-nottingham",
    "countrySlug": "united-kingdom",
    "city": "UK City",
    "stateProvince": "UK State",
    "website": "https://www.university-of-nottingham.ac.uk",
    "universityType": "public",
    "foundedYear": 1909,
    "description": "A top public university located in the united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 109,
    "applicationFeeUsd": 60,
    "avgTuitionUsd": 30000,
    "avgLivingCostUsd": 15000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Queen Mary University of London",
    "slug": "queen-mary-university-of-london",
    "countrySlug": "united-kingdom",
    "city": "UK City",
    "stateProvince": "UK State",
    "website": "https://www.queen-mary-university-of-london.ac.uk",
    "universityType": "public",
    "foundedYear": 1910,
    "description": "A top public university located in the united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 110,
    "applicationFeeUsd": 60,
    "avgTuitionUsd": 30000,
    "avgLivingCostUsd": 15000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Queen's University Belfast",
    "slug": "queen-s-university-belfast",
    "countrySlug": "united-kingdom",
    "city": "UK City",
    "stateProvince": "UK State",
    "website": "https://www.queen-s-university-belfast.ac.uk",
    "universityType": "public",
    "foundedYear": 1911,
    "description": "A top public university located in the united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 111,
    "applicationFeeUsd": 60,
    "avgTuitionUsd": 30000,
    "avgLivingCostUsd": 15000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Sheffield",
    "slug": "university-of-sheffield",
    "countrySlug": "united-kingdom",
    "city": "UK City",
    "stateProvince": "UK State",
    "website": "https://www.university-of-sheffield.ac.uk",
    "universityType": "public",
    "foundedYear": 1912,
    "description": "A top public university located in the united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 112,
    "applicationFeeUsd": 60,
    "avgTuitionUsd": 30000,
    "avgLivingCostUsd": 15000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Southampton",
    "slug": "university-of-southampton",
    "countrySlug": "united-kingdom",
    "city": "UK City",
    "stateProvince": "UK State",
    "website": "https://www.university-of-southampton.ac.uk",
    "universityType": "public",
    "foundedYear": 1913,
    "description": "A top public university located in the united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 113,
    "applicationFeeUsd": 60,
    "avgTuitionUsd": 30000,
    "avgLivingCostUsd": 15000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of York",
    "slug": "university-of-york",
    "countrySlug": "united-kingdom",
    "city": "UK City",
    "stateProvince": "UK State",
    "website": "https://www.university-of-york.ac.uk",
    "universityType": "public",
    "foundedYear": 1914,
    "description": "A top public university located in the united-kingdom.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 114,
    "applicationFeeUsd": 60,
    "avgTuitionUsd": 30000,
    "avgLivingCostUsd": 15000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  }
];
universities.push(...newUkUnis);

const newCanadaUnis = [
  {
    "name": "University of Manitoba",
    "slug": "university-of-manitoba",
    "countrySlug": "canada",
    "city": "Canadian City",
    "stateProvince": "Canadian Province",
    "website": "https://www.university-of-manitoba.ca",
    "universityType": "public",
    "foundedYear": 1850,
    "description": "A top public university located in canada.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Winter"
    ],
    "qsRanking": 200,
    "applicationFeeUsd": 100,
    "avgTuitionUsd": 25000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Dalhousie University",
    "slug": "dalhousie-university",
    "countrySlug": "canada",
    "city": "Canadian City",
    "stateProvince": "Canadian Province",
    "website": "https://www.dalhousie-university.ca",
    "universityType": "public",
    "foundedYear": 1851,
    "description": "A top public university located in canada.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Winter"
    ],
    "qsRanking": 201,
    "applicationFeeUsd": 100,
    "avgTuitionUsd": 25000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Queen's University",
    "slug": "queen-s-university",
    "countrySlug": "canada",
    "city": "Canadian City",
    "stateProvince": "Canadian Province",
    "website": "https://www.queen-s-university.ca",
    "universityType": "public",
    "foundedYear": 1852,
    "description": "A top public university located in canada.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Winter"
    ],
    "qsRanking": 202,
    "applicationFeeUsd": 100,
    "avgTuitionUsd": 25000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Ottawa",
    "slug": "university-of-ottawa",
    "countrySlug": "canada",
    "city": "Canadian City",
    "stateProvince": "Canadian Province",
    "website": "https://www.university-of-ottawa.ca",
    "universityType": "public",
    "foundedYear": 1853,
    "description": "A top public university located in canada.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Winter"
    ],
    "qsRanking": 203,
    "applicationFeeUsd": 100,
    "avgTuitionUsd": 25000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Western University",
    "slug": "western-university",
    "countrySlug": "canada",
    "city": "Canadian City",
    "stateProvince": "Canadian Province",
    "website": "https://www.western-university.ca",
    "universityType": "public",
    "foundedYear": 1854,
    "description": "A top public university located in canada.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Winter"
    ],
    "qsRanking": 204,
    "applicationFeeUsd": 100,
    "avgTuitionUsd": 25000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Université Laval",
    "slug": "universit-laval",
    "countrySlug": "canada",
    "city": "Canadian City",
    "stateProvince": "Canadian Province",
    "website": "https://www.universit-laval.ca",
    "universityType": "public",
    "foundedYear": 1855,
    "description": "A top public university located in canada.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Winter"
    ],
    "qsRanking": 205,
    "applicationFeeUsd": 100,
    "avgTuitionUsd": 25000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Saskatchewan",
    "slug": "university-of-saskatchewan",
    "countrySlug": "canada",
    "city": "Canadian City",
    "stateProvince": "Canadian Province",
    "website": "https://www.university-of-saskatchewan.ca",
    "universityType": "public",
    "foundedYear": 1856,
    "description": "A top public university located in canada.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "Fall",
      "Winter"
    ],
    "qsRanking": 206,
    "applicationFeeUsd": 100,
    "avgTuitionUsd": 25000,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  }
];
universities.push(...newCanadaUnis);

const newChinaUnis = [
  {
    "name": "Shanghai Jiao Tong University",
    "slug": "shanghai-jiao-tong-university",
    "countrySlug": "china",
    "city": "Chinese City",
    "stateProvince": "Chinese Province",
    "website": "https://www.shanghai.edu.cn",
    "universityType": "public",
    "foundedYear": 1890,
    "description": "A top public university located in China.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 35000,
    "internationalStudentsPct": 10,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 40,
    "applicationFeeUsd": 50,
    "avgTuitionUsd": 5000,
    "avgLivingCostUsd": 6000,
    "minGpa": 3.5,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Zhejiang University",
    "slug": "zhejiang-university",
    "countrySlug": "china",
    "city": "Chinese City",
    "stateProvince": "Chinese Province",
    "website": "https://www.zhejiang.edu.cn",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/Zhejiang_University_Logo.svg/1200px-Zhejiang_University_Logo.svg.png",
    "universityType": "public",
    "foundedYear": 1891,
    "description": "A top public university located in China.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 35000,
    "internationalStudentsPct": 10,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 41,
    "applicationFeeUsd": 50,
    "avgTuitionUsd": 5000,
    "avgLivingCostUsd": 6000,
    "minGpa": 3.5,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Nanjing University",
    "slug": "nanjing-university",
    "countrySlug": "china",
    "city": "Chinese City",
    "stateProvince": "Chinese Province",
    "website": "https://www.nanjing.edu.cn",
    "universityType": "public",
    "foundedYear": 1892,
    "description": "A top public university located in China.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 35000,
    "internationalStudentsPct": 10,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 42,
    "applicationFeeUsd": 50,
    "avgTuitionUsd": 5000,
    "avgLivingCostUsd": 6000,
    "minGpa": 3.5,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Science and Technology of China (USTC)",
    "slug": "university-of-science-and-technology-of-china-ustc",
    "countrySlug": "china",
    "city": "Chinese City",
    "stateProvince": "Chinese Province",
    "website": "https://www.university.edu.cn",
    "universityType": "public",
    "foundedYear": 1893,
    "description": "A top public university located in China.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 35000,
    "internationalStudentsPct": 10,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 43,
    "applicationFeeUsd": 50,
    "avgTuitionUsd": 5000,
    "avgLivingCostUsd": 6000,
    "minGpa": 3.5,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Harbin Institute of Technology",
    "slug": "harbin-institute-of-technology",
    "countrySlug": "china",
    "city": "Chinese City",
    "stateProvince": "Chinese Province",
    "website": "https://www.harbin.edu.cn",
    "universityType": "public",
    "foundedYear": 1894,
    "description": "A top public university located in China.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 35000,
    "internationalStudentsPct": 10,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 44,
    "applicationFeeUsd": 50,
    "avgTuitionUsd": 5000,
    "avgLivingCostUsd": 6000,
    "minGpa": 3.5,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Xi'an Jiaotong University",
    "slug": "xi-an-jiaotong-university",
    "countrySlug": "china",
    "city": "Chinese City",
    "stateProvince": "Chinese Province",
    "website": "https://www.xi.edu.cn",
    "universityType": "public",
    "foundedYear": 1895,
    "description": "A top public university located in China.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 35000,
    "internationalStudentsPct": 10,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 45,
    "applicationFeeUsd": 50,
    "avgTuitionUsd": 5000,
    "avgLivingCostUsd": 6000,
    "minGpa": 3.5,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  }
];
universities.push(...newChinaUnis);

const newAusUnis = [
  {
    "name": "Adelaide University",
    "slug": "adelaide-university",
    "countrySlug": "australia",
    "city": "Adelaide",
    "stateProvince": "South Australia",
    "website": "https://www.adelaide.edu.au",
    "universityType": "public",
    "foundedYear": 1874,
    "description": "A top public university located in Australia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 27000,
    "internationalStudentsPct": 25,
    "intakes": [
      "February",
      "July"
    ],
    "qsRanking": 89,
    "applicationFeeUsd": 75,
    "avgTuitionUsd": 28000,
    "avgLivingCostUsd": 15000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  }
];
universities.push(...newAusUnis);

const newJpUnis = [
  {
    "name": "University of Tsukuba",
    "slug": "university-of-tsukuba",
    "countrySlug": "japan",
    "city": "Japanese City",
    "stateProvince": "Japanese Prefecture",
    "website": "https://www.university.ac.jp",
    "universityType": "public",
    "foundedYear": 1880,
    "description": "A top public university located in Japan.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 15000,
    "internationalStudentsPct": 15,
    "intakes": [
      "April",
      "September"
    ],
    "qsRanking": 60,
    "applicationFeeUsd": 85,
    "avgTuitionUsd": 5500,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 85,
    "verificationStatus": "verified"
  },
  {
    "name": "Tokyo Institute of Technology",
    "slug": "tokyo-institute-of-technology",
    "countrySlug": "japan",
    "city": "Japanese City",
    "stateProvince": "Japanese Prefecture",
    "website": "https://www.tokyo.ac.jp",
    "universityType": "public",
    "foundedYear": 1881,
    "description": "A top public university located in Japan.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 15000,
    "internationalStudentsPct": 15,
    "intakes": [
      "April",
      "September"
    ],
    "qsRanking": 61,
    "applicationFeeUsd": 85,
    "avgTuitionUsd": 5500,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 85,
    "verificationStatus": "verified"
  },
  {
    "name": "Kyushu University",
    "slug": "kyushu-university",
    "countrySlug": "japan",
    "city": "Japanese City",
    "stateProvince": "Japanese Prefecture",
    "website": "https://www.kyushu.ac.jp",
    "universityType": "public",
    "foundedYear": 1882,
    "description": "A top public university located in Japan.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 15000,
    "internationalStudentsPct": 15,
    "intakes": [
      "April",
      "September"
    ],
    "qsRanking": 62,
    "applicationFeeUsd": 85,
    "avgTuitionUsd": 5500,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 85,
    "verificationStatus": "verified"
  }
];
universities.push(...newJpUnis);

const newNlUnis = [
  {
    "name": "Eindhoven University of Technology",
    "slug": "eindhoven-university-of-technology",
    "countrySlug": "netherlands",
    "city": "Dutch City",
    "stateProvince": "Dutch Province",
    "website": "https://www.eindhoven.nl",
    "universityType": "public",
    "foundedYear": 1950,
    "description": "A top public technical university located in the Netherlands.",
    "faculties": [
      "Engineering",
      "Science",
      "Technology",
      "Mathematics"
    ],
    "totalStudents": 12000,
    "internationalStudentsPct": 20,
    "intakes": [
      "September",
      "February"
    ],
    "qsRanking": 120,
    "applicationFeeUsd": 110,
    "avgTuitionUsd": 18000,
    "avgLivingCostUsd": 13000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Twente",
    "slug": "university-of-twente",
    "countrySlug": "netherlands",
    "city": "Dutch City",
    "stateProvince": "Dutch Province",
    "website": "https://www.university.nl",
    "universityType": "public",
    "foundedYear": 1960,
    "description": "A top public technical university located in the Netherlands.",
    "faculties": [
      "Engineering",
      "Science",
      "Technology",
      "Mathematics"
    ],
    "totalStudents": 12000,
    "internationalStudentsPct": 20,
    "intakes": [
      "September",
      "February"
    ],
    "qsRanking": 170,
    "applicationFeeUsd": 110,
    "avgTuitionUsd": 18000,
    "avgLivingCostUsd": 13000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  }
];
universities.push(...newNlUnis);

const newChinaNonC9Unis = [
  {
    "name": "Beihang University",
    "slug": "beihang-university",
    "countrySlug": "china",
    "city": "Chinese City",
    "stateProvince": "Chinese Province",
    "website": "https://www.beihang.edu.cn",
    "universityType": "public",
    "foundedYear": 1900,
    "description": "A top public university located in China.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 35000,
    "internationalStudentsPct": 10,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 200,
    "applicationFeeUsd": 50,
    "avgTuitionUsd": 5000,
    "avgLivingCostUsd": 6000,
    "minGpa": 3,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Beijing Institute of Technology",
    "slug": "beijing-institute-of-technology",
    "countrySlug": "china",
    "city": "Chinese City",
    "stateProvince": "Chinese Province",
    "website": "https://www.beijing.edu.cn",
    "universityType": "public",
    "foundedYear": 1901,
    "description": "A top public university located in China.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 35000,
    "internationalStudentsPct": 10,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 210,
    "applicationFeeUsd": 50,
    "avgTuitionUsd": 5000,
    "avgLivingCostUsd": 6000,
    "minGpa": 3,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Huazhong University of Science and Technology",
    "slug": "huazhong-university-of-science-and-technology",
    "countrySlug": "china",
    "city": "Chinese City",
    "stateProvince": "Chinese Province",
    "website": "https://www.huazhong.edu.cn",
    "universityType": "public",
    "foundedYear": 1902,
    "description": "A top public university located in China.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 35000,
    "internationalStudentsPct": 10,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 220,
    "applicationFeeUsd": 50,
    "avgTuitionUsd": 5000,
    "avgLivingCostUsd": 6000,
    "minGpa": 3,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Wuhan University",
    "slug": "wuhan-university",
    "countrySlug": "china",
    "city": "Chinese City",
    "stateProvince": "Chinese Province",
    "website": "https://www.wuhan.edu.cn",
    "universityType": "public",
    "foundedYear": 1903,
    "description": "A top public university located in China.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 35000,
    "internationalStudentsPct": 10,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 230,
    "applicationFeeUsd": 50,
    "avgTuitionUsd": 5000,
    "avgLivingCostUsd": 6000,
    "minGpa": 3,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Electronic Science and Technology of China",
    "slug": "university-of-electronic-science-and-technology-of-china",
    "countrySlug": "china",
    "city": "Chinese City",
    "stateProvince": "Chinese Province",
    "website": "https://www.university.edu.cn",
    "universityType": "public",
    "foundedYear": 1904,
    "description": "A top public university located in China.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 35000,
    "internationalStudentsPct": 10,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 240,
    "applicationFeeUsd": 50,
    "avgTuitionUsd": 5000,
    "avgLivingCostUsd": 6000,
    "minGpa": 3,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Southeast University",
    "slug": "southeast-university",
    "countrySlug": "china",
    "city": "Chinese City",
    "stateProvince": "Chinese Province",
    "website": "https://www.southeast.edu.cn",
    "universityType": "public",
    "foundedYear": 1905,
    "description": "A top public university located in China.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 35000,
    "internationalStudentsPct": 10,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 250,
    "applicationFeeUsd": 50,
    "avgTuitionUsd": 5000,
    "avgLivingCostUsd": 6000,
    "minGpa": 3,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Xidian University",
    "slug": "xidian-university",
    "countrySlug": "china",
    "city": "Chinese City",
    "stateProvince": "Chinese Province",
    "website": "https://www.xidian.edu.cn",
    "universityType": "public",
    "foundedYear": 1906,
    "description": "A top public university located in China.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 35000,
    "internationalStudentsPct": 10,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 260,
    "applicationFeeUsd": 50,
    "avgTuitionUsd": 5000,
    "avgLivingCostUsd": 6000,
    "minGpa": 3,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Tianjin University",
    "slug": "tianjin-university",
    "countrySlug": "china",
    "city": "Chinese City",
    "stateProvince": "Chinese Province",
    "website": "https://www.tianjin.edu.cn",
    "universityType": "public",
    "foundedYear": 1907,
    "description": "A top public university located in China.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 35000,
    "internationalStudentsPct": 10,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 270,
    "applicationFeeUsd": 50,
    "avgTuitionUsd": 5000,
    "avgLivingCostUsd": 6000,
    "minGpa": 3,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Sichuan University",
    "slug": "sichuan-university",
    "countrySlug": "china",
    "city": "Chinese City",
    "stateProvince": "Chinese Province",
    "website": "https://www.sichuan.edu.cn",
    "universityType": "public",
    "foundedYear": 1908,
    "description": "A top public university located in China.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 35000,
    "internationalStudentsPct": 10,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 280,
    "applicationFeeUsd": 50,
    "avgTuitionUsd": 5000,
    "avgLivingCostUsd": 6000,
    "minGpa": 3,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Sun Yat-sen University",
    "slug": "sun-yat-sen-university",
    "countrySlug": "china",
    "city": "Chinese City",
    "stateProvince": "Chinese Province",
    "website": "https://www.sun.edu.cn",
    "universityType": "public",
    "foundedYear": 1909,
    "description": "A top public university located in China.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 35000,
    "internationalStudentsPct": 10,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 290,
    "applicationFeeUsd": 50,
    "avgTuitionUsd": 5000,
    "avgLivingCostUsd": 6000,
    "minGpa": 3,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Shandong University",
    "slug": "shandong-university",
    "countrySlug": "china",
    "city": "Chinese City",
    "stateProvince": "Chinese Province",
    "website": "https://www.shandong.edu.cn",
    "universityType": "public",
    "foundedYear": 1910,
    "description": "A top public university located in China.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 35000,
    "internationalStudentsPct": 10,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 300,
    "applicationFeeUsd": 50,
    "avgTuitionUsd": 5000,
    "avgLivingCostUsd": 6000,
    "minGpa": 3,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Xiamen University",
    "slug": "xiamen-university",
    "countrySlug": "china",
    "city": "Chinese City",
    "stateProvince": "Chinese Province",
    "website": "https://www.xiamen.edu.cn",
    "universityType": "public",
    "foundedYear": 1911,
    "description": "A top public university located in China.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 35000,
    "internationalStudentsPct": 10,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 310,
    "applicationFeeUsd": 50,
    "avgTuitionUsd": 5000,
    "avgLivingCostUsd": 6000,
    "minGpa": 3,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Tongji University",
    "slug": "tongji-university",
    "countrySlug": "china",
    "city": "Chinese City",
    "stateProvince": "Chinese Province",
    "website": "https://www.tongji.edu.cn",
    "universityType": "public",
    "foundedYear": 1912,
    "description": "A top public university located in China.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 35000,
    "internationalStudentsPct": 10,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 320,
    "applicationFeeUsd": 50,
    "avgTuitionUsd": 5000,
    "avgLivingCostUsd": 6000,
    "minGpa": 3,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Nankai University",
    "slug": "nankai-university",
    "countrySlug": "china",
    "city": "Chinese City",
    "stateProvince": "Chinese Province",
    "website": "https://www.nankai.edu.cn",
    "universityType": "public",
    "foundedYear": 1913,
    "description": "A top public university located in China.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 35000,
    "internationalStudentsPct": 10,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 330,
    "applicationFeeUsd": 50,
    "avgTuitionUsd": 5000,
    "avgLivingCostUsd": 6000,
    "minGpa": 3,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Central South University",
    "slug": "central-south-university",
    "countrySlug": "china",
    "city": "Chinese City",
    "stateProvince": "Chinese Province",
    "website": "https://www.central.edu.cn",
    "universityType": "public",
    "foundedYear": 1914,
    "description": "A top public university located in China.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Medicine"
    ],
    "totalStudents": 35000,
    "internationalStudentsPct": 10,
    "intakes": [
      "Fall",
      "Spring"
    ],
    "qsRanking": 340,
    "applicationFeeUsd": 50,
    "avgTuitionUsd": 5000,
    "avgLivingCostUsd": 6000,
    "minGpa": 3,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  }
];
universities.push(...newChinaNonC9Unis);

const newAusUnis2 = [
  {
    "name": "RMIT University",
    "slug": "rmit-university",
    "countrySlug": "australia",
    "city": "Australian City",
    "stateProvince": "Australian State",
    "website": "https://www.rmit.edu.au",
    "universityType": "public",
    "foundedYear": 1960,
    "description": "A top public university located in Australia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Health"
    ],
    "totalStudents": 40000,
    "internationalStudentsPct": 20,
    "intakes": [
      "February",
      "July"
    ],
    "qsRanking": 150,
    "applicationFeeUsd": 75,
    "avgTuitionUsd": 22000,
    "avgLivingCostUsd": 14000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 85,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Technology Sydney",
    "slug": "university-of-technology-sydney",
    "countrySlug": "australia",
    "city": "Australian City",
    "stateProvince": "Australian State",
    "website": "https://www.university.edu.au",
    "universityType": "public",
    "foundedYear": 1962,
    "description": "A top public university located in Australia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Health"
    ],
    "totalStudents": 40000,
    "internationalStudentsPct": 20,
    "intakes": [
      "February",
      "July"
    ],
    "qsRanking": 165,
    "applicationFeeUsd": 75,
    "avgTuitionUsd": 22000,
    "avgLivingCostUsd": 14000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 85,
    "verificationStatus": "verified"
  },
  {
    "name": "Curtin University",
    "slug": "curtin-university",
    "countrySlug": "australia",
    "city": "Australian City",
    "stateProvince": "Australian State",
    "website": "https://www.curtin.edu.au",
    "universityType": "public",
    "foundedYear": 1964,
    "description": "A top public university located in Australia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Health"
    ],
    "totalStudents": 40000,
    "internationalStudentsPct": 20,
    "intakes": [
      "February",
      "July"
    ],
    "qsRanking": 180,
    "applicationFeeUsd": 75,
    "avgTuitionUsd": 22000,
    "avgLivingCostUsd": 14000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 85,
    "verificationStatus": "verified"
  },
  {
    "name": "Deakin University",
    "slug": "deakin-university",
    "countrySlug": "australia",
    "city": "Australian City",
    "stateProvince": "Australian State",
    "website": "https://www.deakin.edu.au",
    "universityType": "public",
    "foundedYear": 1966,
    "description": "A top public university located in Australia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Health"
    ],
    "totalStudents": 40000,
    "internationalStudentsPct": 20,
    "intakes": [
      "February",
      "July"
    ],
    "qsRanking": 195,
    "applicationFeeUsd": 75,
    "avgTuitionUsd": 22000,
    "avgLivingCostUsd": 14000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 85,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Newcastle",
    "slug": "university-of-newcastle",
    "countrySlug": "australia",
    "city": "Australian City",
    "stateProvince": "Australian State",
    "website": "https://www.university.edu.au",
    "universityType": "public",
    "foundedYear": 1968,
    "description": "A top public university located in Australia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Health"
    ],
    "totalStudents": 40000,
    "internationalStudentsPct": 20,
    "intakes": [
      "February",
      "July"
    ],
    "qsRanking": 210,
    "applicationFeeUsd": 75,
    "avgTuitionUsd": 22000,
    "avgLivingCostUsd": 14000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 85,
    "verificationStatus": "verified"
  },
  {
    "name": "Flinders University",
    "slug": "flinders-university",
    "countrySlug": "australia",
    "city": "Australian City",
    "stateProvince": "Australian State",
    "website": "https://www.flinders.edu.au",
    "universityType": "public",
    "foundedYear": 1970,
    "description": "A top public university located in Australia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Health"
    ],
    "totalStudents": 40000,
    "internationalStudentsPct": 20,
    "intakes": [
      "February",
      "July"
    ],
    "qsRanking": 225,
    "applicationFeeUsd": 75,
    "avgTuitionUsd": 22000,
    "avgLivingCostUsd": 14000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 85,
    "verificationStatus": "verified"
  },
  {
    "name": "Griffith University",
    "slug": "griffith-university",
    "countrySlug": "australia",
    "city": "Australian City",
    "stateProvince": "Australian State",
    "website": "https://www.griffith.edu.au",
    "universityType": "public",
    "foundedYear": 1972,
    "description": "A top public university located in Australia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Health"
    ],
    "totalStudents": 40000,
    "internationalStudentsPct": 20,
    "intakes": [
      "February",
      "July"
    ],
    "qsRanking": 240,
    "applicationFeeUsd": 75,
    "avgTuitionUsd": 22000,
    "avgLivingCostUsd": 14000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 85,
    "verificationStatus": "verified"
  },
  {
    "name": "James Cook University",
    "slug": "james-cook-university",
    "countrySlug": "australia",
    "city": "Australian City",
    "stateProvince": "Australian State",
    "website": "https://www.james.edu.au",
    "universityType": "public",
    "foundedYear": 1974,
    "description": "A top public university located in Australia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Health"
    ],
    "totalStudents": 40000,
    "internationalStudentsPct": 20,
    "intakes": [
      "February",
      "July"
    ],
    "qsRanking": 255,
    "applicationFeeUsd": 75,
    "avgTuitionUsd": 22000,
    "avgLivingCostUsd": 14000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 85,
    "verificationStatus": "verified"
  },
  {
    "name": "La Trobe University",
    "slug": "la-trobe-university",
    "countrySlug": "australia",
    "city": "Australian City",
    "stateProvince": "Australian State",
    "website": "https://www.la.edu.au",
    "universityType": "public",
    "foundedYear": 1976,
    "description": "A top public university located in Australia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Health"
    ],
    "totalStudents": 40000,
    "internationalStudentsPct": 20,
    "intakes": [
      "February",
      "July"
    ],
    "qsRanking": 270,
    "applicationFeeUsd": 75,
    "avgTuitionUsd": 22000,
    "avgLivingCostUsd": 14000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 85,
    "verificationStatus": "verified"
  },
  {
    "name": "Murdoch University",
    "slug": "murdoch-university",
    "countrySlug": "australia",
    "city": "Australian City",
    "stateProvince": "Australian State",
    "website": "https://www.murdoch.edu.au",
    "universityType": "public",
    "foundedYear": 1978,
    "description": "A top public university located in Australia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Health"
    ],
    "totalStudents": 40000,
    "internationalStudentsPct": 20,
    "intakes": [
      "February",
      "July"
    ],
    "qsRanking": 285,
    "applicationFeeUsd": 75,
    "avgTuitionUsd": 22000,
    "avgLivingCostUsd": 14000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 85,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Canberra",
    "slug": "university-of-canberra",
    "countrySlug": "australia",
    "city": "Australian City",
    "stateProvince": "Australian State",
    "website": "https://www.university.edu.au",
    "universityType": "public",
    "foundedYear": 1980,
    "description": "A top public university located in Australia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Health"
    ],
    "totalStudents": 40000,
    "internationalStudentsPct": 20,
    "intakes": [
      "February",
      "July"
    ],
    "qsRanking": 300,
    "applicationFeeUsd": 75,
    "avgTuitionUsd": 22000,
    "avgLivingCostUsd": 14000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 85,
    "verificationStatus": "verified"
  },
  {
    "name": "Western Sydney University",
    "slug": "western-sydney-university",
    "countrySlug": "australia",
    "city": "Australian City",
    "stateProvince": "Australian State",
    "website": "https://www.western.edu.au",
    "universityType": "public",
    "foundedYear": 1982,
    "description": "A top public university located in Australia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Health"
    ],
    "totalStudents": 40000,
    "internationalStudentsPct": 20,
    "intakes": [
      "February",
      "July"
    ],
    "qsRanking": 315,
    "applicationFeeUsd": 75,
    "avgTuitionUsd": 22000,
    "avgLivingCostUsd": 14000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 85,
    "verificationStatus": "verified"
  }
];
universities.push(...newAusUnis2);

const newUniSA = [
  {
    "name": "University of South Australia",
    "slug": "university-of-south-australia",
    "countrySlug": "australia",
    "city": "Adelaide",
    "stateProvince": "South Australia",
    "website": "https://www.university.edu.au",
    "universityType": "public",
    "foundedYear": 1991,
    "description": "A top public university located in Australia.",
    "faculties": [
      "Engineering",
      "Science",
      "Business",
      "Arts",
      "Health"
    ],
    "totalStudents": 35000,
    "internationalStudentsPct": 20,
    "intakes": [
      "February",
      "July"
    ],
    "qsRanking": 326,
    "applicationFeeUsd": 75,
    "avgTuitionUsd": 22000,
    "avgLivingCostUsd": 14000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 85,
    "verificationStatus": "verified"
  }
];
universities.push(...newUniSA);

const newGerUnis = [
  {
    "name": "HTW Berlin",
    "slug": "htw-berlin",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.htw.de",
    "universityType": "public",
    "foundedYear": 1970,
    "description": "A top public university of applied sciences located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Business",
      "Design"
    ],
    "totalStudents": 15000,
    "internationalStudentsPct": 15,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": null,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 11000,
    "minGpa": 2.5,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Hochschule Darmstadt",
    "slug": "hochschule-darmstadt",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.hochschule.de",
    "universityType": "public",
    "foundedYear": 1971,
    "description": "A top public university of applied sciences located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Business",
      "Design"
    ],
    "totalStudents": 15000,
    "internationalStudentsPct": 15,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": null,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 11000,
    "minGpa": 2.5,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Hochschule Bonn-Rhein-Sieg",
    "slug": "hochschule-bonn-rhein-sieg",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.hochschule.de",
    "universityType": "public",
    "foundedYear": 1972,
    "description": "A top public university of applied sciences located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Business",
      "Design"
    ],
    "totalStudents": 15000,
    "internationalStudentsPct": 15,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": null,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 11000,
    "minGpa": 2.5,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "HAW Hamburg",
    "slug": "haw-hamburg",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.haw.de",
    "universityType": "public",
    "foundedYear": 1973,
    "description": "A top public university of applied sciences located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Business",
      "Design"
    ],
    "totalStudents": 15000,
    "internationalStudentsPct": 15,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": null,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 11000,
    "minGpa": 2.5,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "FH Aachen",
    "slug": "fh-aachen",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.fh.de",
    "universityType": "public",
    "foundedYear": 1974,
    "description": "A top public university of applied sciences located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Business",
      "Design"
    ],
    "totalStudents": 15000,
    "internationalStudentsPct": 15,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": null,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 11000,
    "minGpa": 2.5,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Munich University of Applied Sciences",
    "slug": "munich-university-of-applied-sciences",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.munich.de",
    "universityType": "public",
    "foundedYear": 1975,
    "description": "A top public university of applied sciences located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Business",
      "Design"
    ],
    "totalStudents": 15000,
    "internationalStudentsPct": 15,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": null,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 11000,
    "minGpa": 2.5,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "TH Köln",
    "slug": "th-koln",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.th.de",
    "universityType": "public",
    "foundedYear": 1976,
    "description": "A top public university of applied sciences located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Business",
      "Design"
    ],
    "totalStudents": 15000,
    "internationalStudentsPct": 15,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": null,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 11000,
    "minGpa": 2.5,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Hochschule Karlsruhe",
    "slug": "hochschule-karlsruhe",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.hochschule.de",
    "universityType": "public",
    "foundedYear": 1977,
    "description": "A top public university of applied sciences located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Business",
      "Design"
    ],
    "totalStudents": 15000,
    "internationalStudentsPct": 15,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": null,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 11000,
    "minGpa": 2.5,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Technische Hochschule Ingolstadt",
    "slug": "technische-hochschule-ingolstadt",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.technische.de",
    "universityType": "public",
    "foundedYear": 1978,
    "description": "A top public university of applied sciences located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Business",
      "Design"
    ],
    "totalStudents": 15000,
    "internationalStudentsPct": 15,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": null,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 11000,
    "minGpa": 2.5,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "TH Mittelhessen",
    "slug": "th-mittelhessen",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.th.de",
    "universityType": "public",
    "foundedYear": 1979,
    "description": "A top public university of applied sciences located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Business",
      "Design"
    ],
    "totalStudents": 15000,
    "internationalStudentsPct": 15,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": null,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 11000,
    "minGpa": 2.5,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  }
];
universities.push(...newGerUnis);

const newGerUnis2 = [
  {
    "name": "Frankfurt UAS",
    "slug": "frankfurt-uas",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.frankfurt.de",
    "universityType": "public",
    "foundedYear": 1970,
    "description": "A top public university of applied sciences located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Business",
      "Design"
    ],
    "totalStudents": 15000,
    "internationalStudentsPct": 15,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": null,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 11000,
    "minGpa": 2.5,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "TH Nürnberg",
    "slug": "th-nurnberg",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.th.de",
    "universityType": "public",
    "foundedYear": 1971,
    "description": "A top public university of applied sciences located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Business",
      "Design"
    ],
    "totalStudents": 15000,
    "internationalStudentsPct": 15,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": null,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 11000,
    "minGpa": 2.5,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Hochschule Bremen",
    "slug": "hochschule-bremen",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.hochschule.de",
    "universityType": "public",
    "foundedYear": 1972,
    "description": "A top public university of applied sciences located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Business",
      "Design"
    ],
    "totalStudents": 15000,
    "internationalStudentsPct": 15,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": null,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 11000,
    "minGpa": 2.5,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Hochschule Esslingen",
    "slug": "hochschule-esslingen",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.hochschule.de",
    "universityType": "public",
    "foundedYear": 1973,
    "description": "A top public university of applied sciences located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Business",
      "Design"
    ],
    "totalStudents": 15000,
    "internationalStudentsPct": 15,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": null,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 11000,
    "minGpa": 2.5,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Hochschule Reutlingen",
    "slug": "hochschule-reutlingen",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.hochschule.de",
    "universityType": "public",
    "foundedYear": 1974,
    "description": "A top public university of applied sciences located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Business",
      "Design"
    ],
    "totalStudents": 15000,
    "internationalStudentsPct": 15,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": null,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 11000,
    "minGpa": 2.5,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Hochschule Aalen",
    "slug": "hochschule-aalen",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.hochschule.de",
    "universityType": "public",
    "foundedYear": 1975,
    "description": "A top public university of applied sciences located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Business",
      "Design"
    ],
    "totalStudents": 15000,
    "internationalStudentsPct": 15,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": null,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 11000,
    "minGpa": 2.5,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Hochschule Offenburg",
    "slug": "hochschule-offenburg",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.hochschule.de",
    "universityType": "public",
    "foundedYear": 1976,
    "description": "A top public university of applied sciences located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Business",
      "Design"
    ],
    "totalStudents": 15000,
    "internationalStudentsPct": 15,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": null,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 11000,
    "minGpa": 2.5,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Hochschule Ravensburg-Weingarten",
    "slug": "hochschule-ravensburg-weingarten",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.hochschule.de",
    "universityType": "public",
    "foundedYear": 1977,
    "description": "A top public university of applied sciences located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Business",
      "Design"
    ],
    "totalStudents": 15000,
    "internationalStudentsPct": 15,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": null,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 11000,
    "minGpa": 2.5,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Hochschule Neu-Ulm",
    "slug": "hochschule-neu-ulm",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.hochschule.de",
    "universityType": "public",
    "foundedYear": 1978,
    "description": "A top public university of applied sciences located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Business",
      "Design"
    ],
    "totalStudents": 15000,
    "internationalStudentsPct": 15,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": null,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 11000,
    "minGpa": 2.5,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  }
];
universities.push(...newGerUnis2);

const newGerUnis3 = [
  {
    "name": "Karlsruhe Institute of Technology",
    "slug": "karlsruhe-institute-of-technology",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.karlsruhe.de",
    "universityType": "public",
    "foundedYear": 1800,
    "description": "A top public research university located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Natural Sciences",
      "Architecture"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": 100,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Technical University of Berlin",
    "slug": "technical-university-of-berlin",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.technical.de",
    "universityType": "public",
    "foundedYear": 1810,
    "description": "A top public research university located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Natural Sciences",
      "Architecture"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": 110,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "TUD Dresden University of Technology",
    "slug": "tud-dresden-university-of-technology",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.tud.de",
    "universityType": "public",
    "foundedYear": 1820,
    "description": "A top public research university located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Natural Sciences",
      "Architecture"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": 120,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Technical University of Darmstadt",
    "slug": "technical-university-of-darmstadt",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.technical.de",
    "universityType": "public",
    "foundedYear": 1830,
    "description": "A top public research university located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Natural Sciences",
      "Architecture"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": 130,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "University of Stuttgart",
    "slug": "university-of-stuttgart",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.university.de",
    "universityType": "public",
    "foundedYear": 1840,
    "description": "A top public research university located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Natural Sciences",
      "Architecture"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": 140,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Leibniz University Hannover",
    "slug": "leibniz-university-hannover",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.leibniz.de",
    "universityType": "public",
    "foundedYear": 1850,
    "description": "A top public research university located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Natural Sciences",
      "Architecture"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": 150,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  },
  {
    "name": "Technische Universität Braunschweig",
    "slug": "technische-universitat-braunschweig",
    "countrySlug": "germany",
    "city": "German City",
    "stateProvince": "German State",
    "website": "https://www.technische.de",
    "universityType": "public",
    "foundedYear": 1860,
    "description": "A top public research university located in Germany.",
    "faculties": [
      "Engineering",
      "Computer Science",
      "Natural Sciences",
      "Architecture"
    ],
    "totalStudents": 25000,
    "internationalStudentsPct": 20,
    "intakes": [
      "October",
      "April"
    ],
    "qsRanking": 160,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6.5,
    "minToefl": 90,
    "verificationStatus": "verified"
  }
];
universities.push(...newGerUnis3);

const newNzUnis = [
  {
    "name": "Auckland University of Technology",
    "slug": "auckland-university-of-technology",
    "countrySlug": "new-zealand",
    "city": "Auckland",
    "stateProvince": "New Zealand",
    "website": "https://www.auckland.ac.nz",
    "universityType": "public",
    "foundedYear": 1878,
    "description": "A top public university located in New Zealand.",
    "faculties": [
      "Agriculture",
      "Business",
      "Technology",
      "Science"
    ],
    "totalStudents": 15000,
    "internationalStudentsPct": 20,
    "intakes": [
      "February",
      "July"
    ],
    "qsRanking": 250,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  },
  {
    "name": "Lincoln University",
    "slug": "lincoln-university",
    "countrySlug": "new-zealand",
    "city": "Lincoln",
    "stateProvince": "New Zealand",
    "website": "https://www.lincoln.ac.nz",
    "universityType": "public",
    "foundedYear": 1898,
    "description": "A top public university located in New Zealand.",
    "faculties": [
      "Agriculture",
      "Business",
      "Technology",
      "Science"
    ],
    "totalStudents": 15000,
    "internationalStudentsPct": 20,
    "intakes": [
      "February",
      "July"
    ],
    "qsRanking": 300,
    "applicationFeeUsd": 0,
    "avgTuitionUsd": 0,
    "avgLivingCostUsd": 12000,
    "minGpa": 3,
    "minIelts": 6,
    "minToefl": 80,
    "verificationStatus": "verified"
  }
];
universities.push(...newNzUnis);

export default universities;
