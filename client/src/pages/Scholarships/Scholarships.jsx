import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../lib/api';
import '../DataPages.css';

export default function Scholarships() {
  const [scholarships, setScholarships] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState('');
  const [degree, setDegree] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const params = { limit: 30 };
      if (search) params.search = search;
      if (country) params.country = country;
      if (degree) params.degree = degree;
      const res = await api.get('/scholarships', { params });
      setScholarships(res.data.data || []);
      setTotal(res.data.pagination?.total || 0);
    } catch { setScholarships([]); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchData(); }, [country, degree]);

  return (
    <div className="page container">
      <div className="page-header">
        <h1 className="page-title">💰 Scholarship Finder</h1>
        <p className="page-subtitle">Discover scholarships you qualify for — from government programs to university awards</p>
      </div>

      <div className="filters-bar animate-fadeInUp">
        <form onSubmit={(e) => { e.preventDefault(); fetchData(); }} className="search-bar" style={{ maxWidth: 400 }}>
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search scholarships..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </form>

        <select className="form-input filter-select" value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">All Countries</option>
          <option value="united-states">🇺🇸 USA</option>
          <option value="united-kingdom">🇬🇧 UK</option>
          <option value="canada">🇨🇦 Canada</option>
          <option value="germany">🇩🇪 Germany</option>
          <option value="australia">🇦🇺 Australia</option>
          <option value="japan">🇯🇵 Japan</option>
          <option value="south-korea">🇰🇷 South Korea</option>
          <option value="switzerland">🇨🇭 Switzerland</option>
        </select>

        <select className="form-input filter-select" value={degree} onChange={(e) => setDegree(e.target.value)}>
          <option value="">All Degrees</option>
          <option value="bachelors">Bachelor's</option>
          <option value="masters">Master's</option>
          <option value="phd">PhD</option>
        </select>

        <span className="filter-count text-sm text-muted">{total} scholarships</span>
      </div>

      {loading ? (
        <div className="cards-grid">
          {[1,2,3,4,5,6].map(i => <div key={i} className="skeleton" style={{ height: 220, borderRadius: 16 }} />)}
        </div>
      ) : scholarships.length > 0 ? (
        <div className="cards-grid stagger-children">
          {scholarships.map((s) => (
            <Link key={s.id} to={`/scholarships/${s.slug}`} className="scholarship-card card">
              <div className="flex items-center justify-between">
                <span className={`badge ${s.coverage === 'full' ? 'badge-accent' : 'badge-warning'}`}>
                  {s.coverage === 'full' ? '✨ Full Scholarship' : '💵 Partial'}
                </span>
                {s.country && <span>{s.country.flagEmoji}</span>}
              </div>

              <h3 className="program-name">{s.name}</h3>
              <p className="scholarship-provider">by {s.provider}</p>

              {s.amountUsd && (
                <div className="scholarship-amount">
                  Up to ${s.amountUsd.toLocaleString()}
                </div>
              )}

              <p className="text-sm text-muted" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {s.description}
              </p>

              <div className="flex gap-2 flex-wrap">
                {s.degreeEligibility?.map((d, i) => (
                  <span key={i} className="tag">{d}</span>
                ))}
              </div>

              {s.deadline && (
                <p className="text-xs text-muted mt-1">
                  ⏰ Deadline: {new Date(s.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </p>
              )}
              {!s.deadline && s.deadlineLabel && (
                <p className="text-xs text-muted mt-1">⏰ {s.deadlineLabel}</p>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty-state card" style={{ padding: 64 }}>
          <p style={{ fontSize: '2rem', marginBottom: 8 }}>💰</p>
          <p className="font-semibold">No scholarships found</p>
          <p className="text-muted text-sm mt-1">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
}
