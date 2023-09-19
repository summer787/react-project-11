import { NavLink } from 'react-router-dom';
import style from './FindUser.module.css';

function FindUser() {
  return (
    <ul className={style.find__user__list}>
      <li className={style.find__user__item}>
        <NavLink to='/user/findId' className={style.find__user__link}>
          아이디 찾기
        </NavLink>
      </li>
      <li className={style.find__user__item}>
        <NavLink className={style.find__user__link}>비밀번호 찾기</NavLink>
      </li>
    </ul>
  );
}

export default FindUser;
