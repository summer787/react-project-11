// /src/routes.jsx

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { lazy } from 'react';

import PrivateRoute from './components/Routes/PrivateRoute';
// import LandingRoute from './components/Routes/LandingRoute';

const Rootlayout = lazy(() => import('./layout/Rootlayout'));
const Account = lazy(() => import('./pages/Account/Account'));
const Home = lazy(() => import('./pages/Home'));
const Live = lazy(() => import('./pages/Live'));
const Tv = lazy(() => import('./pages/Tv'));
const Movie = lazy(() => import('./pages/Movie'));
const Paramount = lazy(() => import('./pages/Paramount'));

const UserLayout = lazy(() => import('./layout/User/UserLayout'));
const TvingLogin = lazy(() => import('./pages/User/TvingLogin'));
const TvingRegist = lazy(() => import('./pages/User/TvingRegist'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Account />} />

      <Route element={<PrivateRoute />}>
        <Route element={<Rootlayout />}>
          <Route path='home' element={<Home />} />
          <Route path='live' element={<Live />} />
          <Route path='tv' element={<Tv />} />
          <Route path='movie' element={<Movie />} />
          <Route path='paramount' element={<Paramount />} />
        </Route>
      </Route>

      <Route element={<UserLayout />}>
        <Route path='user/tvingLogin' element={<TvingLogin />} />
        <Route path='user/tvingRegist' element={<TvingRegist />} />
      </Route>
    </>
  )
);

export default router;
