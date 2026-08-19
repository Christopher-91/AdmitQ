import { query, getClient } from './database.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function seed() {
  console.log('🌱 Seeding database...\n');

  const client = await getClient();

  try {
    await client.query('BEGIN');

    // ════════════════════════════════════════════════
    // 1. CAREERS
    // ════════════════════════════════════════════════
    console.log('  → Seeding careers...');

    const careers = [
      { name: 'Software Engineer', slug: 'software-engineer', description: 'Design, develop, and maintain software applications and systems. Work with programming languages, frameworks, and tools to solve complex problems.', required_skills: ['Python', 'JavaScript', 'Java', 'SQL', 'Git', 'Data Structures', 'Algorithms', 'System Design'], typical_industries: ['Technology', 'Finance', 'Healthcare', 'E-commerce', 'Gaming'], potential_employers: ['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix'], related_careers: ['Full-Stack Developer', 'DevOps Engineer', 'Data Engineer'], recommended_countries: ['United States', 'Canada', 'Germany', 'United Kingdom', 'Singapore'], avg_salary_usd: 120000, growth_outlook: 'high', icon: '💻' },
      { name: 'Data Scientist', slug: 'data-scientist', description: 'Analyze complex data sets to identify trends, build predictive models, and drive data-informed decision making using statistics, machine learning, and programming.', required_skills: ['Python', 'R', 'SQL', 'Machine Learning', 'Statistics', 'TensorFlow', 'Deep Learning', 'Data Visualization'], typical_industries: ['Technology', 'Finance', 'Healthcare', 'Research', 'Marketing'], potential_employers: ['Google', 'Amazon', 'Meta', 'IBM', 'McKinsey'], related_careers: ['ML Engineer', 'Data Analyst', 'AI Researcher'], recommended_countries: ['United States', 'Canada', 'United Kingdom', 'Germany', 'Netherlands'], avg_salary_usd: 130000, growth_outlook: 'high', icon: '📊' },
      { name: 'Robotics Software Engineer', slug: 'robotics-software-engineer', description: 'Develop software for autonomous robots including perception, planning, and control systems. Work at the intersection of mechanical engineering, electronics, and computer science.', required_skills: ['C++', 'Python', 'ROS/ROS2', 'Linux', 'Computer Vision', 'Control Systems', 'Algorithms', 'Embedded Systems'], typical_industries: ['Robotics', 'Automotive', 'Aerospace', 'Manufacturing', 'Defense'], potential_employers: ['Boston Dynamics', 'Tesla', 'NVIDIA', 'ABB', 'Waymo'], related_careers: ['Embedded Systems Engineer', 'Computer Vision Engineer', 'Mechatronics Engineer'], recommended_countries: ['United States', 'Germany', 'Japan', 'South Korea', 'Switzerland'], avg_salary_usd: 135000, growth_outlook: 'high', icon: '🤖' },
      { name: 'Cybersecurity Engineer', slug: 'cybersecurity-engineer', description: 'Protect organizations from cyber threats by designing, implementing, and managing security systems, conducting vulnerability assessments, and responding to incidents.', required_skills: ['Network Security', 'Penetration Testing', 'Python', 'Linux', 'Cryptography', 'SIEM', 'Cloud Security', 'Incident Response'], typical_industries: ['Technology', 'Finance', 'Government', 'Healthcare', 'Defense'], potential_employers: ['CrowdStrike', 'Palo Alto Networks', 'Google', 'Microsoft', 'NSA'], related_careers: ['Security Analyst', 'Penetration Tester', 'Security Architect'], recommended_countries: ['United States', 'United Kingdom', 'Israel', 'Singapore', 'Australia'], avg_salary_usd: 115000, growth_outlook: 'high', icon: '🔒' },
      { name: 'Mechanical Engineer', slug: 'mechanical-engineer', description: 'Design, analyze, and manufacture mechanical systems ranging from micro-devices to large machinery. Apply physics, materials science, and engineering principles.', required_skills: ['CAD/CAM', 'FEA', 'Thermodynamics', 'Materials Science', 'Manufacturing', 'SolidWorks', 'MATLAB', 'Project Management'], typical_industries: ['Automotive', 'Aerospace', 'Manufacturing', 'Energy', 'Construction'], potential_employers: ['Boeing', 'Siemens', 'GE', 'Tesla', 'Rolls-Royce'], related_careers: ['Aerospace Engineer', 'Automotive Engineer', 'Manufacturing Engineer'], recommended_countries: ['Germany', 'United States', 'Japan', 'United Kingdom', 'South Korea'], avg_salary_usd: 90000, growth_outlook: 'moderate', icon: '⚙️' },
      { name: 'Business Analyst', slug: 'business-analyst', description: 'Bridge the gap between IT and business by analyzing processes, determining requirements, and delivering data-driven recommendations to stakeholders.', required_skills: ['SQL', 'Excel', 'Tableau', 'Requirements Gathering', 'Process Modeling', 'Agile', 'Communication', 'Problem Solving'], typical_industries: ['Consulting', 'Finance', 'Technology', 'Healthcare', 'Retail'], potential_employers: ['McKinsey', 'Deloitte', 'Accenture', 'BCG', 'Amazon'], related_careers: ['Product Manager', 'Data Analyst', 'Management Consultant'], recommended_countries: ['United States', 'United Kingdom', 'Canada', 'Singapore', 'Australia'], avg_salary_usd: 85000, growth_outlook: 'moderate', icon: '📈' },
      { name: 'Financial Analyst', slug: 'financial-analyst', description: 'Evaluate financial data, create models, and provide investment recommendations. Analyze market trends, company performance, and economic conditions.', required_skills: ['Financial Modeling', 'Excel', 'Python', 'Bloomberg', 'Accounting', 'Valuation', 'Statistics', 'CFA Preparation'], typical_industries: ['Investment Banking', 'Asset Management', 'Private Equity', 'Corporate Finance', 'Insurance'], potential_employers: ['Goldman Sachs', 'JP Morgan', 'Morgan Stanley', 'BlackRock', 'Citadel'], related_careers: ['Investment Banker', 'Portfolio Manager', 'Risk Analyst'], recommended_countries: ['United States', 'United Kingdom', 'Singapore', 'Switzerland', 'Canada'], avg_salary_usd: 95000, growth_outlook: 'moderate', icon: '💰' },
      { name: 'Doctor (Physician)', slug: 'doctor', description: 'Diagnose and treat illnesses, injuries, and diseases. Specialize in areas such as internal medicine, surgery, pediatrics, or cardiology.', required_skills: ['Clinical Skills', 'Patient Care', 'Medical Knowledge', 'Communication', 'Decision Making', 'Research', 'Empathy', 'Continuous Learning'], typical_industries: ['Healthcare', 'Research', 'Pharmaceuticals', 'Academia', 'Public Health'], potential_employers: ['Mayo Clinic', 'Johns Hopkins', 'NHS', 'Cleveland Clinic', 'WHO'], related_careers: ['Surgeon', 'Medical Researcher', 'Public Health Specialist'], recommended_countries: ['United States', 'United Kingdom', 'Canada', 'Australia', 'Germany'], avg_salary_usd: 200000, growth_outlook: 'high', icon: '🩺' },
      { name: 'AI/ML Researcher', slug: 'ai-ml-researcher', description: 'Conduct cutting-edge research in artificial intelligence and machine learning. Develop new algorithms, models, and theoretical frameworks.', required_skills: ['Python', 'PyTorch', 'TensorFlow', 'Mathematics', 'Statistics', 'Deep Learning', 'NLP', 'Research Methodology'], typical_industries: ['Technology', 'Academia', 'Research Labs', 'Healthcare', 'Finance'], potential_employers: ['DeepMind', 'OpenAI', 'Google Brain', 'Meta AI', 'Microsoft Research'], related_careers: ['Data Scientist', 'Research Scientist', 'NLP Engineer'], recommended_countries: ['United States', 'United Kingdom', 'Canada', 'Switzerland', 'France'], avg_salary_usd: 160000, growth_outlook: 'high', icon: '🧠' },
      { name: 'Product Manager', slug: 'product-manager', description: 'Define product strategy, prioritize features, and work with cross-functional teams to build products that solve customer problems and achieve business goals.', required_skills: ['Product Strategy', 'User Research', 'Data Analysis', 'Communication', 'Agile', 'Wireframing', 'A/B Testing', 'Stakeholder Management'], typical_industries: ['Technology', 'E-commerce', 'Finance', 'Healthcare', 'SaaS'], potential_employers: ['Google', 'Amazon', 'Meta', 'Stripe', 'Uber'], related_careers: ['Product Designer', 'Program Manager', 'Growth Manager'], recommended_countries: ['United States', 'United Kingdom', 'Canada', 'Germany', 'Singapore'], avg_salary_usd: 140000, growth_outlook: 'high', icon: '🚀' },
    ];

    for (const c of careers) {
      await client.query(
        `INSERT INTO careers (name, slug, description, required_skills, typical_industries, potential_employers, related_careers, recommended_countries, avg_salary_usd, growth_outlook, icon)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) ON CONFLICT (name) DO NOTHING`,
        [c.name, c.slug, c.description, c.required_skills, c.typical_industries, c.potential_employers, c.related_careers, c.recommended_countries, c.avg_salary_usd, c.growth_outlook, c.icon]
      );
    }

    // Career degree mappings
    const careerMappings = [
      { career: 'software-engineer', mappings: [
        { degree: 'bachelors', field: 'Computer Science', is_primary: true, relevance: 10 },
        { degree: 'bachelors', field: 'Software Engineering', relevance: 9 },
        { degree: 'masters', field: 'Computer Science', relevance: 8 },
        { degree: 'masters', field: 'Software Engineering', relevance: 8 },
      ]},
      { career: 'data-scientist', mappings: [
        { degree: 'masters', field: 'Data Science', is_primary: true, relevance: 10 },
        { degree: 'masters', field: 'Computer Science', specialization: 'Machine Learning', relevance: 9 },
        { degree: 'bachelors', field: 'Computer Science', relevance: 7 },
        { degree: 'bachelors', field: 'Statistics', relevance: 7 },
        { degree: 'phd', field: 'Data Science', relevance: 8 },
      ]},
      { career: 'robotics-software-engineer', mappings: [
        { degree: 'masters', field: 'Robotics', is_primary: true, relevance: 10 },
        { degree: 'masters', field: 'Computer Science', specialization: 'Artificial Intelligence', relevance: 9 },
        { degree: 'bachelors', field: 'Computer Science', relevance: 7 },
        { degree: 'bachelors', field: 'Electrical Engineering', relevance: 7 },
        { degree: 'masters', field: 'Mechatronics', relevance: 8 },
      ]},
      { career: 'cybersecurity-engineer', mappings: [
        { degree: 'masters', field: 'Cybersecurity', is_primary: true, relevance: 10 },
        { degree: 'bachelors', field: 'Computer Science', relevance: 8 },
        { degree: 'masters', field: 'Information Security', relevance: 9 },
      ]},
      { career: 'mechanical-engineer', mappings: [
        { degree: 'bachelors', field: 'Mechanical Engineering', is_primary: true, relevance: 10 },
        { degree: 'masters', field: 'Mechanical Engineering', relevance: 9 },
        { degree: 'masters', field: 'Aerospace Engineering', relevance: 7 },
      ]},
      { career: 'business-analyst', mappings: [
        { degree: 'masters', field: 'Business Administration', is_primary: true, relevance: 9 },
        { degree: 'bachelors', field: 'Business Administration', relevance: 8 },
        { degree: 'masters', field: 'Business Analytics', relevance: 10 },
      ]},
      { career: 'financial-analyst', mappings: [
        { degree: 'bachelors', field: 'Finance', is_primary: true, relevance: 10 },
        { degree: 'masters', field: 'Finance', relevance: 9 },
        { degree: 'masters', field: 'Financial Engineering', relevance: 9 },
      ]},
      { career: 'doctor', mappings: [
        { degree: 'bachelors', field: 'Medicine', is_primary: true, relevance: 10 },
        { degree: 'professional', field: 'Medicine', relevance: 10 },
      ]},
      { career: 'ai-ml-researcher', mappings: [
        { degree: 'phd', field: 'Computer Science', specialization: 'Artificial Intelligence', is_primary: true, relevance: 10 },
        { degree: 'masters', field: 'Artificial Intelligence', relevance: 9 },
        { degree: 'masters', field: 'Computer Science', specialization: 'Machine Learning', relevance: 9 },
      ]},
      { career: 'product-manager', mappings: [
        { degree: 'masters', field: 'Business Administration', is_primary: true, relevance: 9 },
        { degree: 'bachelors', field: 'Computer Science', relevance: 7 },
        { degree: 'masters', field: 'Product Management', relevance: 10 },
      ]},
    ];

    for (const cm of careerMappings) {
      const careerResult = await client.query('SELECT id FROM careers WHERE slug = $1', [cm.career]);
      if (careerResult.rows.length === 0) continue;
      const careerId = careerResult.rows[0].id;
      for (const m of cm.mappings) {
        await client.query(
          `INSERT INTO career_degree_mappings (career_id, degree_type, field, specialization, relevance, is_primary) VALUES ($1,$2,$3,$4,$5,$6)`,
          [careerId, m.degree, m.field, m.specialization || null, m.relevance || 5, m.is_primary || false]
        );
      }
    }

    // ════════════════════════════════════════════════
    // 2. COUNTRIES
    // ════════════════════════════════════════════════
    console.log('  → Seeding countries...');

    const countries = [
      { name: 'United States', code: 'US', slug: 'united-states', flag_emoji: '🇺🇸', continent: 'North America', description: 'Home to the world\'s top-ranked universities including MIT, Stanford, and Harvard. Offers unparalleled research opportunities and diverse program options across all fields.', education_system: 'US universities follow a credit-based system with significant flexibility. Undergraduate programs are typically 4 years, master\'s 1-2 years, and PhDs 4-6 years. The system emphasizes research, liberal arts education, and practical experience.', popular_degrees: ['Computer Science', 'Business Administration', 'Engineering', 'Data Science', 'Medicine'], academic_calendar: 'Fall (August-December), Spring (January-May), Summer (June-August)', avg_tuition_min_usd: 15000, avg_tuition_max_usd: 60000, avg_living_cost_usd: 1500, avg_rent_usd: 1200, currency: 'USD', currency_symbol: '$', student_visa_info: 'F-1 Student Visa required for full-time study. Requires I-20 form from university, proof of financial support, and SEVIS fee payment. Processing time: 3-5 months.', visa_cost_usd: 185, student_work_rights: 'On-campus work up to 20 hours/week during academic year. CPT and OPT available for practical training.', work_hours_per_week: 20, post_study_work: 'Optional Practical Training (OPT) allows 12 months of work authorization. STEM OPT extension provides additional 24 months for STEM graduates.', post_study_work_duration: '1-3 years', language_requirements: 'English proficiency required (TOEFL/IELTS). Some programs may require GRE/GMAT.', official_languages: ['English'], popular_student_cities: ['New York', 'Boston', 'San Francisco', 'Los Angeles', 'Chicago', 'Seattle'], employment_environment: 'Strong job market especially in technology, finance, and healthcare. Major tech hubs in Silicon Valley, Seattle, and Austin.', scholarship_opportunities: 'Extensive scholarship options including merit-based, need-based, athletic, and diversity scholarships. Teaching and research assistantships common for graduate students.', application_process: 'Apply directly to universities through their portals or Common Application. Most deadlines are between December-March for fall admission.', source_url: 'https://educationusa.state.gov/', verification_status: 'verified' },
      { name: 'United Kingdom', code: 'GB', slug: 'united-kingdom', flag_emoji: '🇬🇧', continent: 'Europe', description: 'World-renowned education system with prestigious institutions like Oxford, Cambridge, and Imperial College London. Known for focused undergraduate programs and one-year master\'s degrees.', education_system: 'UK universities follow a focused curriculum. Undergraduate programs are typically 3 years (4 in Scotland), master\'s programs are usually 1 year, and PhDs are 3-4 years. The system emphasizes depth of study in chosen subject.', popular_degrees: ['Computer Science', 'Business', 'Engineering', 'Law', 'Medicine'], academic_calendar: 'Autumn (September-December), Spring (January-March), Summer (April-June)', avg_tuition_min_usd: 15000, avg_tuition_max_usd: 45000, avg_living_cost_usd: 1300, avg_rent_usd: 1000, currency: 'GBP', currency_symbol: '£', student_visa_info: 'Student Visa (formerly Tier 4) required. Need Confirmation of Acceptance for Studies (CAS) from university, proof of funds, and English proficiency.', visa_cost_usd: 450, student_work_rights: 'Can work up to 20 hours/week during term time and full-time during holidays.', work_hours_per_week: 20, post_study_work: 'Graduate Route visa allows 2 years of post-study work (3 years for PhD graduates). No employer sponsorship required.', post_study_work_duration: '2-3 years', language_requirements: 'IELTS or equivalent required. Minimum scores vary by university and program.', official_languages: ['English'], popular_student_cities: ['London', 'Edinburgh', 'Manchester', 'Birmingham', 'Bristol', 'Oxford', 'Cambridge'], employment_environment: 'Strong economy with opportunities in finance (City of London), technology, creative industries, and healthcare.', scholarship_opportunities: 'Chevening Scholarships, Commonwealth Scholarships, university-specific bursaries and scholarships.', application_process: 'Undergraduate: Apply through UCAS. Postgraduate: Apply directly to universities. Most deadlines are January-March.', source_url: 'https://www.gov.uk/student-visa', verification_status: 'verified' },
      { name: 'Canada', code: 'CA', slug: 'canada', flag_emoji: '🇨🇦', continent: 'North America', description: 'Known for high-quality education, multicultural society, and excellent post-study work opportunities. Home to world-class universities like University of Toronto, UBC, and McGill.', education_system: 'Similar to the US system with credit-based programs. Bachelor\'s degrees are 3-4 years, master\'s 1-2 years. Co-op programs are widely available combining academic study with work experience.', popular_degrees: ['Computer Science', 'Engineering', 'Business', 'Healthcare', 'Environmental Science'], academic_calendar: 'Fall (September-December), Winter (January-April), Summer (May-August)', avg_tuition_min_usd: 12000, avg_tuition_max_usd: 35000, avg_living_cost_usd: 1200, avg_rent_usd: 1000, currency: 'CAD', currency_symbol: 'C$', student_visa_info: 'Study Permit required for programs longer than 6 months. Requires letter of acceptance, proof of funds, and may require biometrics.', visa_cost_usd: 115, student_work_rights: 'Can work up to 20 hours/week off-campus during academic sessions and full-time during breaks.', work_hours_per_week: 20, post_study_work: 'Post-Graduation Work Permit (PGWP) valid for up to 3 years. Strong pathway to permanent residency through Express Entry.', post_study_work_duration: 'Up to 3 years', language_requirements: 'English or French proficiency required depending on province and program.', official_languages: ['English', 'French'], popular_student_cities: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa', 'Calgary', 'Edmonton'], employment_environment: 'Growing tech sector, strong natural resources industry, excellent healthcare system. Immigration-friendly policies.', scholarship_opportunities: 'Vanier Canada Graduate Scholarships, university-specific awards, provincial scholarships.', application_process: 'Apply directly to universities. Deadlines vary but generally December-March for fall admission.', source_url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html', verification_status: 'verified' },
      { name: 'Germany', code: 'DE', slug: 'germany', flag_emoji: '🇩🇪', continent: 'Europe', description: 'Europe\'s largest economy offering tuition-free education at public universities. World leader in engineering, automotive, and manufacturing with excellent research infrastructure.', education_system: 'Public universities charge minimal semester fees (€150-350). Programs follow the Bologna system: Bachelor\'s (3 years), Master\'s (2 years). Strong emphasis on research and practical training.', popular_degrees: ['Engineering', 'Computer Science', 'Automotive Engineering', 'Business', 'Physics'], academic_calendar: 'Winter Semester (October-March), Summer Semester (April-September)', avg_tuition_min_usd: 0, avg_tuition_max_usd: 3000, avg_living_cost_usd: 900, avg_rent_usd: 600, currency: 'EUR', currency_symbol: '€', student_visa_info: 'National Visa for study purposes required. Need university admission, proof of financial resources (€11,208/year in blocked account), and health insurance.', visa_cost_usd: 80, student_work_rights: 'Can work 120 full days or 240 half days per year without additional work permit.', work_hours_per_week: 20, post_study_work: '18-month residence permit for job seeking after graduation. Can switch to work visa once employed.', post_study_work_duration: '18 months', language_requirements: 'Many master\'s programs taught in English. Bachelor\'s programs often require German (TestDaF/DSH). English proficiency (IELTS/TOEFL) required for English-taught programs.', official_languages: ['German'], popular_student_cities: ['Munich', 'Berlin', 'Stuttgart', 'Hamburg', 'Frankfurt', 'Aachen'], employment_environment: 'Strong economy driven by engineering, automotive (BMW, Mercedes, Volkswagen), technology, and manufacturing. Low unemployment rate.', scholarship_opportunities: 'DAAD scholarships, Deutschland Stipendium, Erasmus+, university-specific awards.', application_process: 'Apply through uni-assist or directly to universities. Deadlines: July 15 (winter semester), January 15 (summer semester).', source_url: 'https://www.daad.de/en/', verification_status: 'verified' },
      { name: 'Netherlands', code: 'NL', slug: 'netherlands', flag_emoji: '🇳🇱', continent: 'Europe', description: 'Small but highly innovative country with excellent English-taught programs. Known for interactive teaching methods and strong international student community.', education_system: 'Research universities (WO) and universities of applied sciences (HBO). Bachelor\'s 3 years, Master\'s 1-2 years. Problem-Based Learning widely used.', popular_degrees: ['Computer Science', 'Business', 'Engineering', 'Social Sciences', 'Artificial Intelligence'], academic_calendar: 'September-January, February-June', avg_tuition_min_usd: 8000, avg_tuition_max_usd: 20000, avg_living_cost_usd: 1100, avg_rent_usd: 800, currency: 'EUR', currency_symbol: '€', student_visa_info: 'MVV visa and residence permit required for non-EU students. University handles the application process.', visa_cost_usd: 200, student_work_rights: 'Can work up to 16 hours/week with a work permit, or full-time during June-August.', work_hours_per_week: 16, post_study_work: 'Orientation Year Visa allows 1 year to find employment in the Netherlands after graduation.', post_study_work_duration: '1 year', language_requirements: 'Most master\'s and many bachelor\'s programs taught entirely in English.', official_languages: ['Dutch'], popular_student_cities: ['Amsterdam', 'Rotterdam', 'The Hague', 'Eindhoven', 'Delft', 'Utrecht'], employment_environment: 'Hub for technology, logistics, and creative industries. Home to many multinational headquarters.', scholarship_opportunities: 'Holland Scholarship, Orange Tulip Scholarship, university-specific awards.', application_process: 'Apply through Studielink for bachelor\'s or directly to universities for master\'s. Deadlines vary: January-May.', source_url: 'https://www.studyinholland.nl/', verification_status: 'verified' },
      { name: 'Australia', code: 'AU', slug: 'australia', flag_emoji: '🇦🇺', continent: 'Oceania', description: 'World-class education system with 7 of the top 100 universities globally. Known for quality of life, post-study work options, and diverse student community.', education_system: 'Semester-based system similar to UK. Bachelor\'s 3-4 years, Master\'s 1-2 years. Strong emphasis on research and practical skills.', popular_degrees: ['Engineering', 'Computer Science', 'Business', 'Nursing', 'Environmental Science'], academic_calendar: 'Semester 1 (February-June), Semester 2 (July-November)', avg_tuition_min_usd: 15000, avg_tuition_max_usd: 40000, avg_living_cost_usd: 1400, avg_rent_usd: 1100, currency: 'AUD', currency_symbol: 'A$', student_visa_info: 'Student Visa (subclass 500) required. Need CoE from university, proof of funds, OSHC health cover, and English proficiency.', visa_cost_usd: 450, student_work_rights: 'Unlimited work hours for student visa holders (as of 2024 policy changes). Previously limited to 48 hours per fortnight.', work_hours_per_week: 24, post_study_work: 'Temporary Graduate Visa (subclass 485) allows 2-4 years of post-study work depending on qualification and location.', post_study_work_duration: '2-4 years', language_requirements: 'IELTS, TOEFL, PTE accepted. Minimum scores vary by institution.', official_languages: ['English'], popular_student_cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'], employment_environment: 'Strong economy with growing tech, mining, healthcare sectors. Good quality of life.', scholarship_opportunities: 'Australia Awards, Research Training Program, university scholarships.', application_process: 'Apply directly to universities. Main intakes: February and July.', source_url: 'https://www.studyaustralia.gov.au/', verification_status: 'verified' },
      { name: 'Ireland', code: 'IE', slug: 'ireland', flag_emoji: '🇮🇪', continent: 'Europe', description: 'English-speaking European country with a thriving tech sector. Home to European headquarters of major tech companies and excellent universities.', education_system: 'Bachelor\'s 3-4 years, Master\'s 1-2 years. NFQ framework for qualification recognition. Strong industry connections.', popular_degrees: ['Computer Science', 'Data Analytics', 'Business', 'Pharmaceutical Sciences', 'Engineering'], academic_calendar: 'September-May', avg_tuition_min_usd: 10000, avg_tuition_max_usd: 30000, avg_living_cost_usd: 1200, avg_rent_usd: 900, currency: 'EUR', currency_symbol: '€', student_visa_info: 'Study visa required for non-EU/EEA students for courses longer than 3 months.', visa_cost_usd: 80, student_work_rights: 'Can work 20 hours/week during term and 40 hours/week during holidays.', work_hours_per_week: 20, post_study_work: 'Third Level Graduate Scheme allows graduates to remain and seek employment for up to 24 months.', post_study_work_duration: '1-2 years', language_requirements: 'Programs taught in English. IELTS/TOEFL required.', official_languages: ['English', 'Irish'], popular_student_cities: ['Dublin', 'Cork', 'Galway', 'Limerick'], employment_environment: 'European tech hub. Google, Facebook, Apple, Microsoft all have major offices. Strong pharma sector.', scholarship_opportunities: 'Government of Ireland scholarships, university-specific awards, Science Foundation Ireland.', application_process: 'Apply through CAO for undergraduate or directly to universities for postgraduate.', source_url: 'https://www.educationinireland.com/', verification_status: 'verified' },
      { name: 'France', code: 'FR', slug: 'france', flag_emoji: '🇫🇷', continent: 'Europe', description: 'Rich academic tradition with affordable education. Known for excellence in engineering, business, arts, and sciences. Low tuition at public universities.', education_system: 'Grandes Écoles and universities. LMD system: Licence (3 years), Master (2 years), Doctorat (3 years).', popular_degrees: ['Engineering', 'Business', 'Fashion', 'Political Science', 'Computer Science'], academic_calendar: 'September-June', avg_tuition_min_usd: 200, avg_tuition_max_usd: 20000, avg_living_cost_usd: 1000, avg_rent_usd: 700, currency: 'EUR', currency_symbol: '€', student_visa_info: 'Long-stay student visa (VLS-TS) required. Apply through Campus France.', visa_cost_usd: 100, student_work_rights: 'Can work up to 964 hours per year (approximately 20 hours/week).', work_hours_per_week: 20, post_study_work: 'Temporary residence permit for job seeking. Can switch to work permit upon finding employment related to studies.', post_study_work_duration: '1 year', language_requirements: 'Many master\'s programs in English. French programs require DELF/DALF certification.', official_languages: ['French'], popular_student_cities: ['Paris', 'Lyon', 'Toulouse', 'Bordeaux', 'Strasbourg'], employment_environment: 'Strong in luxury goods, aerospace, technology, and fashion industries.', scholarship_opportunities: 'Eiffel Excellence Scholarships, Erasmus+, Embassy scholarships.', application_process: 'Apply through Campus France (Études en France) or directly to institutions.', source_url: 'https://www.campusfrance.org/en', verification_status: 'verified' },
      { name: 'Switzerland', code: 'CH', slug: 'switzerland', flag_emoji: '🇨🇭', continent: 'Europe', description: 'Home to ETH Zurich and EPFL, consistently ranked among the world\'s best. Excellent for research-oriented programs, particularly in engineering and sciences.', education_system: 'Federal institutes (ETH/EPFL) and cantonal universities. Bachelor\'s 3 years, Master\'s 1.5-2 years. Strong focus on research excellence.', popular_degrees: ['Engineering', 'Computer Science', 'Physics', 'Finance', 'Hospitality'], academic_calendar: 'Autumn (September-December), Spring (February-May)', avg_tuition_min_usd: 1000, avg_tuition_max_usd: 5000, avg_living_cost_usd: 2000, avg_rent_usd: 1400, currency: 'CHF', currency_symbol: 'CHF', student_visa_info: 'National visa type D required. Apply at Swiss embassy with proof of admission and financial resources.', visa_cost_usd: 100, student_work_rights: 'Can work up to 15 hours/week during semester after first year.', work_hours_per_week: 15, post_study_work: '6-month extension to seek employment after graduation.', post_study_work_duration: '6 months', language_requirements: 'Programs in German, French, Italian, or English depending on university and region.', official_languages: ['German', 'French', 'Italian', 'Romansh'], popular_student_cities: ['Zurich', 'Lausanne', 'Geneva', 'Basel', 'Bern'], employment_environment: 'High salaries, strong pharma, finance, and technology sectors. Very low unemployment.', scholarship_opportunities: 'Swiss Government Excellence Scholarships, ETH/EPFL scholarships, Excellence Foundation.', application_process: 'Apply directly to universities. Deadlines vary: December-April.', source_url: 'https://www.swissuniversities.ch/', verification_status: 'verified' },
      { name: 'Sweden', code: 'SE', slug: 'sweden', flag_emoji: '🇸🇪', continent: 'Europe', description: 'Known for innovation, sustainability, and quality of life. Swedish universities emphasize creativity, critical thinking, and group work.', education_system: 'Bologna-aligned system. Bachelor\'s 3 years, Master\'s 1-2 years. Credits in ECTS. Informal and collaborative teaching style.', popular_degrees: ['Engineering', 'Computer Science', 'Sustainability', 'Design', 'Business'], academic_calendar: 'Autumn (late August-January), Spring (January-June)', avg_tuition_min_usd: 8000, avg_tuition_max_usd: 20000, avg_living_cost_usd: 1000, avg_rent_usd: 700, currency: 'SEK', currency_symbol: 'kr', student_visa_info: 'Residence permit for studies required for non-EU/EEA students. Apply through Swedish Migration Agency.', visa_cost_usd: 120, student_work_rights: 'No restrictions on working hours for students.', work_hours_per_week: 40, post_study_work: '12-month residence permit to look for work or start a business after graduation.', post_study_work_duration: '1 year', language_requirements: 'Many programs taught in English, especially at master\'s level.', official_languages: ['Swedish'], popular_student_cities: ['Stockholm', 'Gothenburg', 'Malmö', 'Uppsala', 'Lund'], employment_environment: 'Hub for startups and innovation. Home to Spotify, Ericsson, IKEA. Strong engineering sector.', scholarship_opportunities: 'Swedish Institute scholarships, university tuition waivers.', application_process: 'Apply through universityadmissions.se for most programs.', source_url: 'https://studyinsweden.se/', verification_status: 'verified' },
      { name: 'Singapore', code: 'SG', slug: 'singapore', flag_emoji: '🇸🇬', continent: 'Asia', description: 'Asian education powerhouse with NUS and NTU consistently in global top 20. Strategic location, multicultural environment, and strong industry connections.', education_system: 'British-influenced system. Bachelor\'s 3-4 years, Master\'s 1-2 years. Emphasis on meritocracy and academic excellence.', popular_degrees: ['Computer Science', 'Engineering', 'Business', 'Finance', 'Data Science'], academic_calendar: 'Semester 1 (August-December), Semester 2 (January-May)', avg_tuition_min_usd: 12000, avg_tuition_max_usd: 35000, avg_living_cost_usd: 1200, avg_rent_usd: 1000, currency: 'SGD', currency_symbol: 'S$', student_visa_info: 'Student Pass required. University submits application to Immigration & Checkpoints Authority (ICA).', visa_cost_usd: 45, student_work_rights: 'Can work part-time during term (up to 16 hours/week) at approved institutions.', work_hours_per_week: 16, post_study_work: 'Long-Term Visit Pass for 1 year to seek employment. Work visa tied to salary thresholds.', post_study_work_duration: '1 year', language_requirements: 'Programs taught in English. IELTS/TOEFL required.', official_languages: ['English', 'Mandarin', 'Malay', 'Tamil'], popular_student_cities: ['Singapore'], employment_environment: 'Major Asian financial hub. Strong tech ecosystem. High salaries but also high cost of living.', scholarship_opportunities: 'ASEAN scholarships, university-specific merit awards, government-funded tuition grants.', application_process: 'Apply directly to universities. Main intake: August.', source_url: 'https://www.moe.gov.sg/', verification_status: 'verified' },
      { name: 'Japan', code: 'JP', slug: 'japan', flag_emoji: '🇯🇵', continent: 'Asia', description: 'Blend of tradition and innovation. World-leading in technology, robotics, and engineering research. Growing number of English-taught programs.', education_system: 'Bachelor\'s 4 years, Master\'s 2 years, PhD 3 years. April intake traditional, October intake available for international programs.', popular_degrees: ['Engineering', 'Computer Science', 'Robotics', 'Business', 'Japanese Studies'], academic_calendar: 'Spring (April-September), Fall (October-March)', avg_tuition_min_usd: 4000, avg_tuition_max_usd: 15000, avg_living_cost_usd: 900, avg_rent_usd: 600, currency: 'JPY', currency_symbol: '¥', student_visa_info: 'Student visa (留学) required. Certificate of Eligibility obtained through university.', visa_cost_usd: 25, student_work_rights: 'Can work up to 28 hours/week with permission.', work_hours_per_week: 28, post_study_work: 'Can change to Designated Activities visa for up to 1 year to seek employment.', post_study_work_duration: '1 year', language_requirements: 'English-taught programs available but Japanese language skills beneficial. JLPT for Japanese programs.', official_languages: ['Japanese'], popular_student_cities: ['Tokyo', 'Osaka', 'Kyoto', 'Nagoya', 'Fukuoka'], employment_environment: 'World leader in technology, automotive, electronics. Aging population creates workforce demand.', scholarship_opportunities: 'MEXT Scholarships (fully funded by government), JASSO scholarships, university awards.', application_process: 'Apply directly or through MEXT scholarship program. Deadlines vary by university.', source_url: 'https://www.studyinjapan.go.jp/en/', verification_status: 'verified' },
      { name: 'South Korea', code: 'KR', slug: 'south-korea', flag_emoji: '🇰🇷', continent: 'Asia', description: 'Rapidly rising education destination with strong universities in STEM fields. Known for technological innovation, K-culture, and affordable living costs.', education_system: 'Semester-based system. Bachelor\'s 4 years, Master\'s 2 years. Growing number of English-taught programs.', popular_degrees: ['Engineering', 'Computer Science', 'Business', 'Korean Studies', 'Design'], academic_calendar: 'Spring (March-June), Fall (September-December)', avg_tuition_min_usd: 4000, avg_tuition_max_usd: 12000, avg_living_cost_usd: 800, avg_rent_usd: 500, currency: 'KRW', currency_symbol: '₩', student_visa_info: 'D-2 Student Visa required. Apply at Korean embassy with admission letter.', visa_cost_usd: 60, student_work_rights: 'Can work up to 20 hours/week after 6 months of study.', work_hours_per_week: 20, post_study_work: 'D-10 Job Seeking Visa available for graduates for up to 2 years.', post_study_work_duration: '2 years', language_requirements: 'English programs available. TOPIK required for Korean-taught programs. IELTS/TOEFL for English programs.', official_languages: ['Korean'], popular_student_cities: ['Seoul', 'Busan', 'Daejeon', 'Daegu'], employment_environment: 'Home to Samsung, Hyundai, LG, SK. Strong semiconductor and tech industry.', scholarship_opportunities: 'KGSP (Korean Government Scholarship), university merit scholarships, GKS.', application_process: 'Apply directly to universities or through KGSP. Main intakes: March and September.', source_url: 'https://www.studyinkorea.go.kr/', verification_status: 'verified' },
      { name: 'New Zealand', code: 'NZ', slug: 'new-zealand', flag_emoji: '🇳🇿', continent: 'Oceania', description: 'English-speaking country with excellent quality of life, safety, and unique natural environment. Strong in agriculture, environmental science, and film production.', education_system: 'NZQF framework. Bachelor\'s 3 years, Master\'s 1-2 years. Practical and applied learning emphasis.', popular_degrees: ['Environmental Science', 'Agriculture', 'Computer Science', 'Tourism', 'Engineering'], academic_calendar: 'Semester 1 (February-June), Semester 2 (July-November)', avg_tuition_min_usd: 12000, avg_tuition_max_usd: 30000, avg_living_cost_usd: 1100, avg_rent_usd: 900, currency: 'NZD', currency_symbol: 'NZ$', student_visa_info: 'Fee Paying Student Visa required. Apply through Immigration New Zealand.', visa_cost_usd: 200, student_work_rights: 'Can work up to 20 hours/week during academic year, full-time during holidays.', work_hours_per_week: 20, post_study_work: 'Post-Study Work Visa for 1-3 years depending on qualification.', post_study_work_duration: '1-3 years', language_requirements: 'IELTS/TOEFL required. Minimum 6.0-6.5 IELTS typically.', official_languages: ['English', 'Maori'], popular_student_cities: ['Auckland', 'Wellington', 'Christchurch', 'Dunedin'], employment_environment: 'Strong in agriculture, tourism, film, and growing tech sector. Work-life balance prioritized.', scholarship_opportunities: 'New Zealand Scholarships, university-specific awards.', application_process: 'Apply directly to universities. Main intakes: February and July.', source_url: 'https://www.studyinnewzealand.govt.nz/', verification_status: 'verified' },
      { name: 'Italy', code: 'IT', slug: 'italy', flag_emoji: '🇮🇹', continent: 'Europe', description: 'Home to some of the world\'s oldest universities. Affordable tuition, rich cultural heritage, and growing number of English-taught programs especially in design, engineering, and business.', education_system: 'Bologna system. Laurea (Bachelor\'s) 3 years, Laurea Magistrale (Master\'s) 2 years. Strong tradition in arts, design, and engineering.', popular_degrees: ['Engineering', 'Architecture', 'Design', 'Business', 'Medicine'], academic_calendar: 'October-January, February-June', avg_tuition_min_usd: 1000, avg_tuition_max_usd: 15000, avg_living_cost_usd: 900, avg_rent_usd: 600, currency: 'EUR', currency_symbol: '€', student_visa_info: 'Type D Student Visa required for non-EU students. Apply at Italian embassy.', visa_cost_usd: 60, student_work_rights: 'Can work up to 20 hours/week.', work_hours_per_week: 20, post_study_work: 'Can convert student permit to work permit upon graduation. 1-year job seeking period available.', post_study_work_duration: '1 year', language_requirements: 'Many master\'s programs in English. Italian programs require CILS/CELI certification.', official_languages: ['Italian'], popular_student_cities: ['Milan', 'Rome', 'Turin', 'Bologna', 'Florence'], employment_environment: 'Strong in fashion, automotive (Ferrari, Fiat), design, and food industry.', scholarship_opportunities: 'Italian Government Scholarships, university fee waivers, regional scholarships.', application_process: 'Pre-enrollment through Italian embassy or Universitaly portal. Deadlines vary.', source_url: 'https://www.universitaly.it/', verification_status: 'verified' },
    ];

    const countryIds = {};
    for (const c of countries) {
      const result = await client.query(
        `INSERT INTO countries (name, code, slug, flag_emoji, continent, description, education_system, popular_degrees, academic_calendar,
          avg_tuition_min_usd, avg_tuition_max_usd, avg_living_cost_usd, avg_rent_usd, currency, currency_symbol,
          student_visa_info, visa_cost_usd, student_work_rights, work_hours_per_week, post_study_work, post_study_work_duration,
          language_requirements, official_languages, popular_student_cities, employment_environment, scholarship_opportunities,
          application_process, source_url, last_verified, verification_status)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,NOW(),$29)
         ON CONFLICT (name) DO UPDATE SET description = EXCLUDED.description
         RETURNING id`,
        [c.name, c.code, c.slug, c.flag_emoji, c.continent, c.description, c.education_system, c.popular_degrees, c.academic_calendar,
         c.avg_tuition_min_usd, c.avg_tuition_max_usd, c.avg_living_cost_usd, c.avg_rent_usd, c.currency, c.currency_symbol,
         c.student_visa_info, c.visa_cost_usd, c.student_work_rights, c.work_hours_per_week, c.post_study_work, c.post_study_work_duration,
         c.language_requirements, c.official_languages, c.popular_student_cities, c.employment_environment, c.scholarship_opportunities,
         c.application_process, c.source_url, c.verification_status]
      );
      countryIds[c.slug] = result.rows[0].id;
    }

    // ════════════════════════════════════════════════
    // 3. UNIVERSITIES (loading from separate file)
    // ════════════════════════════════════════════════
    console.log('  → Seeding universities...');

    const universitiesData = (await import('./seed-universities.js')).default;
    const universityIds = {};

    for (const u of universitiesData) {
      const countryId = countryIds[u.countrySlug];
      if (!countryId) { console.warn(`  ⚠ Country not found for ${u.name}: ${u.countrySlug}`); continue; }

      const result = await client.query(
        `INSERT INTO universities (name, slug, country_id, city, state_province, website, university_type, founded_year, description,
          faculties, departments, total_students, international_students_pct, student_faculty_ratio,
          languages_of_instruction, intakes, qs_ranking, the_ranking,
          application_fee_usd, avg_tuition_usd, avg_living_cost_usd, accommodation_usd, insurance_usd,
          min_gpa, min_ielts, min_toefl, min_gre, min_gmat, application_portal,
          source_url, last_verified, verification_status)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,NOW(),$31)
         ON CONFLICT (slug) DO UPDATE SET description = EXCLUDED.description
         RETURNING id`,
        [u.name, u.slug, countryId, u.city, u.stateProvince || null, u.website, u.universityType, u.foundedYear, u.description,
         u.faculties || null, u.departments || null, u.totalStudents || null, u.internationalStudentsPct || null, u.studentFacultyRatio || null,
         u.languagesOfInstruction || ['English'], u.intakes || ['Fall'], u.qsRanking || null, u.theRanking || null,
         u.applicationFeeUsd || null, u.avgTuitionUsd || null, u.avgLivingCostUsd || null, u.accommodationUsd || null, u.insuranceUsd || null,
         u.minGpa || null, u.minIelts || null, u.minToefl || null, u.minGre || null, u.minGmat || null, u.applicationPortal || null,
         u.sourceUrl || null, u.verificationStatus || 'unverified']
      );
      universityIds[u.slug] = result.rows[0].id;
    }

    // ════════════════════════════════════════════════
    // 4. PROGRAMS
    // ════════════════════════════════════════════════
    console.log('  → Seeding programs...');

    const programsData = (await import('./seed-programs.js')).default;

    for (const p of programsData) {
      const uniId = universityIds[p.universitySlug];
      if (!uniId) { console.warn(`  ⚠ University not found for program ${p.name}: ${p.universitySlug}`); continue; }

      await client.query(
        `INSERT INTO programs (university_id, name, slug, degree, field, specialization, description,
          duration_months, duration_label, language, delivery_mode, intakes, application_deadline, application_deadline_date,
          tuition_usd, tuition_local, tuition_currency, tuition_per, scholarship_available,
          min_gpa, min_ielts, min_toefl, min_pte, min_gre, min_gmat, min_sat,
          work_experience_years, prerequisite_courses, required_documents, career_outcomes,
          source_url, last_verified, verification_status)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,NOW(),$32)
         ON CONFLICT (university_id, slug) DO NOTHING`,
        [uniId, p.name, p.slug, p.degree, p.field, p.specialization || null, p.description || null,
         p.durationMonths || null, p.durationLabel || null, p.language || 'English', p.deliveryMode || 'on_campus',
         p.intakes || ['Fall'], p.applicationDeadline || null, p.applicationDeadlineDate || null,
         p.tuitionUsd || null, p.tuitionLocal || null, p.tuitionCurrency || null, p.tuitionPer || 'year',
         p.scholarshipAvailable || false,
         p.minGpa || null, p.minIelts || null, p.minToefl || null, p.minPte || null,
         p.minGre || null, p.minGmat || null, p.minSat || null,
         p.workExperienceYears || 0, p.prerequisiteCourses || null, p.requiredDocuments || null,
         p.careerOutcomes || null, p.sourceUrl || null, p.verificationStatus || 'unverified']
      );
    }

    // ════════════════════════════════════════════════
    // 5. SCHOLARSHIPS
    // ════════════════════════════════════════════════
    console.log('  → Seeding scholarships...');

    const scholarshipsData = (await import('./seed-scholarships.js')).default;

    for (const s of scholarshipsData) {
      const countryId = s.countrySlug ? countryIds[s.countrySlug] : null;
      const uniId = s.universitySlug ? universityIds[s.universitySlug] : null;

      await client.query(
        `INSERT INTO scholarships (name, slug, provider, country_id, university_id, degree_eligibility, field_eligibility,
          nationality_eligibility, min_gpa, income_requirement, other_requirements, amount_usd, amount_currency, coverage,
          coverage_details, deadline, deadline_label, required_documents, application_url, description,
          source_url, last_verified, verification_status)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,NOW(),$22)
         ON CONFLICT (slug) DO NOTHING`,
        [s.name, s.slug, s.provider, countryId, uniId, s.degreeEligibility || null, s.fieldEligibility || null,
         s.nationalityEligibility || null, s.minGpa || null, s.incomeRequirement || null, s.otherRequirements || null,
         s.amountUsd || null, s.amountCurrency || null, s.coverage || null,
         s.coverageDetails || null, s.deadline || null, s.deadlineLabel || null,
         s.requiredDocuments || null, s.applicationUrl || null, s.description || null,
         s.sourceUrl || null, s.verificationStatus || 'unverified']
      );
    }

    await client.query('COMMIT');
    console.log('\n✅ Database seeded successfully!\n');
    console.log(`  Countries:     ${countries.length}`);
    console.log(`  Careers:       ${careers.length}`);
    console.log(`  Universities:  ${universitiesData.length}`);
    console.log(`  Programs:      ${programsData.length}`);
    console.log(`  Scholarships:  ${scholarshipsData.length}`);
    console.log('');

  } catch (err) {
    await client.query('ROLLBACK');
    console.error('❌ Seeding failed:', err.message);
    console.error(err);
    throw err;
  } finally {
    client.release();
  }

  process.exit(0);
}

seed().catch(() => process.exit(1));
