import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import api from '../../lib/api';
import Logo from '../../components/Logo/Logo';
import { formatDegree } from '../../lib/formatters';
import '../DataPages.css';

export default function UniversityDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [uni, setUni] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    api.get(`/universities/${slug}`)
      .then(res => setUni(res.data.data))
      .catch(() => navigate('/universities'))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="page container">
        <div className="skeleton" style={{ height: 200, borderRadius: 16, marginBottom: 32 }} />
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 32 }}>
          <div className="skeleton" style={{ height: 400, borderRadius: 16 }} />
          <div className="skeleton" style={{ height: 300, borderRadius: 16 }} />
        </div>
      </div>
    );
  }

  if (!uni) return null;

  const tabs = ['overview', 'programs', 'scholarships', 'requirements'];

  return (
    <div className="page">
      {/* Hero */}
      <div className="detail-hero" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-primary)' }}>
        <div className="container">
          <Link to="/universities" className="text-sm text-muted" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 20, textDecoration: 'none' }}>
            ← Back to Universities
          </Link>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, flexWrap: 'wrap' }}>
            <div className="uni-logo" style={{ width: 72, height: 72, fontSize: '2rem', flexShrink: 0, padding: 0 }}>
              <Logo website={uni.website} name={uni.name} slug={uni.slug} size={72} />
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <h1 className="detail-title">{uni.name}</h1>
              <p className="detail-subtitle">
                {uni.country && <img src={`/flags/${uni.country.code.toLowerCase()}.webp`} alt={uni.country.name} style={{ width: '1.2em', verticalAlign: 'middle', marginRight: '4px' }} />} {uni.city}{uni.stateProvince ? `, ${uni.stateProvince}` : ''} · {uni.country?.name}
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
                <span className="badge badge-primary">{uni.universityType}</span>
                {uni.foundedYear && <span className="badge">Est. {uni.foundedYear}</span>}
                {uni.rankings?.qs && <span className="badge badge-accent">QS #{uni.rankings.qs}</span>}
                {uni.rankings?.the && <span className="badge">THE #{uni.rankings.the}</span>}
              </div>
            </div>
            {uni.website && (
              <a href={uni.website} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm" style={{ flexShrink: 0 }}>
                Visit Website ↗
              </a>
            )}
          </div>

          {/* Quick Stats */}
          <div style={{ display: 'flex', gap: 32, marginTop: 28, flexWrap: 'wrap' }}>
            {[
              { label: 'Avg. Tuition', value: uni.financial?.avgTuitionUsd ? `$${uni.financial.avgTuitionUsd.toLocaleString()}/yr` : 'N/A' },
              { label: 'Total Students', value: uni.totalStudents ? uni.totalStudents.toLocaleString() : 'N/A' },
              { label: 'Intl. Students', value: uni.internationalStudentsPct ? `${uni.internationalStudentsPct}%` : 'N/A' },
              { label: 'Programs', value: uni.programs?.length || 0 },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>{stat.label}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary-300)', marginTop: 2 }}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: '1px solid var(--border-secondary)', background: 'var(--bg-secondary)', position: 'sticky', top: 60, zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', gap: 0 }}>
          {tabs.map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: '14px 20px', background: 'none', border: 'none', cursor: 'pointer',
                borderBottom: activeTab === t ? '2px solid var(--primary-400)' : '2px solid transparent',
                color: activeTab === t ? 'var(--primary-300)' : 'var(--text-secondary)',
                fontWeight: activeTab === t ? 700 : 500,
                fontSize: '0.9rem', textTransform: 'capitalize', transition: 'all 0.15s',
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container" style={{ paddingTop: 32, paddingBottom: 64 }}>
        {activeTab === 'overview' && (
          <div className="detail-content">
            <div>
              {uni.description && (
                <div className="detail-section">
                  <h2 className="detail-section-title">About</h2>
                  <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>{uni.description}</p>
                </div>
              )}

              {uni.faculties?.length > 0 && (
                <div className="detail-section">
                  <h2 className="detail-section-title">Faculties & Schools</h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {uni.faculties.map((f, i) => (
                      <span key={i} className="tag">{f}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="detail-section">
                <h2 className="detail-section-title">Intake & Language</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="card" style={{ padding: 16 }}>
                    <p className="text-xs text-muted font-semibold mb-1">INTAKES</p>
                    <p style={{ fontWeight: 600 }}>{(uni.intakes || []).join(', ')}</p>
                  </div>
                  <div className="card" style={{ padding: 16 }}>
                    <p className="text-xs text-muted font-semibold mb-1">LANGUAGES OF INSTRUCTION</p>
                    <p style={{ fontWeight: 600 }}>{(uni.languagesOfInstruction || ['English']).join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="detail-sidebar">
              <div className="card" style={{ padding: 20 }}>
                <h3 style={{ fontWeight: 700, marginBottom: 16, fontSize: '0.95rem' }}>💰 Financial Info</h3>
                {[
                  { label: 'Avg. Tuition', value: uni.financial?.avgTuitionUsd ? `$${uni.financial.avgTuitionUsd.toLocaleString()}/yr` : '-' },
                  { label: 'Application Fee', value: uni.financial?.applicationFeeUsd ? `$${uni.financial.applicationFeeUsd}` : '-' },
                  { label: 'Avg. Living Cost', value: uni.financial?.avgLivingCostUsd ? `$${uni.financial.avgLivingCostUsd.toLocaleString()}/mo` : '-' },
                  { label: 'Accommodation', value: uni.financial?.accommodationUsd ? `$${uni.financial.accommodationUsd.toLocaleString()}/yr` : '-' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border-secondary)', fontSize: '0.875rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>{item.label}</span>
                    <span style={{ fontWeight: 700 }}>{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="card" style={{ padding: 20 }}>
                <h3 style={{ fontWeight: 700, marginBottom: 16, fontSize: '0.95rem' }}>🏆 Rankings</h3>
                {[
                  { label: 'QS World', value: uni.rankings?.qs ? `#${uni.rankings.qs}` : '-' },
                  { label: 'THE World', value: uni.rankings?.the ? `#${uni.rankings.the}` : '-' },
                  { label: 'ARWU', value: uni.rankings?.arwu ? `#${uni.rankings.arwu}` : '-' },
                  { label: 'National', value: uni.rankings?.national ? `#${uni.rankings.national}` : '-' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border-secondary)', fontSize: '0.875rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>{item.label}</span>
                    <span style={{ fontWeight: 700, color: item.value !== '-' ? 'var(--primary-300)' : 'inherit' }}>{item.value}</span>
                  </div>
                ))}
              </div>

              <Link to={`/countries/${uni.country?.slug}`} className="card" style={{ padding: 20, textDecoration: 'none', display: 'block' }}>
                <p className="text-xs text-muted font-semibold mb-2">COUNTRY INFO</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  {uni.country && <img src={`/flags/${uni.country.code.toLowerCase()}.webp`} alt={uni.country.name} style={{ width: '2rem', verticalAlign: 'middle' }} />}
                  <div>
                    <p style={{ fontWeight: 700 }}>{uni.country?.name}</p>
                    <p className="text-xs text-muted">View country details →</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'programs' && (
          <div>
            <h2 className="detail-section-title" style={{ marginBottom: 24 }}>📚 Programs Offered ({uni.programs?.length || 0})</h2>
            {uni.programs?.length > 0 ? (
              <div className="cards-grid">
                {uni.programs.map(p => (
                  <Link key={p.id} to={`/programs/${p.slug}`} className="program-card card">
                    <div>
                      <span className={`badge ${p.degree === 'masters' ? 'badge-primary' : p.degree === 'phd' ? 'badge-accent' : 'badge-warning'}`}>
                        {p.degree === 'masters' ? "Master's" : p.degree === 'phd' ? 'PhD' : p.degree === 'bachelors' ? "Bachelor's" : p.degree}
                      </span>
                    </div>
                    <h3 className="program-name">{p.name}</h3>
                    {p.field && <p className="text-sm text-muted">{p.field}{p.specialization ? ` · ${p.specialization}` : ''}</p>}
                    <div className="program-details">
                      <div className="program-detail">
                        <span className="program-detail-label">Tuition</span>
                        <span className="program-detail-value">${(p.tuitionUsd || 0).toLocaleString()}/yr</span>
                      </div>
                      <div className="program-detail">
                        <span className="program-detail-label">Duration</span>
                        <span className="program-detail-value">{p.durationLabel || '-'}</span>
                      </div>
                      {p.minIelts && (
                        <div className="program-detail">
                          <span className="program-detail-label">Min. IELTS</span>
                          <span className="program-detail-value">{p.minIelts}</span>
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="empty-state card" style={{ padding: 64, textAlign: 'center' }}>
                <p style={{ fontSize: '2rem', marginBottom: 8 }}>📚</p>
                <p className="font-semibold">No programs listed yet</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'scholarships' && (
          <div>
            <h2 className="detail-section-title" style={{ marginBottom: 24 }}>💰 Scholarships ({uni.scholarships?.length || 0})</h2>
            {uni.scholarships?.length > 0 ? (
              <div className="cards-grid">
                {uni.scholarships.map(s => (
                  <Link key={s.id} to={`/scholarships/${s.slug}`} className="scholarship-card card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className={`badge ${s.coverage === 'full' ? 'badge-accent' : 'badge-warning'}`}>
                        {s.coverage === 'full' ? '✨ Full' : '💵 Partial'}
                      </span>
                    </div>
                    <h3 className="program-name">{s.name}</h3>
                    {s.amountUsd && (
                      <div className="scholarship-amount">Up to ${s.amountUsd.toLocaleString()}</div>
                    )}
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {(Array.isArray(s.degreeEligibility)
                        ? s.degreeEligibility
                        : (typeof s.degreeEligibility === 'string'
                          ? s.degreeEligibility.replace(/^{|}$/g, '').split(',').filter(Boolean)
                          : [])
                      ).map((d, i) => (
                        <span key={i} className="tag">{formatDegree(d)}</span>
                      ))}
                    </div>
                    {s.deadline && (
                      <p className="text-xs text-muted">⏰ Deadline: {new Date(s.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                    )}
                  </Link>
                ))}
              </div>
            ) : (
              <div className="empty-state card" style={{ padding: 64, textAlign: 'center' }}>
                <p style={{ fontSize: '2rem', marginBottom: 8 }}>💰</p>
                <p className="font-semibold">No scholarships listed yet</p>
                <p className="text-sm text-muted mt-1">Check the university website for available funding</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'requirements' && (
          <div className="detail-content">
            <div>
              <div className="detail-section">
                <h2 className="detail-section-title">Admission Requirements</h2>
                <div className="card" style={{ padding: 24 }}>
                  {[
                    { label: 'Minimum GPA', value: uni.requirements?.minGpa ? `${uni.requirements.minGpa} / 4.0` : 'Not specified' },
                    { label: 'IELTS (minimum)', value: uni.requirements?.minIelts ? `${uni.requirements.minIelts}` : 'Not specified' },
                    { label: 'TOEFL (minimum)', value: uni.requirements?.minToefl ? `${uni.requirements.minToefl}` : 'Not specified' },
                    { label: 'GRE (minimum)', value: uni.requirements?.minGre ? `${uni.requirements.minGre}` : 'Not required / Not specified' },
                    { label: 'GMAT (minimum)', value: uni.requirements?.minGmat ? `${uni.requirements.minGmat}` : 'Not required / Not specified' },
                  ].map(item => (
                    <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--border-secondary)', fontSize: '0.9rem' }}>
                      <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{item.label}</span>
                      <span style={{ fontWeight: 700 }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {uni.applicationPortal && (
                <div className="detail-section">
                  <h2 className="detail-section-title">Application Portal</h2>
                  <a href={uni.applicationPortal} target="_blank" rel="noreferrer" className="btn btn-primary">
                    Apply Now ↗
                  </a>
                </div>
              )}
            </div>

            <div className="detail-sidebar">
              <div className="card" style={{ padding: 20 }}>
                <h3 style={{ fontWeight: 700, marginBottom: 12, fontSize: '0.95rem' }}>Student Body</h3>
                {[
                  { label: 'Total Students', value: uni.totalStudents ? uni.totalStudents.toLocaleString() : '-' },
                  { label: 'International Students', value: uni.internationalStudentsPct ? `${uni.internationalStudentsPct}%` : '-' },
                  { label: 'Student-Faculty Ratio', value: uni.studentFacultyRatio ? `${uni.studentFacultyRatio}:1` : '-' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border-secondary)', fontSize: '0.875rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>{item.label}</span>
                    <span style={{ fontWeight: 700 }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
