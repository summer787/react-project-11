// /src/routes.jsx

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { lazy } from 'react';

const Rootlayout = lazy(() => import('./layout/Rootlayout'));
const Account = lazy(() => import('./pages/Account/Account'));
const Home = lazy(() => import('./pages/Home'));
const Live = lazy(() => import('./pages/Live'));
const Tv = lazy(() => import('./pages/Tv'));
const Movie = lazy(() => import('./pages/Movie'));
const Paramount = lazy(() => import('./pages/Paramount'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Rootlayout />}>
      <Route path='/' element={<Account />} />
      <Route path='home' element={<Home />} />
      <Route path='live' element={<Live />} />
      <Route path='tv' element={<Tv />} />
      <Route path='movie' element={<Movie />} />
      <Route path='paramount' element={<Paramount />} />
    </Route>
  )
);

export default router;
