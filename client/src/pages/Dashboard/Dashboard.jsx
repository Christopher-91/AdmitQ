import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import api from '../../lib/api';
import {
  BsBarChartLine, BsClipboard2, BsClock, BsBookmark,
  BsBank2, BsBookHalf, BsCurrencyDollar, BsBullseye, BsCalculator, BsGlobe2,
} from 'react-icons/bs';
import './Dashboard.css';

export default function Dashboard() {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await api.get('/dashboard');
        setData(res.data.data);
      } catch {
        // Dashboard may fail if profile not set up yet
        setData({ profileCompletion: 0, applications: { total: 0, byStatus: {} }, upcomingDeadlines: [], saved: {}, recommendationsAvailable: 0 });
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="page container">
        <div className="dashboard-skeleton">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="skeleton" style={{ height: 120, borderRadius: 16 }} />
          ))}
        </div>
      </div>
    );
  }

  const profilePct = data?.profileCompletion || 0;
  const totalSaved = Object.values(data?.saved || {}).reduce((a, b) => a + b, 0);

  return (
    <div className="page container">
      {/* Greeting */}
      <div className="dashboard-greeting animate-fadeInUp">
        <div>
          <h1 className="page-title">Welcome back, {user?.firstName}</h1>
          <p className="page-subtitle">Here's your education journey at a glance</p>
        </div>
        <Link to="/universities" className="btn btn-primary">
          Explore Universities
        </Link>
      </div>

      {/* Stats */}
      <div className="dashboard-stats stagger-children">
        <div className="stat-card">
          <div className="stat-icon stat-icon-primary"><BsBarChartLine size={22} /></div>
          <div>
            <div className="stat-value">{profilePct}%</div>
            <div className="stat-label">Profile Complete</div>
          </div>
          {profilePct < 100 && (
            <Link to="/profile" className="btn btn-ghost btn-sm" style={{ marginLeft: 'auto' }}>
              Complete →
            </Link>
          )}
        </div>

        <div className="stat-card">
          <div className="stat-icon stat-icon-accent"><BsClipboard2 size={22} /></div>
          <div>
            <div className="stat-value">{data?.applications?.total || 0}</div>
            <div className="stat-label">Applications</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon stat-icon-warning"><BsClock size={22} /></div>
          <div>
            <div className="stat-value">{data?.upcomingDeadlines?.length || 0}</div>
            <div className="stat-label">Upcoming Deadlines</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon stat-icon-info"><BsBookmark size={22} /></div>
          <div>
            <div className="stat-value">{totalSaved}</div>
            <div className="stat-label">Saved Items</div>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Upcoming Deadlines */}
        <div className="card dashboard-section">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Upcoming Deadlines</h2>
            <Link to="/deadlines" className="btn btn-ghost btn-sm">View All →</Link>
          </div>

          {data?.upcomingDeadlines?.length > 0 ? (
            <div className="deadline-list">
              {data.upcomingDeadlines.map((d) => (
                <div key={d.id} className="deadline-item">
                  <div className={`deadline-dot ${d.daysRemaining <= 7 ? 'urgent' : d.daysRemaining <= 30 ? 'soon' : 'normal'}`} />
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{d.title}</p>
                    <p className="text-xs text-muted">{d.universityName || 'Personal'}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold text-sm ${d.daysRemaining <= 7 ? 'text-error' : ''}`}>
                      {d.daysRemaining}d
                    </p>
                    <p className="text-xs text-muted">remaining</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p className="text-muted">No upcoming deadlines</p>
              <Link to="/deadlines" className="btn btn-secondary btn-sm mt-2">Add Deadline</Link>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="card dashboard-section">
          <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
          <div className="quick-actions">
            <Link to="/universities" className="quick-action-card">
              <span className="quick-action-icon"><BsBank2 size={22} /></span>
              <span className="quick-action-label">Find Universities</span>
            </Link>
            <Link to="/programs" className="quick-action-card">
              <span className="quick-action-icon"><BsBookHalf size={22} /></span>
              <span className="quick-action-label">Browse Programs</span>
            </Link>
            <Link to="/scholarships" className="quick-action-card">
              <span className="quick-action-icon"><BsCurrencyDollar size={22} /></span>
              <span className="quick-action-label">Find Scholarships</span>
            </Link>
            <Link to="/careers" className="quick-action-card">
              <span className="quick-action-icon"><BsBullseye size={22} /></span>
              <span className="quick-action-label">Career Paths</span>
            </Link>
            <Link to="/calculator" className="quick-action-card">
              <span className="quick-action-icon"><BsCalculator size={22} /></span>
              <span className="quick-action-label">Cost Calculator</span>
            </Link>
            <Link to="/countries" className="quick-action-card">
              <span className="quick-action-icon"><BsGlobe2 size={22} /></span>
              <span className="quick-action-label">Explore Countries</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Application Status */}
      {data?.applications?.total > 0 && (
        <div className="card mt-6 animate-fadeInUp">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Application Status</h2>
            <Link to="/applications" className="btn btn-ghost btn-sm">Manage →</Link>
          </div>
          <div className="app-status-bar">
            {Object.entries(data.applications.byStatus).map(([status, count]) => (
              <div key={status} className={`app-status-segment status-${status}`} style={{
                flex: count / data.applications.total
              }}>
                <span className="text-xs font-semibold">{status} ({count})</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommendations Teaser */}
      <div className="card mt-6 dashboard-recs animate-fadeInUp">
        <div className="recs-content">
          <h2 className="text-lg font-bold">Get Personalized Recommendations</h2>
          <p className="text-muted text-sm mt-1">
            Complete your profile to receive AI-powered program recommendations matched to your goals.
          </p>
        </div>
        <Link to="/profile" className="btn btn-accent">
          {profilePct >= 60 ? 'View Recommendations' : 'Complete Profile'}
        </Link>
      </div>
    </div>
  );
}
