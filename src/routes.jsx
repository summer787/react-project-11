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

const User = lazy(() => import('./layout/User/User'));
const TvingLogin = lazy(() => import('./pages/User/TvingLogin'));
const TvingRegist = lazy(() => import('./pages/User/TvingJoin'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Rootlayout />}>
      <Route path='/' element={<Account />} />
      <Route path='home' element={<Home />} />
      <Route path='live' element={<Live />} />
      <Route path='tv' element={<Tv />} />
      <Route path='movie' element={<Movie />} />
      <Route path='paramount' element={<Paramount />} />
      <Route path='user' element={<User />}>
        <Route path='tvingLogin' element={<TvingLogin />} />
        <Route path='tvingRegist' element={<TvingRegist />} />
      </Route>
    </Route>
  )
);

export default router;
