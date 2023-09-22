// UserMain.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import style from './UserMain.module.css';

function UserMain() {
  const location = useLocation();
  const [mainClassName, sectionClassName] =
    location.pathname === '/user/cancelMembership'
      ? ['user__wide__main', 'user__wide__main__section']
      : ['user__main', 'user__main__section'];

  return (
    <main className={style[mainClassName]}>
      <section className={style[sectionClassName]}>
        <Outlet />
      </section>
    </main>
  );
}

export default UserMain;
