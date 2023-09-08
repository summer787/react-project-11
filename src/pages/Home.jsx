// /src/pages/Home.jsx
import MainHeader from "@/layout/MainHeader/MainHeader";

function Home() {
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "98vh",
        fontSize: "3rem",
        marginBottom: "5000px",
      }}
    >
      <MainHeader />
      <div style={{ color: "white" }}>Home페이지입니다.</div>
    </div>
  );
}

export default Home;
