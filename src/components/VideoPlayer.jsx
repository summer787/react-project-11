import { Navigation, Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import getImageURLThumbnail from "@/utils/getImgURLThumbmail";
import pb from "@/api/pocketbase";
import arrowIcon from "../assets/Subpage/arrow_icon.svg";
import playButton from "../assets/Subpage/play_button.svg";
import sub from "../styles/subpage.module.css";

function VideoPlayer({ record }) {
  const { id } = useParams();
  const [data, setData] = useState();
  const [selectedEpisode, setSelectedEpisode] = useState(0);
  const [episodeIndices, setEpisodeIndices] = useState([]);
  const [selectedButton, setSelectedButton] = useState("first");
  const [descriptionArray, setDescriptionArray] = useState();
  const [releaseArray, setReleaseArray] = useState();
  const [showModal, setShowModal] = useState(false);
  const [seasonsData, setSeasonsData] = useState([]);
  const [selectedSeasonKey, setSelectedSeasonKey] = useState("");

  useEffect(() => {
    setData(record);

    if (record) {
      const seasonKeys = Object.keys(record).filter((key) =>
        key.startsWith("thumbnailSeason")
      );
      const validSeasonKeys = seasonKeys.filter(
        (seasonKey) =>
          Array.isArray(record[seasonKey]) && record[seasonKey].length > 0
      );
      setSeasonsData(validSeasonKeys);

      if (validSeasonKeys.length > 0) {
        setSelectedSeasonKey(validSeasonKeys[0]);
        setDescriptionArray(
          record.seasonDescription[`시즌${validSeasonKeys[0].slice(-1)}`]
        );
        setReleaseArray(
          record.seasonRelease[`시즌${validSeasonKeys[0].slice(-1)}`]
        );

        let indices = Array.from(
          { length: record[validSeasonKeys[0]].length },
          (_, i) => i
        );

        if (selectedButton === "new") {
          indices = [...indices].reverse();
        }

        setEpisodeIndices(indices);
      }
    }
  }, [selectedButton, record]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (showModal && !event.target.closest(".modal")) {
        setShowModal(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => window.removeEventListener("click", handleOutsideClick);
  }, [showModal]);

  const handleSeasonSelect = (seasonKey) => {
    setSelectedEpisode(0);
    setSelectedButton("first");
    setSelectedSeasonKey(seasonKey);

    setDescriptionArray(data.seasonDescription[`시즌${seasonKey.slice(-1)}`]);
    setReleaseArray(data.seasonRelease[`시즌${seasonKey.slice(-1)}`]);

    let indices = Array.from({ length: data[seasonKey].length }, (_, i) => i);

    if (selectedButton === "new") {
      indices = [...indices].reverse();
    }

    setEpisodeIndices(indices);

    setShowModal(false);
  };

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  if (data) {
    const { title, thumbnailSeason1 } = data;
    return (
      <section className={sub.videoPlayer}>
        <article className={sub.videoPlayerHeader}>
          <div
            className={sub.videoPlayerTitle}
            onClick={(e) => {
              e.stopPropagation();
              handleModalToggle();
            }}
          >
            <h2 className={sub.title}>
              {`${title}${
                selectedSeasonKey.slice(-1) !== "1"
                  ? ` ${selectedSeasonKey.slice(-1)}`
                  : ""
              }`}
            </h2>
            <h3 className={sub.number}>
              {`(총 ${thumbnailSeason1.length}화)`}
            </h3>
            <img
              className={`${sub.arrowIcon} ${showModal ? sub.rotated : ""}`}
              src={arrowIcon}
              alt="아래 방향 화살표"
            />
          </div>
          <div className={sub.orderChoices}>
            <div className={sub.clickOn}>
              <button
                type="button"
                className={
                  selectedButton === "first" ? sub.clickFirst : sub.clickOn
                }
                onClick={() => {
                  setEpisodeIndices([...episodeIndices].sort((a, b) => a - b));
                  setSelectedButton("first");
                }}
              >
                첫화부터
              </button>
              <button
                type="button"
                className={`${
                  selectedButton === "new" ? sub.clickNewBtn : sub.clickOn
                } ${sub.clickNew} ${sub.buttonWithEffects}`}
                onClick={() => {
                  setEpisodeIndices([...episodeIndices].sort((a, b) => b - a));
                  setSelectedButton("new");
                }}
              >
                최신화부터
              </button>
            </div>
            <label className={sub.switch} htmlFor="s1">
              <span className={sub.sliderRound}> 연속재생</span>
              <input type="checkbox" id="s1" />
            </label>
          </div>
        </article>
        <article className={sub.videoPlayerInformation}>
          {showModal && (
            <div className={sub.modal} onClick={(e) => e.stopPropagation()}>
              {seasonsData.map((seasonKey, index) => (
                <div key={index} onClick={() => handleSeasonSelect(seasonKey)}>
                  {`${data.title} 시즌 ${index + 1}`}
                  {selectedSeasonKey === seasonKey && <span>✔</span>}
                </div>
              ))}
            </div>
          )}
          <Swiper
            modules={[Navigation, Scrollbar, Mousewheel]}
            mousewheel={{ forceToAxis: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              929: {
                slidesPerView: 2.2,
              },
              1024: {
                slidesPerView: 2.5,
              },
              1300: {
                slidesPerView: 3,
              }
              1500: {
                slidesPerView: 3.8,
              },
              1920: {
                slidesPerView: 5.2,
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            scrollbar={{
              el: ".swiper-scrollbar",
              draggable: true,
              dragSize: 500,
            }}
          >
            {data &&
              data[selectedSeasonKey] &&
              episodeIndices.map((index) => (
                <SwiperSlide key={index}>
                  <div
                    className={
                      selectedEpisode === index
                        ? sub.seasonThumbnailWrap1
                        : sub.seasonThumbnailWrap
                    }
                    onClick={() => setSelectedEpisode(index)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setSelectedEpisode(index);
                      }
                    }}
                    tabIndex={0}
                  >
                    <img
                      className={`${sub.seasonThumbnail} ${
                        selectedEpisode === index
                          ? sub.seasonThumbnail1
                          : sub.seasonThumbnailWrap
                      }`}
                      src={getImageURLThumbnail(data, index, selectedSeasonKey)}
                      alt="thumbnail"
                    />
                    <button
                      type="button"
                      className={
                        selectedEpisode === index
                          ? sub.thumbnailPlayButton
                          : null
                      }
                      aria-label="Play"
                    >
                      {selectedEpisode === index && (
                        <img
                          src={playButton}
                          alt="playButton "
                          className={sub.svgIcon}
                        />
                      )}
                    </button>

                    <div className={sub.itemInformation}>
                      <h2 className={sub.itemTitle}>{`${[index + 1]}. ${title}${
                        selectedSeasonKey.slice(-1) !== "1"
                          ? ` ${selectedSeasonKey.slice(-1)}`
                          : ""
                      } ${index + 1}화`}</h2>

                      {data && descriptionArray && (
                        <p className={sub.itemDescription}>
                          {descriptionArray[index]}
                        </p>
                      )}
                      {data && releaseArray && (
                        <p className={sub.itemSubInformation}>
                          {releaseArray[index]}
                        </p>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          <div
            className="swiper-button-next"
            style={{
              position: "absolute",
              width: "3.888rem",
              top: "50%",
              right: "10px",
              color: "white",
              padding: "5px",
              zIndex: 9999,
            }}
          />
          <div
            className="swiper-button-prev"
            style={{
              position: "absolute",
              width: "3.888rem",
              top: "50%",
              left: "10px",
              color: "white",
              padding: "5px",
              zIndex: 9999,
            }}
          />
          <div
            className="swiper-scrollbar"
            style={{
              position: "absolute",
              right: "0",
              top: "300px",
              bottom: "0",
              backgroundColor: "#404040",
            }}
          />
        </article>
      </section>
    );
  }
}

export default VideoPlayer;
