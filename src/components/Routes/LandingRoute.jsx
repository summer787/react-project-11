import Home from '@/pages/Home';
import Account from '@/pages/Account/Account';
import useStorage from '@/hooks/useStorage';
import { useAuth } from '@/components/contexts/AuthContext';

function LandingRoute() {
  const { isAuth } = useAuth();
  const { storageData } = useStorage('pocketbase_auth');

  return isAuth || storageData ? <Home /> : <Account />;
}

export default LandingRoute;
