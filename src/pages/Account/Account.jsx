import UserTitle from '@/components/User/UserTitle';
import AccountButtonLIst from '@/components/Account/AccountButton';
import UserInfo from '@/components/User/UserInfo';
import style from './Account.module.css';

function Account() {
  return (
    <div className={`${style.Account} ${style.background}`}>
      <UserTitle title='로그인 계정 선택' a11yHidden />
      <div className={`${style.description}`}>
        <span>반가워요!</span>
        <span>계정을 선택해주세요.</span>
      </div>
      <AccountButtonLIst />
      <UserInfo
        text='아이디를 잊으셨나요?'
        linkpath='/user/findId'
        linktext='아이디 찾기'
        styleClass='text__small'
      />
    </div>
  );
}

export default Account;
