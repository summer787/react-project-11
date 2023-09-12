import { Link } from 'react-router-dom';
import styles from './UserHeader.module.css';

function UserHeader() {
  return (
    <header className={styles.account__header}>
      <h1 className='a11yHidden'>티빙 로고</h1>
      <Link to='/'>
        <img
          src='/account_tving_logo.svg'
          className={styles.header__img}
          alt='tving'
        />
      </Link>
    </header>
  );
}

export default UserHeader;
