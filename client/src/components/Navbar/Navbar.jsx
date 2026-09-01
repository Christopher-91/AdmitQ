import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { Landmark, BookOpen, Globe2, Award, Briefcase, Calculator, Plane } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [profileOpen, setProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('admitq-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('admitq-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle logo color after scrolling past the dark hero gradient (~400px)
      setIsScrolled(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate('/');
    setProfileOpen(false);
  };

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  const navLinks = [
    { path: '/universities', label: 'Universities', icon: Landmark },
    { path: '/programs', label: 'Programs', icon: BookOpen },
    { path: '/countries', label: 'Countries', icon: Globe2 },
    { path: '/immigration', label: 'Immigration', icon: Plane },
    { path: '/scholarships', label: 'Scholarships', icon: Award },
    { path: '/careers', label: 'Careers', icon: Briefcase },
    { path: '/calculator', label: 'Calculator', icon: Calculator },
  ];

  const isLandingTop = location.pathname === '/' && !isScrolled;

  return (
    <>
      {/* Top Header */}
      <nav className="navbar-top">
        <div className="navbar-inner container">
          <Link to="/" className="navbar-logo">
            <span className={`logo-text ${isLandingTop ? 'landing-override' : ''}`}>Admit<span className="logo-highlight">Q</span></span>
          </Link>

          <div className="navbar-actions">
            <div className="theme-toggle" role="group" aria-label="Color theme">
              <button
                type="button"
                className={`theme-option ${theme === 'light' ? 'active' : ''}`}
                onClick={() => setTheme('light')}
                aria-label="Use light theme"
              >
                {theme === 'light' && (
                  <motion.div
                    layoutId="theme-pill"
                    className="theme-active-bg"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="theme-icon-wrapper">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                  </svg>
                </span>
              </button>
              <button
                type="button"
                className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => setTheme('dark')}
                aria-label="Use dark theme"
              >
                {theme === 'dark' && (
                  <motion.div
                    layoutId="theme-pill"
                    className="theme-active-bg"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="theme-icon-wrapper">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.4 14.8A8.5 8.5 0 0 1 9.2 3.6 8.5 8.5 0 1 0 20.4 14.8Z" />
                  </svg>
                </span>
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
                    <Link to="/dashboard" className="dropdown-item" onClick={() => setProfileOpen(false)}>Dashboard</Link>
                    <Link to="/planner" className="dropdown-item" onClick={() => setProfileOpen(false)}>Planner</Link>
                    <Link to="/profile" className="dropdown-item" onClick={() => setProfileOpen(false)}>Profile</Link>
                    <Link to="/applications" className="dropdown-item" onClick={() => setProfileOpen(false)}>Applications</Link>
                    {user?.role === 'admin' && (
                      <Link to="/admin" className="dropdown-item" onClick={() => setProfileOpen(false)}>Admin</Link>
                    )}
                    <div className="dropdown-divider" />
                    <button className="dropdown-item dropdown-logout" onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/register" className="btn btn-ghost">Register</Link>
                <Link to="/login" className="btn btn-primary btn-sm">Login</Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Floating Fluid Glass Navigation */}
      <div className={`floating-nav-container ${isLandingTop ? 'nav-landing-override' : ''}`}>
        <nav className="fluid-glass-nav">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            const Icon = link.icon;
            
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`fluid-nav-item ${active ? 'active' : ''}`}
              >
                {active && (
                  <motion.div
                    layoutId="active-pill"
                    className="fluid-active-bg"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="fluid-nav-content">
                  <Icon className="fluid-nav-icon" size={18} strokeWidth={active ? 2.5 : 2} />
                  <span className="fluid-nav-label">{link.label}</span>
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
