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
  { emoji: '🇺🇸', name: 'United States', city: 'New York City', sector: 'Technology & Innovation', slug: 'united-states', image: 'https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=900&q=85' },
  { emoji: '🇬🇧', name: 'United Kingdom', city: 'London', sector: 'Finance & Business', slug: 'united-kingdom', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=85' },
  { emoji: '🇨🇦', name: 'Canada', city: 'Toronto', sector: 'Technology & Healthcare', slug: 'canada', image: 'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&w=900&q=85' },
  { emoji: '🇩🇪', name: 'Germany', city: 'Berlin', sector: 'Engineering & Automotive', slug: 'germany', image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=900&q=85' },
  { emoji: '🇦🇺', name: 'Australia', city: 'Sydney', sector: 'Healthcare & Mining', slug: 'australia', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=900&q=85' },
  { emoji: '🇮🇪', name: 'Ireland', city: 'Dublin', sector: 'Technology & Life Sciences', slug: 'ireland', image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=900&q=85' },
  { emoji: '🇸🇬', name: 'Singapore', city: 'Singapore', sector: 'Finance & Technology', slug: 'singapore', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=85' },
  { emoji: '🇦🇪', name: 'United Arab Emirates', city: 'Dubai', sector: 'Business & Hospitality', slug: 'united-arab-emirates', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=85' },
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
              Get Started →
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

      {/* ── Study Destinations ──────────────────── */}
      <section className="destinations-section">
        <div className="container">
          <div className="destinations-header">
            <span className="section-badge">Study destinations</span>
            <h2 className="section-title">Explore Your Next<br /><span className="hero-gradient">Global Opportunity</span></h2>
            <p className="section-subtitle">
              See the cities students love, and the industries where graduates can make their mark.
            </p>
          </div>
        </div>

        <div className="destinations-viewport" aria-label="Popular study destinations">
          <div className="destinations-track">
            {[0, 1].map(set => (
              <div className="destinations-group" key={set}>
                {COUNTRIES.map(country => (
                  <Link key={`${set}-${country.slug}`} to={`/countries/${country.slug}`} className="destination-card">
                    <div className="destination-image-wrap">
                      <img src={country.image} alt={`${country.city}, ${country.name}`} className="destination-image" />
                      <span className="destination-city">{country.city}</span>
                    </div>
                    <div className="destination-card-content">
                      <div className="destination-country">
                        <span className="destination-flag" aria-hidden="true">{country.emoji}</span>
                        <h3>{country.name}</h3>
                      </div>
                      <p className="destination-sector-label">Leading job sector</p>
                      <p className="destination-sector">{country.sector}</p>
                      <span className="destination-link">Explore destination <span aria-hidden="true">→</span></span>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
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
                Create Account →
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
