import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import ReactModal from "react-modal";
import useStorage from "@/hooks/useStorage";
import MainheaderImage from "@/assets/MainHeader/MainHeader_image";
import nowDate from "../../utils/getNowDate";
import styles from "./Search.module.css";

function Search({ isOpen, onRequestClose }) {
  const [searchInput, setSearchInput] = useState("");
  const {
    storageData: recentSearches,
    update,
    removeItem,
    remove,
  } = useStorage("recentSearches", []);
  const [currentTime, setCurrentTime] = useState(() => nowDate());

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchInput.trim() !== "") {
      update([...recentSearches, searchInput]);
      setSearchInput("");
    }
  };

  useEffect(() => {
    if (isOpen) {
      setCurrentTime(nowDate());
    }
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      className={`${styles.search} ${isOpen ? styles.isActive : ""}`}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(3px)",
        },
      }}
    >
      <div>
        <h2 className="a11yHidden">검색창</h2>
        <div className={styles.searchInput}>
          <form action="/" onSubmit={handleSearch}>
            <label htmlFor="search">
              <span className="a11yHidden">검색</span>
              <input
                id="search"
                name="search"
                type="search"
                placeholder="제목, 인물명을 입력해보세요."
                autoComplete="off"
                value={searchInput}
                // onKeyDown={handleKeyDown}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </label>
            <button type="submit" onClick={handleSearch}>
              <MainheaderImage.Search />
            </button>
          </form>
        </div>
        <div className={styles.searchContents}>
          <div>
            <h3>
              최근 검색어
              <button className={styles.delete} type="button" onClick={remove}>
                모두 지우기
              </button>
            </h3>
            <ul>
              {recentSearches && recentSearches.length > 0 ? (
                recentSearches.map((searchItem) => (
                  <li key={searchItem}>
                    <a href="/">{searchItem}</a>
                    <button
                      type="button"
                      className={styles.delete}
                      onClick={() => removeItem(searchItem)}
                    >
                      삭제
                    </button>
                  </li>
                ))
              ) : (
                <span>검색 내역이 없습니다.</span>
              )}
            </ul>
          </div>
          <div>
            <h3>실시간 인기 검색어</h3>
            <ul>
              <li>
                <a href="/">신병</a>
              </li>
              <li>
                <a href="/">스트릿 우먼 파이터 시즌2</a>
              </li>
              <li>
                <a href="/">나는 SOLO</a>
              </li>
              <li>
                <a href="/">회장님네 사람들</a>
              </li>
              <li>
                <a href="/">벌거벗은 세계사</a>
              </li>
              <li>
                <a href="/">짱구는못말려23</a>
              </li>
              <li>
                <a href="/">남남</a>
              </li>
              <li>
                <a href="/">스트릿 우먼 파이터</a>
              </li>
              <li>
                <a href="/">아스달 연대기</a>
              </li>
              <li>
                <a href="/">유 퀴즈 온 더 블럭</a>
              </li>
            </ul>
            <p>
              <span>{currentTime} 기준</span>
            </p>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}

Search.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};
export default Search;
