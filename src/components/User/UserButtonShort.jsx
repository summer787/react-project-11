import { func, string } from 'prop-types';
import style from './UserButtonShort.module.css';

function UserButtonShort({ text, color, onChange }) {
  const className =
    color === 'black'
      ? 'user__button__short__black'
      : 'user__button__short__white';

  return (
    <button
      type='button'
      className={`${style.user__button__short} ${style[className]}`}
      onClick={onChange}
    >
      {text}
    </button>
  );
}

UserButtonShort.defaultProps = {
  text: '',
  color: 'white',
  onChange: null,
};

UserButtonShort.propTypes = {
  text: string,
  color: string,
  onChange: func,
};

export default UserButtonShort;
