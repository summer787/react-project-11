// /src/App.jsx
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import router from "./routes";
import AuthProvider from "./components/contexts/AuthContext";
import FindUserProvider from "./components/contexts/FindUserContext";
import SearchProvider from "./providers/SearchProvider";

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Toaster />
        <FindUserProvider>
          <SearchProvider>
            <RouterProvider router={router} />
          </SearchProvider>
        </FindUserProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
