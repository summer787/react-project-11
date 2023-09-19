import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import SubPage from "./pages/SubPage";

const router = createBrowserRouter(
   createRoutesFromElements(   
      <Route path="/tv/:id" element={<SubPage />} />
   )
);

export default router;