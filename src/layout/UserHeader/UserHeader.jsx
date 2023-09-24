import { Link } from 'react-router-dom';
import styles from './UserHeader.module.css';
import HeaderImage from "@/assets/MainHeader/mainheader_logo.png"

function UserHeader() {
  return (
    <header className={styles.account__header}>
      <h1 className='a11yHidden'>타잉 로고</h1>
      <Link to='/'>
        <img
          src={HeaderImage}
          className={styles.header__img}
          alt='tving'
        />
      </Link>
    </header>
  );
}

export default UserHeader;
