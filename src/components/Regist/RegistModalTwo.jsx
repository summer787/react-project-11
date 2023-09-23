import { bool, string, func } from "prop-types";
import ReactModal from "./RegistModalBase";
import styles from "./RegistModalTwo.module.css";

function RegistModalTwo({ isOpen = false, onClose = false, title }) {
  return (
    <ReactModal isOpen={isOpen} onClose={onClose} title={title}>
      <table className={styles.modaltwo__table}>
        <thead>
          <tr>
            <th>수집/이용 목적</th>
            <th>수집 항목</th>
            <th>보유 및 이용기간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TVING ID 회원 가입 및 회원관리</td>
            <td>
              [회원가입 시] TVING ID, 이메일 주소, 비밀번호 [추가정보 입력 시]
              이름, 휴대폰 번호
            </td>
            <td className={styles.modaltwo__text__bold}>회원탈퇴 후 5일까지</td>
          </tr>
          <tr>
            <td>SNS ID 회원 가입 및 회원관리</td>
            <td>
              Naver : 이름, 이메일 주소, 성별, 출생연도 Kakao : 이름, 이메일
              주소, 닉네임 Facebook : 이름, 이메일 주소, 프로필 사진 Twitter :
              이름, 이메일 주소 Apple : 이름, 이메일 주소 [추가정보 입력 시]
              휴대폰 번호
            </td>
            <td className={styles.modaltwo__text__bold}>회원탈퇴 후 5일까지</td>
          </tr>
          <tr>
            <td>CJ ONE 통합회원 가입 및 회원관리</td>
            <td>
              CJ ONE ID, CJ ONE 회원번호, 비밀번호, 이름, 영어이름, CI, 성별,
              휴대폰 번호, 이메일 주소, 생년월일
            </td>
            <td className={styles.modaltwo__text__bold}>회원탈퇴 후 5일까지</td>
          </tr>
          <tr>
            <td>
              사용자 인증을 통한 본인 및 연령 확인, 사용자 인증에 따른 서비스
              제공 및 응대
            </td>
            <td>이름, CI, DI, 생년월일, 성별, 휴대폰 번호</td>
            <td className={styles.modaltwo__text__bold}>회원탈퇴 후 5일까지</td>
          </tr>
          <tr>
            <td>만 14세 미만 회원가입 법정대리인 동의</td>
            <td>ID, 요청일시, 법정대리인의 성인여부, 법정대리인의 인증일시</td>
            <td className={styles.modaltwo__text__bold}>회원탈퇴 후 5일까지</td>
          </tr>
        </tbody>
      </table>
      <p className={styles.modaltwo__text}>
        ※ 이용자는 개인정보의 수집 및 이용 동의를 거부할 권리가 있습니다.
        회원가입 시 수집하는 최소한의 개인정보, 즉, 필수 항목에 대한 수집 및
        이용 동의를 거부하실 경우, 회원가입을 진행하실 수 없습니다.
      </p>
    </ReactModal>
  );
}

RegistModalTwo.defaultProps = {
  isOpen: false,
  onClose:  () => {},
  title: "",
};

RegistModalTwo.propTypes = {
  isOpen: bool,
  onClose: func,
  title: string,
};

export default RegistModalTwo;
