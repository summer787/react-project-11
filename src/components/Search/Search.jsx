import { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PropTypes } from "prop-types";
import ReactModal from "react-modal";
import useStorage from "@/hooks/useStorageSearch";
import MainheaderImage from "@/assets/MainHeader/MainHeader_image";
import pb from "@/api/pocketbase";
import getImageURL from "@/utils/getImageURL";
import { useQuery } from "@tanstack/react-query";

import SearchContext from "@/context/SearchContext";

import nowDate from "../../utils/getNowDate";
import styles from "./Search.module.css";

import Spinner from "../Spinner";

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
    event.preventDefault();
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

  const tvQuery = useQuery(["tvData", searchInput], async () => {
    const response = await pb.collection("tv").getList(1, 50, {
      expand: "tag",
      filter: `title?~'${searchInput}' || actor?~'${searchInput}' || creator?~'${searchInput}'`,
    });
    return response;
  });

  const movieQuery = useQuery(["movieData", searchInput], async () => {
    const response = await pb.collection("movie").getList(1, 50, {
      expand: "tag",
      filter: `title?~'${searchInput}' || actor?~'${searchInput}' || creator?~'${searchInput}'`,
    });
    return response;
  });

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
              {tvQuery.isLoading ||
              movieQuery.isLoading ? null : tvQuery.error ||
                movieQuery.error ? (
                <div>
                  Error: {tvQuery.error?.message || movieQuery.error?.message}
                </div>
              ) : (
                <>
                  {tvQuery.data?.items.slice(0, 3).map((item) => (
                    <Link key={item.id} to={`/tv/${item.id}`}>
                      <img src={getImageURL(item, "poster")} alt={item.title} />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                  {movieQuery.data?.items.slice(0, 3).map((item) => (
                    <Link key={item.id} to={`/movie/${item.id}`}>
                      <img src={getImageURL(item, "poster")} alt={item.title} />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </>
              )}
            </div>
            <div>
              <ul className={styles.searchList}>
                {tvQuery.isLoading || movieQuery.isLoading ? (
                  <div>Loading...</div>
                ) : tvQuery.error || movieQuery.error ? (
                  <div>
                    Error: {tvQuery.error?.message || movieQuery.error?.message}
                  </div>
                ) : (
                  <>
                    {tvQuery.data?.items.length > 7 &&
                      tvQuery.data?.items.slice(7, 9).map((item) => (
                        <li key={item.id}>
                          <Link to={`/tv/${item.id}`}>
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      ))}
                    {movieQuery.data?.items.length > 7 &&
                      movieQuery.data?.items.slice(7, 9).map((item) => (
                        <li key={item.id}>
                          <Link to={`/movie/${item.id}`}>
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      ))}
                  </>
                )}
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
                  <Link to="/tv/01p0cbd3klqayud">신병</Link>
                </li>
                <li>
                  <Link to="/tv/029xbvsrk5be1ng">스트릿 우먼 파이터 시즌2</Link>
                </li>
                <li>
                  <Link to="/tv/00iqeegqywou8m4">경이로운 소문</Link>
                </li>
                <li>
                  <Link to="/tv/u3h3tc1xw3bsq33">마녀사냥 2023</Link>
                </li>
                <li>
                  <Link to="/tv/5cjkrpudv37hkqi">나는 지금 화가 나있어</Link>
                </li>
                <li>
                  <Link to="/tv/9fwlipzvz11vwn1">알쓸인잡</Link>
                </li>
                <li>
                  <Link to="/tv/rn0iuqct243iwo7">신서유기5</Link>
                </li>
                <li>
                  <Link to="/tv/5as2h3oozdxmoix">오은영의 금쪽상담소</Link>
                </li>
                <li>
                  <Link to="/tv/1harhvi80da3wup">뿅뿅 지구오락실2</Link>
                </li>
                <li>
                  <Link to="/tv/hksainlo69jjanq">유 퀴즈 온 더 블럭</Link>
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
