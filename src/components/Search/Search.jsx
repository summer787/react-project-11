import { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PropTypes } from "prop-types";
import ReactModal from "react-modal";
import useStorage from "@/hooks/useStorage";
import MainheaderImage from "@/assets/MainHeader/MainHeader_image";
import pb from "@/api/pocketbase";
import getImageURL from "@/utils/getImageURL";

import SearchContext from "@/context/SearchContext";

import nowDate from "../../utils/getNowDate";
import styles from "./Search.module.css";

function Search({ isOpen, onRequestClose }) {
  const inputRef = useRef(null);
  const [searchInput, setSearchInput] = useState("");
  const {
    storageData: recentSearches,
    update,
    removeItem,
    remove,
  } = useStorage("recentSearches", []);
  const [currentTime, setCurrentTime] = useState(() => nowDate());
  const [data, setData] = useState(null);
  const [movieData, setMovieData] = useState(null);
  const { setSearchResults } = useContext(SearchContext);
  const navigate = useNavigate();
  const { searchResult } = useParams();

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchInput.trim() !== "") {
      update([...recentSearches, searchInput]);
      inputRef.current.value = "";
      setSearchInput("");
      navigate(`/search/${searchInput}`);
    }
  };

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    onRequestClose();
  }, [searchResult]);

  useEffect(() => {
    if (isOpen) {
      setCurrentTime(nowDate());
    }
  }, [isOpen]);

  useEffect(() => {
    let isMounted = true;
    const abortController = new AbortController();
    const { signal } = abortController;

    async function fetchData() {
      try {
        const response = await pb.collection("tv").getList(
          1,
          50,
          {
            expand: "tag",
            filter: `title?~'${searchInput}' || actor?~'${searchInput}' || creator?~'${searchInput}'`,
          },
          { signal }
        );

        const responseMovie = await pb.collection("movie").getList(
          1,
          50,
          {
            expand: "tag",
            filter: `title?~'${searchInput}' || actor?~'${searchInput}' || creator?~'${searchInput}'`,
          },
          { signal }
        );

        if (isMounted) {
          setData(response);
          setMovieData(responseMovie);
          setSearchResults({ tv: response, movie: responseMovie });
        }
      } catch (error) {
        throw new Error(error);
      }
    }

    if (searchInput) fetchData();

    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, [searchInput, setSearchResults]);

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
                ref={inputRef}
                autoComplete="off"
                defaultValue={searchInput}
                // onKeyDown={handleKeyDown}
                onChange={handleSearchInput}
              />
            </label>
            <button type="submit" onClick={handleSearch}>
              <MainheaderImage.Search />
            </button>
          </form>
        </div>
        {searchInput ? (
          <div className={styles.searchData}>
            <div className={styles.searchPoster}>
              {data &&
                data.items.slice(0, 3).map((item) => (
                  <a key={item.id} href="/">
                    <img src={getImageURL(item, "poster")} alt="" />
                    <span>{item.title}</span>
                  </a>
                ))}
              {movieData &&
                movieData.items.slice(0, 3).map((item) => (
                  <a key={item.id} href="/">
                    <img src={getImageURL(item, "poster")} alt="" />
                    <span>{item.title}</span>
                  </a>
                ))}
            </div>
            <div>
              <ul className={styles.searchList}>
                {data &&
                  data.items.length > 7 &&
                  data.items.slice(7, 9).map((item) => (
                    <li key={item.id}>
                      <a href="/">
                        <span>{item.title}</span>
                      </a>
                    </li>
                  ))}
                {movieData &&
                  movieData.items.length > 7 &&
                  movieData.items.slice(7, 9).map((item) => (
                    <li key={item.id}>
                      <a href="/">
                        <span>{item.title}</span>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className={styles.searchContents}>
            <div>
              <h3>
                최근 검색어
                <button
                  className={styles.delete}
                  type="button"
                  onClick={remove}
                >
                  모두 지우기
                </button>
              </h3>
              <ul>
                {recentSearches && recentSearches.length > 0 ? (
                  recentSearches.map((searchItem, index) => (
                    <li key={`${searchItem}${index + 1}`}>
                      <Link to={`/search/${searchItem}`}>{searchItem}</Link>
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
        )}
      </div>
    </ReactModal>
  );
}

Search.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};
export default Search;
