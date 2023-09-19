import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import pb from '@/api/pocketbase';
import UserTitle from "@/components/User/UserTitle";
import CheckboxRounded from "@/components/User/CheckboxRounded";
import CheckboxNoline from "@/components/Join/CheckboxNoline";
import JoinButton from "@/components/Join/JoinButton";
import styles from "./TvingJoin.module.css";

// 아이디가 빈칸이면 라벨 입력한 내용이 없어요 빨간색
//영문 소문자 또는 영문 소문자, 숫자 조합 6~12 자리

function TvingJoin() {

  const [formState, setFormState] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
    email: '',
  });

  const handleJoin = async (e) => {
    e.preventDefault();

// // PocketBase SDK 인증 요청
// await pb.collection('users').create({
//   ...formState,
//   emailVisibility: true,
// });

  }

  return (
    <div className={styles.join__wrapper}>
      <UserTitle title="티빙 회원가입" />
      <h2 className={styles.join__subtitle}>
        아이디와 이메일로 간편하게 티빙을 시작하세요!
      </h2>
      
      <form onSubmit={handleJoin} className={styles.join__Form}>
        <div className="join__id">
          <JoinInput label="아이디" type="text" id="id" placeholder="아이디" />
          <p className={styles.join__info}>
            영문 소문자 또는 영문 소문자, 숫자 조합 6~12 자리
          </p>
        </div>
        <div className="join__password">
          <JoinInput
            label="아이디"
            type="text"
            id="id"
            placeholder="비밀번호"
          />
          <JoinInput
            label="아이디"
            type="text"
            id="id"
            placeholder="비밀번호 확인"
          />
          <p className={styles.join__info}>
            영문, 숫자, 특수문자(~!@#$%^&amp;*) 조합 8~15 자리
          </p>
        </div>
        <div>
          <JoinInput label="아이디" type="text" id="id" placeholder="이메일" />
        </div>
      </form>




      {/* -----------------다시하기--------------------------- */}
      {/* list중복은 map으로 해보기 */}
      {/*  필수 및 선택을 누르면 모든 리스트의 버튼들이 선택되어야 한다*/}
      {/* 만 14세와 필수 항목은 각각 따로 작동*/}
      {/* 선택항목은 한번 누르면 모두 클릭 */}
      {/* 푸쉬 알림 sms 이메일 누르면 마케팅은 무조건 클릭 */}
      {/* 선택 및 개인정보만 누를 수도 있다 */}
      {/* <ul>
        <li className={styles.agree__title}>
          <CheckboxRounded label="필수 및 선택 항목을 모두 포함하여 동의합니다." />
        </li>
      </ul>

      <ul className={styles.agree__list}>
        <li className={styles.agree__item}>
          <CheckboxNoline label="만 14세 이상입니다." />
        </li>
        <li className={styles.agree__item}>
          <CheckboxNoline label="[필수] 서비스 이용약관 동의" />
          <a href="#"> </a>
        </li>
        <li className={styles.agree__item}>
          <CheckboxNoline label="[필수] 개인정보 수집 및 이용 동의" />
        </li>
        <li className={styles.agree__item}>
          <CheckboxNoline label="[선택] 개인정보 수집 및 이용동의" />
        </li>
        <li className={styles.agree__item}>
          <CheckboxNoline label="[선택] 마케팅 정보 수신 동의" />
        </li>
      </ul>

      <ul className={styles.marketing__list}>
        <li>
          <input type="checkbox" />
          <label htmlFor="">푸쉬 알림</label>
        </li>
        <li>
          <input type="checkbox" />
          <label htmlFor="">이메일</label>
        </li>
        <li>
          <input type="checkbox" />
          <label htmlFor="">sms</label>
        </li>
      </ul> */}

      <button type="submit">가입하기</button>
    </div>
  );
}

export default TvingJoin;
