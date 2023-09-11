// src/layout/Footer/Footer.jsx
import { useContext } from "react";
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
            <a href="/">
              [안내] 휴대폰 신규 결제 서비스 종료 (2023년 10월 4일)
            </a>
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
            <a href="/">고객센터</a>
          </span>
          <span className={styles.accent}>
            <a href="/">이용약관</a>
          </span>
          <span className={styles.accent}>
            <a href="/">개인정보처리방침</a>
          </span>
          <span className={styles.accent}>
            <a href="/">청소년 보호정책</a>
          </span>
          <span className={styles.accent}>
            <a href="/">법적 고지</a>
          </span>
          <span className={styles.accent}>
            <a href="/">이벤트</a>
          </span>
          <span className={styles.accent}>
            <a href="/">인재채용</a>
          </span>
        </div>
        <div>
          <p>
            <span className={styles.slash}>대표이사 : 최주희</span>
            <span className={`${styles.slash} ${styles.underline}`}>
              <a href="/">사업자정보확인</a>
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
            <span className={`${styles.slash} ${styles.underline}`}>
              <a href="/">1:1 게시판 문의</a>
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
          <a href="/">
            <YoutubeIcon />
          </a>
        </div>
        <div>
          <a href="/">
            <InstagramIcon />
          </a>
        </div>
        <div>
          <a href="/">
            <TwitterIcon />
          </a>
        </div>
        <div>
          <a href="/">
            <FacebookIcon />
          </a>
        </div>
        {/* </IconColorProvider> */}
      </div>
    </footer>
  );
}

export default Footer;
