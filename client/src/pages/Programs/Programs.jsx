import { useState, useEffect, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import api from '../../lib/api';
import { BsBookHalf, BsSearch, BsCheck2Circle, BsQuestionCircle } from 'react-icons/bs';
import '../DataPages.css';

const DEGREE_OPTIONS = [
  { value: '', label: 'All Degrees' },
  { value: 'bachelors', label: "Bachelor's" },
  { value: 'masters', label: "Master's" },
  { value: 'phd', label: 'PhD' },
  { value: 'diploma', label: 'Diploma' },
  { value: 'certificate', label: 'Certificate' },
  { value: 'professional', label: 'Professional' },
];

const LANGUAGE_OPTIONS = [
  { value: '', label: 'All Languages' },
  { value: 'English', label: 'English' },
  { value: 'German', label: 'German' },
  { value: 'French', label: 'French' },
  { value: 'Dutch', label: 'Dutch' },
  { value: 'Japanese', label: 'Japanese' },
  { value: 'Chinese', label: 'Chinese (Mandarin)' },
];

const FIELD_OPTIONS = [
  { value: '', label: 'All Disciplines' },
  { value: 'Humanities, Social Sciences, Economy, Business, Management', label: 'Humanities, Business & Social Sciences' },
  { value: 'Natural Sciences, Technology, Sports and Health Sciences, Educational Sciences, Performing arts, media studies', label: 'Natural Sciences, Technology & Health' },
  { value: 'Medicine, dentistry, Veterinary medicine', label: 'Medicine, Dentistry & Veterinary' },
  { value: 'Computer Science', label: 'Computer Science' },
  { value: 'Engineering', label: 'Engineering' },
  { value: 'Law', label: 'Law' },
  { value: 'Arts', label: 'Arts & Design' },
];

const COUNTRY_OPTIONS = [
  { value: '', label: 'All Countries' },
  { value: 'united-states', label: 'USA' },
  { value: 'united-kingdom', label: 'UK' },
  { value: 'canada', label: 'Canada' },
  { value: 'germany', label: 'Germany' },
  { value: 'australia', label: 'Australia' },
  { value: 'netherlands', label: 'Netherlands' },
  { value: 'switzerland', label: 'Switzerland' },
  { value: 'singapore', label: 'Singapore' },
  { value: 'japan', label: 'Japan' },
  { value: 'south-korea', label: 'South Korea' },
  { value: 'ireland', label: 'Ireland' },
  { value: 'france', label: 'France' },
  { value: 'sweden', label: 'Sweden' },
  { value: 'italy', label: 'Italy' },
  { value: 'new-zealand', label: 'New Zealand' },
  { value: 'norway', label: 'Norway' },
  { value: 'finland', label: 'Finland' },
  { value: 'belgium', label: 'Belgium' },
  { value: 'china', label: 'China' },
  { value: 'austria', label: 'Austria' },
  { value: 'denmark', label: 'Denmark' },
  { value: 'russia', label: 'Russia' },
  { value: 'spain', label: 'Spain' },
  { value: 'malaysia', label: 'Malaysia' },
  { value: 'portugal', label: 'Portugal' },
  { value: 'poland', label: 'Poland' },
  { value: 'uae', label: 'UAE' },
  { value: 'luxembourg', label: 'Luxembourg' },
];

// ── Helpers ──────────────────────────────────────────
function formatTuition(tuitionUsd, tuitionPer) {
  if (tuitionUsd == null) return null;
  const formatted = `$${Number(tuitionUsd).toLocaleString()}`;
  const per = tuitionPer === 'total' ? 'total' : tuitionPer === 'semester' ? '/sem' : '/yr';
  return `${formatted}${per}`;
}

function degreeBadgeClass(degree) {
  if (degree === 'masters') return 'badge-primary';
  if (degree === 'phd') return 'badge-accent';
  if (degree === 'bachelors') return 'badge-warning';
  return 'badge-muted';
}

function formatDegreeLabel(degree) {
  const map = { masters: "Master's", phd: 'PhD', bachelors: "Bachelor's", diploma: 'Diploma', certificate: 'Certificate', professional: 'Professional' };
  return map[degree] || degree;
}

// ── Component ─────────────────────────────────────────
export default function Programs() {
  const [searchParams] = useSearchParams();
  const [programs, setPrograms] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [degree, setDegree] = useState(searchParams.get('degree') || '');
  const [country, setCountry] = useState(searchParams.get('country') || '');
  const [field, setField] = useState('');
  const [language, setLanguage] = useState('');

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const params = { limit: 30 };
      if (search) params.search = search;
      if (degree) params.degree = degree;
      if (country) params.country = country;
      if (field) params.field = field;
      if (language) params.language = language;
      const res = await api.get('/programs', { params });
      setPrograms(res.data.data || []);
      setTotal(res.data.meta?.pagination?.total || 0);
    } catch {
      setPrograms([]);
    } finally {
      setLoading(false);
    }
  }, [degree, country, field, language]);

  useEffect(() => { fetchData(); }, [fetchData]);

  return (
    <div className="page container">
      <div className="page-header">
        <h1 className="page-title">
          <BsBookHalf style={{ verticalAlign: 'middle', marginRight: 8 }} /> Browse Programs
        </h1>
        <p className="page-subtitle">Find degree programs at universities worldwide</p>
      </div>

      <div className="filters-bar animate-fadeInUp">
        <form onSubmit={(e) => { e.preventDefault(); fetchData(); }} className="search-bar" style={{ maxWidth: 400 }}>
          <span className="search-icon"><BsSearch /></span>
          <input
            type="text"
            placeholder="Search programs, fields, universities..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <select className="form-input filter-select" value={degree} onChange={(e) => setDegree(e.target.value)}>
          {DEGREE_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>

        <select className="form-input filter-select" value={field} onChange={(e) => setField(e.target.value)}>
          {FIELD_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>

        <select className="form-input filter-select" value={language} onChange={(e) => setLanguage(e.target.value)}>
          {LANGUAGE_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>

        <select className="form-input filter-select" value={country} onChange={(e) => setCountry(e.target.value)}>
          {COUNTRY_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>

        <span className="filter-count text-sm text-muted">{total.toLocaleString()} programs</span>
      </div>

      {loading ? (
        <div className="cards-grid">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="skeleton" style={{ height: 200, borderRadius: 16 }} />
          ))}
        </div>
      ) : programs.length > 0 ? (
        <div className="cards-grid stagger-children">
          {programs.map((p) => {
            const isVerified = p.verificationStatus === 'verified';
            const tuitionFormatted = formatTuition(p.tuitionUsd, p.tuitionPer);

            return (
              <Link key={p.id} to={`/programs/${p.slug}`} className="program-card card">
                {/* Degree + Verification badges */}
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                  <span className={`badge ${degreeBadgeClass(p.degree)}`}>
                    {formatDegreeLabel(p.degree)}
                  </span>
                  {isVerified ? (
                    <span
                      title="Data verified against official university source"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
                        fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.03em',
                        color: 'var(--accent-400)',
                        background: 'color-mix(in srgb, var(--accent-400) 12%, transparent)',
                        border: '1px solid color-mix(in srgb, var(--accent-400) 30%, transparent)',
                        borderRadius: '999px', padding: '0.15rem 0.5rem',
                      }}
                    >
                      <BsCheck2Circle size={11} /> Verified
                    </span>
                  ) : (
                    <span
                      title="Data not yet verified against an official source"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
                        fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.03em',
                        color: 'var(--text-muted)',
                        background: 'color-mix(in srgb, var(--text-muted) 10%, transparent)',
                        border: '1px solid color-mix(in srgb, var(--text-muted) 20%, transparent)',
                        borderRadius: '999px', padding: '0.15rem 0.5rem',
                      }}
                    >
                      <BsQuestionCircle size={11} /> Unverified
                    </span>
                  )}
                </div>

                <h3 className="program-name">{p.name}</h3>
                <p className="program-uni">
                  {p.country && (
                    <img
                      src={`/flags/${p.country.code.toLowerCase()}.webp`}
                      alt={p.country.name}
                      style={{ width: '1.2em', verticalAlign: 'middle', marginRight: '4px' }}
                    />
                  )}
                  {p.university?.name} · {p.country?.name}
                </p>

                <div className="program-details">
                  <div className="program-detail">
                    <span className="program-detail-label">Tuition</span>
                    <span className="program-detail-value">
                      {tuitionFormatted ?? <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>Not disclosed</span>}
                    </span>
                  </div>
                  <div className="program-detail">
                    <span className="program-detail-label">Duration</span>
                    <span className="program-detail-value">
                      {p.durationLabel ?? <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>Contact university</span>}
                    </span>
                  </div>
                  <div className="program-detail">
                    <span className="program-detail-label">Language</span>
                    <span className="program-detail-value">{p.language || 'English'}</span>
                  </div>
                  {p.scholarshipAvailable && (
                    <div className="program-detail">
                      <span className="program-detail-label">Scholarship</span>
                      <span className="program-detail-value" style={{ color: 'var(--accent-400)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                        Available <BsCheck2Circle />
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="empty-state card" style={{ padding: 64 }}>
          <div style={{ fontSize: '2rem', marginBottom: 8 }}><BsBookHalf /></div>
          <p className="font-semibold">No programs found</p>
          <p className="text-muted text-sm mt-1">Try adjusting your filters or broadening your search</p>
        </div>
      )}
    </div>
  );
}
