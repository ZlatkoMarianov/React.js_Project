import { createContext, useContext, useEffect, useState } from 'react';
import useRequest from '../hooks/useRequest.js';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const { request } = useRequest();

  useEffect(() => {
    const stored = localStorage.getItem('auth');

    if (!stored) {
      return;
    }

    try {
      const parsed = JSON.parse(stored);
      setUser(parsed);
    } catch {
      localStorage.removeItem('auth');
    }
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
   
    setUser(null);
    localStorage.removeItem('auth');
  };

  const authContextValues = {
    user,
    isAuthenticated: !!user?.accessToken,
    loginHandler,
    registerHandler,
    logoutHandler,
  };

  return <AuthContext.Provider value={authContextValues}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}

export default AuthContext;
