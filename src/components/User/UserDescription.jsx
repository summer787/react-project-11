import { string } from 'prop-types';
import style from './UserDescription.module.css';

function UserDescription({ text }) {
  return <q className={style.user__description}>{text}</q>;
}

UserDescription.propTypes = {
  text: string.isRequired,
};

export default UserDescription;
