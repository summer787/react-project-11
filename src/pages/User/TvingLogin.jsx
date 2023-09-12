import CheckboxRounded from '@/components/User/CheckboxRounded';
import UserInfo from '@/components/User/UserInfo';
import UserTitle from '@/components/User/UserTitle';
import React from 'react';
import { Link } from 'react-router-dom';

const userInfo = {
  text: '아직 계정이 없으신가요?',
  linkpath: '/user/tvingRegist',
  linktext: '회원가입 하기',
  styleClass: 'text__large',
};

function TvingLogin() {
  return (
    <div>
      <UserTitle title='TVING ID 로그인' />
      <CheckboxRounded label='자동로그인' />
      <Link to='/user/tvingRegist'>
        <UserInfo userInfo={userInfo} />
      </Link>
    </div>
  );
}

export default TvingLogin;
