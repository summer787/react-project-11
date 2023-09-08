import { shape, string } from 'prop-types';
import style from './UserInfo.module.css';

function UserInfo({ userInfo }) {
  const { text, link, styleClass } = userInfo;

  return (
    <div className={`${style.user__info} ${style[styleClass]}`}>
      <span>{text}</span>
      <a href='/'>{link}</a>
    </div>
  );
}

UserInfo.defaultProps = {
  userInfo: null,
};

UserInfo.propTypes = {
  userInfo: shape({
    text: string.isRequired,
    link: string.isRequired,
    styleClass: string.isRequired,
  }),
};

export default UserInfo;
