import { Outlet } from "react-router-dom";
import UserHeader from "../UserHeader/UserHeader";
import Footer from "../Footer/Footer";

function UserLayout() {
  return (
    <>
      {/* 헤더 */}
      <UserHeader />
      {/* 메인 */}
      <Outlet />
      <Footer />
    </>
  );
}

export default UserLayout;
