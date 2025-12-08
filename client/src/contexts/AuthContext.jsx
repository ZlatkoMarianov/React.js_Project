import { createContext, useContext, useEffect, useState } from 'react';
import useRequest from '../hooks/useRequest.js';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authChecked, setAuthChecked] = useState(false);
  const [user, setUser] = useState(null);
  const { request } = useRequest();

  useEffect(() => {
    const stored = localStorage.getItem('auth');

    if (!stored) {
      setAuthChecked(true);
      return;
    }

    try {
      const parsed = JSON.parse(stored);
      setUser(parsed);
    } catch {
      localStorage.removeItem('auth');
    }
    setAuthChecked(true);
  }, []);

  const saveAuth = (authData) => {
    setUser(authData);
    localStorage.setItem('auth', JSON.stringify(authData));
  };

  const loginHandler = async (email, password) => {
    const result = await request('/users/login', 'POST', { email, password });

    saveAuth(result);
  };

  const registerHandler = async (email, password) => {
    const result = await request('/users/register', 'POST', { email, password });

    saveAuth(result);
  };

  const logoutHandler = async () => {
    try {
      await request('/users/logout', 'POST');
    } catch {
      alert('Logout failed on server, but you have been logged out locally.');
    } finally {
      setUser(null);
      localStorage.removeItem('auth');
    }
  };

  const authContextValues = {
    user,
    authChecked,
    isAuthenticated: !!user?.accessToken,
    isGuest: !user?.accessToken,
    email: user?.email || '',
    loginHandler,
    registerHandler,
    logoutHandler,
  };

  return <AuthContext.Provider value={authContextValues}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthContext() {
  return useContext(AuthContext);
}

export default AuthContext;
