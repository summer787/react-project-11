import CheckboxRounded from '@/components/User/CheckboxRounded';
import UserTitle from '@/components/User/UserTitle';
import React from 'react';
import { Link } from 'react-router-dom';

function TvingLogin() {
  return (
    <div>
      <UserTitle title='TVING ID 로그인' />
      <CheckboxRounded label='자동로그인' />
      <Link to='/user/tvingRegist'>회원가입으로 이동</Link>
    </div>
  );
}

export default TvingLogin;
