// /src/App.jsx
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import router from "./routes";
import SearchProvider from "./providers/SearchProvider";

function App() {
  return (
    <HelmetProvider>
      <Suspense fallback={<div>Loading</div>}>
        <SearchProvider>
          <RouterProvider router={router} />
        </SearchProvider>
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
