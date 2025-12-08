import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext.jsx';

export default function GuestRoutes() {
  const { isAuthenticated, authChecked } = useAuthContext();

  if (!authChecked) {
    return null;
  }

  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
}
