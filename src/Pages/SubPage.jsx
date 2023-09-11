import React from 'react';
// import Select from 'react-select';
import sub from '../Pages/subpage.module.css';
// import svgr from 'vite-plugin-svgr'
import poster from '../assets/Subpage/subpage_poster.png';
import title from '../assets/Subpage/subpage_title_img.png';
import thumbnail from '../assets/Subpage/season_thumbnail_1.png';
import likeIcon from '../assets/Subpage/like_icon.svg';
import shareIcon from '../assets/Subpage/share_icon.svg';


function SubPage() {
    // const options = [
    //     // 옵션 리스트를 여기에 추가하세요.
    //     // 예: { value: 'chocolate', label: 'Chocolate' }
    // ];
    return (
        <div className={sub.contentWrap}>

            <section className={sub.contentInformation}>
                <div className={sub.backgroundImage}/>
                <div className={sub.blurOverlay}/>
                <div className={sub.content}>
                        <article className={sub.contentMain}>
                            <h2 className={sub.titleImg}>
                                <img src={title} alt='소용없어 거짓말' />
                            </h2>
                            <div/>
                            <ul className={sub.tagWrap}>
                                <li className={sub.tag}>15+</li>
                                <li className={sub.tag}>월화 오후8:50</li>
                                <li className={sub.tag}>드라마</li>
                                <li className={sub.tag}>tvN</li>
                                <li className={sub.tag}>시즌 1개</li>
                                <li className={sub.tag}>해설자막</li>
                            </ul>
                            <nav className={sub.Buttons}>
                                <button type='button' className={sub.playButton}>
                                    시즌 1: Episode 시청하기
                                </button>
                                <button type='button' className={sub.likeButton}>
                                    <img className={sub.likeIcon} src={likeIcon} alt="Like" />
                                    <span>찜</span>
                                </button>
                                <button type='button' className={sub.shareButton}>
                                <img className={sub.shareIcon} src={shareIcon} alt="Share" />
                                    <span>공유</span>
                                </button>
                            </nav>
                            <div className={sub.information}>
                                <dl className={sub.creator}>
                                    <dt>크리에이터</dt>
                                    <dd>남성우</dd>
                                </dl>
                                <dl className={sub.actor}>
                                    <dt>출연</dt>
                                    <dd>김소현, 황민현, 서지훈, 이시우, 윤지온, 송진우, 박경혜, 진경, 안내상</dd>
                                </dl>
                                {/* 더보기 버튼 누르면 확장 & 생략 되는 거 기능 구현 */}
                            </div>
                            <p className={sub.description}>거짓말이 들리는 능력 때문에 사람을 믿지 못하는 라이어 헌터와 말할 수 없는 정체를 숨긴 천재 작곡가가 만나 펼치는 진실 탐지 로맨스 드라마</p>
                        </article>
                        {/* <div/> */}
                        <article className={sub.posterWrap}> 
                            <img className={sub.poster} src={poster} alt='오랫동안 당신을 기다렸습니다' />
                        </article>
                </div>
            </section>
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
                            소용없어 거짓말
                        </h2>
                        <h3 className={sub.number}>
                            (총 12화)
                        </h3>
                        <svg fill='#fff' width="40" height="40" viewBox="0 0 32 32"/>
                    </div>
                    <div className={sub.orderChoices}>
                        <div className={sub.clickOn}>
                            <button type="button" className={sub.clickFirst}>첫화부터</button>
                            <button type="button" className={`${sub.clickNew} ${sub.buttonWithEffects}`}>최신화부터</button>
                        </div>
                        <label className={sub.switch} htmlFor="s1">
                            <span className={sub.sliderRound}> 연속재생</span>
                            <input type="checkbox" id="s1"/>
                        </label>
                    </div>
                </article>
                <article className={sub.videoPlayerInformation}>
                    <div className={sub.seasonThumbnailWrap1}>
                        <img className={sub.seasonThumbnail} src={thumbnail} alt='소용없어 거짓말 1화'/>
                        <button className={sub.thumbnailPlayButton} aria-label="Play">
                            <svg className={sub.svgIcon} data-name="Layer 1" id="Layer_1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <path fill='#ffffff' d="M50,5A45,45,0,1,0,95,50,45.00058,45.00058,0,0,0,50,5Zm0,88A43.00024,43.00024,0,1,1,80.40552,80.40552,42.86137,42.86137,0,0,1,50,93Z"/>
                                <path fill='#ffffff' d="M69.78345,47.76355,40.96753,29.40466a2.54663,2.54663,0,0,0-1.37195-.4046,2.5884,2.5884,0,0,0-1.81012.74756A2.64065,2.64065,0,0,0,37,31.64111V68.35889a2.64062,2.64062,0,0,0,.78546,1.89343,2.588,2.588,0,0,0,1.81012.74756,2.54663,2.54663,0,0,0,1.37195-.4046L69.78345,52.23645a2.66383,2.66383,0,0,0,0-4.4729Zm-1.07477,2.78619L39.89282,68.90857a.54048.54048,0,0,1-.29724.09131.591.591,0,0,1-.40777-.17353A.634.634,0,0,1,39,68.35889V31.64111a.63378.63378,0,0,1,.18781-.46746.59111.59111,0,0,1,.40777-.17359.54161.54161,0,0,1,.29724.09131L68.70874,49.45032a.66419.66419,0,0,1-.00006,1.09942Z"/>
                            </svg>
                        </button>
                        <div className={sub.itemInformation}>
                            <h2 className={sub.itemTitle}>1. 소용없어 거짓말 1화</h2>
                            <p className={sub.itemDescription}>진실과 거짓을 구별하는 특별한 능력을 가진 인간 거짓말탐지기 ‘라이어 헌터’ 목솔희. 타로카페로 위장한 연서동 솔희의 가게에는 이 특별한 능력을 필요로 하는 VIP들의 비밀 의뢰가 끊이지 않는다. 한편 자신의 정체를 꽁꽁 숨긴 채 살아가던 대한민국 최고의 작곡가 김도하. 자신의 곡으로 일약 톱스타가 된 샤온과의 열애설로 요새와 같던 자신의 집에서 도망쳐 간 곳은 연서동의 한 빌라. 그곳에서 또 한 번 정체가 발각될 위기에 처하게 되는데...!</p>
                            <p className={sub.itemSubInformation}>2023.07.31 | 65분</p>
                        </div>
                    </div>
                    <div className={sub.seasonThumbnailWrap}>
                        <img className={sub.seasonThumbnail} src={thumbnail} alt='소용없어 거짓말 1화'/>
                        <div className={sub.itemInformation}>
                            <h2 className={sub.itemTitle}>1. 소용없어 거짓말 1화</h2>
                            <p className={sub.itemDescription}>진실과 거짓을 구별하는 특별한 능력을 가진 인간 거짓말탐지기 ‘라이어 헌터’ 목솔희. 타로카페로 위장한 연서동 솔희의 가게에는 이 특별한 능력을 필요로 하는 VIP들의 비밀 의뢰가 끊이지 않는다. 한편 자신의 정체를 꽁꽁 숨긴 채 살아가던 대한민국 최고의 작곡가 김도하. 자신의 곡으로 일약 톱스타가 된 샤온과의 열애설로 요새와 같던 자신의 집에서 도망쳐 간 곳은 연서동의 한 빌라. 그곳에서 또 한 번 정체가 발각될 위기에 처하게 되는데...!</p>
                            <p className={sub.itemSubInformation}>2023.07.31 | 65분</p>
                        </div>
                    </div>
                    <div className={sub.seasonThumbnailWrap}>
                        <img className={sub.seasonThumbnail} src={thumbnail} alt='소용없어 거짓말 2화'/>
                        <div className={sub.itemInformation}>
                            <h2 className={sub.itemTitle}>1. 소용없어 거짓말 2화</h2>
                            <p className={sub.itemDescription}>위기의 순간, 솔희의 도움으로 상황을 모면한 도하. 하지만 도하는 5년 전, 고향인 학천에서 잠시 마주쳤던 솔희를 기억해 내고 그녀가 자신을 알아볼까 불안하기만 하다. 설상가상 바로 옆집 이웃으로 만나게 된 두 사람. 솔희는 극도로 사람들을 피하며 얼굴을 꽁꽁 감춘 이웃집 남자 도하가 수상하지만 진실만을 말하는 그에게 묘한 호기심이 인다. 
                            한편 솔희에게 새로운 의뢰가 들어오고, 그곳에서 의외의 인물을 만나게 되는데...!</p>
                            <p className={sub.itemSubInformation}>2023.07.31 | 65분</p>
                        </div>
                    </div>
                    <div className={sub.seasonThumbnailWrap}>
                        <img className={sub.seasonThumbnail} src={thumbnail} alt='소용없어 거짓말 3화'/>
                        <div className={sub.itemInformation}>
                            <h2 className={sub.itemTitle}>1. 소용없어 거짓말 1화</h2>
                            <p className={sub.itemDescription}>진실과 거짓을 구별하는 특별한 능력을 가진 인간 거짓말탐지기 ‘라이어 헌터’ 목솔희. 타로카페로 위장한 연서동 솔희의 가게에는 이 특별한 능력을 필요로 하는 VIP들의 비밀 의뢰가 끊이지 않는다. 한편 자신의 정체를 꽁꽁 숨긴 채 살아가던 대한민국 최고의 작곡가 김도하. 자신의 곡으로 일약 톱스타가 된 샤온과의 열애설로 요새와 같던 자신의 집에서 도망쳐 간 곳은 연서동의 한 빌라. 그곳에서 또 한 번 정체가 발각될 위기에 처하게 되는데...!</p>
                            <p className={sub.itemSubInformation}>2023.07.31 | 65분</p>
                        </div>
                    </div>
                    <div className={sub.seasonThumbnailWrap}>
                        <img className={sub.seasonThumbnail} src={thumbnail} alt='소용없어 거짓말 3화'/>
                        <div className={sub.itemInformation}>
                            <h2 className={sub.itemTitle}>1. 소용없어 거짓말 1화</h2>
                            <p className={sub.itemDescription}>진실과 거짓을 구별하는 특별한 능력을 가진 인간 거짓말탐지기 ‘라이어 헌터’ 목솔희. 타로카페로 위장한 연서동 솔희의 가게에는 이 특별한 능력을 필요로 하는 VIP들의 비밀 의뢰가 끊이지 않는다. 한편 자신의 정체를 꽁꽁 숨긴 채 살아가던 대한민국 최고의 작곡가 김도하. 자신의 곡으로 일약 톱스타가 된 샤온과의 열애설로 요새와 같던 자신의 집에서 도망쳐 간 곳은 연서동의 한 빌라. 그곳에서 또 한 번 정체가 발각될 위기에 처하게 되는데...!</p>
                            <p className={sub.itemSubInformation}>2023.07.31 | 65분</p>
                        </div>
                    </div>
                    <div className={sub.seasonThumbnailWrap}>
                        <img className={sub.seasonThumbnail} src={thumbnail} alt='소용없어 거짓말 3화'/>
                        <div className={sub.itemInformation}>
                            <h2 className={sub.itemTitle}>1. 소용없어 거짓말 1화</h2>
                            <p className={sub.itemDescription}>진실과 거짓을 구별하는 특별한 능력을 가진 인간 거짓말탐지기 ‘라이어 헌터’ 목솔희. 타로카페로 위장한 연서동 솔희의 가게에는 이 특별한 능력을 필요로 하는 VIP들의 비밀 의뢰가 끊이지 않는다. 한편 자신의 정체를 꽁꽁 숨긴 채 살아가던 대한민국 최고의 작곡가 김도하. 자신의 곡으로 일약 톱스타가 된 샤온과의 열애설로 요새와 같던 자신의 집에서 도망쳐 간 곳은 연서동의 한 빌라. 그곳에서 또 한 번 정체가 발각될 위기에 처하게 되는데...!</p>
                            <p className={sub.itemSubInformation}>2023.07.31 | 65분</p>
                        </div>
                    </div>
                </article>
            </section>  
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
                        <div className={sub.swiperWrapp}>
                            <div className={sub.swiperItemWrap}>
                                <figure className={sub.swiperItem}>
                                    <img className={sub.itemThumbnail} src={thumbnail} alt='[2차 티저] 소용없어 거짓말'/>
                                    <figcaption className={sub.itemDescription}>[2차 티저] 소용없어 거짓말</figcaption>                                        </figure>
                            </div>
                        </div>   
                    </section>
                </div>
            </section>
            <section className={sub.recommendation}>
                <header className={sub.recommendationVideoHeader}>
                        <h2 className={sub.title}>비슷한 TV프로그램</h2>
                    </header>
                    <div className={sub.recommendationAll}>
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
                    </div>
                </section>
                <section className={sub.recommendation}>
                    <header className={sub.recommendationVideoHeader}>
                        <h2 className={sub.title}>로맨틱 드라마</h2>
                    </header>
                    <div className={sub.recommendationAll}>
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
                    </div>
                </section>
                <section className={sub.recommendation}>
                    <header className={sub.recommendationVideoHeader}>
                        <h2 className={sub.title}>판다지 로맨스 드라마</h2>
                    </header>
                    <div className={sub.recommendationAll}>
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
                    </div>
                </section>
                <section className={sub.recommendation}>
                    <header className={sub.recommendationVideoHeader}>
                        <h2 className={sub.title}>판타지 드라마</h2>
                    </header>
                    <div className={sub.recommendationAll}>
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
                    </div>
                </section>

        </div>   
    );
}

export default SubPage;
