import Home from '@/pages/Home';
import Account from '@/pages/Account/Account';
import useStorage from '@/hooks/useStorage';
import { useAuth } from '@/components/contexts/AuthContext';
import { Navigate } from 'react-router-dom';

function LandingRoute() {
  const { isAuth } = useAuth();
  const { storageData } = useStorage('pocketbase_auth');

  return isAuth || storageData ? (
    <Navigate to='/home' replace={true} />
  ) : (
    <Navigate to='/account' replace={true} />
  );
}

export default LandingRoute;
