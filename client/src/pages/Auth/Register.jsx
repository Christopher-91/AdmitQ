import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';
import { BsMortarboard, BsExclamationTriangleFill } from 'react-icons/bs';
import './Auth.css';

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', password: '', confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (form.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setLoading(true);
    try {
      await register({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
      });
      toast.success('Account created! Welcome to AdmitQ 🎓');
      navigate('/dashboard', { replace: true });
    } catch (err) {
      setError(err.response?.data?.error?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <div className="auth-page">
      <div className="auth-card auth-card-register animate-fadeInUp">
        <div className="auth-header">
          <Link to="/" className="auth-logo">
            <BsMortarboard size={22} />
            <span className="logo-text">Admit<span className="logo-highlight">Q</span></span>
          </Link>
          <h1 className="auth-title">Create your account</h1>
          <p className="auth-subtitle">Start your education journey today — it's free</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {error && <div className="auth-error animate-fadeIn"><BsExclamationTriangleFill style={{ verticalAlign: 'middle', marginRight: 6 }} /> {error}</div>}

          <div className="auth-row">
            <div className="form-group">
              <label className="form-label" htmlFor="reg-first">First Name</label>
              <input id="reg-first" type="text" className="form-input" placeholder="John" value={form.firstName} onChange={update('firstName')} required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="reg-last">Last Name</label>
              <input id="reg-last" type="text" className="form-input" placeholder="Doe" value={form.lastName} onChange={update('lastName')} required />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="reg-email">Email</label>
            <input id="reg-email" type="email" className="form-input" placeholder="you@example.com" value={form.email} onChange={update('email')} required />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="reg-pass">Password</label>
            <input id="reg-pass" type="password" className="form-input" placeholder="At least 8 characters" value={form.password} onChange={update('password')} required />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="reg-confirm">Confirm Password</label>
            <input id="reg-confirm" type="password" className="form-input" placeholder="Re-enter your password" value={form.confirmPassword} onChange={update('confirmPassword')} required />
          </div>

          <button type="submit" className="btn btn-primary w-full btn-lg" disabled={loading}>
            {loading ? 'Creating account...' : 'Create Account'}
          </button>

          <p className="auth-terms text-xs text-muted text-center">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login" className="auth-link">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
