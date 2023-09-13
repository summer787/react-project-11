// /src/layout/MainHeader/MainHeader.jsx
import { useState, useEffect } from "react";
import MainHeaderImage from "@/assets/MainHeader/MainHeader_image";
import SearchIcon from "@/components/Search/SearchIcon";
import Nav from "@/components/Nav/Nav";
import { Link } from "react-router-dom";
import styles from "./MainHeader.module.css";

function MainHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}
    >
      <h1>
        <Link to="/">
          <img src={MainHeaderImage.logo} alt="티빙" />
        </Link>
      </h1>
      <div className={styles.navigation}>
        <Nav />
        <SearchIcon />
      </div>
    </header>
  );
}

export default MainHeader;
