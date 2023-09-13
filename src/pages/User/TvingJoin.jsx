import React from 'react';
import  UserTitle from '@/components/User/UserTitle';
import styles from './TvingJoin.module.css';
import JoinInput from './../../components/Join/JoinInput';
import CheckboxRounded from '@/components/User/CheckboxRounded';


function TvingJoin() {
  return <div className={styles.join__wrapper}>
    <UserTitle title='티빙 회원가입' />
    <h2 className={styles.join__subtitle}>아이디와 이메일로 간편하게 티빙을 시작하세요!</h2>
  

<div className={styles.join__Form}>
  <div className='join__id'>
        <JoinInput  label="아이디" type="text" id="id" placeholder="아이디" />
        <p className={styles.join__info}>
          영문 소문자 또는 영문 소문자, 숫자 조합 6~12 자리</p>
  </div>
  <div className='join__password'>
        <JoinInput  label="아이디" type="text" id="id" placeholder="비밀번호"/>
        <JoinInput  label="아이디" type="text" id="id" placeholder="비밀번호 확인"/>
        <p className={styles.join__info}>
          영문, 숫자, 특수문자(~!@#$%^&amp;*) 조합 8~15 자리</p>
  </div>
  <div>
  <JoinInput  label="아이디" type="text" id="id" placeholder="이메일"/>
  </div>
</div>




<ul>
  <li className={styles.agree__title}>
    <CheckboxRounded />
    <span>필수 및 선택 항목을 모두 포함하여 동의합니다.</span>
  </li>
</ul>

<ul className={styles.agree__list}>

<li className={styles.agree__item}>
    <input type="checkbox" id="item1" name="items" />
    <label htmlFor="item1"> 만 14세 이상입니다.</label>
</li>
<li className={styles.agree__item}>
    <input type="checkbox" id="item1" name="items" />
    <label htmlFor="item1"> [필수] 서비스 이용약관 동의</label>
    <a href="#"> </a>
</li>
<li className={styles.agree__item}>
    <input type="checkbox" id="item1" name="items" />
    <label htmlFor="item1"> [필수] 개인정보 수집 및 이용 동의</label>
</li>
<li className={styles.agree__item}>
    <input type="checkbox" id="item1" name="items" />
    <label htmlFor="item1"> [선택] 개인정보 수집 및 이용동의</label>
</li>
<li className={styles.agree__item}>
    <input type="checkbox" id="item1" name="items" />
    <label htmlFor="item1"> [선택] 마케팅 정보 수신 동의</label>
</li>




</ul>

  
  </div>;
}

export default TvingJoin;