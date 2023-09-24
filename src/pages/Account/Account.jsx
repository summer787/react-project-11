import UserTitle from '@/components/User/UserTitle';
import AccountButtonLIst from '@/components/Account/AccountButton';
import UserInfo from '@/components/User/UserInfo';
import { Helmet } from 'react-helmet-async';
import style from './Account.module.css';

function Account() {
  return (
    <>
      <Helmet>
        <title>로그인</title>
      </Helmet>
      <div className={style.account__wrapper}>
        <UserTitle title='로그인 계정 선택' a11yHidden />
        <div className={style.accout__description}>
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
    </>
  );
}

export default Account;
