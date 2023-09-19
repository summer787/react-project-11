
// import FetchData from "./FetchData";
// import styles from "./styles/global.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
  <HelmetProvider>
  <RouterProvider router={router} />
  </HelmetProvider>
  )
}

export default App;
