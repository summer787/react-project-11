import UserMain from '@/layout/User/UserMain';
import style from './Account.module.css';
import UserInfo from '../../components/User/UserInfo';
import UserTitle from '../../components/User/UserTitle';

const headerStyle = {
  height: '4.0625rem',
};

const footerStyle = {
  height: '21.25rem',
};

const userInfo = {
  text: '아이디를 잊으셨나요?',
  link: '아이디 찾기',
  styleClass: 'text__small',
};

const accoutList = [
  {
    id: 'a1',
    name: 'TVING',
    img: 'https://image.tving.com/public/user/images/icon-id-tving.svg',
  },
  {
    id: 'a2',
    name: '카카오',
    img: 'https://image.tving.com/public/user/images/icon-id-kakao.svg',
  },
  {
    id: 'a3',
    name: '카카오',
    img: 'https://image.tving.com/public/user/images/icon-id-kakao.svg',
  },
  {
    id: 'a4',
    name: '카카오',
    img: 'https://image.tving.com/public/user/images/icon-id-kakao.svg',
  },
  {
    id: 'a5',
    name: '카카오',
    img: 'https://image.tving.com/public/user/images/icon-id-kakao.svg',
  },
  {
    id: 'a6',
    name: '카카오',
    img: 'https://image.tving.com/public/user/images/icon-id-kakao.svg',
  },
  {
    id: 'a7',
    name: '카카오',
    img: 'https://image.tving.com/public/user/images/icon-id-kakao.svg',
  },
];

function Account() {
  return (
    <div className={`${style.Account} ${style.background}`}>
      {/* 헤더 */}
      <header style={headerStyle}>헤더</header>
      {/* 메인 */}
      <UserMain>
        <UserTitle title='로그인 계정 선택' a11yHidden />
        <div className={`${style.description}`}>
          <span>반가워요!</span>
          <span>계정을 선택해주세요.</span>
        </div>

        <ListItem list={accoutList} />

        <UserInfo userInfo={userInfo} />
      </UserMain>
      {/* 푸터 */}
      <footer style={footerStyle}>푸터</footer>
    </div>
  );
}

function ListItem({ list }) {
  const accouts = list.map((item) => (
    <li
      key={item.id}
      style={{
        textAlign: 'center',
        padding: '1rem',
        marginBottom: '1rem',
        border: '1px solid white',
        color: 'white',
      }}
    >
      <img src={item.img} alt={item.name} />
      <span>{item.name}로 시작하기</span>
    </li>
  ));
  return <ul style={{ height: '100%' }}>{accouts}</ul>;
}

export default Account;
