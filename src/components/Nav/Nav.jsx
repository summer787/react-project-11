import { Link, useLocation } from "react-router-dom";
import MainHeaderImage from "@/assets/MainHeader/MainHeader_image";
import styles from "./Nav.module.css";

function Nav() {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <ul>
        {/* <li className={styles.live}>
          <Link to="/live">
            <MainHeaderImage.Live />
            <span>실시간</span>
          </Link>
        </li> */}
        <li>
          <Link
            to="/tv"
            className={`${location.pathname === "/tv" ? styles.accent : ""}`}
          >
            TV프로그램
          </Link>
        </li>
        <li>
          <Link
            to="/movie"
            className={`${location.pathname === "/movie" ? styles.accent : ""}`}
          >
            영화
          </Link>
        </li>
        {/* <li>
          <Link to="/paramount">파라마운트+</Link>
        </li> */}
        <li>
          <Link to="/like">찜목록</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
