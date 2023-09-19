// import sub from"../styles/subpage.module.css";
// import title from '../assets/Subpage/subpage_title_img_png'
import pb from "@/api/pocketbase";
import getImageURL from "@/utils/getImageURL";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import likeIcon from '../assets/Subpage/like_icon.svg';
import shareIcon from '../assets/Subpage/share_icon.svg';
import sub from "../styles/subpage.module.css";

function SubPageTitle (){
    const {id} = useParams()
    const [data, setData] = useState()
    const [showSharePopup, setShowSharePopup] = useState(false);
    const copyToClipboard = async (text) => {
        try {
          await navigator.clipboard.writeText(text);
          alert("링크가 클립보드에 복사되었습니다.");
        } catch (err) {
          alert("클립보드에 복사하지 못했습니다.", err);
        }
      };
    useEffect(()=>{
        async function getTv(){
            try {
                const record = await pb.collection('tv').getOne(id, {expand: 'tag'});
                setData(record)
                
            } catch (error) {
                throw new Error(error)
            }
        }
        getTv()
    },[id])
//    id값이 변경될 때 마다 useEffect 안에 있는 것들이 실행됨
// console.log(data);
if(data) {
    const {title, audiencerating, release, broadcasting, season, creator, actor, description, expand} = data;
    const {tag: tagArray} = expand;
    const {tag}=tagArray[0];
    
    return(
        <>
        <Helmet>
            <title>소용없어 거짓말</title>
        </Helmet>
        {/* 헬멧으로 title을 바꿔준다 */}
        <div>
            <section className={sub.contentInformation}>
                <div className={sub.backgroundImage}/>
                <div className={sub.blurOverlay}/>
                <div className={sub.content}>
                        <article className={sub.contentMain}>
                            <h2 className={sub.titleImg}>
                                <img src={getImageURL(data, 'titleImage')} alt={title} />
                                
                            </h2>                          
                            <div/>
                            <ul className={sub.tagWrap}>
                                <li className={sub.tag}>{audiencerating}</li>
                                <li className={sub.tag}>{release.slice(0,4)}</li>
                                <li className={sub.tag}>{tag}</li>
                                <li className={sub.tag}>{broadcasting}</li>
                                <li className={sub.tag}>{`시즌 ${season}개`}</li>
                                {/* <li className={sub.tag}>해설자막</li> */}
                            </ul>
                            <nav className={sub.Buttons}>
                                <button type='button' className={sub.playButton}>
                                    시즌 1: Episode 시청하기
                                </button>
                                <button type='button' className={sub.likeButton}>
                                    <img className={sub.likeIcon} src={likeIcon} alt="Like" />
                                    <span>찜</span>
                                </button>
                                <button type='button' className={sub.shareButton} onClick={() => setShowSharePopup(true)} >
                                <img className={sub.shareIcon} src={shareIcon} alt="Share" />
                                    <span>공유</span>
                                </button>
                                <div 
                                className={sub.sharePopupWrapper} 
                                onClick={() => setShowSharePopup(false)} // 바깥 부분 클릭 시 팝업 닫기
                                >
                                    {showSharePopup && (
                                        <div className={sub.sharePopup}
                                        onClick={(e) => e.stopPropagation()} 
                                        >
                                            <input type="text" value={`https://www.yourwebsite.com/video/${id}`} readOnly />
                                            <button 
                                            onClick={() => copyToClipboard(`https://www.yourwebsite.com/video/${id}`)} 
                                            >
                                            </button>
                                            <button onClick={() => setShowSharePopup(false)}>닫기</button>
                                        </div>
                                    )}
                                </div>
                            </nav>
                            <div className={sub.information}>
                                <dl className={sub.creator}>
                                    <dt>크리에이터</dt>
                                    <dd>{creator}</dd>
                                </dl>
                                <dl className={sub.actor}>
                                    <dt>출연</dt>
                                    <dd>{actor}</dd>
                                </dl>
                                {/* 더보기 버튼 누르면 확장 & 생략 되는 거 기능 구현 */}
                            </div>
                            <p className={sub.description}>{description}</p>
                        </article>
                        <article className={sub.posterWrap}> 
                            <img className={sub.poster} src={getImageURL(data, 'poster')}  alt='오랫동안 당신을 기다렸습니다' />
                        </article>
                </div>
                <div className={sub.borderBottom}></div>
            </section>
        </div>
        </>
    )}
}

export default SubPageTitle;