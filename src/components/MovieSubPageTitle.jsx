import pb from "@/api/pocketbase";
import getImageURL from "@/utils/getImageURL";
import ReactDOM from 'react-dom';
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

function MovieSubPageTitle ({record}){
    const {id} = useParams()
    const [data, setData] = useState()
    const [showSharePopup, setShowSharePopup] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }
    const [showLinkCopiedPopup, setShowLinkCopiedPopup] = useState(false);
    const handleLinkClick = () => {
        navigator.clipboard.writeText(window.location.href);
        setShowLinkCopiedPopup(true);
        setTimeout(() => {
            setShowLinkCopiedPopup(false);
        }, 2000);  
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
    const [showModal, setShowModal] = useState(false); 


    useEffect(()=>{
        console.log(record);
        setData(record);
    },[record]);
    
useEffect(() => {
    const handleOutsideClick = (event) => {
        if (showSharePopup && !event.target.closest('.sharePopup')) {
            setShowSharePopup(false);
        }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => window.removeEventListener('click', handleOutsideClick);
}, [showSharePopup]);

if(!data) {
    return null; 
}

const handleModalToggle = (event) => {
    if (!event.target.closest('.sharePopup')) {
        setShowModal(!showModal);
    }
};





    
if(data) {
    const {title, audiencerating, release, runningtime, isParamount, creator, actor, description, expand} = data;
    const {tag: tagArray} = expand;
    const {tag}=tagArray[0];
    console.log(data)
    return(
        <>
        <Helmet>
            <title>{title}</title>
        </Helmet>
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
                                <li className={sub.tag}>{`${audiencerating}+`}</li>
                                {release ? <li className={sub.tag}>{release.slice(0,4)}</li> : null}
                                <li className={sub.tag}>{tag}</li>
                                <li className={sub.tag}>{`${runningtime}분`}</li>
                                {isParamount ? <li className={sub.tag}>Paramount+</li> : null}
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
                                {showPostPopup && ReactDOM.createPortal(
                                <div className={sub.postPopup}>
                                    포스트가 찜 되었습니다.
                                </div>,
                                document.body 
                                )}
                            <div className={sub.shareWrapper} onClick={handleModalToggle}>
                                <button type='button' className={sub.shareButton} onClick={(e) => { e.stopPropagation(); if (!showSharePopup) setShowSharePopup(true); else setShowSharePopup(false); }} >
                                    <img className={sub.shareIcon} src={shareIcon} alt="Share" />
                                        <span >공유</span>
                                </button>
                                <div 
                                className={`${sub.sharePopupWrapper} ${showSharePopup ? sub.visible : ''}`} 
                                onClick={(e) => e.stopPropagation()}
                                >
                                    {showSharePopup && (
                                        <div className={`${sub.sharePopup} sharePopup`} 
                                        onClick={(e) => e.stopPropagation()} 
                                        >
                                            <button type="button" onClick={(e) => { e.stopPropagation(); }}><img src={facebook} alt="Facebook Share" /></button>
                                            <button type="button" onClick={(e) => { e.stopPropagation(); }}><img src={twitter} alt="Twitter Share" /></button>
                                            <button type="button" onClick={(e) => { e.stopPropagation(); }}><img src={kakaotalk} alt="Kakao Share" /></button>
                                            <button type="button"  onClick={(e) => { e.stopPropagation(); handleLinkClick()}}><img src={link} alt="Link Share" /></button>
                                            {showLinkCopiedPopup && ReactDOM.createPortal(
                                                <div className={sub.linkCopiedPopup}>콘텐츠의 주소가 복사되었습니다.</div>,
                                                document.body 
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

export default MovieSubPageTitle;