import UserMain from './UserMain';

const headerStyle = {
  // background: '#ffc0cb19',
  height: '4.0625rem',
};

const footerStyle = {
  // background: '#ffff0066',
  height: '21.25rem',
};

function User() {
  return (
    <>
      {/* 헤더 */}
      <header style={headerStyle}>헤더</header>
      {/* 메인 */}
      <UserMain>
        <div>usemain</div>
      </UserMain>
      {/* 푸터 */}
      <footer style={footerStyle}>푸터</footer>
    </>
  );
}

export default User;
