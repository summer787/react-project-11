import useStorage from '@/hooks/useStorage';
import { useAuth } from '@/components/contexts/AuthContext';
import { Navigate } from 'react-router-dom';

function LandingRoute() {
  const { isAuth } = useAuth();
  const { storageData } = useStorage('pocketbase_auth');

  return isAuth || storageData ? (
    <Navigate to='/home' replace />
  ) : (
    <Navigate to='/account' replace />
  );
}

export default LandingRoute;
