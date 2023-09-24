import "swiper/css/navigation";
import SubPageTitle from "../components/SubPageTitle";
import Recommendation from "../components/Recommendation";
import sub from "../styles/subpage.module.css";
import MovieSubPageTitle from "@/components/MovieSubPageTitle";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import pb from "@/api/pocketbase";
import MainHeader from "@/layout/MainHeader/MainHeader";
import Footer from "@/layout/Footer/Footer";
import Program from "@/components/Program/Program";

function MovieSubPage() {
  const [record, setRecord] = useState(null);
  const [isTvCollection, setIsTvCollection] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function getTv() {
      let fetchedRecord;
      try {
        fetchedRecord = await pb
          .collection("tv")
          .getOne(id, { expand: "tag" }, { expand: "seasonDescription" });
      } catch (tvError) {
        console.log("'tv' collection not found. Trying 'movie' collection.");
        try {
          fetchedRecord = await pb
            .collection("movie")
            .getOne(id, { expand: "tag" }, { expand: "seasonDescription" });
          setIsTvCollection(false);
          navigate(`/movie/${id}`);
        } catch (movieError) {
          console.error("Error fetching data:", movieError);
          return;
        }
      }
      setRecord(fetchedRecord);
    }
    getTv();
  }, [id]);

  return (
    <div>
      <MainHeader />
      <MovieSubPageTitle record={record} />
      {/* <Recommendation record={record} /> */}
      {record && (
        <Program
          tagTitle="비슷한 프로그램"
          filter={`tag.tag='${record.expand.tag[0].tag}'`}
        />
      )}
      <Footer />
    </div>
  );
}

export default MovieSubPage;
