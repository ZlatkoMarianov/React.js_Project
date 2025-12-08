import { useEffect } from 'react';
import { useAuthContext } from '../../../contexts/AuthContext.jsx';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export default function Logout() {
  const { logoutHandler } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    logoutHandler()
      .then(() => {
        navigate('/')
        toast.success('You have been logged out')
      })
      .catch(() => {
        toast.error('Problem with logout');
        navigate('/');
      });
  }, [logoutHandler, navigate]);
  
  return null;
}
