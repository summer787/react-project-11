import { useEffect } from "react";
import { PropTypes } from "prop-types";
import MainHeaderImage from "@/assets/MainHeader/MainHeader_image";
import { Link } from "react-router-dom";
import styles from "./SearchIcon.module.css";

import { deleteData } from "@/hooks/useStorage";

function Search({ searchClicked, setSearchClicked }) {
  function onClick() {
    setSearchClicked(!searchClicked);
  }

  function getScrollbarWidth() {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    return scrollbarWidth;
  }

  function logout(e) {
    deleteData("pocketbase_auth");
  }

  useEffect(() => {
    if (searchClicked) {
      const scrollbarWidth = getScrollbarWidth();
      const menuElement = document.querySelector(`.${styles.menu}`);
      if (menuElement) {
        menuElement.style.paddingRight = `${scrollbarWidth}px`;
      }
    }
    return () => {
      const menuElement = document.querySelector(`.${styles.menu}`);
      if (menuElement) {
        menuElement.style.paddingRight = "0px";
      }
    };
  }, [searchClicked]);

  return (
    <ul className={styles.menu}>
      <li>
        <button
          onClick={onClick}
          className={styles.search}
          type="button"
          aria-label="검색"
        >
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
                <Link to="/home">프로필전환 &gt;</Link>
              </div>
            </div>
            <ul className={styles.user}>
              {/* <li>
                <Link to="/home">MY</Link>
              </li>
              <li>
                <Link to="/home">이용권</Link>
              </li>
              <li>
                <Link to="/home">쿠폰등록</Link>
              </li>
              <li>
                <Link to="/home">고객센터</Link>
              </li> */}
              <li>
                <a href="/" onClick={logout}>
                  로그아웃
                </a>
              </li>
              <li>
                <Link to="/user/cancelMembership">회원탈퇴</Link>
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
