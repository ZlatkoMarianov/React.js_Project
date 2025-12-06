import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext.jsx';

export default function GuestRoutes() {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
}
