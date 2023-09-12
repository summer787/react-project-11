import React, { useEffect, useRef, useState } from "react";
import getImageURL from "@/utils/getImageURL";
import pb from "@/api/pocketbase";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PlayIcon, PauseIcon } from "@/assets/MainCarousel/Icons";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import styles from "./MainCarousel.module.css";

function MainCarousel() {
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [bannerData, setBannerData] = useState(null);

  async function fetchBannerData() {
    const data = await pb.collection("banners").getList(1, 50);
    setBannerData(data);
  }
  useEffect(() => {
    fetchBannerData();
  }, []);

  const handleAutoplay = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isPlaying) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const slide = (direction) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (direction === "next") {
        swiperRef.current.swiper.slideNext();
      } else {
        swiperRef.current.swiper.slidePrev();
      }
    }
  };

  const handleAction = (direction) => (e) => {
    if (e.key === "Enter" || e.type === "mousedown") slide(direction);
  };

  useEffect(() => {
    const keydownHandler = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        event.target.click();
      }
    };

    const applyKeydownHandler = (selector) => {
      const elements = [...document.querySelectorAll(selector)];

      elements.forEach((e) => {
        e.tabIndex = 0;
        e.role = "button";
        e.addEventListener("keydown", keydownHandler);
      });

      return () => {
        elements.forEach((element) =>
          element.removeEventListener("keydown", keydownHandler)
        );
      };
    };

    if (swiperRef.current) {
      applyKeydownHandler(".swiper-pagination-bullet");
      applyKeydownHandler(".swiper-button-prev, .swiper-button-next");
    }
  }, [bannerData]);

  return (
    <section className={styles.mySwiper}>
      <h2 className="a11yHidden">메인페이지 이미지 슬라이드</h2>
      <Swiper
        id="MainCarouselSwiper"
        effect="fade"
        loop
        spaceBetween={0}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ el: "#MaincarouselPagination", clickable: true }}
        navigation={{
          nextEl: "#MainCarouselNext",
          prevEl: "#MainCarouselPrev",
          keyboard: {
            enabled: true,
            onlyInViewport: false,
          },
        }}
        ref={swiperRef}
      >
        {bannerData &&
          bannerData.items.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                className={styles.bannerImage}
                src={getImageURL(item, "bannerImage")}
                alt={item.title}
              />
              <p className={styles.bannerInformation} key={item.id}>
                {item.information}
              </p>
            </SwiperSlide>
          ))}
      </Swiper>
      <div
        id="MainCarouselPrev"
        className="swiper-button-prev"
        tabIndex="0"
        role="button"
        aria-label="Previous slide"
        onMouseDown={handleAction("prev")}
        onKeyDown={handleAction("prev")}
      />
      <div
        id="MainCarouselNext"
        className="swiper-button-next"
        tabIndex="0"
        role="button"
        aria-label="Next slide"
        onMouseDown={handleAction("next")}
        onKeyDown={handleAction("next")}
      />
      <div className={styles.playWrapper}>
        <button id="carouselControll" type="button" onClick={handleAutoplay}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        <div id="MaincarouselPagination" className="swiper-pagination" />
      </div>
      <a className={styles.moreLink} href="/">
        자세히 보기
      </a>
    </section>
  );
}

export default MainCarousel;
