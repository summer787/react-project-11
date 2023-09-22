import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import SubPage from "./pages/SubPage";
import MovieSubPage from "./pages/MovieSubPage";



const router = createBrowserRouter(
   createRoutesFromElements(   
      
      <>
         <Route path="/tv/:id" element={<SubPage />} />
         <Route path="/movie/:id" element={<MovieSubPage />} /> 
      </>
      
   )
);

export default router;