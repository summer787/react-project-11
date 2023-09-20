import UserMain from '@/layout/User/UserMain';
import UserInfo from '@/components/User/UserInfo';
import UserTitle from '@/components/User/UserTitle';
import UserHeader from '@/layout/UserHeader/UserHeader';
import AccountButtonLIst from '@/components/Account/AccountButton';
import style from './Account.module.css';

const footerStyle = {
  height: '21.25rem',
};

function Account() {
  return (
    <div className={`${style.Account} ${style.background}`}>
      {/* 헤더 */}
      <UserHeader />
      {/* 메인 */}
      <UserMain>
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
      </UserMain>
      {/* 푸터 */}
      <footer style={footerStyle}>푸터</footer>
    </div>
  );
}

export default Account;
