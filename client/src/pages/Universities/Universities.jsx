import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import api from '../../lib/api';
import '../DataPages.css';

export default function Universities() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [universities, setUniversities] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [country, setCountry] = useState(searchParams.get('country') || '');
  const [type, setType] = useState(searchParams.get('type') || '');

  const fetchData = async () => {
    setLoading(true);
    try {
      const params = {};
      if (search) params.search = search;
      if (country) params.country = country;
      if (type) params.type = type;
      const res = await api.get('/universities', { params });
      setUniversities(res.data.data || []);
      setTotal(res.data.pagination?.total || 0);
    } catch {
      setUniversities([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, [country, type]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="page container">
      <div className="page-header">
        <h1 className="page-title">🏛️ Explore Universities</h1>
        <p className="page-subtitle">Discover world-class institutions across 15+ countries</p>
      </div>

      {/* Filters */}
      <div className="filters-bar animate-fadeInUp">
        <form onSubmit={handleSearch} className="search-bar" style={{ maxWidth: 400 }}>
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search universities..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <select className="form-input filter-select" value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">All Countries</option>
          <option value="united-states">🇺🇸 United States</option>
          <option value="united-kingdom">🇬🇧 United Kingdom</option>
          <option value="canada">🇨🇦 Canada</option>
          <option value="germany">🇩🇪 Germany</option>
          <option value="australia">🇦🇺 Australia</option>
          <option value="netherlands">🇳🇱 Netherlands</option>
          <option value="switzerland">🇨🇭 Switzerland</option>
          <option value="singapore">🇸🇬 Singapore</option>
          <option value="japan">🇯🇵 Japan</option>
          <option value="south-korea">🇰🇷 South Korea</option>
          <option value="ireland">🇮🇪 Ireland</option>
          <option value="france">🇫🇷 France</option>
          <option value="sweden">🇸🇪 Sweden</option>
          <option value="italy">🇮🇹 Italy</option>
          <option value="new-zealand">🇳🇿 New Zealand</option>
        </select>

        <select className="form-input filter-select" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">All Types</option>
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>

        <span className="filter-count text-sm text-muted">{total} universities found</span>
      </div>

      {/* Results */}
      {loading ? (
        <div className="cards-grid stagger-children">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="skeleton" style={{ height: 240, borderRadius: 16 }} />
          ))}
        </div>
      ) : universities.length > 0 ? (
        <div className="cards-grid stagger-children">
          {universities.map((u) => (
            <Link key={u.id} to={`/universities/${u.slug}`} className="uni-card card">
              <div className="uni-card-header">
                <div className="uni-logo">
                  {u.logoUrl ? <img src={u.logoUrl} alt={u.name} /> : <span className="uni-logo-placeholder">{u.name[0]}</span>}
                </div>
                <div className="flex-1">
                  <h3 className="uni-name">{u.name}</h3>
                  <p className="uni-location text-sm text-muted">
                    {u.country?.flagEmoji} {u.city}, {u.country?.name}
                  </p>
                </div>
              </div>

              <div className="uni-meta">
                {u.qsRanking && (
                  <div className="uni-meta-item">
                    <span className="uni-meta-label">QS Rank</span>
                    <span className="uni-meta-value">#{u.qsRanking}</span>
                  </div>
                )}
                <div className="uni-meta-item">
                  <span className="uni-meta-label">Avg. Tuition</span>
                  <span className="uni-meta-value">${(u.avgTuitionUsd || 0).toLocaleString()}/yr</span>
                </div>
                <div className="uni-meta-item">
                  <span className="uni-meta-label">Programs</span>
                  <span className="uni-meta-value">{u.programCount || '-'}</span>
                </div>
              </div>

              <div className="uni-tags">
                <span className="badge badge-primary">{u.universityType}</span>
                {u.internationalStudentsPct && (
                  <span className="badge badge-accent">{u.internationalStudentsPct}% International</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty-state card" style={{ padding: 64 }}>
          <p style={{ fontSize: '2rem', marginBottom: 8 }}>🔍</p>
          <p className="font-semibold">No universities found</p>
          <p className="text-muted text-sm mt-1">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}
