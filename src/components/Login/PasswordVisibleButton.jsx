import { bool, func } from 'prop-types';
import style from './PasswordVisibleButton.module.css';

function PasswordVisibleButton({ togglePasswordVisibility, passwordVisible }) {
  return (
    <button
      type='button'
      aria-label='비밀번호 보이기'
      className={`${style.password__visible} ${
        passwordVisible && style.visible__active
      }`}
      onClick={togglePasswordVisibility}
    />
  );
}

PasswordVisibleButton.defaultProps = {
  togglePasswordVisibility: null,
  passwordVisible: false,
};

PasswordVisibleButton.propTypes = {
  togglePasswordVisibility: func,
  passwordVisible: bool,
};

export default PasswordVisibleButton;
