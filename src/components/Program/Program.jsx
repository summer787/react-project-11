import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { PropTypes } from "prop-types";
import { Pagination, Navigation, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TvingOriginal from "@/assets/TvingOriginal/TvingOriginal";
import Rankings from "@/assets/Ranking/Rankings";
import { useQuery } from "@tanstack/react-query";
import getImageURL from "@/utils/getImageURL";
import pb from "@/api/pocketbase";
import Spinner from "@/components/Spinner";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./Program.module.css";

function Program({ tagTitle, filter, ranking, isTving, isMovie, nowBroad, extraStyles, subpageExtraStyle}) {
  const [data, setData] = useState(null);
  const swiperRef = useRef(null);

  const handleFocus = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const {
    isLoading,
    error,
    data: items,
  } = useQuery(["items", filter, ranking, isMovie, nowBroad], async () => {
    const response = !isMovie
      ? await pb.collection("tv").getList(1, ranking ? 20 : 30, {
          expand: "tag",
          sort: `${nowBroad ? "-release" : "-likes"}`,
          filter: `${filter || ""}`,
        })
      : await pb.collection("movie").getList(1, ranking ? 20 : 30, {
          expand: "tag",
          sort: "-likes",
          filter: `${filter || ""}`,
        });
    return response.items;
  });

  //강제 새로 고침..
  const location = useLocation();

useEffect(() => {
  let previousURL = location.pathname;

  return () => {
    if (previousURL !== location.pathname) {
      // 여기에 필요한 스타일 업데이트 로직 추가
      const element = document.querySelector('.styles.tagItemPoster');
      if (element) {
        element.className = 'styles.tagItemPoster'; // Reset the class to the original value
      }
    }

    previousURL = location.pathname;
  };
}, [location]);


  useEffect(() => {
    setData(items);
  }, [items]);

  if (isLoading)
    return <Spinner isOpen={true} message="이미지를 로딩 중입니다." />;

  if (error) return "An error has occurred: " + error.message;

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
          data.map((item, index) => (
            <SwiperSlide key={item.id}>
              <Link
                className={styles.programLink}
                to={`/${isMovie ? "movie" : "tv"}/${item.id}`}
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
                      className={`${styles.tagItemPoster} ${extraStyles ? extraStyles.tagItemPoster : subpageExtraStyle ? subpageExtraStyle.tagItemPoster : ""}`}
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
