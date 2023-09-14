import FormInput from '@/components/Login/FormInput';
import CheckboxRounded from '@/components/User/CheckboxRounded';
import UserInfo from '@/components/User/UserInfo';
import UserTitle from '@/components/User/UserTitle';
import debounce from '@/utils/debounce';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const userInfo = {
  text: '아직 계정이 없으신가요?',
  linkpath: '/user/tvingRegist',
  linktext: '회원가입 하기',
  styleClass: 'text__large',
};

function TvingLogin() {
  const [formState, setFormState] = useState({
    id: '',
    password: '',
  });

  const handleInput = debounce((e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  });

  return (
    <div>
      <UserTitle title='TVING ID 로그인' />

      <form>
        <FormInput
          type='text'
          name='id'
          label='아이디'
          autoComplete='username'
          onChange={handleInput}
        />
        <FormInput
          type='password'
          name='password'
          label='비밀번호'
          autoComplete='current-password'
          onChange={handleInput}
        />
        <button type='submit'>로그인하기</button>
      </form>

      <CheckboxRounded label='자동로그인' />
      <Link to='/user/tvingRegist'>
        <UserInfo userInfo={userInfo} />
      </Link>
    </div>
  );
}

export default TvingLogin;
