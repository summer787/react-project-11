import PropTypes from 'prop-types';
import style from './UserMain.module.css';

function UserMain({ children }) {
  return (
    <main className={`${style.user__main}`}>
      <section style={{ color: 'white' }}>{children}</section>
    </main>
  );
}

UserMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserMain;
