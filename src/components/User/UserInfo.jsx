import { string } from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './UserInfo.module.css';

function UserInfo({ text, linkpath, linktext, styleClass }) {
  // const { text, linkpath, linktext, styleClass } = userInfo;

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
  text: '',
  linkpath: '',
  linktext: '',
  styleClass: '',
};

UserInfo.propTypes = {
  text: string,
  linkpath: string,
  linktext: string,
  styleClass: string,
};

export default UserInfo;
