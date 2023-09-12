import React from 'react';
import  UserTitle from '@/components/User/UserTitle';
import styles from './TvingJoin.module.css';
import JoinInput from './../../components/Join/JoinInput';

function TvingJoin() {
  return <div>
    <UserTitle title='티빙 회원가입' />
    <h2 className={styles.join__subtitle}>아이디와 이메일로 간편하게 티빙을 시작하세요!</h2>
  

<div className='join__id'>
      <JoinInput  label="아이디" type="text" id="id" placeholder="아이디"/>
      <p className={styles.join__info}>
        영문 소문자 또는 영문 소문자, 숫자 조합 6~12 자리</p>
</div>

<div className='join__password'>
      <JoinInput  label="아이디" type="text" id="id" placeholder="비밀번호"/>
      <JoinInput  label="아이디" type="text" id="id" placeholder="비밀번호 확인"/>
      <p class="input-info">
        영문, 숫자, 특수문자(~!@#$%^&amp;*) 조합 8~15 자리</p>
</div>

<div>
<JoinInput  label="아이디" type="text" id="id" placeholder="비밀번호"/>
</div>



  
  </div>;
}

export default TvingJoin;