// import sub from"../styles/subpage.module.css";
// import title from '../assets/Subpage/subpage_title_img_png'
import pb from "@/api/pocketbase";
import getImageURL from "@/utils/getImageURL";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import playIcon from '../assets/Subpage/triangle_icon.png';
import likeIcon from '../assets/Subpage/like_icon.svg';
import likedIcon from '../assets/Subpage/liked_icon.svg';
import shareIcon from '../assets/Subpage/share_icon.svg';
import facebook from '../assets/Subpage/facebook_icon.svg';
import kakaotalk from '../assets/Subpage/kakaotalk_icon.svg';
import twitter from '../assets/Subpage/twitter_icon.svg';
import link from '../assets/Subpage/link_icon.svg';
import sub from "../styles/subpage.module.css";

function SubPageTitle (){
    const {id} = useParams()
    const [data, setData] = useState()
    const [showSharePopup, setShowSharePopup] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }
    const [showLinkCopiedPopup, setShowLinkCopiedPopup] = useState(false);
    const handleLinkClick = () => {
        // 현재 URL 복사
        navigator.clipboard.writeText(window.location.href);
        // 링크 복사 알림 팝업창 보이기
        setShowLinkCopiedPopup(true);
        // 일정 시간 후에 팝업창 숨기기
        setTimeout(() => {
            setShowLinkCopiedPopup(false);
        }, 2000);  // 예: 2초 후에 숨김
    };
    const [isLiked, setIsLiked] = useState(false); 
    const [showPostPopup, setShowPostPopup] = useState(false);
    const handleLikeIconClick = () => {
        setIsLiked(!isLiked); 
   };
   const handleShowPostPopup = () => { 
    setShowPostPopup(true);
    setTimeout(() => {
        setShowPostPopup(false);
    }, 2000);
    }
    const handleClick = () => { 
        handleLikeIconClick(); 
        handleShowPostPopup(); 
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
    console.log(data)
    return(
        <>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        {/* 헬멧으로 title을 바꿔준다 */}
        <div>
            <section className={`${sub.contentInformation} ${isExpanded ? sub.PageTitleExpanded : ''}`}>
                <div className={sub.backgroundImage} style={{ backgroundImage: `url(${getImageURL(data, 'poster')})` }}/>               
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
                                    <img className={sub.playIcon} src={playIcon} alt="triangleIcon"/>
                                    <p>시즌 1: Episode 시청하기</p>
                                </button>
                                <button type='button' className={sub.likeButton} onClick={handleClick}>
                                    <img className={sub.likeIcon}  src={isLiked ? likedIcon : likeIcon} alt="Like" />
                                    <span>찜</span>
                                </button>
                                {showPostPopup && (
                                <div className={sub.postPopup}>
                                    포스트가 찜되었습니다.
                                </div>
                                )}
                            <div className={sub.shareWrapper}>
                                <button type='button' className={sub.shareButton} onClick={() => setShowSharePopup(true)} >
                                <img className={sub.shareIcon} src={shareIcon} alt="Share" />
                                    <span>공유</span>
                                </button>
                                <div 
                                className={`${sub.sharePopupWrapper} ${showSharePopup ? sub.visible : ''}`} 
                                onClick={() => setShowSharePopup(false)} // 바깥 부분 클릭 시 팝업 닫기
                                >
                                    {showSharePopup && (
                                        <div className={sub.sharePopup}
                                        onClick={(e) => e.stopPropagation()} 
                                        >
                                            <button type="button"><img src={facebook} alt="Facebook Share" /></button>
                                            <button type="button"><img src={twitter} alt="Twitter Share" /></button>
                                            <button type="button"><img src={kakaotalk} alt="Kakao Share" /></button>
                                            <button type="button"  onClick={handleLinkClick}><img src={link} alt="Link Share" /></button>
                                            {showLinkCopiedPopup && (
                                                <div className={sub.linkCopiedPopup}>콘텐츠의 주소가 복사되었습니다.</div>
                                            )}
                                        </div>
                                    )}
                                </div>
                                </div>
                            </nav>
                            <div className={sub.information}>
                                <dl className={sub.creator}>
                                    <dt>크리에이터</dt>
                                    <dd>{creator}</dd>
                                </dl>
                                <dl className={isExpanded ? sub.actorClamp : sub.actor}>
                                    <dt>출연</dt>
                                    <dd>{actor}</dd>
                                </dl>
                                <p className={`${sub.description} ${isExpanded ? '' : sub.descriptionClamp}`}>{description}</p>
                                <button onClick={toggleExpand} type="button">{isExpanded ? "닫기" : "더보기" }</button>
                            </div>
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