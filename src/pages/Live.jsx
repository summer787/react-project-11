// /src/pages/Live.jsx
import { Helmet } from "react-helmet";
import React from "react";
import MainHeader from "@/layout/MainHeader/MainHeader";

function Live() {
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "98vh",
        fontSize: "3rem",
      }}
    >
      <Helmet>
        <title>라이브 | TVING</title>
      </Helmet>
      <MainHeader />
      Live
    </div>
  );
}

export default Live;
