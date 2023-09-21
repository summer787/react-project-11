import { string } from 'prop-types';
import style from './UserButtonShort.module.css';

function UserButtonShort({ text, color }) {
  const className =
    color === 'black'
      ? 'user__button__short__black'
      : 'user__button__short__white';

  return (
    <button
      type='button'
      className={`${style.user__button__short} ${style[className]}`}
    >
      {text}
    </button>
  );
}

UserButtonShort.defaultProps = {
  text: '',
  color: 'white',
};

UserButtonShort.propTypes = {
  text: string,
  color: string,
};

export default UserButtonShort;
