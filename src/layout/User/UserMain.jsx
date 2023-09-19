import PropTypes from 'prop-types';
import style from './UserMain.module.css';

function UserMain({ children }) {
  return (
    <main className={`${style.user__main}`}>
      <article style={{ color: 'white' }}>{children}</article>
    </main>
  );
}

UserMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserMain;
