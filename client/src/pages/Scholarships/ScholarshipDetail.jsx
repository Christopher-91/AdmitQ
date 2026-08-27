import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import api from '../../lib/api';
import { formatDegree } from '../../lib/formatters';
import {
  BsStarFill, BsCash, BsClipboard2, BsPaperclip, BsCheck2,
  BsLightningCharge, BsMortarboard,
} from 'react-icons/bs';
import '../DataPages.css';

export default function ScholarshipDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [scholarship, setScholarship] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/scholarships/${slug}`)
      .then(res => setScholarship(res.data.data))
      .catch(() => navigate('/scholarships'))
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

  if (!scholarship) return null;

  return (
    <div className="page">
      {/* Hero */}
      <div className="detail-hero" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-primary)' }}>
        <div className="container">
          <Link to="/scholarships" className="text-sm text-muted" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 20, textDecoration: 'none' }}>
            ← Back to Scholarships
          </Link>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 12, alignItems: 'center' }}>
                <span className={`badge ${scholarship.coverage === 'full' ? 'badge-accent' : 'badge-warning'}`} style={{ fontSize: '0.85rem' }}>
                  {scholarship.coverage === 'full'
                    ? <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><BsStarFill size={12} /> Full Scholarship</span>
                    : <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><BsCash size={12} /> Partial Scholarship</span>
                  }
                </span>
                {scholarship.country && <img src={`/flags/${scholarship.country.code.toLowerCase()}.webp`} alt={scholarship.country.name} style={{ width: '1.5rem', verticalAlign: 'middle' }} />}
                {!scholarship.country && scholarship.provider === 'European Union' && <img src="/flags/eu.svg" alt="European Union" style={{ width: '1.5rem', verticalAlign: 'middle' }} />}
              </div>
              <h1 className="detail-title">{scholarship.name}</h1>
              <p className="detail-subtitle">by {scholarship.provider}</p>
            </div>
            {scholarship.applicationUrl && (
              <a href={scholarship.applicationUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                Apply Now ↗
              </a>
            )}
          </div>

          <div style={{ display: 'flex', gap: 32, marginTop: 24, flexWrap: 'wrap' }}>
            {scholarship.amountUsd && (
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Scholarship Amount</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--accent-400)', marginTop: 2 }}>
                  Up to ${scholarship.amountUsd.toLocaleString()}
                </div>
              </div>
            )}
            {scholarship.deadline && (
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Deadline</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-300)', marginTop: 2 }}>
                  {new Date(scholarship.deadline).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
              </div>
            )}
            {scholarship.deadlineLabel && !scholarship.deadline && (
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Deadline</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-300)', marginTop: 2 }}>{scholarship.deadlineLabel}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: 32, paddingBottom: 64 }}>
        <div className="detail-content">
          <div>
            {scholarship.description && (
              <div className="detail-section">
                <h2 className="detail-section-title">About This Scholarship</h2>
                <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>{scholarship.description}</p>
              </div>
            )}

            {scholarship.coverageDetails && (
              <div className="detail-section">
                <h2 className="detail-section-title">What's Covered</h2>
                <div className="card" style={{ padding: 20, background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(99,102,241,0.05))', borderColor: 'rgba(16,185,129,0.2)' }}>
                  <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>{scholarship.coverageDetails}</p>
                </div>
              </div>
            )}

            {scholarship.otherRequirements && (
              <div className="detail-section">
                <h2 className="detail-section-title"><BsClipboard2 style={{ verticalAlign: 'middle', marginRight: 8 }} /> Eligibility Requirements</h2>
                <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>{scholarship.otherRequirements}</p>
              </div>
            )}

            {scholarship.requiredDocuments?.length > 0 && (
              <div className="detail-section">
                <h2 className="detail-section-title"><BsPaperclip style={{ verticalAlign: 'middle', marginRight: 8 }} /> Required Documents</h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {(Array.isArray(scholarship.requiredDocuments)
                    ? scholarship.requiredDocuments
                    : (typeof scholarship.requiredDocuments === 'string'
                      ? scholarship.requiredDocuments.replace(/^{|}$/g, '').split(',').map(s => s.replace(/^"|"$/g, '').trim()).filter(Boolean)
                      : [])
                  ).map((doc, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: 'var(--bg-secondary)', borderRadius: 8, fontSize: '0.9rem' }}>
                      <BsCheck2 style={{ color: 'var(--accent-400)', fontWeight: 700, flexShrink: 0 }} />
                      <span style={{ color: 'var(--text-secondary)' }}>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="detail-sidebar">
            <div className="card" style={{ padding: 20 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 16, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: 6 }}><BsLightningCharge /> Quick Facts</h3>
              {[
                { label: 'Provider', value: scholarship.provider },
                { label: 'Coverage', value: scholarship.coverage === 'full' ? 'Full Scholarship' : 'Partial' },
                { label: 'Amount', value: scholarship.amountUsd ? `$${scholarship.amountUsd.toLocaleString()} (${scholarship.amountCurrency || 'USD'})` : '-' },
                { label: 'Minimum GPA', value: scholarship.minGpa ? `${scholarship.minGpa}` : 'Not specified' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border-secondary)', fontSize: '0.875rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>{item.label}</span>
                  <span style={{ fontWeight: 700 }}>{item.value}</span>
                </div>
              ))}
            </div>

            {(scholarship.degreeEligibility?.length > 0 || scholarship.fieldEligibility?.length > 0 || scholarship.nationalityEligibility?.length > 0) && (
              <div className="card" style={{ padding: 20 }}>
                <h3 style={{ fontWeight: 700, marginBottom: 12, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: 6 }}><BsMortarboard /> Eligibility</h3>
                {scholarship.degreeEligibility && (
                  <div style={{ marginBottom: 12 }}>
                    <p className="text-xs text-muted font-semibold mb-2">DEGREE LEVELS</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {(Array.isArray(scholarship.degreeEligibility)
                        ? scholarship.degreeEligibility
                        : (typeof scholarship.degreeEligibility === 'string'
                          ? scholarship.degreeEligibility.replace(/^{|}$/g, '').split(',').filter(Boolean)
                          : [])
                      ).map((d, i) => <span key={i} className="badge badge-primary">{formatDegree(d)}</span>)}
                    </div>
                  </div>
                )}
                {scholarship.fieldEligibility && (
                  <div style={{ marginBottom: 12 }}>
                    <p className="text-xs text-muted font-semibold mb-2">FIELDS OF STUDY</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {(Array.isArray(scholarship.fieldEligibility)
                        ? scholarship.fieldEligibility
                        : (typeof scholarship.fieldEligibility === 'string'
                          ? scholarship.fieldEligibility.replace(/^{|}$/g, '').split(',').filter(Boolean)
                          : [])
                      ).map((f, i) => <span key={i} className="tag">{f}</span>)}
                    </div>
                  </div>
                )}
                {scholarship.nationalityEligibility && (
                  <div>
                    <p className="text-xs text-muted font-semibold mb-2">NATIONALITY</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {(Array.isArray(scholarship.nationalityEligibility)
                        ? scholarship.nationalityEligibility
                        : (typeof scholarship.nationalityEligibility === 'string'
                          ? scholarship.nationalityEligibility.replace(/^{|}$/g, '').split(',').filter(Boolean)
                          : [])
                      ).map((n, i) => <span key={i} className="tag">{n}</span>)}
                    </div>
                  </div>
                )}
              </div>
            )}

            {scholarship.country && (
              <Link to={`/countries/${scholarship.country.code?.toLowerCase()}`} className="card" style={{ padding: 20, textDecoration: 'none', display: 'block' }}>
                <p className="text-xs text-muted font-semibold mb-2">COUNTRY</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <img src={`/flags/${scholarship.country.code.toLowerCase()}.webp`} alt={scholarship.country.name} style={{ width: '2rem', verticalAlign: 'middle' }} />
                  <div>
                    <p style={{ fontWeight: 700 }}>{scholarship.country.name}</p>
                    <p className="text-xs text-muted">View country →</p>
                  </div>
                </div>
              </Link>
            )}

            {scholarship.university && (
              <Link to={`/universities/${scholarship.university.slug}`} className="card" style={{ padding: 20, textDecoration: 'none', display: 'block' }}>
                <p className="text-xs text-muted font-semibold mb-2">UNIVERSITY</p>
                <div>
                  <p style={{ fontWeight: 700 }}>{scholarship.university.name}</p>
                  <p className="text-xs text-muted">View university →</p>
                </div>
              </Link>
            )}

            {scholarship.applicationUrl && (
              <a href={scholarship.applicationUrl} target="_blank" rel="noreferrer" className="btn btn-primary w-full" style={{ display: 'block', textAlign: 'center' }}>
                Apply Now ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
