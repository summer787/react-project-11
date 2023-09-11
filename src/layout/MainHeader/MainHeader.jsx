// /src/layout/MainHeader/MainHeader.jsx
import MainHeaderImage from "@/assets/MainHeader/MainHeader_image";
import Search from "@/components/Search/Search";
import Nav from "@/components/Nav/Nav";
import { Link } from "react-router-dom";
import styles from "./MainHeader.module.css";

function MainHeader() {
  return (
    <div>
      <header className={styles.header}>
        <h1>
          <Link to="/">
            <img src={MainHeaderImage.logo} alt="티빙" />
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
