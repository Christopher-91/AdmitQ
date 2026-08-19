import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute, PublicRoute } from './router/ProtectedRoute';
import Navbar from './components/Navbar/Navbar';

// Pages
import Landing from './pages/Landing/Landing';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Universities from './pages/Universities/Universities';
import Programs from './pages/Programs/Programs';
import Countries from './pages/Countries/Countries';
import Scholarships from './pages/Scholarships/Scholarships';
import Careers from './pages/Careers/Careers';
import CostCalculator from './pages/Calculator/CostCalculator';

import './index.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          {/* Public */}
          <Route path="/" element={<PublicRoute><Landing /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

          {/* Data Pages (public) */}
          <Route path="/universities" element={<Universities />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/calculator" element={<CostCalculator />} />

          {/* Protected */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

          {/* 404 */}
          <Route path="*" element={
            <div className="page container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', textAlign: 'center' }}>
              <div>
                <p style={{ fontSize: '4rem', marginBottom: 16 }}>🔭</p>
                <h1 className="page-title" style={{ marginBottom: 8 }}>Page Not Found</h1>
                <p className="text-muted">The page you're looking for doesn't exist or has been moved.</p>
                <a href="/" className="btn btn-primary mt-4">Go Home</a>
              </div>
            </div>
          } />
        </Routes>

        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.88rem',
            },
          }}
        />
      </AuthProvider>
    </Router>
  );
}

export default App;
