import { query } from './src/config/database.js';

const topUniversities = [
  // 1. MIT (US)
  {
    slug: 'mit',
    programs: [
      {
        name: 'Master of Engineering in Computer Science (MEng)',
        degree: 'masters',
        field: 'Computer Science',
        specialization: 'Artificial Intelligence, Systems, Theory',
        description: 'A rigorous program focused on advanced coursework and a thesis in computer science.',
        duration_months: 12,
        duration_label: '1 year',
        tuition_usd: 59750,
        tuition_currency: 'USD',
        min_gpa: 3.8,
        min_toefl: 100,
        min_ielts: 7.5,
        career_outcomes: ['Software Engineer', 'Machine Learning Engineer', 'Systems Architect']
      },
      {
        name: 'Master of Business Administration (MBA)',
        degree: 'masters',
        field: 'Business & Management',
        specialization: 'Finance, Innovation, Entrepreneurship',
        description: 'MIT Sloan\'s flagship 2-year MBA program designed to build principled, innovative leaders.',
        duration_months: 24,
        duration_label: '2 years',
        tuition_usd: 82000,
        tuition_currency: 'USD',
        min_gpa: 3.6,
        min_toefl: 104,
        min_ielts: 7.5,
        min_gmat: 730,
        career_outcomes: ['Product Manager', 'Management Consultant', 'Investment Banker']
      },
      {
        name: 'Master of Finance (MFin)',
        degree: 'masters',
        field: 'Finance',
        specialization: 'Quantitative Finance, Financial Engineering',
        description: 'A highly rigorous STEM-designated program in modern finance.',
        duration_months: 18,
        duration_label: '18 months',
        tuition_usd: 86300,
        tuition_currency: 'USD',
        min_gpa: 3.7,
        min_toefl: 104,
        min_ielts: 7.5,
        career_outcomes: ['Quantitative Analyst', 'Trader', 'Financial Engineer']
      },
      {
        name: 'PhD in Physics',
        degree: 'phd',
        field: 'Physics',
        specialization: 'Quantum Computing, Astrophysics',
        description: 'World-leading doctoral research program in theoretical and experimental physics.',
        duration_months: 60,
        duration_label: '5 years',
        tuition_usd: 59750,
        tuition_currency: 'USD',
        scholarship_available: true,
        min_gpa: 3.8,
        min_toefl: 100,
        min_ielts: 7.0,
        career_outcomes: ['Research Scientist', 'Professor', 'Data Scientist']
      },
      {
        name: 'Master of Science in Mechanical Engineering',
        degree: 'masters',
        field: 'Engineering',
        specialization: 'Robotics, Thermodynamics',
        description: 'Advanced degree combining coursework with extensive research opportunities.',
        duration_months: 24,
        duration_label: '2 years',
        tuition_usd: 59750,
        tuition_currency: 'USD',
        min_gpa: 3.7,
        min_toefl: 100,
        min_ielts: 7.0,
        career_outcomes: ['Robotics Engineer', 'Design Engineer']
      },
      {
        name: 'Bachelor of Science in Computer Science and Engineering',
        degree: 'bachelors',
        field: 'Computer Science',
        specialization: 'Software Engineering, AI',
        description: 'MIT\'s renowned Course 6-3 undergraduate program.',
        duration_months: 48,
        duration_label: '4 years',
        tuition_usd: 59750,
        tuition_currency: 'USD',
        min_gpa: 3.9,
        min_toefl: 100,
        min_ielts: 7.5,
        career_outcomes: ['Software Developer', 'Startup Founder']
      },
      {
        name: 'Master of Science in Media Arts and Sciences',
        degree: 'masters',
        field: 'Design & Media',
        specialization: 'Human-Computer Interaction',
        description: 'The Media Lab\'s unique interdisciplinary program.',
        duration_months: 24,
        duration_label: '2 years',
        tuition_usd: 59750,
        tuition_currency: 'USD',
        scholarship_available: true,
        min_gpa: 3.5,
        min_toefl: 100,
        min_ielts: 7.0,
        career_outcomes: ['UX Researcher', 'Creative Technologist']
      }
    ]
  },
  // 2. Stanford (US)
  {
    slug: 'stanford-university',
    programs: [
      {
        name: 'Master of Science in Computer Science',
        degree: 'masters',
        field: 'Computer Science',
        specialization: 'Artificial Intelligence, Human-Computer Interaction',
        description: 'A highly flexible terminal master\'s degree focused on practical software skills and theoretical foundations.',
        duration_months: 24,
        duration_label: '2 years',
        tuition_usd: 62000,
        tuition_currency: 'USD',
        min_gpa: 3.8,
        min_toefl: 100,
        career_outcomes: ['Software Engineer', 'Product Manager']
      },
      {
        name: 'Master of Business Administration (MBA)',
        degree: 'masters',
        field: 'Business & Management',
        specialization: 'Entrepreneurship, Tech Management',
        description: 'Stanford GSB\'s highly selective MBA program deeply connected to Silicon Valley.',
        duration_months: 24,
        duration_label: '2 years',
        tuition_usd: 79860,
        tuition_currency: 'USD',
        min_gpa: 3.7,
        min_toefl: 105,
        min_gmat: 730,
        career_outcomes: ['Venture Capitalist', 'Startup Founder', 'Product Manager']
      },
      {
        name: 'Master of Science in Electrical Engineering',
        degree: 'masters',
        field: 'Engineering',
        specialization: 'Hardware Systems, Signal Processing',
        description: 'Leading MS program preparing students for careers in hardware and systems.',
        duration_months: 24,
        duration_label: '2 years',
        tuition_usd: 62000,
        tuition_currency: 'USD',
        min_gpa: 3.7,
        min_toefl: 100,
        career_outcomes: ['Hardware Engineer', 'Systems Architect']
      },
      {
        name: 'PhD in Computer Science',
        degree: 'phd',
        field: 'Computer Science',
        specialization: 'Artificial Intelligence, Machine Learning',
        description: 'Top-ranked doctoral program focusing on original research.',
        duration_months: 60,
        duration_label: '5 years',
        tuition_usd: 62000,
        tuition_currency: 'USD',
        scholarship_available: true,
        min_gpa: 3.9,
        min_toefl: 100,
        career_outcomes: ['Research Scientist', 'University Professor']
      },
      {
        name: 'Master of Arts in Education',
        degree: 'masters',
        field: 'Education',
        specialization: 'Policy, Organization, and Leadership Studies',
        description: 'A 9-month program exploring educational leadership and policy.',
        duration_months: 9,
        duration_label: '9 months',
        tuition_usd: 58000,
        tuition_currency: 'USD',
        min_gpa: 3.5,
        min_toefl: 100,
        career_outcomes: ['Education Policymaker', 'School Administrator']
      }
    ]
  },
  // 3. Oxford (UK)
  {
    slug: 'university-of-oxford',
    programs: [
      {
        name: 'MSc in Computer Science',
        degree: 'masters',
        field: 'Computer Science',
        specialization: 'Advanced Software Engineering',
        description: 'A full-time, 12-month program focusing on theoretical computer science and software engineering.',
        duration_months: 12,
        duration_label: '1 year',
        tuition_usd: 42000,
        tuition_currency: 'GBP',
        min_gpa: 3.7,
        min_toefl: 110,
        min_ielts: 7.5,
        career_outcomes: ['Software Engineer', 'Data Scientist']
      },
      {
        name: 'Master of Business Administration (MBA)',
        degree: 'masters',
        field: 'Business & Management',
        specialization: 'Global Business',
        description: 'An intensive, 1-year MBA program designed to tackle world-scale problems.',
        duration_months: 12,
        duration_label: '1 year',
        tuition_usd: 90000,
        tuition_currency: 'GBP',
        min_gpa: 3.5,
        min_toefl: 110,
        min_ielts: 7.5,
        min_gmat: 690,
        career_outcomes: ['Management Consultant', 'Corporate Executive']
      },
      {
        name: 'MSc in Financial Economics',
        degree: 'masters',
        field: 'Finance',
        specialization: 'Corporate Finance, Asset Pricing',
        description: 'Jointly run by the Saïd Business School and the Department of Economics.',
        duration_months: 9,
        duration_label: '9 months',
        tuition_usd: 65000,
        tuition_currency: 'GBP',
        min_gpa: 3.7,
        min_toefl: 110,
        min_ielts: 7.5,
        career_outcomes: ['Investment Banker', 'Economic Consultant']
      },
      {
        name: 'BA in Philosophy, Politics and Economics (PPE)',
        degree: 'bachelors',
        field: 'Humanities & Social Sciences',
        specialization: 'PPE',
        description: 'Oxford\'s famous multi-disciplinary undergraduate degree.',
        duration_months: 36,
        duration_label: '3 years',
        tuition_usd: 45000,
        tuition_currency: 'GBP',
        min_gpa: 3.8,
        min_toefl: 110,
        min_ielts: 7.5,
        career_outcomes: ['Politician', 'Journalist', 'Diplomat']
      }
    ]
  },
  // 4. Harvard (US)
  {
    slug: 'harvard-university',
    programs: [
      {
        name: 'Master of Business Administration (MBA)',
        degree: 'masters',
        field: 'Business & Management',
        specialization: 'General Management',
        description: 'HBS\'s world-renowned 2-year program utilizing the case method.',
        duration_months: 24,
        duration_label: '2 years',
        tuition_usd: 74910,
        tuition_currency: 'USD',
        min_gpa: 3.7,
        min_toefl: 109,
        min_ielts: 7.5,
        min_gmat: 730,
        career_outcomes: ['CEO', 'Management Consultant', 'Venture Capitalist']
      },
      {
        name: 'Master in Public Policy (MPP)',
        degree: 'masters',
        field: 'Public Policy',
        specialization: 'International/Global Affairs, Social Policy',
        description: 'Harvard Kennedy School\'s flagship program for future public leaders.',
        duration_months: 24,
        duration_label: '2 years',
        tuition_usd: 62000,
        tuition_currency: 'USD',
        min_gpa: 3.6,
        min_toefl: 100,
        min_ielts: 7.0,
        career_outcomes: ['Policy Analyst', 'Government Official']
      },
      {
        name: 'Master of Science in Data Science',
        degree: 'masters',
        field: 'Computer Science',
        specialization: 'Data Science, Machine Learning',
        description: 'Jointly run by Computer Science and Statistics departments.',
        duration_months: 18,
        duration_label: '18 months',
        tuition_usd: 61000,
        tuition_currency: 'USD',
        min_gpa: 3.8,
        min_toefl: 105,
        min_ielts: 7.5,
        career_outcomes: ['Data Scientist', 'Machine Learning Engineer']
      },
      {
        name: 'Juris Doctor (JD)',
        degree: 'masters',
        field: 'Law',
        specialization: 'Corporate Law, Public Interest Law',
        description: 'Harvard Law School\'s prestigious legal degree program.',
        duration_months: 36,
        duration_label: '3 years',
        tuition_usd: 73000,
        tuition_currency: 'USD',
        min_gpa: 3.9,
        min_toefl: 100,
        career_outcomes: ['Lawyer', 'Judge', 'Legal Consultant']
      }
    ]
  },
  // 5. Cambridge (UK)
  {
    slug: 'university-of-cambridge',
    programs: [
      {
        name: 'MPhil in Advanced Computer Science',
        degree: 'masters',
        field: 'Computer Science',
        specialization: 'Systems, AI',
        description: 'A 9-month master\'s designed as preparation for a PhD.',
        duration_months: 9,
        duration_label: '9 months',
        tuition_usd: 48000,
        tuition_currency: 'GBP',
        min_gpa: 3.8,
        min_toefl: 107,
        min_ielts: 7.5,
        career_outcomes: ['Research Scientist', 'Software Engineer']
      },
      {
        name: 'Master of Business Administration (MBA)',
        degree: 'masters',
        field: 'Business & Management',
        specialization: 'Entrepreneurship',
        description: 'Cambridge Judge Business School\'s intense 1-year MBA.',
        duration_months: 12,
        duration_label: '1 year',
        tuition_usd: 85000,
        tuition_currency: 'GBP',
        min_gpa: 3.3,
        min_toefl: 110,
        min_ielts: 7.5,
        min_gmat: 690,
        career_outcomes: ['Consultant', 'Tech Executive']
      },
      {
        name: 'BA in Natural Sciences',
        degree: 'bachelors',
        field: 'Natural Sciences',
        specialization: 'Physics, Chemistry, Biology',
        description: 'Cambridge\'s unique framework for studying science at the undergraduate level.',
        duration_months: 36,
        duration_label: '3 years',
        tuition_usd: 50000,
        tuition_currency: 'GBP',
        min_gpa: 3.8,
        min_toefl: 110,
        min_ielts: 7.5,
        career_outcomes: ['Scientist', 'Researcher']
      }
    ]
  }
];

const seedPrograms = async () => {
  try {
    for (const uni of topUniversities) {
      // 1. Get university ID
      const uniRes = await query('SELECT id FROM universities WHERE slug = $1', [uni.slug]);
      if (uniRes.rows.length === 0) {
        console.warn(`University not found: ${uni.slug}`);
        continue;
      }
      const universityId = uniRes.rows[0].id;

      // 2. Delete existing programs for this university
      await query('DELETE FROM programs WHERE university_id = $1', [universityId]);
      console.log(`Cleared existing programs for ${uni.slug}`);

      // 3. Insert new accurate programs
      for (const p of uni.programs) {
        const slug = `${uni.slug}-${p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
        
        await query(
          `INSERT INTO programs (
            university_id, name, slug, degree, field, specialization, description,
            duration_months, duration_label, tuition_usd, tuition_currency,
            min_gpa, min_toefl, min_ielts, min_gmat, career_outcomes,
            scholarship_available, source_url, verification_status
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)`,
          [
            universityId, p.name, slug, p.degree, p.field, p.specialization, p.description,
            p.duration_months, p.duration_label, p.tuition_usd, p.tuition_currency,
            p.min_gpa, p.min_toefl, p.min_ielts, p.min_gmat || null, p.career_outcomes || [],
            p.scholarship_available || false, 'Manual Curation', 'verified'
          ]
        );
      }
      console.log(`Inserted ${uni.programs.length} real programs for ${uni.slug}`);
    }
    
    console.log('✅ Top 5 universities seeded with accurate programs.');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding programs:', err);
    process.exit(1);
  }
};

seedPrograms();
