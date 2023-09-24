// src/layout/Footer/Footer.jsx
import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/assets/Footer/icons";
import styles from "./Footer.module.css";
// import IconColorProvider from "@/providers/IconColorProvider";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.notice}>
        <div>
          <span className={styles.margin}>공시지사항</span>
          <span className={styles.accent}>
            <Link to="/home">
              [안내] 휴대폰 신규 결제 서비스 종료 (2023년 10월 4일)
            </Link>
          </span>
        </div>
        <div>
          <span className={`${styles.margin}`}>
            <button className={styles.accent} type="button">
              브랜드 바로가기 +
            </button>
          </span>
          <span className={styles.accent}>
            <button className={styles.accent} type="button">
              그룹 계열사 바로가기 +
            </button>
          </span>
        </div>
      </div>
      <div className={styles.util}>
        <div className={styles.utilnav}>
          <span className={styles.accent}>
            <Link to="/home">고객센터</Link>
          </span>
          <span className={styles.accent}>
            <Link to="/home">이용약관</Link>
          </span>
          <span className={styles.accent}>
            <Link to="/home">개인정보처리방침</Link>
          </span>
          <span className={styles.accent}>
            <Link to="/home">청소년 보호정책</Link>
          </span>
          <span className={styles.accent}>
            <Link to="/home">법적 고지</Link>
          </span>
          <span className={styles.accent}>
            <Link to="/home">이벤트</Link>
          </span>
          <span className={styles.accent}>
            <Link to="/home">인재채용</Link>
          </span>
        </div>
        <div>
          <p>
            <span className={styles.slash}>대표이사 : 최주희</span>
            <span
              className={`${styles.slash} ${styles.underline} ${styles.accent}`}
            >
              <Link to="/home">사업자정보확인</Link>
            </span>
            <span className={styles.slash}>사업자등록번호 : 188-88-01893</span>
            <span>통신판매신고번호 : 2020-서울마포-3641호</span>
          </p>
          <p>
            <span className={styles.slash}>
              사업장 : 서울특별시 마포구 상암산로 34, DMC디지털큐브 15층(상암동)
            </span>
            <span>호스팅사업자 : 씨제이올리브네트웍스(주)</span>
          </p>
          <p>
            <span className={styles.slash}>
              고객센터 (평일 09시~17시/점심시간 13시~14시)
            </span>
            <span
              className={`${styles.slash} ${styles.underline} ${styles.accent}`}
            >
              <Link to="/home">1:1 게시판 문의</Link>
            </span>
            <span className={styles.slash}>대표메일 : tving@cj.net</span>
            <span>전화번호(ARS) : 1670-1525 (챗봇/채팅 상담 연결)</span>
          </p>
          <p>
            <span className={styles.slash}>
              ENM 시청자 상담실 (편성 문의 및 시청자 의견) : 080-080-0780
            </span>
            <span>Mnet 고객센터(방송편성문의) : 1855-1631</span>
          </p>
        </div>
      </div>
      <div className={styles.icons}>
        {/* <IconColorProvider> */}
        <div>
          <Link to="/home" aria-label="Youtube">
            <YoutubeIcon />
          </Link>
        </div>
        <div>
          <Link to="/home" aria-label="Instagram">
            <InstagramIcon />
          </Link>
        </div>
        <div>
          <Link to="/home" aria-label="Twitter">
            <TwitterIcon />
          </Link>
        </div>
        <div>
          <Link to="/home" aria-label="Facebook">
            <FacebookIcon />
          </Link>
        </div>
        {/* </IconColorProvider> */}
      </div>
    </footer>
  );
}

export default Footer;
