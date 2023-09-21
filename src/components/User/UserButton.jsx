import { bool, string,func } from 'prop-types';
import style from './UserButton.module.css';

function UserButton({ type, text, isActive, isRed, onClick }) {
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
      onClick={onClick}
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
  onClick: null,
};

UserButton.propTypes = {
  type: string,
  text: string,
  isActive: bool,
  isRed: bool,
  onClick: func,
};

export default UserButton;
