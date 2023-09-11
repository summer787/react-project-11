import { Outlet } from 'react-router-dom';
import UserMain from './UserMain';
import UserHeader from '../UserHeader/UserHeader';

function User() {
  return (
    <>
      {/* 헤더 */}
      <UserHeader />
      {/* 메인 */}
      <UserMain>
        <Outlet />
      </UserMain>
    </>
  );
}

export default User;
