import React, { useState } from 'react';
import debounce from '@/utils/debounce';
import UserTitle from '@/components/User/UserTitle';
import FormInput from '@/components/Login/FormInput';
import CheckboxRounded from '@/components/User/CheckboxRounded';
import UserInfo from '@/components/User/UserInfo';
import pb from '@/api/pocketbase';
import { useNavigate } from 'react-router-dom';
import Spinner from '@/components/Spinner';

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
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInput = debounce((e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    const { id, password } = formState;

    try {
      setIsLoading(true);
      const response = await pb
        .collection('users')
        .authWithPassword(id, password);
      console.log(response);
      setIsLoading(false);
      navigate('/home');
    } catch (error) {
      setIsLoading(false);
      const errorMessage =
        '일치하는 회원정보가 없습니다.\n이용하시는 계정 유형(TVING ID/CJ ONE/SNS)과\n아이디, 비밀번호를 다시 확인해주세요.';
      // eslint-disable-next-line no-alert
      alert(errorMessage);
    }
  };

  return (
    <div>
      <UserTitle title='TVING ID 로그인' />

      <form onSubmit={handleLogin}>
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
      <UserInfo userInfo={userInfo} />
      <Spinner isOpen={isLoading} />
    </div>
  );
}

export default TvingLogin;
