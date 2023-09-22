import { bool, string,func } from "prop-types";
import ReactModal from "./RegistModal";
import styles from "./RegistModalOne.module.css";

function RegistModalOne({ isOpen = false, onClose = false, title }) {
  return (
    <ReactModal isOpen={isOpen} onClose={onClose} title={title}>
      <section>
        <div className={styles.modalone__text}>
          <h2>제1장 총칙</h2>
          <h2>제1조 (목적)</h2>
          <p>
            이 약관은 주식회사 티빙(이하 “회사”)이 티빙
            웹사이트(http://www.tving.com / m.tving.com)와 모바일, 태블릿,
            스마트TV 앱 서비스 및 프로그램을 이용하여 온라인으로 제공하는
            디지털콘텐츠(이하 &quot;콘텐츠&quot;) 및 제반 서비스를 이용함에 있어
            이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
          <h2 className={styles.modal__subtitle}>제2조 [정의] </h2>
          <p>
            이 약관에서 사용하는 용어의 정의는 다음과 같습니다. 단, “CJ ONE”관련
            용어 정의는 “CJ ONE” 이용 약관 용어 정의를 따릅니다.
          </p>
          <ol>
            <li>
              1.&quot;회사&quot;라 함은 &quot;콘텐츠&quot; 산업과 관련된
              경제활동을 영위하는 자로서 “콘텐츠” 제반 서비스를 제공하는 자이며,
              이 약관에서는 주식회사 티빙을 말합니다.
            </li>
            <li>
              2.&quot;이용자&quot;라 함은 &quot;회사&quot;의
              티빙(http://www.tving.com / m.tving.com) 웹사이트와 모바일,
              태블릿, 스마트TV 앱 서비스에 접속하여 이 약관에 따라
              &quot;회사&quot;가 제공하는 &quot;콘텐츠&quot; 제반 서비스를
              이용하는 회원 및 비회원을 말합니다.{" "}
            </li>
            <li>
              3.&quot;회원&quot;이라 함은 &quot;회사&quot;와 이용계약을 체결하고
              &quot;이용자&quot; 아이디(ID)를 부여 받은 &quot;이용자&quot;로서
              &quot;회사&quot;의 정보를 지속적으로 제공받으며 &quot;회사&quot;가
              제공하는 서비스를 지속적으로 이용할 수 있는 자를 말합니다.{" "}
            </li>
            <li>
              4.&quot;비회원&quot;이라 함은 &quot;회원&quot;이 아니면서
              &quot;회사&quot;가 제공하는 서비스를 이용하는 자를 말합니다.
            </li>
            <li>
              5.&quot;CJ ONE&quot; 회원 : &quot;CJ ONE&quot; 서비스 운영에
              동의하고 회원 ID를 부여받은 자 중 &quot;회사&quot;의 서비스 이용에
              동의한 회원을 의미하며, &quot;CJ ONE&quot; 회원약관에 의해 운영
              됩니다.
            </li>
            <li>
              6.&quot;콘텐츠&quot;라 함은 정보통신망이용촉진 및 정보보호 등에
              관한 법률 제2조 제1항 제1호의 규정에 의한 정보통신망에서 사용되는
              부호, 문자, 음성, 음향, 이미지 또는 영상 등으로 표현된 자료 또는
              정보로서, 그 보존 및 이용에 있어서 효용을 높일 수 있도록 전자적
              형태로 제작 또는 처리된 것을 말합니다.{" "}
            </li>
            <li>
              7.&quot;아이디(ID)&quot;라 함은 &quot;회원&quot;의 식별과
              서비스이용을 위하여 &quot;회원&quot;이 정하고 &quot;회사&quot;가
              승인하는 문자 또는 숫자의 조합을 말합니다.{" "}
            </li>
            <li>
              8.&quot;비밀번호(PASSWORD)&quot;라 함은 &quot;회원&quot;이 부여
              받은 &quot;아이디&quot;와 일치되는 &quot;회원&quot;임을 확인하고
              비밀보호를 위해 &quot;회원&quot; 자신이 정한 문자 또는 숫자의
              조합을 말합니다.{" "}
            </li>
            <li>
              8.&quot;유료 서비스&quot;라 함은 서비스 이용을 위해 대금을 지불한
              후에 이용할 수 있는 서비스를 말합니다.{" "}
            </li>
            <li>
              10.&quot;무료 서비스&quot;라 함은 서비스 이용을 위해 대금을
              지불하지 않고 이용할 수 있는 서비스를 말합니다.
            </li>
          </ol>

          <h2 className={styles.modal__subtitle}>제3조 [신원정보 등의 제공]</h2>
          <p>
            &quot;회사&quot;는 이 약관의 내용, 상호, 대표자 성명, 영업소 소재지
            주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호,
            모사전송번호, 전자우편주소, 사업자등록번호, 통신판매업 신고번호 등을
            “이용자”가 쉽게 알 수 있도록 온라인 서비스초기화면에 게시합니다.
            다만, 약관은 “이용자”가 연결화면을 통하여 볼 수 있도록 할 수
            있습니다.
          </p>

          <h2 className={styles.modal__subtitle}>제4조 [약관의 게시 등]</h2>
          <ol>
            <li>
              1. &quot;회사&quot;는 이 약관을 &quot;회원&quot;이 그 전부를
              인쇄할 수 있고 거래과정에서 해당 약관의 내용을 확인할 수 있도록
              기술적 조치를 취합니다.
            </li>
            <li>
              2. “이용자”가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중
              청약철회ㆍ배송책임ㆍ환불조건 등과 같은 중요한 내용을 “이용자”가
              이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여
              “이용자”의 확인을 구하여야 합니다.
            </li>
            <li>
              3. &quot;회사&quot;는 &quot;이용자&quot;가 &quot;회사&quot;와 이
              약관의 내용에 관하여 질의 및 응답할 수 있도록 기술적 장치를
              설치합니다.
            </li>
          </ol>
        </div>
      </section>
    </ReactModal>
  );
}

RegistModalOne.defaultProps = {
  isOpen: false,
  onClose: () => {},
  title: "",
};

RegistModalOne.propTypes = {
  isOpen: bool,
  onClose: func,
  title: string,
};

export default RegistModalOne;
