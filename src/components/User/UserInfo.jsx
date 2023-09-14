import { shape, string } from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './UserInfo.module.css';

function UserInfo({ userInfo }) {
  const { text, linkpath, linktext, styleClass } = userInfo;

  return (
    <div className={`${style.user__info} ${style[styleClass]}`}>
      <span>{text}</span>
      <NavLink to={linkpath} className={`${style.link}`}>
        {linktext}
      </NavLink>
    </div>
  );
}

UserInfo.defaultProps = {
  userInfo: null,
};

UserInfo.propTypes = {
  userInfo: shape({
    text: string.isRequired,
    linkpath: string.isRequired,
    linktext: string.isRequired,
    styleClass: string.isRequired,
  }),
};

export default UserInfo;
