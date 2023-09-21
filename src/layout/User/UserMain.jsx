import React from 'react';
import { node } from 'prop-types';
import { Outlet } from 'react-router-dom';
import style from './UserMain.module.css';

function UserMain({ children }) {
  return (
    <main className={style.user__main}>
      <section className={style.user__main__section}>
        {children || <Outlet />}
      </section>
    </main>
  );
}

UserMain.defaultProps = {
  children: null,
};

UserMain.propTypes = {
  children: node,
};

export default UserMain;
