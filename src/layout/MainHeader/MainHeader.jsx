// /src/layout/MainHeader/MainHeader.jsx
import MainHeaderImage from '@/assets/MainHeader/MainHeader_image';
import Search from '@/components/Search/Search';
import Nav from '@/components/Nav/Nav';
import { Link } from 'react-router-dom';
import { useAuth } from '@/components/contexts/AuthContext';
import useStorage from '@/hooks/useStorage';
import styles from './MainHeader.module.css';

function MainHeader() {
  const { isAuth } = useAuth();
  const { storageData } = useStorage('pocketbase_auth');

  return (
    <div>
      <header className={styles.header}>
        <h1>
          <Link to={isAuth || storageData ? '/home' : '/'}>
            <img src={MainHeaderImage.logo} alt='티빙' />
          </Link>
        </h1>
        <div className={styles.navigation}>
          <Nav />
          <Search />
        </div>
      </header>
    </div>
  );
}

export default MainHeader;
