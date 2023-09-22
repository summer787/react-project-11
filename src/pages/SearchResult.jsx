import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Pagination, Navigation, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import pb from "@/api/pocketbase";
import MainHeader from "@/layout/MainHeader/MainHeader";
import getImageURL from "@/utils/getImageURL";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Footer from "@/layout/Footer/Footer";
import styles from "./SearchResult.module.css";

function SearchResult() {
  const { searchResult } = useParams();

  const [data, setData] = useState(null);
  const [movieData, setMovieData] = useState(null);

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
            filter: `title?~'${searchResult}' || actor?~'${searchResult}' || creator?~'${searchResult}'`,
          },
          { signal }
        );

        const responseMovie = await pb.collection("movie").getList(
          1,
          50,
          {
            expand: "tag",
            filter: `title?~'${searchResult}' || actor?~'${searchResult}' || creator?~'${searchResult}'`,
          },
          { signal }
        );

        if (isMounted) {
          setData(response);
          setMovieData(responseMovie);
        }
      } catch (error) {
        throw new Error(error);
      }
    }

    if (searchResult) fetchData();

    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, [searchResult]);

  return (
    <>
      <Helmet>
        <title>검색 | TVING</title>
      </Helmet>
      <MainHeader />
      <section className={styles.container}>
        <h2>검색어: {searchResult}</h2>
        <section>
          <h3>TV 프로그램</h3>
          <Swiper
            spaceBetween={10}
            slidesPerView={6}
            slidesPerGroup={6}
            mousewheel={{ forceToAxis: true }}
            modules={[Pagination, Navigation, Mousewheel]}
            pagination={{ clickable: true }}
            navigation
          >
            {data &&
              data.items.map((item) => (
                <SwiperSlide key={item.id}>
                  <Link to={`/tv/${item.id}`}>
                    <div className={styles.poster}>
                      <img src={getImageURL(item, "poster")} alt={item.title} />
                      <p className={styles.title}>{item.title}</p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </section>
        <section>
          <h3>영화</h3>
          <Swiper
            spaceBetween={10}
            slidesPerView={6}
            slidesPerGroup={6}
            mousewheel={{ forceToAxis: true }}
            modules={[Pagination, Navigation, Mousewheel]}
            pagination={{ clickable: true }}
            navigation
          >
            {movieData &&
              movieData.items.map((item) => (
                <SwiperSlide key={item.id}>
                  <Link to={`/movie/${item.id}`} className={styles.poster}>
                    <img src={getImageURL(item, "poster")} alt={item.title} />
                    <p className={styles.title}>{item.title}</p>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </section>
      </section>

      <Footer />
    </>
  );
}

export default SearchResult;
