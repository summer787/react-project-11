import { bool, string } from 'prop-types';
import style from './UserButton.module.css';

function UserButton({ type, text, isActive, isRed }) {
  let className;

  if (isActive && !isRed) {
    className = 'active__white';
  } else if (isActive && isRed) {
    className = 'active__red';
  } else {
    className = 'inactive';
  }

  return (
    <button
      type={type ? 'submit' : 'button'}
      className={`${style[className]} ${style.UserButton}`}
      disabled={!isActive}
    >
      {text}
    </button>
  );
}

UserButton.defaultProps = {
  type: 'submit',
  text: '',
  isActive: false,
  isRed: false,
};

UserButton.propTypes = {
  type: string,
  text: string,
  isActive: bool,
  isRed: bool,
};

export default UserButton;
