import UserTitle from '@/components/User/UserTitle';
import UserSubTitle from '@/components/User/UserSubTitle';
import UserDescription from '@/components/User/UserDescription';
import UserInput from '@/components/User/UserInput';
import InputClearButton from '@/components/User/InputClearButton';
import UserButton from '@/components/User/UserButton';
import { useRef, useState } from 'react';
import debounce from '@/utils/debounce';

import style from './FindUserId.module.css';

function FindUserId() {
  const [userEmail, setUserEmail] = useState('');
  const [activeEmailClear, setActiveEmailClear] = useState(false);
  const emailInputRef = useRef(null);

  const handleDebounceInput = debounce((e) => {
    const { value } = e.target;
    setUserEmail(value);

    // 값이 있거나 없음에 따라 clear 버튼 활성화 또는 비활성화
    setActiveEmailClear(true);
    if (value === '') {
      setActiveEmailClear(false);
    }
  });

  // input 값 초기화
  const handleClearInput = () => {
    setUserEmail('');
    emailInputRef.current.value = '';
    setActiveEmailClear(false);
    emailInputRef.current.focus();
  };

  return (
    <>
      <UserTitle title='아이디 찾기' />
      <section>
        <form action='submit'>
          <div className={style.find__id__rapper}>
            <div>
              <UserSubTitle text='이메일로 찾기' />
              <UserDescription text='가입 시 등록한 이메일을 입력해주세요.' />
            </div>
            <UserInput
              name='email'
              label='이메일'
              defaultValue={userEmail}
              autoComplete='email'
              onChange={handleDebounceInput}
              ref={emailInputRef}
            >
              {activeEmailClear && (
                <InputClearButton onClick={handleClearInput} />
              )}
            </UserInput>
            <UserButton type='submit' text='확인' />
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
    </>
  );
}

export default FindUserId;