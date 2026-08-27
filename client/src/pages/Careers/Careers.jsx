import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../lib/api';
import { BsBullseye, BsBriefcase, BsGraphUpArrow } from 'react-icons/bs';
import '../DataPages.css';

export default function Careers() {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/careers')
      .then(res => setCareers(res.data.data || []))
      .catch(() => setCareers([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="page container">
      <div className="page-header">
        <h1 className="page-title"><BsBullseye style={{ verticalAlign: 'middle', marginRight: 8 }} /> Career Explorer</h1>
        <p className="page-subtitle">Start with your dream career — we'll show you the right degree path</p>
      </div>

      {loading ? (
        <div className="cards-grid">
          {[1,2,3,4].map(i => <div key={i} className="skeleton" style={{ height: 160, borderRadius: 16 }} />)}
        </div>
      ) : (
        <div className="cards-grid stagger-children" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))' }}>
          {careers.map((c) => (
            <Link key={c.id} to={`/careers/${c.slug}`} className="career-card card">
              <div className="career-icon">{c.icon || <BsBriefcase size={28} />}</div>
              <div className="career-info">
                <h3 className="career-name">{c.name}</h3>
                <p className="career-desc">{c.description}</p>
                <div className="career-meta">
                  <span className="badge badge-accent">
                    ${(c.avgSalaryUsd / 1000).toFixed(0)}k avg salary
                  </span>
                  <span className={`badge ${c.growthOutlook === 'high' ? 'badge-safe' : 'badge-warning'}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    <BsGraphUpArrow size={11} /> {c.growthOutlook} growth
                  </span>
                  <span className="badge badge-primary">
                    {c.pathwayCount} pathways
                  </span>
                </div>
                <div className="flex gap-1 flex-wrap mt-2">
                  {(c.requiredSkills || []).slice(0, 4).map((s, i) => (
                    <span key={i} className="tag">{s}</span>
                  ))}
                  {(c.requiredSkills || []).length > 4 && (
                    <span className="tag">+{c.requiredSkills.length - 4}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
