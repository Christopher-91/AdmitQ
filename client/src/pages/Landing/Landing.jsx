import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Landing.css';

const HERO_STATS = [
  { value: '15+', label: 'Countries' },
  { value: '30+', label: 'Universities' },
  { value: '150+', label: 'Programs' },
  { value: '16+', label: 'Scholarships' },
];

const FEATURES = [
  { icon: '🔍', title: 'Smart Discovery', desc: 'AI-powered matching across 15+ countries. Find programs that fit your profile, budget, and career goals.' },
  { icon: '🎯', title: 'Match Scoring', desc: 'Safe / Target / Reach categorization for every program. Know your chances before you apply.' },
  { icon: '💰', title: 'Cost Calculator', desc: 'Comprehensive cost breakdowns including tuition, living expenses, visa fees, and hidden costs.' },
  { icon: '🎓', title: 'Scholarship Finder', desc: 'Discover scholarships you qualify for — from Fulbright to DAAD to university-specific awards.' },
  { icon: '📋', title: 'Application Tracker', desc: 'Track every document, deadline, and application status in one organized dashboard.' },
  { icon: '🗺️', title: 'Career Pathways', desc: 'Reverse-plan your education: start with your dream career and find the right degree path.' },
];

const COUNTRIES = [
  { emoji: '🇺🇸', name: 'United States', slug: 'united-states' },
  { emoji: '🇬🇧', name: 'United Kingdom', slug: 'united-kingdom' },
  { emoji: '🇨🇦', name: 'Canada', slug: 'canada' },
  { emoji: '🇩🇪', name: 'Germany', slug: 'germany' },
  { emoji: '🇦🇺', name: 'Australia', slug: 'australia' },
  { emoji: '🇳🇱', name: 'Netherlands', slug: 'netherlands' },
  { emoji: '🇨🇭', name: 'Switzerland', slug: 'switzerland' },
  { emoji: '🇸🇬', name: 'Singapore', slug: 'singapore' },
  { emoji: '🇯🇵', name: 'Japan', slug: 'japan' },
  { emoji: '🇰🇷', name: 'South Korea', slug: 'south-korea' },
  { emoji: '🇮🇪', name: 'Ireland', slug: 'ireland' },
  { emoji: '🇫🇷', name: 'France', slug: 'france' },
  { emoji: '🇸🇪', name: 'Sweden', slug: 'sweden' },
  { emoji: '🇮🇹', name: 'Italy', slug: 'italy' },
  { emoji: '🇳🇿', name: 'New Zealand', slug: 'new-zealand' },
];

const STEPS = [
  { num: '01', title: 'Build Your Profile', desc: 'Tell us about your education, scores, budget, and career aspirations. We\'ll do the heavy lifting.' },
  { num: '02', title: 'Discover & Compare', desc: 'Browse personalized recommendations. Compare universities, costs, and requirements side by side.' },
  { num: '03', title: 'Plan & Apply', desc: 'Track deadlines, manage documents, and submit applications — all from one dashboard.' },
];

export default function Landing() {
  const [searchQuery, setSearchQuery] = useState('');
  const [animatedStat, setAnimatedStat] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedStat(prev => (prev + 1) % HERO_STATS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="landing">
      {/* ── Hero ──────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg-orb hero-orb-1" />
        <div className="hero-bg-orb hero-orb-2" />
        <div className="hero-bg-orb hero-orb-3" />

        <div className="container hero-content">
          <div className="hero-badge animate-fadeInUp">
            <span className="hero-badge-dot" />
            Trusted by 10,000+ students worldwide
          </div>

          <h1 className="hero-title animate-fadeInUp">
            Your Global Education
            <br />
            Journey <span className="hero-gradient">Starts Here</span>
          </h1>

          <p className="hero-subtitle animate-fadeInUp">
            Discover the perfect university, compare costs across 15+ countries,
            find scholarships you qualify for, and track every application — all in one place.
          </p>

          {/* Search Bar */}
          <div className="hero-search animate-fadeInUp">
            <div className="search-bar" style={{ maxWidth: '100%' }}>
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search universities, programs, or countries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery) {
                    window.location.href = `/universities?search=${searchQuery}`;
                  }
                }}
              />
            </div>
            <Link to="/register" className="btn btn-primary btn-lg hero-cta">
              Get Started Free →
            </Link>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            {HERO_STATS.map((stat, i) => (
              <div key={i} className={`hero-stat ${animatedStat === i ? 'hero-stat-active' : ''}`}>
                <span className="hero-stat-value">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Countries Ticker ────────────────────── */}
      <section className="countries-ticker">
        <div className="ticker-track">
          {[...COUNTRIES, ...COUNTRIES].map((c, i) => (
            <Link key={i} to={`/countries/${c.slug}`} className="ticker-item">
              <span className="ticker-emoji">{c.emoji}</span>
              <span>{c.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Features ────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Features</span>
            <h2 className="section-title">Everything You Need to<br /><span className="hero-gradient">Make the Right Choice</span></h2>
            <p className="section-subtitle">
              We've built every tool a student needs — from initial research to final application submission.
            </p>
          </div>

          <div className="features-grid">
            {FEATURES.map((f, i) => (
              <div key={i} className="feature-card" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ────────────────────────── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">How It Works</span>
            <h2 className="section-title">Three Steps to Your<br /><span className="hero-gradient">Dream University</span></h2>
          </div>

          <div className="steps-grid">
            {STEPS.map((s, i) => (
              <div key={i} className="step-card">
                <div className="step-num">{s.num}</div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
                {i < STEPS.length - 1 && <div className="step-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────── */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-glow" />
            <h2 className="cta-title">Ready to Find Your Perfect University?</h2>
            <p className="cta-subtitle">
              Join thousands of students who've already found their ideal program. 
              Create your free profile and get personalized recommendations in minutes.
            </p>
            <div className="cta-actions">
              <Link to="/register" className="btn btn-primary btn-lg">
                Create Free Account →
              </Link>
              <Link to="/universities" className="btn btn-secondary btn-lg">
                Browse Universities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="navbar-logo">
                <span className="logo-icon">🎓</span>
                <span className="logo-text">Admit<span className="logo-highlight">Q</span></span>
              </div>
              <p className="footer-tagline">
                Helping students make informed education decisions across 15+ countries.
              </p>
            </div>
            <div className="footer-col">
              <h4>Explore</h4>
              <Link to="/universities">Universities</Link>
              <Link to="/programs">Programs</Link>
              <Link to="/countries">Countries</Link>
              <Link to="/scholarships">Scholarships</Link>
            </div>
            <div className="footer-col">
              <h4>Tools</h4>
              <Link to="/careers">Career Explorer</Link>
              <Link to="/calculator">Cost Calculator</Link>
              <Link to="/compare">Compare</Link>
            </div>
            <div className="footer-col">
              <h4>Account</h4>
              <Link to="/register">Sign Up</Link>
              <Link to="/login">Log In</Link>
              <Link to="/dashboard">Dashboard</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} AdmitQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
