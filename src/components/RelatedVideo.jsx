import sub from "../styles/subpage.module.css";
import thumbnail from '../assets/Subpage/season_thumbnail_1.png';

function RelatedVideo(){
    return(
        <section className={sub.relatedVideo}>
                <header className={sub.relatedVideoHeader}>
                    <h2 className={sub.title}>관련영상</h2>
                </header>
                <div className={sub.relatedContentItem}>
                    <section className={sub.relatedVideoWrap}>
                        <div className={sub.swiperWrapp}>
                            <div className={sub.swiperItemWrap}>
                                <figure className={sub.swiperItem}>
                                    <img className={sub.itemThumbnail} src={thumbnail} alt='[2차 티저] 소용없어 거짓말'/>
                                    <figcaption className={sub.itemDescription}>[2차 티저] 소용없어 거짓말</figcaption>
                                </figure>
                            </div>
                        </div>   
                    </section>
                    <section className={sub.relatedVideoWrap}>
                        <div className={sub.swiperWrapp}>
                            <div className={sub.swiperItemWrap}>
                                <figure className={sub.swiperItem}>
                                    <img className={sub.itemThumbnail} src={thumbnail} alt='[2차 티저] 소용없어 거짓말'/>
                                    <figcaption className={sub.itemDescription}>[2차 티저] 소용없어 거짓말</figcaption>
                                </figure>
                            </div>
                        </div> 
                    </section>
                    <section className={sub.relatedVideoWrap}>
                        <div className={sub.swiperWrap}>
                            <div className={sub.swiperItemWrap}>
                                <figure className={sub.swiperItem}>
                                    <img className={sub.itemThumbnail} src={thumbnail} alt='[2차 티저] 소용없어 거짓말'/>
                                    <figcaption className={sub.itemDescription}>[2차 티저] 소용없어 거짓말</figcaption>                                        </figure>
                            </div>
                        </div>   
                    </section>
                </div>
            </section>
    )
}

export default RelatedVideo;