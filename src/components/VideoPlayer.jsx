import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import thumbnail from '../assets/Subpage/season_thumbnail_1.png';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import getImageURLThumbnail from '@/utils/getImgURLThumbmail';
import pb from '@/api/pocketbase';
import sub from "../styles/subpage.module.css";

function VideoPlayer(){
    const {id} = useParams()
    const [data, setData] = useState()
    const [selectedEpisode, setSelectedEpisode] = useState(0);
    const [episodeIndices, setEpisodeIndices] = useState([]);
    const [selectedButton, setSelectedButton] = useState("first"); // 추가: 선택된 버튼
    const [descriptionArray, setDescriptionArray] =useState();
    const [releaseArray, setReleaseArray] =useState();

    useEffect(()=>{
        async function getTv(){
            try {
                const record = await pb.collection('tv').getOne(id, {expand: 'tag'}, {expand: 'seasonDescription'});
                setData(record);
                console.log()
                
                // Check if the record exists and has the necessary properties
                if (record && record.seasonDescription && record.seasonRelease) {
                    setDescriptionArray(record.seasonDescription['시즌1']);
                    setReleaseArray(record.seasonRelease['시즌1']);
                    
                    let indices = Array.from({length: record.thumbnailSeason1.length}, (_, i) => i);
    
                    if(selectedButton === 'new'){
                        indices = [...indices].reverse();
                    }
                    
                    setEpisodeIndices(indices);
                }
            } catch (error) {
                throw new Error(error)
            }
        }
        getTv()
    },[id, selectedButton]) 


if(data) {
    const  {title} =data;
    return(
        <section className={sub.videoPlayer}>
            <article className={sub.videoPlayerHeader}>
                {/* <Select 
                    className="select__control css-1s2u09g-control"
                    classNamePrefix="select"
                    options={options}
                    isSearchable={false}
                    placeholder="소용없어 거짓말(총 12화)"
                /> */}
                <div className={sub.videoPlayerTitle}>
                    <h2 className={sub.title}>
                        {title}
                    </h2>
                    <h3 className={sub.number}>
                        (총 12화)
                    </h3>
                    <svg fill='#fff' width="40" height="40" viewBox="0 0 32 32"/>
                </div>
                <div className={sub.orderChoices}>
                    <div className={sub.clickOn}>
                        <button type="button" className={selectedButton === "first" ? sub.clickFirst : sub.clickOn}
                        onClick={() => {
                            setEpisodeIndices([...episodeIndices].sort((a,b) => a - b));
                            setSelectedButton("first");
                        }}
                        >첫화부터</button>
                        <button type="button" className={`${selectedButton === "new" ? sub.clickNewBtn:  sub.clickOn} ${sub.clickNew} ${sub.buttonWithEffects}`}
                        onClick={() => {
                            setEpisodeIndices([...episodeIndices].sort((a,b) => b - a));
                            setSelectedButton("new");
                        }}>최신화부터</button>
                    </div>
                    <label className={sub.switch} htmlFor="s1">
                        <span className={sub.sliderRound}> 연속재생</span>
                        <input type="checkbox" id="s1"/>
                    </label>
                </div>
            </article>
            <article className={sub.videoPlayerInformation}>
            <Swiper
                modules={[ Navigation, Scrollbar]}
                breakpoints={{
                    
                    768: {
                        slidesPerView: 2,},
                    929:{
                        slidesPerView: 2.2,},
                    1024: {
                        slidesPerView: 2.5,},
                    1300:{
                        slidesPerView: 3,},
                    1500:{
                        slidesPerView: 3.8,
                    },
                    1920:{
                        slidesPerView : 4.8 ,}
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'}}
                scrollbar={{ 
                    el: '.swiper-scrollbar',
                    draggable: true ,
                    dragSize: 500 
                }}
                >    
                {data &&
                data.thumbnailSeason1 &&
                episodeIndices.map((index) => (
                <SwiperSlide key={index}>
                    <div className={selectedEpisode === index ? sub.seasonThumbnailWrap1 : sub.seasonThumbnailWrap }
                    onClick={()=>setSelectedEpisode(index)} 
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            setSelectedEpisode(index);
                        }
                    }}
                    tabIndex={0} 
                    >
                        <img
                            className={sub.seasonThumbnail}
                            src={getImageURLThumbnail(data,  index, "thumbnailSeason1")}
                            alt="thumbnail"
                        /> 
                    <button
                        type="button"
                        className={selectedEpisode === index ? sub.thumbnailPlayButton : null}
                        aria-label="Play" 
                    >
                        {selectedEpisode === index && (
                            <svg
                            className={sub.svgIcon}
                            data-name="Layer 1"
                            id="Layer_1"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="#ffffff"
                                d="M50,5A45,45,0,1,0,95,50,45.00058,45.00058,0,0,0,50,5Zm0,88A43.00024,43.00024,0,1,1,80.40552,80.40552,42.86137,42.86137,0,0,1,50,93Z"
                            />
                            <path
                                fill="#ffffff"
                                d="M69.78345,47.76355,40.96753,29.40466a2.54663,2.54663,0,0,0-1.37195-.4046,2.5884,2.5884,0,0,0-1.81012.74756A2.64065,2.64065,0,0,0,37,31.64111V68.35889a2.64062,2.64062,0,0,0,.78546,1.89343,2.588,2.588,0,0,0,1.81012.74756,2.54663,2.54663,0,0,0,1.37195-.4046L69.78345,52.23645a2.66383,2.66383,0,0,0,0-4.4729Zm-1.07477,2.78619L39.89282,68.90857a.54048.54048,0,0,1-.29724.09131.591.591,0,0,1-.40777-.17353A.634.634,0,0,1,39,68.35889V31.64111a.63378.63378,0,0,1,.18781-.46746.59111.59111,0,0,1,.40777-.17359.54161.54161,0,0,1,.29724.09131L68.70874,49.45032a.66419.66419,0,0,1-.00006,1.09942Z"
                            />

                        </svg>
                        )}
                    </button>
                        
                        <div className={sub.itemInformation}>
                            <h2 className={sub.itemTitle}>{`${[index+1]}. ${title} ${index + 1}화`}</h2> 
                            {data && descriptionArray && (
                                <p className={sub.itemDescription}>
                                {descriptionArray[index]}
                                </p>
                            )}
                            {data&& releaseArray &&(
                                <p className={sub.itemSubInformation}>{releaseArray[index]}</p>
                            )}
                        </div>
                    </div>
                </SwiperSlide>
                )
                )
                
                }
                    
                    </Swiper>
                    <div className="swiper-button-next" style={{ position: "absolute",width: "3.888rem", top: "50%", right: "10px", color:"white", padding:"5px",zIndex: 9999}}/>
                    <div className="swiper-button-prev" style={{ position: "absolute",width: "3.888rem", top: "50%", left: "10px",  color:"white", padding:"5px", zIndex: 9999}}/>
                    <div className="swiper-scrollbar" style={{ position: "absolute",  right: "0", top: "300px", bottom: "0", backgroundColor: '#404040'}}/>
            </article>
    </section>  
    )}
    
}

export default VideoPlayer;
