import { useEffect, useState, useRef } from "react";
import pb from "@/api/pocketbase";
import { PropTypes } from "prop-types";
import { Pagination, Navigation, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./TagList.module.css";

function TagList({ tag, setSelectedTag }) {
  const [data, setData] = useState();
  const swiperRef = useRef(null);

  const handleFocus = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const tagClickHandler = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setSelectedTag(e.target.innerText);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await pb.collection(`${tag}`).getList(1, 50);

        setData(response);
      } catch (error) {
        throw new Error(error);
      }
    }

    fetchData();
  }, [tag]);

  return (
    <section className={styles.tag}>
      <h2>장르</h2>
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        slidesPerView={8.3}
        // slidesPerGroup={1}
        mousewheel={{ forceToAxis: true }}
        modules={[Pagination, Navigation, Mousewheel]}
        breakpoints={{
          375: {
            slidesPerView: 4.3,
            slidesPerGroup: 4,
          },
          554: {
            slidesPerView: 5.3,
            slidesPerGroup: 5,
          },
          768: {
            slidesPerView: 6.3,
            slidesPerGroup: 6,
          },
          1024: {
            slidesPerView: 7.3,
            slidesPerGroup: 7,
          },
          1440: {
            slidesPerView: 8.3,
            slidesPerGroup: 8,
          },
        }}
      >
        {data &&
          data.items.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div
                tabIndex="0"
                id="tag"
                role="button"
                className={styles.tagBtb}
                onFocus={() => handleFocus(index)}
                onClick={tagClickHandler}
                onKeyDown={tagClickHandler}
              >
                {item.tag}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}

TagList.propTypes = {
  tag: PropTypes.string.isRequired,
  setSelectedTag: PropTypes.func.isRequired,
};

export default TagList;
