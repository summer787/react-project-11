import "swiper/css";
import "swiper/css/navigation";
import pb from "@/api/pocketbase";
import Recommendation from "@/components/Recommendation";
import RelatedVideo from "@/components/RelatedVideo";
import VideoPlayer from "@/components/VideoPlayer";
import { useEffect, useState } from "react";
import SubPageTitle from "../components/SubPageTitle";
import sub from "../styles/subpage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import MovieSubPageTitle from "@/components/MovieSubPageTitle";
import MainHeader from "@/layout/MainHeader/MainHeader";
import Footer from "@/layout/Footer/Footer";

function SubPage() {
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
        <main>
            <div className={sub.contentWrap}>
                    <SubPageTitle record={record}/>
                    <VideoPlayer record={record}/>
                    <RelatedVideo/>
                    <Recommendation />
            </div>   
        </main>
    );
}

export default SubPage;
