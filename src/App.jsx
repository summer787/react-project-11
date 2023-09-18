// /src/App.jsx
import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import router from "./routes";
import SearchProvider from "./providers/SearchProvider";

function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <SearchProvider>
        <RouterProvider router={router} />
      </SearchProvider>
    </Suspense>
  );
}

export default App;
