import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import MainHeader from "@/layout/MainHeader/MainHeader";
import Footer from "@/layout/Footer/Footer";
import pb from "@/api/pocketbase";
import { Link } from "react-router-dom";
import { getData } from "@/hooks/useStorage";

import styles from "./Like.module.css";
import getImageURL from "@/utils/getImageURL";

function Movie() {
  const [likeMovie, setLikeMovie] = useState([]);
  const [likeTv, setLikeTv] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await pb.collection("users").getList(1, 50, {
          filter: `id='${getData("pocketbase_auth").model.id}'`,
          expand: "likemovie,liketv",
        });
        setLikeMovie(response.items[0].expand.likemovie);
        setLikeTv(response.items[0].expand.liketv);
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div
      style={{
        color: "white",
        marginTop: "10rem",
      }}
    >
      <Helmet>
        <title>찜목록 | TAING</title>
      </Helmet>
      <MainHeader />
      <section className={styles.likeWrapper}>
        <h3>찜목록</h3>
        <div>
          <h4>TV</h4>
          <div className={styles.like}>
            {likeTv &&
              likeTv.map((item) => (
                <div className={styles.likeItem} key={item.id}>
                  <Link to={`/tv/${item.id}`} className={styles.link}>
                    <div className={styles.likeItemInfo}>
                      <img src={getImageURL(item, "poster")} alt={item.name} />
                      <h5>{item.name}</h5>
                      <p>{item.overview}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
        <div>
          <h4>영화</h4>
          <div className={styles.like}>
            {likeMovie &&
              likeMovie.map((item) => (
                <div className={styles.likeItem} key={item.id}>
                  <Link to={`/movie/${item.id}`} className={styles.link}>
                    <div className={styles.likeItemInfo}>
                      <img src={getImageURL(item, "poster")} alt={item.name} />
                      <h5>{item.name}</h5>
                      <p>{item.overview}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Movie;
