import { useRef, useState } from 'react';
import debounce from '@/utils/debounce';
import UserTitle from '@/components/User/UserTitle';
import UserDescription from '@/components/User/UserDescription';
import UserInput from '@/components/User/UserInput';
import InputClearButton from '@/components/User/InputClearButton';
import UserButton from '@/components/User/UserButton';
import UserInfo from '@/components/User/UserInfo';
import style from './FindUserPassword.module.css';

function FindUserPassword() {
  const [userId, setUserId] = useState('');
  const [activeIdClear, setActiveIdClear] = useState(false);
  const IdInputRef = useRef(null);

  const handleDebounceInput = debounce((e) => {
    const { value } = e.target;
    setUserId(value);

    // 값이 있거나 없음에 따라 clear 버튼 활성화 또는 비활성화
    setActiveIdClear(true);
    if (value === '') {
      setActiveIdClear(false);
    }
  });

  // input 값 초기화
  const handleClearInput = () => {
    setUserId('');
    IdInputRef.current.value = '';
    setActiveIdClear(false);
    IdInputRef.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('죄송합니다, 현재 비밀번호 찾기 기능은 지원하고 있지 않습니다.');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.find__password__wrapper}>
        <UserTitle title='비밀번호 찾기' />
        <UserDescription text='아이디 확인 후 등록된 이메일 주소로 비밀번호 재설정을 위한 인증 메일이 발송됩니다. 이메일을 확인하여 12시간 이내에 비밀번호 재설정을 완료해주세요.' />
        <UserInput
          name='id'
          label='아이디'
          defaultValue={userId}
          autoComplete='username'
          onChange={handleDebounceInput}
          ref={IdInputRef}
        >
          {activeIdClear && (
            <InputClearButton onClick={() => handleClearInput('id')} />
          )}
        </UserInput>

        <UserButton type='submit' text='확인' isActive={activeIdClear} />
      </div>
      <UserInfo linktext='ⓘ 현재 이 기능은 지원 하고 있지 않습니다.' />
    </form>
  );
}

export default FindUserPassword;
