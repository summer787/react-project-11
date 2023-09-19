import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import useStorage from '../../hooks/useStorage';

function PrivateRoute() {
  const { isAuth } = useAuth();
  const { storageData } = useStorage('pocketbase_auth');

  return isAuth || storageData ? (
    <Outlet />
  ) : (
    // eslint-disable-next-line no-alert, react/jsx-props-no-spreading
    <Navigate to='/' {...alert('로그인 사용자만 이용 가능 합니다.')} />
  );
}

export default PrivateRoute;
