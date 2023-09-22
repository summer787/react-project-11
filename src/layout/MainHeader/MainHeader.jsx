// /src/layout/MainHeader/MainHeader.jsx
import { useState, useEffect } from "react";
import MainHeaderImage from "@/assets/MainHeader/MainHeader_image";
import SearchIcon from "@/components/Search/SearchIcon";
import Search from "@/components/Search/Search";
import Nav from "@/components/Nav/Nav";
import { Link } from "react-router-dom";
import styles from "./MainHeader.module.css";

function MainHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (searchClicked) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [searchClicked]);

  return (
    <>
      <header
        className={`${styles.header} ${
          isScrolled ? styles.headerScrolled : ""
        } ${searchClicked ? styles.headerSearchClicked : ""}`}
      >
        <h1>
          <Link to="/home">
            <img src={MainHeaderImage.logo} alt="티빙" />
          </Link>
        </h1>
        <div className={styles.navigation}>
          <Nav />
          <SearchIcon
            searchClicked={searchClicked}
            setSearchClicked={setSearchClicked}
          />
        </div>
      </header>
      {/* {searchClicked && <Search />} */}
      <Search
        isOpen={searchClicked}
        // isOpenSet={setSearchClicked}
        onRequestClose={() => setSearchClicked(false)}
      />
    </>
  );
}

export default MainHeader;
