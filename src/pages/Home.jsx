// /src/pages/Home.jsx
import { Helmet } from "react-helmet";
import MainHeader from "@/layout/MainHeader/MainHeader";
import MainCarousel from "@/components/MainCarousel/MainCarousel";
import Program from "@/components/Program/Program";
import AddBanner from "@/components/AddBanner/AddBanner";
import Footer from "@/layout/Footer/Footer";
import homeExtraStyle from '../components/Program/ExtraProgram.module.css';

function Home() {
  return (
    <div>
      <Helmet>
        <title>홈 | TVING</title>s
      </Helmet>

      <MainHeader />
      <MainCarousel extraStyles={homeExtraStyle}/>
      <section>
        <Program tagTitle="티빙 TOP 20 프로그램" ranking extraStyles={homeExtraStyle}/>
        <Program tagTitle="티빙 TOP 20 영화" ranking isMovie extraStyles={homeExtraStyle}/>
        <AddBanner imageNum={2} />
        <Program
          tagTitle="지금 방영중인 인기 예능"
          nowBroad
          filter={"tag.tag='예능'"}
          extraStyles={homeExtraStyle}
        />
        <Program tagTitle="코미디 영화" isMovie filter={"tag.tag='코미디'"} extraStyles={homeExtraStyle}/>
        <Program
          tagTitle="지금 방영중인 인기 드라마"
          nowBroad
          filter={"tag.tag='드라마'"}
          extraStyles={homeExtraStyle}
        />
        <AddBanner imageNum={1} />
        <Program
          tagTitle="파라마운트+ TOP 20 프로그램"
          ranking
          filter={"broadcasting='Paramount+'"}
          extraStyles={homeExtraStyle}
        />
        <Program tagTitle="음악 예능" filter={"tag.tag='음악'"} extraStyles={homeExtraStyle}/>
        <Program
          tagTitle="티빙 오리지널"
          isTving
          filter={"broadcasting='TVING'"}
          extraStyles={homeExtraStyle}
        />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
