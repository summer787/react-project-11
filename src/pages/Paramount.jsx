import React from "react";
import MainHeader from "@/layout/MainHeader/MainHeader";
import { Helmet } from "react-helmet";

function Paramount() {
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
        <title>파라마운트 | TAING</title>
      </Helmet>
      <MainHeader />
      Paramount
    </div>
  );
}

export default Paramount;
