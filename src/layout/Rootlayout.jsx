// /src/layout/Rootlayout.jsx
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

function Rootlayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Rootlayout;
