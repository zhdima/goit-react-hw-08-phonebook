import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const RestrictedRoute = ({ component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
