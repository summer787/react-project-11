import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import MainHeader from "@/layout/MainHeader/MainHeader";
import Footer from "@/layout/Footer/Footer";
import pb from "@/api/pocketbase";
import { Link } from "react-router-dom";

import styles from "./Tv.module.css";

function Movie() {
  const [data, setData] = useState();

  console.log(data);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await pb.collection("users").getList(1, 50);
        setData(response);
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
      <h3>찜목록</h3>
      <Footer />
    </div>
  );
}

export default Movie;
