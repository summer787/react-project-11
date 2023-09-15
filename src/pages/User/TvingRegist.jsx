import UserTitle from "@/components/User/UserTitle";
import pb from "@/api/pocketbase";

import { ClientResponseError } from "pocketbase";

import { useState } from "react";
import { Link } from "react-router-dom";

import RegistInput from "@/components/Regist/RegistInput";

import styles from "./TvingRegist.module.css";

function TvingRegist() {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
  });

  const handleRegist = async (e) => {
    e.preventDefault();

    // PocketBase SDK 인증 요청
    await pb.collection("users").create({
      ...formState,
      emailVisibility: true,
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <UserTitle title="티빙 회원가입" />
      <h2 className={styles.regist__subtitle}>
        아이디와 이메일로 간편하게 티빙을 시작하세요!
      </h2>

      <form onSubmit={handleRegist}  className={styles.regist__Form}>
        {/* 
     defaultValue 무엇 */}

        <RegistInput
          type="text"
          name="username"
          label="아이디"
          placeholder="아이디"
          defaultValue={formState.username}
          onChange={handleInput}
        />

        <RegistInput
          type="password"
          name="password"
          label="비밀번호"
          placeholder="비밀번호"
          defaultValue={formState.password}
          onChange={handleInput}
        />

        <RegistInput
          type="password"
          name="passwordConfirm"
          label="비밀번호 확인"
          placeholder="비밀번호 확인"
          defaultValue={formState.passwordConfirm}
          onChange={handleInput}
        />

        <RegistInput
          type="email"
          name="email"
          label="이메일"
          placeholder="이메일"
          defaultValue={formState.email}
          onChange={handleInput}
        />

        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}

export default TvingRegist;
