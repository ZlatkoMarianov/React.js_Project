import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext.jsx';

export default function ProtectedRoutes() {
  const { isAuthenticated, authChecked } = useAuthContext();

  if (!authChecked) {
    return null;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
