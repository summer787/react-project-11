import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/components/contexts/AuthContext';
import debounce from '@/utils/debounce';
import UserTitle from '@/components/User/UserTitle';
import UserInput from '@/components/Login/UserInput';
import InputClearButton from '@/components/Login/InputClearButton';
import PasswordVisibleButton from '@/components/Login/PasswordVisibleButton';
import UserButton from '@/components/User/UserButton';
import Spinner from '@/components/Spinner';
import FindUser from '@/components/Login/FindUser';
import CheckboxRounded from '@/components/User/CheckboxRounded';
import UserInfo from '@/components/User/UserInfo';
import style from './TvingLogin.module.css';

function TvingLogin() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [formState, setFormState] = useState({
    id: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [activeIdClear, setActiveIdClear] = useState(false);
  const [activePasswordClear, setActivePasswordClear] = useState(false);

  const idInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  // input 값 -> state에 넣기
  const handleDebounceInput = debounce((e) => {
    const { name, value } = e.target;

    setFormState({ ...formState, [name]: value });

    // 값이 있거나 없음에 따라 clear 버튼 활성화 또는 비활성화
    if (name === 'id') {
      setActiveIdClear(true);
      if (value === '') {
        setActiveIdClear(false);
      }
    } else if (name === 'password') {
      setActivePasswordClear(true);
      if (value === '') {
        setActivePasswordClear(false);
      }
    }
  });

  // input 값 초기화
  const handleClearInput = (inputName) => {
    setFormState({ ...formState, [inputName]: '' });

    if (inputName === 'id') {
      idInputRef.current.value = '';
      setActiveIdClear(false);
      idInputRef.current.focus();
    } else if (inputName === 'password') {
      passwordInputRef.current.value = '';
      setActivePasswordClear(false);
      passwordInputRef.current.focus();
    }
  };

  // 비밀번호 숨기기 + 보이기
  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // 로그인하기
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
      await signIn(id, password);
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
          {/* id 입력 */}
          <UserInput
            name='id'
            label='아이디'
            defaultValue={formState.id}
            autoComplete='username'
            onChange={handleDebounceInput}
            ref={idInputRef}
          >
            {activeIdClear && (
              <InputClearButton onClick={() => handleClearInput('id')} />
            )}
          </UserInput>

          {/* 비밀번호 입력 */}
          <UserInput
            type={isPasswordVisible ? 'text' : 'password'}
            name='password'
            label='비밀번호'
            defaultValue={formState.password}
            autoComplete='current-password'
            onChange={handleDebounceInput}
            ref={passwordInputRef}
          >
            {activePasswordClear && (
              <InputClearButton onClick={() => handleClearInput('password')} />
            )}
            <PasswordVisibleButton
              isPasswordVisible={isPasswordVisible}
              onClick={handlePasswordVisibility}
            />
          </UserInput>

          {/* 자동로그인 체크 */}
          <CheckboxRounded label='자동로그인' />

          {/* 로그인하기 버튼 */}
          <UserButton type='submit' text='로그인하기' isActive isRed />
        </div>
      </form>

      {/* 아이디, 비밀번호 칮기 링크 */}
      <FindUser />

      {/* 회원가입하기 링크 */}
      <UserInfo
        text='아직 계정이 없으신가요?'
        linkpath='/user/tvingRegist'
        linktext='회원가입 하기'
        styleClass='text__large'
      />
      <Spinner message='로그인 중 입니다.' isOpen={isLoading} />
    </div>
  );
}

export default TvingLogin;
