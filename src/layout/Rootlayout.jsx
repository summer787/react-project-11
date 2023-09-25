// /src/layout/Rootlayout.jsx
import { Outlet } from "react-router-dom";

function Rootlayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Rootlayout;
