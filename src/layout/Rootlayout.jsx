// /src/layout/Rootlayout.jsx
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

function Rootlayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default Rootlayout;
