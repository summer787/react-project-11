import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Pagination, Navigation, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TvingOriginal from "@/assets/TvingOriginal/TvingOriginal";
import Rankings from "@/assets/Ranking/Rankings";
import getImageURL from "@/utils/getImageURL";
import pb from "@/api/pocketbase";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./Program.module.css";

function Program({ tagTitle, filter, ranking, isTving, isMovie, nowBroad }) {
  const [data, setData] = useState(null);
  const swiperRef = useRef(null);

  const handleFocus = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  useEffect(() => {
    let isMounted = true;
    const abortController = new AbortController();
    const { signal } = abortController;

    async function fetchData(filterData) {
      try {
        const response = !isMovie
          ? await pb.collection("tv").getList(
              1,
              ranking ? 20 : 30,
              {
                expand: "tag",
                sort: `${nowBroad ? "-release" : "-likes"}`,
                filter: `${filterData || ""}`,
              },
              { signal }
            )
          : await pb.collection("movie").getList(
              1,
              ranking ? 20 : 30,
              {
                expand: "tag",
                sort: "-likes",
                filter: `${filterData || ""}`,
              },
              { signal }
            );

        if (isMounted) {
          setData(response);
        }
      } catch (error) {
        throw new Error(error);
      }
    }

    fetchData(filter);

    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, [filter, ranking, isMovie, nowBroad]);

  return (
    <section className={styles.tagContainer}>
      <h3 className={styles.title}>{tagTitle}</h3>
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        slidesPerView={3.3}
        slidesPerGroup={3}
        mousewheel={{ forceToAxis: true }}
        modules={[Pagination, Navigation, Mousewheel]}
        pagination={{ el: "#programPagination", clickable: true }}
        navigation
        style={{ padding: "0 3.5rem 3.5rem 3.5rem" }}
        breakpoints={{
          375: {
            slidesPerView: 1.5,
            slidesPerGroup: 2,
          },
          554: {
            slidesPerView: 3.5,
            slidesPerGroup: 3,
          },
          768: {
            slidesPerView: 3.5,
            slidesPerGroup: 3,
          },
          1024: {
            slidesPerView: 4.5,
            slidesPerGroup: 4,
          },
          1440: {
            slidesPerView: 5.5,
            slidesPerGroup: 5,
          },
        }}
      >
        {data &&
          data.items.map((item, index) => (
            <SwiperSlide key={item.id}>
              <Link
                className={styles.programLink}
                to={`/sub/${item.id}`}
                onFocus={() => handleFocus(index)}
              >
                <div className={styles.tagItem}>
                  <div className={styles.ranking}>
                    {ranking && Rankings[index]}
                  </div>
                  <div className={styles.tagImage}>
                    <img
                      src={getImageURL(item, "poster")}
                      alt={item.title}
                      className={styles.tagItemPoster}
                    />
                    {isTving && (
                      <div className={styles.tvingOriginal}>
                        <TvingOriginal />
                      </div>
                    )}
                    <div className={styles.tagItemTitle}>{item.title}</div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}

Program.propTypes = {
  tagTitle: PropTypes.string.isRequired,
  ranking: PropTypes.bool,
  filter: PropTypes.string,
  isTving: PropTypes.bool,
  isMovie: PropTypes.bool,
  nowBroad: PropTypes.bool,
};
Program.defaultProps = {
  ranking: false,
  filter: "",
  isTving: false,
  isMovie: false,
  nowBroad: false,
};

export default Program;
