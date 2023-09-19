// eslint-disable-next-line import/no-unresolved
// import Swiper from 'swiper';


// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
import 'swiper/css/navigation';
import Recommendation from '@/components/Recommendation';
import RelatedVideo from '@/components/RelatedVideo';
import VideoPlayer from '@/components/VideoPlayer';
import "../components/SubPageTitle";
import SubPageTitle from '../components/SubPageTitle';
import sub from "../styles/subpage.module.css";



function SubPage() {

    return (
        <div className={sub.contentWrap}>

            <SubPageTitle/>
            <VideoPlayer/>
            <RelatedVideo/>
            <Recommendation/>

        </div>   
    );
}

export default SubPage;
