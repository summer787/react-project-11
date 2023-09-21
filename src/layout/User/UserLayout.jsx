import { Outlet } from 'react-router-dom';
import UserHeader from '../UserHeader/UserHeader';

function UserLayout() {
  return (
    <>
      {/* 헤더 */}
      <UserHeader />
      {/* 메인 */}
      <Outlet />
    </>
  );
}

export default UserLayout;
