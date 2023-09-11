import MainHeaderImage from "@/assets/MainHeader/MainHeader_image";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.live}>
          <Link to="/live">
            <img src={MainHeaderImage.live} alt="live" />
            <span>실시간</span>
          </Link>
        </li>
        <li>
          <Link to="/tv">TV프로그램</Link>
        </li>
        <li>
          <Link to="/movie">영화</Link>
        </li>
        <li>
          <Link to="/paramount">파라마운트+</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
