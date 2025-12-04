import { useEffect } from 'react';
import { useAuthContext } from '../../../contexts/AuthContext.jsx';
import { useNavigate } from 'react-router';

export default function Logout() {
  const { logoutHandler } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    logoutHandler()
      .then(() => navigate('/'))
      .catch(() => {
        alert('Problem with logout');
        navigate('/');
      });
  }, [logoutHandler, navigate]);
  
  return null;
}
