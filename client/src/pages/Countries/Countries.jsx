import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../lib/api';
import '../DataPages.css';

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/countries')
      .then(res => setCountries(res.data.data || []))
      .catch(() => setCountries([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="page container">
      <div className="page-header">
        <h1 className="page-title">Explore Countries</h1>
        <p className="page-subtitle">Compare education systems, costs, and visa requirements across 25+ destinations</p>
      </div>

      {loading ? (
        <div className="cards-grid">
          {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="skeleton" style={{ height: 200, borderRadius: 16 }} />)}
        </div>
      ) : (
        <div className="cards-grid stagger-children" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {countries.map((c) => (
            <Link key={c.id} to={`/countries/${c.slug}`} className="country-card card">
              <img src={`/flags/${c.code.toLowerCase()}.webp`} alt={c.name} className="country-flag" style={{ width: '3rem', height: 'auto', marginBottom: '0.5rem' }} />
              <h3 className="country-name">{c.name}</h3>
              <p className="text-xs text-muted">{c.continent}</p>

              <div className="country-stats">
                <div className="country-stat">
                  <div className="country-stat-value">{c.universityCount || 0}</div>
                  <div className="country-stat-label">Universities</div>
                </div>
                <div className="country-stat">
                  <div className="country-stat-value">
                    ${((c.avgTuitionMinUsd || 0) / 1000).toFixed(0)}k-${((c.avgTuitionMaxUsd || 0) / 1000).toFixed(0)}k
                  </div>
                  <div className="country-stat-label">Tuition/yr</div>
                </div>
              </div>

              <div className="flex gap-2 flex-wrap" style={{ justifyContent: 'center' }}>
                {c.postStudyWorkDuration && (
                  <span className="badge badge-accent">{c.postStudyWorkDuration} post-study</span>
                )}
                {c.workHoursPerWeek && (
                  <span className="badge badge-primary">{c.workHoursPerWeek}hrs/week</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
