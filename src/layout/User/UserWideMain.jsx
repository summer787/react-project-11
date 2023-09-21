import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './UserWideMain.module.css';

function UserWideMain() {
  return (
    <main className={style.user__wide__main}>
      <section className={style.user__wide__main__section}>
        <Outlet />
      </section>
    </main>
  );
}

export default UserWideMain;
