import PropTypes from 'prop-types';
import style from './UserMain.module.css';

function UserMain({ children }) {
  return (
    <main className={style.user__main}>
      <article className={style.user__main__artice}>{children}</article>
    </main>
  );
}

UserMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserMain;
