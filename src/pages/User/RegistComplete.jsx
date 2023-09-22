import CheckedIcon from "@/assets/Regist/check_mark_circle_icon.svg";
import { useNavigate } from "react-router-dom";
import UserButton from "@/components/User/UserButton";
import styles from "@/pages/User/RegistComplete.module.css";

function RegistComplete() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/user/tvingLogin");
  };

  return (
    <div className={styles.complete__container}>
      <img src={CheckedIcon} alt="checkicon" className={styles.check__img} />
      <h2 className={styles.complete__title}>회원가입 완료</h2>
      <h2 className={styles.complete__title}>
        티빙 회원이 되신 것을 환영해요!
      </h2>
      <p className={styles.complete__text}>
        지금 바로 이용권을 구독하고 티빙 오리지널과
      </p>
      <p
        className={`${styles.complete__text} ${styles.complete__text__bottom}`}
      >
        최신 인기 TV프로그램, 영화를 무제한으로 만나보세요!
      </p>
      <UserButton onClick={handleClick} text="로그인 하기" isActive />
    </div>
  );
}

export default RegistComplete;
