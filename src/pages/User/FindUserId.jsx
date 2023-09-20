/* eslint-disable no-alert */
import { useContext, useRef, useState } from 'react';
import debounce from '@/utils/debounce';
import pb from '@/api/pocketbase';
import { EmailReg } from '@/utils/validation';

import UserTitle from '@/components/User/UserTitle';
import UserSubTitle from '@/components/User/UserSubTitle';
import UserDescription from '@/components/User/UserDescription';
import UserInput from '@/components/User/UserInput';
import InputClearButton from '@/components/User/InputClearButton';
import UserButton from '@/components/User/UserButton';
import Unavailable from '@/components/User/Unavailable';
import Spinner from '@/components/Spinner';
import { FindUserContext } from '@/components/contexts/FindUserContext';
import { useNavigate } from 'react-router-dom';

import style from './FindUserId.module.css';

function FindUserId() {
  const [userEmailInput, setUserEmailInput] = useState('');
  const [activeEmailClear, setActiveEmailClear] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef(null);
  const { updateFindUserState } = useContext(FindUserContext);
  const navigate = useNavigate();

  // input 값 -> state(userEmail) 값
  const handleDebounceInput = debounce((e) => {
    const { value } = e.target;
    setUserEmailInput(value);

    // 값이 있거나 없음에 따라 clear 버튼 활성화 또는 비활성화
    setActiveEmailClear(true);
    if (value === '') {
      setActiveEmailClear(false);
    }
  });

  // input 값 초기화
  const handleClearInput = () => {
    setUserEmailInput('');
    emailInputRef.current.value = '';
    setActiveEmailClear(false);
    emailInputRef.current.focus();
  };

  const getUserId = async (emailInput) => {
    if (!EmailReg(emailInput)) {
      alert('이메일 주소를 입력해주세요.');
      return;
    }
    try {
      setIsLoading(true);
      const records = await pb
        .collection('users')
        .getFirstListItem(`email='${emailInput}'`);
      updateFindUserState(records);
      setIsLoading(false);
      navigate('/user/resultFindId');
    } catch (error) {
      setIsLoading(false);
      alert(
        '일치하는 이메일 정보가 없습니다. \n입력 내용을 다시 한 번 확인해주세요.'
      );
    }
  };

  // 아이디 찾기
  const handleFindId = (e) => {
    e.preventDefault();
    getUserId(userEmailInput);
  };

  return (
    <>
      <UserTitle title='아이디 찾기' />
      <section>
        <form action='submit' onSubmit={handleFindId}>
          <div className={style.find__id__rapper}>
            <div>
              <UserSubTitle text='이메일로 찾기' />
              <UserDescription text='가입 시 등록한 이메일을 입력해주세요.' />
            </div>
            <UserInput
              name='email'
              label='이메일'
              defaultValue={userEmailInput}
              autoComplete='email'
              onChange={handleDebounceInput}
              ref={emailInputRef}
            >
              {activeEmailClear && (
                <InputClearButton onClick={handleClearInput} />
              )}
            </UserInput>
            <UserButton type='submit' text='확인' isActive={activeEmailClear} />
          </div>
        </form>
      </section>
      <div className={style.division__wrapper}>
        <hr className={style.division__line} />
        <span className={style.division__text}>또는</span>
        <hr className={style.division__line} />
      </div>
      <section className={style.find__id__auth}>
        <div>
          <UserSubTitle text='본인인증으로 찾기' />
          <UserDescription text='이미 본인인증이 완료된 계정에 한하여 아이디 찾기가 가능합니다.' />
        </div>
        <UserButton type='button' text='본인인증하기' isActive />
      </section>
      <Spinner message='일치하는 정보를 찾는 중 입니다.' isOpen={isLoading} />
      <Unavailable service='본인인증으로 찾기' />
    </>
  );
}

export default FindUserId;
