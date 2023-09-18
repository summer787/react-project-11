import UserTitle from "@/components/User/UserTitle";
import pb from "@/api/pocketbase";
import agreementIcon from '@/assets/Regist/agreement_icon_link.svg';
import { UsernameReg, PasswordReg } from "@/utils/validation";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import debounce from "@/utils/debounce";
import RegistInput from "@/components/Regist/RegistInput";
import CheckboxRounded from "@/components/User/CheckboxRounded";
import CheckboxNoFilled from "@/components/Regist/CheckboxNoFilled";
import UserButton from "@/components/User/UserButton";
import InputClearButton from "@/components/User/InputClearButton";
import PasswordVisibleButton from "@/components/User/PasswordVisibleButton";
import styles from "./TvingRegist.module.css";

function TvingRegist() {
  const navigate = useNavigate();

  // console.log(pb)

  const [formState, setFormState] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
  });

  // 비밀번호 타입버튼 클리어 버튼 상태
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [activeIdClear, setActiveIdClear] = useState(false);
  const [activePasswordClear, setActivePasswordClear] = useState(false);
  const [activeConfirmClear, setActiveConfirmClear] = useState(false);
  const [activeEmailClear, setActiveEmailClear] = useState(false);

  const idInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const confirmInputRef = useRef(null);
  const emailInputRef = useRef(null);

  //  input 값 안내 문구 상태
  const [usernameInfo, setUsernameInfo] = useState(
    "영문 소문자 또는 영문 소문자, 숫자 조합 6~12자리"
  );
  const [passwordInfo, setPasswordInfo] = useState("");
  const [pwconfirmInfo, setPwconfirmInfo] = useState(
    "영문, 문자, 특수문자(~!@#$%^&*)조합 8~15 자리"
  );

  // 안내 문구 색상 변화 위한 상태
  const [usernameIsred, setUsernameIsred] = useState(false);
  const [passwordIsred, setPasswordIsred] = useState(false);
  const [pwConfirmIsred, setPwConfirmIsred] = useState(false);

// 체크 박스 상태 
const [allChecked, setAllChecked] = useState(false);
const [checked, setChecked] = useState({
  ageAgree: false,
  requiredService: false,
  requiredPersonalInfo: false,
  optionalPersonalInfo: false,
  marketingInfo: false
});



  // 입력한 값이 없을 때 onBlur함수
  const handleBlur = (name) => {
    const { username, passwordConfirm } = formState;

    if (name === "username" && username === "") {
      setUsernameInfo("입력한 값이 없어요");
      setUsernameIsred(true);
    }

    if (name === "passwordConfirm" && passwordConfirm === "") {
      setPwconfirmInfo("입력한 값이 없어요");
      setPwConfirmIsred(true);
    }
  };

  // 유효성 검사 함수
  const handleValidate = (name, value) => {
    const { password } = formState;

    // username 유효성 검사 실패
    if (name === "username" && !UsernameReg(value)) {
      setUsernameInfo(
        "영문 소문자 또는 영문소문자, 숫자 조합 6~12 자리로 입력해주세요"
      );
      setUsernameIsred(true);
      return;
    }

    // username 유효성 검사 통과
    if (name === "username" && UsernameReg(value)) {
      setUsernameInfo("영문 소문자 또는 영문 소문자, 숫자 조합 6~12자리");
      setUsernameIsred(false);
      return;
    }

    // password 유효성 검사 실패
    if (name === "password" && !PasswordReg(value)) {
      setPasswordInfo(
        "영문, 숫자, 특수문자 (~!@#$%^&*) 조합 8~15 자리 로 입력해주세요."
      );
      setPasswordIsred(true);
      return;
    }

    // password 유효성 검사 성공
    if (name === "password" && PasswordReg(value)) {
      setPasswordInfo("");
      setPasswordIsred(false);
      return;
    }

    // 비밀번호 값이 서로 다를 때
    if (name === "passwordConfirm" && password !== value) {
      setPwconfirmInfo("일치하지 않습니다. 다시 입력해주세요.");
      setPwConfirmIsred(true);
      return;
    }

    // 비밀번호 값이 같을 때
    if (name === "passwordConfirm" && password === value) {
      setPwconfirmInfo("");
      setPwConfirmIsred(false);
    }
  };

  // 체크 박스 한 번에 전부 선택
  const handleAllChecked = () => {
    setAllChecked(!allChecked);
    setChecked({
      ageAgree: !allChecked,
      requiredService: !allChecked,
      requiredPersonalInfo: !allChecked,
      optionalPersonalInfo: !allChecked,
      marketingInfo: !allChecked
    });
  };




  const handleRegist = async (e) => {
    e.preventDefault();

    // PocketBase SDK 요청
    await pb.collection("users").create({
      ...formState,
      emailVisibility: true,
    });
  };

  const activeClearButton = (name, value) => {
    // 값이 있거나 없음에 따라 clear 버튼 활성화 또는 비활성화
    if (name === "username") {
      setActiveIdClear(true);
      if (value === "") {
        setActiveIdClear(false);
      }
    } else if (name === "password") {
      setActivePasswordClear(true);
      if (value === "") {
        setActivePasswordClear(false);
      }
    } else if (name === "passwordConfirm") {
      setActiveConfirmClear(true);
      if (value === "") {
        setActiveConfirmClear(false);
      }
    } else if (name === "email") {
      setActiveEmailClear(true);
      if (value === "") {
        setActiveEmailClear(false);
      }
    }
  };

  const handleInput = debounce((e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });

    activeClearButton(name, value);

    handleValidate(name, value);
  });

  // input 값 초기화
  const handleClearInput = (inputName) => {
    setFormState({ ...formState, [inputName]: "" });

    if (inputName === "id") {
      idInputRef.current.value = "";
      setActiveIdClear(false);
      idInputRef.current.focus();
    } else if (inputName === "password") {
      passwordInputRef.current.value = "";
      setActivePasswordClear(false);
      passwordInputRef.current.focus();
    } else if (inputName === "passwordConfirm") {
      confirmInputRef.current.value = "";
      setActiveConfirmClear(false);
      confirmInputRef.current.focus();
    } else if (inputName === "email") {
      emailInputRef.current.value = "";
      setActiveEmailClear(false);
      emailInputRef.current.focus();
    }
  };

  // 비밀번호 숨기기 + 보이기
  const handlePasswordVisibility = (inputName) => {
    if (inputName === "password") {
      setIsPasswordVisible(!isPasswordVisible);
    } else if (inputName === "passwordConfirm") {
      setIsConfirmVisible(!isConfirmVisible);
    }
  };

  return (
    <div>
      <UserTitle title="티빙 회원가입" />
      <h2 className={styles.regist__subtitle}>
        아이디와 이메일로 간편하게 티빙을 시작하세요!
      </h2>

      <form onSubmit={handleRegist} className={styles.regist__Form}>
        <RegistInput
          type="text"
          name="username"
          label="아이디"
          placeholder="아이디"
          defaultValue={formState.username}
          onChange={handleInput}
          onBlur={() => handleBlur("username")}
          ref={idInputRef}
        >
          {activeIdClear && (
            <InputClearButton onClick={() => handleClearInput("id")} />
          )}
        </RegistInput>

        <p
          className={`${styles.regist__info} ${usernameIsred && styles.isred}`}
        >
          {usernameInfo}
        </p>

        <RegistInput
          type={isPasswordVisible ? "text" : "password"}
          name="password"
          label="비밀번호"
          placeholder="비밀번호"
          defaultValue={formState.password}
          onChange={handleInput}
          ref={passwordInputRef}
        >
          {activePasswordClear && (
            <InputClearButton onClick={() => handleClearInput("password")} />
          )}
          <PasswordVisibleButton
            isPasswordVisible={isPasswordVisible}
            onClick={() => handlePasswordVisibility("password")}
          />
        </RegistInput>
        <p
          className={`${styles.regist__info} ${passwordIsred && styles.isred}`}
        >
          {passwordInfo}
        </p>

        <RegistInput
          type={isConfirmVisible ? "text" : "password"}
          name="passwordConfirm"
          label="비밀번호 확인"
          placeholder="비밀번호 확인"
          defaultValue={formState.passwordConfirm}
          onChange={handleInput}
          onBlur={() => handleBlur("passwordConfirm")}
          ref={confirmInputRef}
        >
          {activeConfirmClear && (
            <InputClearButton
              onClick={() => handleClearInput("passwordConfirm")}
            />
          )}
          <PasswordVisibleButton
            isPasswordVisible={isConfirmVisible}
            onClick={() => handlePasswordVisibility("passwordConfirm")}
          />
        </RegistInput>

        <p
          className={`${styles.regist__info} ${pwConfirmIsred && styles.isred}`}
        >
          {pwconfirmInfo}
        </p>

        <RegistInput
          type="email"
          name="email"
          label="이메일"
          placeholder="이메일"
          defaultValue={formState.email}
          onChange={handleInput}
          ref={emailInputRef}
        >
          {activeEmailClear && (
            <InputClearButton onClick={() => handleClearInput("email")} />
          )}
        </RegistInput>

        <ul>
          <li className={styles.agree__title}>
            <CheckboxRounded label="필수 및 선택 항목을 모두 포함하여 동의합니다." checked={allChecked} onChange={handleAllChecked}/>
          </li>
        </ul>

        <ul className={styles.agree__list}>
          <li className={styles.agree__item}>
            <CheckboxNoFilled label="만 14세 이상입니다."  checked={checked.ageAgree}/>
          </li>
          <li className={styles.agree__item}>
            <CheckboxNoFilled label="[필수] 서비스 이용약관 동의" checked={checked.requiredService} />
            <a href="#" className={styles.agree__link}> <img src={agreementIcon}  alt="#" /> </a>
          </li>
          <li className={styles.agree__item}>
            <CheckboxNoFilled label="[필수] 개인정보 수집 및 이용 동의"checked={checked.requiredPersonalInfo} />
            <a href="#" className={styles.agree__link}> <img src={agreementIcon}  alt="#" /> </a>
          </li>
          <li className={styles.agree__item}>
            <CheckboxNoFilled label="[선택] 개인정보 수집 및 이용동의" checked={checked.optionalPersonalInfo}/>
            <a href="#" className={styles.agree__link}> <img src={agreementIcon}  alt="#" /> </a>
          </li>
          <li className={styles.agree__item}>
            <CheckboxNoFilled label="[선택] 마케팅 정보 수신 동의" checked={checked.marketingInfo}/>
            <a href="#" className={styles.agree__link}> <img src={agreementIcon}  alt="#" /> </a>
          </li>
        </ul>

        <UserButton type="submit" text="가입하기" isActive isRed />
      </form>
    </div>
  );
}

export default TvingRegist;
