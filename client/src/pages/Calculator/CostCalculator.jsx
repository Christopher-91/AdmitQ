import { useState } from 'react';
import api from '../../lib/api';
import '../DataPages.css';

const COUNTRIES = [
  { slug: 'united-states', name: 'United States' },
  { slug: 'united-kingdom', name: 'United Kingdom' },
  { slug: 'canada', name: 'Canada' },
  { slug: 'germany', name: 'Germany' },
  { slug: 'australia', name: 'Australia' },
  { slug: 'netherlands', name: 'Netherlands' },
  { slug: 'switzerland', name: 'Switzerland' },
  { slug: 'singapore', name: 'Singapore' },
  { slug: 'japan', name: 'Japan' },
  { slug: 'south-korea', name: 'South Korea' },
  { slug: 'ireland', name: 'Ireland' },
  { slug: 'france', name: 'France' },
  { slug: 'sweden', name: 'Sweden' },
  { slug: 'italy', name: 'Italy' },
  { slug: 'new-zealand', name: 'New Zealand' },
];

const CURRENCIES = ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'CHF', 'SGD', 'JPY', 'KRW', 'INR'];

export default function CostCalculator() {
  const [form, setForm] = useState({
    countrySlug: 'united-states',
    tuitionUsd: 30000,
    durationMonths: 24,
    currency: 'USD',
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const calculate = async () => {
    setLoading(true);
    try {
      const res = await api.post('/costs/calculate', form);
      setResult(res.data.data);
    } catch { }
    finally { setLoading(false); }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculate();
  };

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <div className="page container">
      <div className="page-header">
        <h1 className="page-title">🧮 Cost Calculator</h1>
        <p className="page-subtitle">Get a detailed cost breakdown for studying abroad</p>
      </div>

      <div className="calculator-layout animate-fadeInUp">
        {/* Inputs */}
        <form onSubmit={handleSubmit} className="card">
          <h2 className="text-lg font-bold mb-4">Study Details</h2>
          <div className="calc-input-group">
            <div className="form-group">
              <label className="form-label">Country</label>
              <select className="form-input" value={form.countrySlug} onChange={update('countrySlug')}>
                {COUNTRIES.map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Annual Tuition (USD)</label>
              <input type="number" className="form-input" value={form.tuitionUsd} onChange={update('tuitionUsd')} min="0" step="500" />
            </div>

            <div className="form-group">
              <label className="form-label">Program Duration (months)</label>
              <input type="number" className="form-input" value={form.durationMonths} onChange={update('durationMonths')} min="1" max="72" />
            </div>

            <div className="form-group">
              <label className="form-label">Display Currency</label>
              <select className="form-input" value={form.currency} onChange={update('currency')}>
                {CURRENCIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <button type="submit" className="btn btn-primary w-full btn-lg" disabled={loading}>
              {loading ? 'Calculating...' : 'Calculate Costs'}
            </button>
          </div>
        </form>

        {/* Results */}
        <div>
          {result ? (
            <div className="stagger-children" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div className="calc-result-card">
                <p className="text-sm text-muted font-semibold">Total Program Cost</p>
                <p className="calc-total">
                  {result.currency} {result.totalProgram.total.toLocaleString()}
                </p>
                <p className="text-xs text-muted mt-1">
                  Over {result.durationMonths} months ({(result.durationMonths / 12).toFixed(1)} years)
                </p>
              </div>

              <div className="card">
                <h3 className="font-bold mb-2">📅 Monthly Breakdown</h3>
                <div className="calc-breakdown">
                  {Object.entries(result.monthly).filter(([k]) => k !== 'total').map(([key, value]) => (
                    <div key={key} className="calc-row">
                      <span className="calc-row-label">{key}</span>
                      <span className="calc-row-value">{result.currency} {value.toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="calc-row" style={{ borderBottom: 'none', fontWeight: 700 }}>
                    <span>Monthly Total</span>
                    <span style={{ color: 'var(--primary-300)' }}>{result.currency} {result.monthly.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-bold mb-2">📊 First Year Costs</h3>
                <div className="calc-breakdown">
                  <div className="calc-row">
                    <span className="calc-row-label">Tuition</span>
                    <span className="calc-row-value">{result.currency} {result.firstYear.tuition.toLocaleString()}</span>
                  </div>
                  <div className="calc-row">
                    <span className="calc-row-label">Living Expenses</span>
                    <span className="calc-row-value">{result.currency} {result.firstYear.living.toLocaleString()}</span>
                  </div>
                  <div className="calc-row">
                    <span className="calc-row-label">One-time Costs</span>
                    <span className="calc-row-value">{result.currency} {result.firstYear.oneTimeCosts.toLocaleString()}</span>
                  </div>
                  <div className="calc-row" style={{ borderBottom: 'none', fontWeight: 700 }}>
                    <span>First Year Total</span>
                    <span style={{ color: 'var(--accent-400)' }}>{result.currency} {result.firstYear.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted text-center">{result.disclaimer}</p>
            </div>
          ) : (
            <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 300 }}>
              <div className="text-center">
                <p style={{ fontSize: '3rem', marginBottom: 12 }}>🧮</p>
                <p className="font-semibold">Enter your details</p>
                <p className="text-sm text-muted mt-1">Click "Calculate Costs" to see a detailed breakdown</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
