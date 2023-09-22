import { string } from 'prop-types';
import style from './UserSubTitle.module.css';

function UserSubTitle({ text }) {
  return <h3 className={style.user__subtitle}>{text}</h3>;
}

export default UserSubTitle;

UserSubTitle.propTypes = {
  text: string.isRequired,
};
