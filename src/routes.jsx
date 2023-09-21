// /src/routes.jsx

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { lazy } from 'react';

const LandingRoute = lazy(() => import('./components/Routes/LandingRoute'));
const PrivateRoute = lazy(() => import('./components/Routes/PrivateRoute'));
const ResultFindUserRoute = lazy(() =>
  import('./components/Routes/ResultFindUserRoute')
);

const Account = lazy(() => import('./pages/Account/Account'));

const Rootlayout = lazy(() => import('./layout/Rootlayout'));
const Home = lazy(() => import('./pages/Home'));
const Live = lazy(() => import('./pages/Live'));
const Tv = lazy(() => import('./pages/Tv'));
const Movie = lazy(() => import('./pages/Movie'));
const Paramount = lazy(() => import('./pages/Paramount'));

const UserLayout = lazy(() => import('./layout/User/UserLayout'));
const UserWideMain = lazy(() => import('./layout/User/UserWideMain'));
const UserMain = lazy(() => import('./layout/User/UserMain'));
const TvingLogin = lazy(() => import('./pages/User/TvingLogin'));
const TvingRegist = lazy(() => import('./pages/User/TvingRegist'));
const FindUserId = lazy(() => import('./pages/User/FindUserId'));
const FindUserPassword = lazy(() => import('./pages/User/FindUserPassword'));
const ResultFindId = lazy(() => import('./pages/User/ResultFindId'));
const CancelMembership = lazy(() => import('./pages/User/CancelMembership'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<LandingRoute />} />

      <Route element={<PrivateRoute />}>
        <Route element={<Rootlayout />}>
          <Route path='home' element={<Home />} />
          <Route path='live' element={<Live />} />
          <Route path='tv' element={<Tv />} />
          <Route path='movie' element={<Movie />} />
          <Route path='paramount' element={<Paramount />} />
          {/* <Route path='search/:searchResult' element={<SearchResult />} /> */}
        </Route>
      </Route>

      <Route path='account' element={<Account />} />
      <Route element={<UserLayout />}>
        <Route element={<UserMain />}>
          <Route path='user/tvingLogin' element={<TvingLogin />} />
          <Route path='user/tvingRegist' element={<TvingRegist />} />
          <Route path='user/findId' element={<FindUserId />} />
          <Route path='user/findPassword' element={<FindUserPassword />} />
          <Route
            path='user/resultFindId'
            element={
              <ResultFindUserRoute>
                <ResultFindId />
              </ResultFindUserRoute>
            }
          />
        </Route>
        <Route element={<UserWideMain />}>
          <Route path='user/cancelMembership' element={<CancelMembership />} />
        </Route>
      </Route>
    </>
  )
);

export default router;
