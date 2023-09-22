import { useState, useEffect } from "react";
import MainHeader from "@/layout/MainHeader/MainHeader";
import TagList from "@/components/TagList/TagList";
import Program from "@/components/Program/Program";
import Footer from "@/layout/Footer/Footer";
import pb from "@/api/pocketbase";
import getImageURL from "@/utils/getImageURL";
import { Link } from "react-router-dom";

import styles from "./Tv.module.css";

function Tv() {
  const [selectedTag, setSelectedTag] = useState();
  const [data, setData] = useState();
  const [sort, setSort] = useState(true);

  const sortHandler = (bool) => () => {
    setSort(bool);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await pb.collection("tv").getList(1, 50, {
          filter: `tag.tag='${selectedTag}'`,
          sort: `${sort ? "release" : "likes"}`,
        });

        setData(response);
      } catch (error) {
        throw new Error(error);
      }
    }

    if (selectedTag) {
      fetchData();
    }
  }, [selectedTag, sort]);

  return (
    <div
      style={{
        color: "white",
        marginTop: "10rem",
      }}
    >
      <MainHeader />
      <TagList tag="tvtag" setSelectedTag={setSelectedTag} />
      {data ? (
        <section className={styles.tag}>
          <div className={styles.sortbox}>
            <h2>{selectedTag}</h2>
            <div className={styles.buttonGroup}>
              <button
                type="button"
                aria-label="인기순 정렬"
                onClick={sortHandler(true)}
                className={sort ? styles.active : ""}
              >
                인기순
              </button>
              <button
                type="button"
                aria-label="최신순 정렬"
                onClick={sortHandler(false)}
                className={sort ? "" : styles.active}
              >
                최신순
              </button>
            </div>
          </div>
          <div className={styles.contents}>
            {data.items.map((item) => (
              <Link to={`/sub/${item.id}`} key={item.id}>
                <div>
                  <img src={getImageURL(item)} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <section>
          <Program tagTitle="티빙 TOP 20 프로그램" ranking />
          <Program
            tagTitle="지금 방영중인 인기 예능"
            nowBroad
            filter={"tag.tag='예능'"}
          />
          <Program
            tagTitle="지금 방영중인 인기 드라마"
            nowBroad
            filter={"tag.tag='드라마'"}
          />
          <Program tagTitle="애니메이션" filter={"tag.tag='애니메이션'"} />
          <Program tagTitle="다큐멘터리" filter={"tag.tag='다큐멘터리'"} />
          <Program tagTitle="모험" filter={"tag.tag='모험'"} />
          <Program tagTitle="키즈" filter={"tag.tag='키즈'"} />
        </section>
      )}

      <Footer />
    </div>
  );
}

export default Tv;
