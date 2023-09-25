import CheckedIcon from "@/assets/Regist/check_mark_circle_icon.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import UserButton from "@/components/User/UserButton";
import styles from "@/pages/User/RegistComplete.module.css";

function RegistComplete() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/user/taingLogin");
  };

  return (
    <div className={styles.complete__container}>
      <motion.img
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1.1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 40,
        }}
        src={CheckedIcon}
        alt="checkicon"
        className={styles.check__img}
      />
      <motion.h2
        className={styles.complete__title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.05, duration: 0.5 }}
      >
        회원가입 완료
      </motion.h2>
      <h2 className={styles.complete__title}>
        타잉 회원이 되신 것을 환영해요!
      </h2>
      <p className={styles.complete__text}>
        지금 바로 이용권을 구독하고 타잉 오리지널과
      </p>
      <p
        className={`${styles.complete__text} ${styles.complete__text__bottom}`}
      >
        최신 인기 TV프로그램, 영화를 무제한으로 만나보세요!
      </p>
      <div className={styles.button__container}>
        <UserButton onClick={handleClick} text="로그인 하기" isActive />
      </div>
    </div>
  );
}

export default RegistComplete;
