import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pb from '@/api/pocketbase';
import debounce from '@/utils/debounce';
import UserTitle from '@/components/User/UserTitle';
import UserInput from '@/components/Login/UserInput';
import CheckboxRounded from '@/components/User/CheckboxRounded';
import UserInfo from '@/components/User/UserInfo';
import FindUser from '@/components/Login/FindUser';
import Spinner from '@/components/Spinner';
import UserButton from '@/components/User/UserButton';
import style from './TvingLogin.module.css';

const userInfo = {
  text: '아직 계정이 없으신가요?',
  linkpath: '/user/tvingRegist',
  linktext: '회원가입 하기',
  styleClass: 'text__large',
};

function TvingLogin() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    id: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = debounce((e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    const { id, password } = formState;

    // eslint-disable-next-line no-alert
    const errorAlert = (message) => alert(message);

    if (id === '') {
      errorAlert('아이디를 입력해주세요.');
      return;
    }
    if (password === '') {
      errorAlert('비밀번호를 입력해주세요.');
      return;
    }

    try {
      setIsLoading(true);
      await pb.collection('users').authWithPassword(id, password);
      setIsLoading(false);

      navigate('/home');
    } catch (error) {
      setIsLoading(false);
      const errorMessage =
        '일치하는 회원정보가 없습니다.\n이용하시는 계정 유형(TVING ID/CJ ONE/SNS)과\n아이디, 비밀번호를 다시 확인해주세요.';
      errorAlert(errorMessage);
    }
  };

  return (
    <div>
      <UserTitle title='TVING ID 로그인' />

      <form onSubmit={handleLogin}>
        <div className={style.form__wrapper}>
          <UserInput
            type='text'
            name='id'
            label='아이디'
            autoComplete='username'
            onChange={handleInput}
          />
          <UserInput
            type='password'
            name='password'
            label='비밀번호'
            autoComplete='current-password'
            onChange={handleInput}
          />
          <CheckboxRounded label='자동로그인' />
          <UserButton type='submit' text='로그인하기' isActive isRed />
        </div>
      </form>
      <FindUser />
      <UserInfo userInfo={userInfo} />
      <Spinner isOpen={isLoading} />
    </div>
  );
}

export default TvingLogin;
