import { bool, string, func } from "prop-types";
import ReactModal from "./RegistModalBase";
import styles from "./RegistModalFour.module.css";

function RegistModalThree({ isOpen = false, onClose = false, title }) {
  return (
    <ReactModal isOpen={isOpen} onClose={onClose} title={title}>
      <section>
        <h4 className={styles.modalFout__title}>[선택] 마케팅정보 수신 동의</h4>
        <p className={styles.modalFour__text}>
          티빙은 회원님이 동의하신 개인정보를 이용하여 푸시알림, SMS(MMS),
          이메일를 통해서비스 이벤트 및 업데이트, 마케팅 정보, 고객 맞춤 서비스
          정보를 전송할 수 있습니다.
        </p>
        <p className={styles.modalFour__text}>
          본 동의는 거부하실 수 있으나, 거부 시 이벤트 및 프로모션 안내, 유용한
          정보를 받아보실 수 없습니다.
        </p>

        <p className={styles.modalFour__text}>
          광고성정보수신의 변경은&quot;MY &gt; 회원정보 수정&gt;마케팅정보 수신
          동의&quot; 에서 언제든지 변경할 수 있습니다.
        </p>
      </section>
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
