import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import useStorage from '../../hooks/useStorage';

function LandingRoute({ login, logout }) {
  const { isAuth } = useAuth();
  const { storageData } = useStorage('pocketbase_auth');

  return isAuth || storageData ? login : logout;
}

export default LandingRoute;
