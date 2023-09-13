import MainHeaderImage from "@/assets/MainHeader/MainHeader_image";
import styles from "./SearchIcon.module.css";

function Search() {
  return (
    <ul className={styles.menu}>
      <li>
        <button className={styles.search} type="button">
          {/* <img src={MainHeaderImage.search} alt="검색" /> */}
          <MainHeaderImage.Search />
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

export default Search;
