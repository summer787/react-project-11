import { bool, string, func } from "prop-types";
import ReactModal from "./RegistModal";
import styles from "./RegistModalThree.module.css";

function RegistModalThree({ isOpen = false, onClose = false, title }) {
  return (
    <ReactModal isOpen={isOpen} onClose={onClose} title={title}>
      <table className={styles.modalthree__table}>
        <thead>
          <tr>
            <th>수집/이용 목적</th>
            <th>수집 항목</th>
            <th>보유 및 이용기간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              서비스/업데이트 정보 제공, 고객맞춤형 서비스 제공,
              이벤트/마케팅/광고 활용
            </td>
            <td>
              회원번호, 이름, ID, 이메일 주소, 휴대폰 번호, 디바이스 토큰,
              서비스 이용기록, 성별
            </td>
            <td className={styles.modalthree__text__bold}>
              동의 철회 또는 회원탈퇴시까지
            </td>
          </tr>
          <tr>
            <td>이벤트 응모 및 경품 신청(네이버폼, 모아폼 등)</td>
            <td>
              회원번호, 이름, ID, 이메일 주소, 휴대폰 번호, 집 전화번호, 배송지
              주소
            </td>
            <td className={styles.modalthree__text__bold}>
              동의 철회 또는 이벤트 목적 달성시까지
            </td>
          </tr>
        </tbody>
      </table>
      <p className={styles.modalthree__text}>
        ※ 이용자는 개인정보의 수집 및 이용 선택 동의를 거부할 권리가 있습니다
        단, 개인정보 수집 및 이용 동의를 거부하실 경우, 마케팅 관련 서비스를
        제공 받으실 수 없습니다.
      </p>
    </ReactModal>
  );
}

RegistModalThree.defaultProps = {
  isOpen: false,
  onClose:  () => {},
  title: "",
};

RegistModalThree.propTypes = {
  isOpen: bool,
  onClose: func,
  title: string,
};

export default RegistModalThree;
