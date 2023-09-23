import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import sub from "../styles/subpage.module.css";
import SubPage from '@/pages/SubPage';
import poster from '../assets/Subpage/subpage_poster.png';

function Recommendation({record}){
    return(
        <div>
        <section className={sub.recommendation}>
                <header className={sub.recommendationVideoHeader}>
                <h2 className={sub.title}>
                    {/* {collection === 'movie' ? '비슷한 영화' : '비슷한 TV프로그램'} */}
                    비슷한 프로그램
                </h2>
                        <div className="custom-pagination"></div> 
                </header>
                    <div className={sub.recommendationAll}>
                        <Swiper
                                modules={[ Navigation, Pagination]}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,},
                                    929:{
                                        slidesPerView: 3,
                                    },
                                    1024: {
                                        slidesPerView: 3.3,},
                                    1300:{
                                        slidesPerView: 3,},
                                    1500:{
                                        slidesPerView: 4,},
                                    1920:{
                                        slidesPerView : 6.7 ,}
                                }}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev'}}
                                pagination={{ 
                                    el: '.custom-pagination',
                                    clickable: true, }}
                        >
                            <SwiperSlide>
                                <section className={sub.recommendationWrap}>
                                    <div className={sub.swiperWrapp}>
                                        <div className={sub.swiperItemWrap}>
                                            <figure className={sub.swiperItem}>
                                                <img className={sub.recommendationThumbnail} src={poster} alt='소용없어 거짓말-소용있는 미리보기'/>
                                                <figcaption className={sub.recommendationDescription}> 소용없어 거짓말-소용있는 미리보기</figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                </section>
                            </SwiperSlide>
                            <SwiperSlide>
                            <section className={sub.recommendationWrap}>
                                <div className={sub.swiperWrapp}>
                                    <div className={sub.swiperItemWrap}>
                                        <figure className={sub.swiperItem}>
                                            <img className={sub.recommendationThumbnail} src={poster} alt='소용없어 거짓말-소용있는 미리보기'/>
                                            <figcaption className={sub.recommendationDescription}> 소용없어 거짓말</figcaption>
                                        </figure>
                                    </div>
                                </div>     
                            </section>
                            </SwiperSlide>
                            <SwiperSlide>
                            <section className={sub.recommendationWrap}>
                                <div className={sub.swiperWrapp}>
                                    <div className={sub.swiperItemWrap}>
                                        <figure className={sub.swiperItem}>
                                            <img className={sub.recommendationThumbnail} src={poster} alt='소용없어 거짓말-소용있는 미리보기'/>
                                            <figcaption className={sub.recommendationDescription}> 소용없어 거짓말-소용있는 미리보기</figcaption>
                                        </figure>
                                    </div>
                                </div>     
                            </section>
                            </SwiperSlide>
                            <SwiperSlide>
                            <section className={sub.recommendationWrap}>
                                <div className={sub.swiperWrapp}>
                                    <div className={sub.swiperItemWrap}>
                                        <figure className={sub.swiperItem}>
                                            <img className={sub.recommendationThumbnail} src={poster} alt='소용없어 거짓말-소용있는 미리보기'/>
                                            <figcaption className={sub.recommendationDescription}> 소용없어 거짓말-소용있는 미리보기</figcaption>
                                        </figure>
                                    </div>
                                </div>     
                            </section>
                            </SwiperSlide>
                            <SwiperSlide>
                            <section className={sub.recommendationWrap}>
                                <div className={sub.swiperWrapp}>
                                    <div className={sub.swiperItemWrap}>
                                        <figure className={sub.swiperItem}>
                                            <img className={sub.recommendationThumbnail} src={poster} alt='소용없어 거짓말-소용있는 미리보기'/>
                                            <figcaption className={sub.recommendationDescription}> 소용없어 거짓말-소용있는 미리보기</figcaption>
                                        </figure>
                                    </div>
                                </div>     
                            </section>
                            </SwiperSlide>
                            <SwiperSlide>
                            <section className={sub.recommendationWrap}>
                                <div className={sub.swiperWrapp}>
                                    <div className={sub.swiperItemWrap}>
                                        <figure className={sub.swiperItem}>
                                            <img className={sub.recommendationThumbnail} src={poster} alt='소용없어 거짓말-소용있는 미리보기'/>
                                            <figcaption className={sub.recommendationDescription}> 소용없어 거짓말-소용있는 미리보기</figcaption>
                                        </figure>
                                    </div>
                                </div>     
                            </section>
                            </SwiperSlide>
                            <SwiperSlide>
                            <section className={sub.recommendationWrap}>
                                <div className={sub.swiperWrapp}>
                                    <div className={sub.swiperItemWrap}>
                                        <figure className={sub.swiperItem}>
                                            <img className={sub.recommendationThumbnail} src={poster} alt='소용없어 거짓말-소용있는 미리보기'/>
                                            <figcaption className={sub.recommendationDescription}> 소용없어 거짓말-소용있는 미리보기</figcaption>
                                        </figure>
                                    </div>
                                </div>     
                            </section>
                            </SwiperSlide>
                            <SwiperSlide>
                            <section className={sub.recommendationWrap}>
                                <div className={sub.swiperWrapp}>
                                    <div className={sub.swiperItemWrap}>
                                        <figure className={sub.swiperItem}>
                                            <img className={sub.recommendationThumbnail} src={poster} alt='소용없어 거짓말-소용있는 미리보기'/>
                                            <figcaption className={sub.recommendationDescription}> 소용없어 거짓말-소용있는 미리보기</figcaption>
                                        </figure>
                                    </div>
                                </div>     
                            </section>
                            </SwiperSlide>
                            <div className="swiper-button-next" style={{ position: "absolute",width: "3.888rem", top: "50%", right: "10px", color:"white", padding:"5px",zIndex: 9999}}/>
                            <div className="swiper-button-prev" style={{ position: "absolute",width: "3.888rem", top: "50%", left: "10px",  color:"white", padding:"5px", zIndex: 9999}}/>
                            {/* <div className='.swiper-pagination'/> */}
                        </Swiper>
                    </div>
                </section>
            </div>
    )
}

export default Recommendation;