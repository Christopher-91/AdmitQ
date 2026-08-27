import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import api from '../../lib/api';
import { BsBookHalf, BsSearch, BsCheck2 } from 'react-icons/bs';
import '../DataPages.css';

export default function Programs() {
  const [searchParams] = useSearchParams();
  const [programs, setPrograms] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [degree, setDegree] = useState(searchParams.get('degree') || '');
  const [country, setCountry] = useState(searchParams.get('country') || '');
  const [field, setField] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const params = {};
      if (search) params.search = search;
      if (degree) params.degree = degree;
      if (country) params.country = country;
      if (field) params.field = field;
      params.limit = 30;
      const res = await api.get('/programs', { params });
      setPrograms(res.data.data || []);
      setTotal(res.data.meta?.pagination?.total || 0);
    } catch { setPrograms([]); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchData(); }, [degree, country, field]);

  return (
    <div className="page container">
      <div className="page-header">
        <h1 className="page-title"><BsBookHalf style={{ verticalAlign: 'middle', marginRight: 8 }} /> Browse Programs</h1>
        <p className="page-subtitle">Find the perfect degree from top universities worldwide</p>
      </div>

      <div className="filters-bar animate-fadeInUp">
        <form onSubmit={(e) => { e.preventDefault(); fetchData(); }} className="search-bar" style={{ maxWidth: 400 }}>
          <span className="search-icon"><BsSearch /></span>
          <input type="text" placeholder="Search programs, fields..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </form>

        <select className="form-input filter-select" value={degree} onChange={(e) => setDegree(e.target.value)}>
          <option value="">All Degrees</option>
          <option value="bachelors">Bachelor's</option>
          <option value="masters">Master's</option>
          <option value="phd">PhD</option>
          <option value="professional">Professional</option>
        </select>

        <select className="form-input filter-select" value={field} onChange={(e) => setField(e.target.value)}>
          <option value="">Types of programs</option>
          <option value="Humanities, Social Sciences, Economy, Business, Management">Humanities, Social Sciences, Economy, Business and Management</option>
          <option value="Natural Sciences, Technology, Sports and Health Sciences, Educational Sciences, Performing arts, media studies">Natural Sciences, Technology, Sports and Health Sciences, Educational Sciences, Performing arts, media studies</option>
          <option value="Medicine, dentistry, Veterinary medicine">Medicine, dentistry, Veterinary medicine</option>
        </select>

        <select className="form-input filter-select" value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">All Countries</option>
          <option value="united-states">USA</option>
          <option value="united-kingdom">UK</option>
          <option value="canada">Canada</option>
          <option value="germany">Germany</option>
          <option value="australia">Australia</option>
          <option value="netherlands">Netherlands</option>
          <option value="switzerland">Switzerland</option>
          <option value="singapore">Singapore</option>
          <option value="japan">Japan</option>
          <option value="south-korea">South Korea</option>
          <option value="ireland">Ireland</option>
          <option value="france">France</option>
          <option value="sweden">Sweden</option>
          <option value="italy">Italy</option>
          <option value="new-zealand">New Zealand</option>
          <option value="norway">Norway</option>
          <option value="finland">Finland</option>
          <option value="belgium">Belgium</option>
          <option value="china">China</option>
          <option value="austria">Austria</option>
          <option value="denmark">Denmark</option>
          <option value="russia">Russia</option>
          <option value="spain">Spain</option>
          <option value="malaysia">Malaysia</option>
          <option value="portugal">Portugal</option>
          <option value="poland">Poland</option>
          <option value="uae">UAE</option>
          <option value="luxembourg">Luxembourg</option>
        </select>

        <span className="filter-count text-sm text-muted">{total} programs</span>
      </div>

      {loading ? (
        <div className="cards-grid">
          {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="skeleton" style={{ height: 200, borderRadius: 16 }} />)}
        </div>
      ) : programs.length > 0 ? (
        <div className="cards-grid stagger-children">
          {programs.map((p) => (
            <Link key={p.id} to={`/programs/${p.slug}`} className="program-card card">
              <div>
                <span className={`badge ${p.degree === 'masters' ? 'badge-primary' : p.degree === 'phd' ? 'badge-accent' : 'badge-warning'}`}>
                  {p.degree === 'masters' ? "Master's" : p.degree === 'phd' ? 'PhD' : p.degree === 'bachelors' ? "Bachelor's" : p.degree}
                </span>
              </div>
              <h3 className="program-name">{p.name}</h3>
              <p className="program-uni">
                {p.country && <img src={`/flags/${p.country.code.toLowerCase()}.webp`} alt={p.country.name} style={{ width: '1.2em', verticalAlign: 'middle', marginRight: '4px' }} />} {p.university?.name} · {p.country?.name}
              </p>
              <div className="program-details">
                <div className="program-detail">
                  <span className="program-detail-label">Tuition</span>
                  <span className="program-detail-value">${(p.tuitionUsd || 0).toLocaleString()}/yr</span>
                </div>
                <div className="program-detail">
                  <span className="program-detail-label">Duration</span>
                  <span className="program-detail-value">{p.durationLabel || '-'}</span>
                </div>
                <div className="program-detail">
                  <span className="program-detail-label">Language</span>
                  <span className="program-detail-value">{p.language || 'English'}</span>
                </div>
                {p.scholarshipAvailable && (
                  <div className="program-detail">
                    <span className="program-detail-label">Scholarship</span>
                    <span className="program-detail-value" style={{ color: 'var(--accent-400)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>Available <BsCheck2 /></span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty-state card" style={{ padding: 64 }}>
          <div style={{ fontSize: '2rem', marginBottom: 8 }}><BsBookHalf /></div>
          <p className="font-semibold">No programs found</p>
          <p className="text-muted text-sm mt-1">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
}
