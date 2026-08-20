import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import api from '../../lib/api';
import '../DataPages.css';

export default function ProgramDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/programs/${slug}`)
      .then(res => setProgram(res.data.data))
      .catch(() => navigate('/programs'))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="page container">
        <div className="skeleton" style={{ height: 180, borderRadius: 16, marginBottom: 32 }} />
        <div className="detail-content">
          <div className="skeleton" style={{ height: 400, borderRadius: 16 }} />
          <div className="skeleton" style={{ height: 300, borderRadius: 16 }} />
        </div>
      </div>
    );
  }

  if (!program) return null;

  const degreeLabel = program.degree === 'masters' ? "Master's" : program.degree === 'phd' ? 'PhD' : program.degree === 'bachelors' ? "Bachelor's" : program.degree;

  return (
    <div className="page">
      {/* Hero */}
      <div className="detail-hero" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-primary)' }}>
        <div className="container">
          <Link to="/programs" className="text-sm text-muted" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 20, textDecoration: 'none' }}>
            ← Back to Programs
          </Link>
          <div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
              <span className={`badge ${program.degree === 'masters' ? 'badge-primary' : program.degree === 'phd' ? 'badge-accent' : 'badge-warning'}`}>
                {degreeLabel}
              </span>
              {program.field && <span className="badge">{program.field}</span>}
            </div>
            <h1 className="detail-title">{program.name}</h1>
            <p className="detail-subtitle">
              {program.university?.country?.flagEmoji} {program.university?.name} · {program.university?.city}, {program.university?.country?.name}
            </p>
          </div>

          <div style={{ display: 'flex', gap: 32, marginTop: 24, flexWrap: 'wrap' }}>
            {[
              { label: 'Tuition', value: program.tuitionUsd ? `$${program.tuitionUsd.toLocaleString()}/yr` : 'N/A' },
              { label: 'Duration', value: program.durationLabel || 'N/A' },
              { label: 'Language', value: program.language || 'English' },
              { label: 'Intakes', value: (program.intakes || []).join(', ') || 'N/A' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>{stat.label}</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--primary-300)', marginTop: 2 }}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: 32, paddingBottom: 64 }}>
        <div className="detail-content">
          <div>
            {program.description && (
              <div className="detail-section">
                <h2 className="detail-section-title">📖 Program Description</h2>
                <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>{program.description}</p>
              </div>
            )}

            <div className="detail-section">
              <h2 className="detail-section-title">📋 Admission Requirements</h2>
              <div className="card" style={{ padding: 24 }}>
                {[
                  { label: 'Minimum GPA', value: program.minGpa ? `${program.minGpa} / 4.0` : 'Not specified' },
                  { label: 'IELTS (minimum)', value: program.minIelts ? `${program.minIelts}` : 'Not specified' },
                  { label: 'TOEFL (minimum)', value: program.minToefl ? `${program.minToefl}` : 'Not specified' },
                  { label: 'Work Experience', value: program.workExperienceYears ? `${program.workExperienceYears} year(s)` : 'Not required' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border-secondary)', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{item.label}</span>
                    <span style={{ fontWeight: 700 }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {program.prerequisiteCourses?.length > 0 && (
              <div className="detail-section">
                <h2 className="detail-section-title">📚 Prerequisite Courses</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {program.prerequisiteCourses.map((c, i) => <span key={i} className="tag">{c}</span>)}
                </div>
              </div>
            )}

            {program.careerOutcomes?.length > 0 && (
              <div className="detail-section">
                <h2 className="detail-section-title">🚀 Career Outcomes</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {program.careerOutcomes.map((c, i) => <span key={i} className="tag">{c}</span>)}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="detail-sidebar">
            <div className="card" style={{ padding: 20 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 16, fontSize: '0.95rem' }}>⚡ Quick Info</h3>
              {[
                { label: 'Degree Level', value: degreeLabel },
                { label: 'Field', value: program.field || '-' },
                { label: 'Specialization', value: program.specialization || '-' },
                { label: 'Delivery', value: program.deliveryMode?.replace('_', ' ') || 'On campus' },
                { label: 'Application Deadline', value: program.applicationDeadline || '-' },
                { label: 'Scholarship Available', value: program.scholarshipAvailable ? '✅ Yes' : '❌ No' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border-secondary)', fontSize: '0.875rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>{item.label}</span>
                  <span style={{ fontWeight: 700 }}>{item.value}</span>
                </div>
              ))}
            </div>

            {program.university && (
              <Link to={`/universities/${program.university.slug}`} className="card" style={{ padding: 20, textDecoration: 'none', display: 'block' }}>
                <p className="text-xs text-muted font-semibold mb-2">OFFERED BY</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div className="uni-logo" style={{ width: 40, height: 40 }}>
                    {program.university.logoUrl
                      ? <img src={program.university.logoUrl} alt={program.university.name} />
                      : <span className="uni-logo-placeholder" style={{ fontSize: '1rem' }}>{program.university.name[0]}</span>
                    }
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '0.9rem' }}>{program.university.name}</p>
                    <p className="text-xs text-muted">{program.university.city} · View details →</p>
                  </div>
                </div>
              </Link>
            )}

            {program.requiredDocuments?.length > 0 && (
              <div className="card" style={{ padding: 20 }}>
                <h3 style={{ fontWeight: 700, marginBottom: 12, fontSize: '0.95rem' }}>📎 Required Documents</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {program.requiredDocuments.map((doc, i) => (
                    <li key={i} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ color: 'var(--accent-400)' }}>✓</span> {doc}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
