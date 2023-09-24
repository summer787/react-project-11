import { useState } from "react";
import sub from "../styles/subpage.module.css";
import thumbnail from "../assets/Subpage/season_thumbnail_1.png";
import { useEffect } from "react";
import getImageURLThumbnail from "@/utils/getImgURLThumbmail";

function RelatedVideo({ record }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (record) {
      setData(record);
    }
    console.log(data);
  }, [record]);

  return (
    <section className={sub.relatedVideo}>
      <header className={sub.relatedVideoHeader}>
        <h1 className={sub.title}>관련영상</h1>
      </header>
      <div className={sub.relatedContentItem}>
        <section className={sub.relatedVideoWrap}>
          <div className={sub.swiperWrap}>
            <div className={sub.swiperItemWrap}>
              <figure className={sub.swiperItem}>
                {data && (
                  <img
                    className={sub.itemThumbnail}
                    src={getImageURLThumbnail(data, 3, "thumbnailSeason1")}
                    alt={`[2차 티저] ${data.title}`}
                  />
                )}
                <figcaption className={sub.itemDescription}>
                  [2차 티저] {data?.title}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className={sub.relatedVideoWrap}>
          <div className={sub.swiperWrap}>
            <div className={sub.swiperItemWrap}>
              <figure className={sub.swiperItem}>
                {data && (
                  <img
                    className={sub.itemThumbnail}
                    src={getImageURLThumbnail(data, 0, "thumbnailSeason1")}
                    alt={`[2차 티저] ${data.title}`}
                  />
                )}
                <figcaption className={sub.itemDescription}>
                  [2차 티저] {data?.title}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default RelatedVideo;
