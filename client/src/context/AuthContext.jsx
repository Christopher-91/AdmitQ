import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import api from '../lib/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token && !user) {
      // Validate token by fetching profile
      api.get('/users/me')
        .then(res => {
          const u = res.data.data;
          setUser(u);
          localStorage.setItem('user', JSON.stringify(u));
        })
        .catch(() => {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          localStorage.removeItem('user');
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const _storeSession = (userData, accessToken, refreshToken) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const login = useCallback(async (email, password) => {
    const res = await api.post('/auth/login', { email, password });
    const { user: userData, accessToken, refreshToken } = res.data.data;
    _storeSession(userData, accessToken, refreshToken);
    return userData;
  }, []);

  const register = useCallback(async (data) => {
    const res = await api.post('/auth/register', data);
    const { user: userData, accessToken, refreshToken } = res.data.data;
    _storeSession(userData, accessToken, refreshToken);
    return userData;
  }, []);

  /**
   * Google Sign-In — receives the credential (ID token) from @react-oauth/google
   */
  const loginWithGoogle = useCallback(async (credential) => {
    const res = await api.post('/auth/google', { credential });
    const { user: userData, accessToken, refreshToken } = res.data.data;
    _storeSession(userData, accessToken, refreshToken);
    return userData;
  }, []);

  /**
   * Apple Sign-In scaffold — will be functional once Apple credentials are configured
   */
  const loginWithApple = useCallback(async ({ identityToken, authorizationCode, user: appleUser }) => {
    const res = await api.post('/auth/apple', { identityToken, authorizationCode, user: appleUser });
    const { user: userData, accessToken, refreshToken } = res.data.data;
    _storeSession(userData, accessToken, refreshToken);
    return userData;
  }, []);

  const logout = useCallback(async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    try {
      await api.post('/auth/logout', { refreshToken });
    } catch {
      // Continue logout even if API call fails
    }
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    setUser(null);
  }, []);

  const refreshProfile = useCallback(async () => {
    try {
      const res = await api.get('/users/me');
      const userData = res.data.data;
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return userData;
    } catch {
      return null;
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      user, loading, login, register, logout, refreshProfile,
      loginWithGoogle, loginWithApple,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
