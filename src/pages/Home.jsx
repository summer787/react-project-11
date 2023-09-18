// /src/pages/Home.jsx
import MainHeader from "@/layout/MainHeader/MainHeader";
import MainCarousel from "@/components/MainCarousel/MainCarousel";
import Program from "@/components/Program/Program";
import AddBanner from "@/components/AddBanner/AddBanner";

function Home() {
  return (
    <div>
      <MainHeader />
      <MainCarousel />
      <section>
        <Program tagTitle="티빙 TOP 20 프로그램" ranking />
        <Program tagTitle="티빙 TOP 20 영화" ranking isMovie />
        <AddBanner imageNum={2} />
        <Program
          tagTitle="지금 방영중인 인기 예능"
          nowBroad
          filter={"tag.tag='예능'"}
        />
        <Program tagTitle="코미디 영화" isMovie filter={"tag.tag='코미디'"} />
        <Program
          tagTitle="지금 방영중인 인기 드라마"
          nowBroad
          filter={"tag.tag='드라마'"}
        />
        <AddBanner imageNum={1} />
        <Program
          tagTitle="파라마운트+ TOP 20 프로그램"
          ranking
          filter={"broadcasting='Paramount+'"}
        />
        <Program tagTitle="음악 예능" filter={"tag.tag='음악'"} />
        <Program
          tagTitle="티빙 오리지널"
          isTving
          filter={"broadcasting='TVING'"}
        />
      </section>
    </div>
  );
}

export default Home;
