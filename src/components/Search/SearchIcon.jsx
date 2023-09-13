import { useEffect } from "react";
import { PropTypes } from "prop-types";
import MainHeaderImage from "@/assets/MainHeader/MainHeader_image";
import styles from "./SearchIcon.module.css";

function Search({ searchClicked, setSearchClicked }) {
  function onClick() {
    setSearchClicked(!searchClicked);
  }

  function getScrollbarWidth() {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    return scrollbarWidth;
  }
  useEffect(() => {
    if (searchClicked) {
      const scrollbarWidth = getScrollbarWidth();
      document.querySelector(
        `.${styles.menu}`
      ).style.paddingRight = `${scrollbarWidth}px`;
    }
    return () => {
      document.querySelector(`.${styles.menu}`).style.paddingRight = "0px";
    };
  }, [searchClicked]);

  return (
    <ul className={styles.menu}>
      <li>
        <button onClick={onClick} className={styles.search} type="button">
          {searchClicked ? (
            <MainHeaderImage.Cancel />
          ) : (
            <MainHeaderImage.Search />
          )}
        </button>
      </li>
      <li>
        <button className={styles.profileButton} type="button">
          <img src={MainHeaderImage.profile} alt="프로필" />
          <div className={styles.profile}>
            <div className={styles.change}>
              <div>
                <img src={MainHeaderImage.profile} alt="프로필" />
              </div>
              <div>
                <p>유동균</p>
                <a href="/">프로필전환 &gt;</a>
              </div>
            </div>
            <ul className={styles.user}>
              <li>
                <a href="/">MY</a>
              </li>
              <li>
                <a href="/">이용권</a>
              </li>
              <li>
                <a href="/">쿠폰등록</a>
              </li>
              <li>
                <a href="/">고객센터</a>
              </li>
              <li>
                <a href="/">로그아웃</a>
              </li>
            </ul>
          </div>
        </button>
      </li>
    </ul>
  );
}

Search.propTypes = {
  searchClicked: PropTypes.bool.isRequired,
  setSearchClicked: PropTypes.func.isRequired,
};

export default Search;
