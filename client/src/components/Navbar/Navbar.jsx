import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('admitq-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('admitq-theme', theme);
  }, [theme]);

  const handleLogout = async () => {
    await logout();
    navigate('/');
    setProfileOpen(false);
  };

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  const navLinks = [
    { path: '/universities', label: 'Universities' },
    { path: '/programs', label: 'Programs' },
    { path: '/countries', label: 'Countries' },
    { path: '/scholarships', label: 'Scholarships' },
    { path: '/careers', label: 'Careers' },
    { path: '/calculator', label: 'Calculator' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        {/* Logo */}
        <Link to={isAuthenticated ? '/dashboard' : '/'} className="navbar-logo">
          <span className="logo-text">Admit<span className="logo-highlight">Q</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="navbar-links">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="navbar-actions">
          <div className="theme-toggle" role="group" aria-label="Color theme">
            <button
              type="button"
              className={`theme-option ${theme === 'light' ? 'active' : ''}`}
              onClick={() => setTheme('light')}
              aria-label="Use light theme"
              aria-pressed={theme === 'light'}
              title="Use light theme"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            </button>
            <button
              type="button"
              className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
              onClick={() => setTheme('dark')}
              aria-label="Use dark theme"
              aria-pressed={theme === 'dark'}
              title="Use dark theme"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.4 14.8A8.5 8.5 0 0 1 9.2 3.6 8.5 8.5 0 1 0 20.4 14.8Z" />
              </svg>
            </button>
          </div>
          {isAuthenticated ? (
            <div className="profile-menu-wrapper">
              <button
                className="profile-trigger"
                onClick={() => setProfileOpen(!profileOpen)}
                onBlur={() => setTimeout(() => setProfileOpen(false), 200)}
              >
                {user?.firstName?.[0]}{user?.lastName?.[0]}
              </button>

              {profileOpen && (
                <div className="profile-dropdown animate-fadeIn">
                  <div className="dropdown-header">
                    <p className="dropdown-name">{user?.firstName} {user?.lastName}</p>
                    <p className="dropdown-email">{user?.email}</p>
                  </div>
                  <div className="dropdown-divider" />
                  <Link to="/dashboard" className="dropdown-item" onClick={() => setProfileOpen(false)}>
                    Dashboard
                  </Link>
                  <Link to="/profile" className="dropdown-item" onClick={() => setProfileOpen(false)}>
                    Profile
                  </Link>
                  <Link to="/applications" className="dropdown-item" onClick={() => setProfileOpen(false)}>
                    Applications
                  </Link>
                  <Link to="/calculator" className="dropdown-item" onClick={() => setProfileOpen(false)}>
                    Cost Calculator
                  </Link>
                  {user?.role === 'admin' && (
                    <Link to="/admin" className="dropdown-item" onClick={() => setProfileOpen(false)}>
                      Admin
                    </Link>
                  )}
                  <div className="dropdown-divider" />
                  <button className="dropdown-item dropdown-logout" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/register" className="btn btn-ghost">Register</Link>
              <Link to="/login" className="btn btn-primary btn-sm">Login</Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
            <span className={`hamburger ${mobileOpen ? 'open' : ''}`}>
              <span /><span /><span />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu animate-fadeIn">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-link ${isActive(link.path) ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {!isAuthenticated && (
            <div className="mobile-auth">
              <Link to="/register" className="btn btn-secondary w-full" onClick={() => setMobileOpen(false)}>Register</Link>
              <Link to="/login" className="btn btn-primary w-full" onClick={() => setMobileOpen(false)}>Login</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
