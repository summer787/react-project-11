import MainHeaderImage from "@/assets/MainHeader/MainHeader_image";
import styles from "./Search.module.css";

function Search() {
  return (
    <ul className={styles.menu}>
      <li>
        <button type="button">
          <img src={MainHeaderImage.search} alt="검색" />
        </button>
      </li>
      <li>
        <button type="button">
          <img src={MainHeaderImage.profile} alt="프로필" />
        </button>
      </li>
    </ul>
  );
}

export default Search;
