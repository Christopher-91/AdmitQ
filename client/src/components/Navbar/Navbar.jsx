import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

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
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        {/* Logo */}
        <Link to={isAuthenticated ? '/dashboard' : '/'} className="navbar-logo">
          <span className="logo-icon">🎓</span>
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
          {isAuthenticated ? (
            <div className="profile-menu-wrapper">
              <button
                className="profile-trigger"
                onClick={() => setProfileOpen(!profileOpen)}
                onBlur={() => setTimeout(() => setProfileOpen(false), 200)}
              >
                <div className="profile-avatar">
                  {user?.firstName?.[0]}{user?.lastName?.[0]}
                </div>
                <span className="profile-name">{user?.firstName}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 8L2 4h8L6 8z"/>
                </svg>
              </button>

              {profileOpen && (
                <div className="profile-dropdown animate-fadeIn">
                  <div className="dropdown-header">
                    <p className="dropdown-name">{user?.firstName} {user?.lastName}</p>
                    <p className="dropdown-email">{user?.email}</p>
                  </div>
                  <div className="dropdown-divider" />
                  <Link to="/dashboard" className="dropdown-item" onClick={() => setProfileOpen(false)}>
                    📊 Dashboard
                  </Link>
                  <Link to="/profile" className="dropdown-item" onClick={() => setProfileOpen(false)}>
                    👤 Profile
                  </Link>
                  <Link to="/applications" className="dropdown-item" onClick={() => setProfileOpen(false)}>
                    📋 Applications
                  </Link>
                  <Link to="/calculator" className="dropdown-item" onClick={() => setProfileOpen(false)}>
                    🧮 Cost Calculator
                  </Link>
                  {user?.role === 'admin' && (
                    <Link to="/admin" className="dropdown-item" onClick={() => setProfileOpen(false)}>
                      ⚙️ Admin
                    </Link>
                  )}
                  <div className="dropdown-divider" />
                  <button className="dropdown-item dropdown-logout" onClick={handleLogout}>
                    🚪 Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="btn btn-ghost">Log in</Link>
              <Link to="/register" className="btn btn-primary btn-sm">Get Started</Link>
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
              <Link to="/login" className="btn btn-secondary w-full" onClick={() => setMobileOpen(false)}>Log in</Link>
              <Link to="/register" className="btn btn-primary w-full" onClick={() => setMobileOpen(false)}>Get Started</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
