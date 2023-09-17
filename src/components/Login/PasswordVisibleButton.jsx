import { bool, func } from 'prop-types';
import style from './PasswordVisibleButton.module.css';

function PasswordVisibleButton({ isPasswordVisible, onClick }) {
  return (
    <button
      type='button'
      aria-label={isPasswordVisible ? '비밀번호 숨기기' : '비밀번호 보이기'}
      className={`${style.password__visible} ${
        isPasswordVisible && style.visible__active
      }`}
      onClick={onClick}
    />
  );
}

PasswordVisibleButton.defaultProps = {
  isPasswordVisible: false,
  onClick: null,
};

PasswordVisibleButton.propTypes = {
  isPasswordVisible: bool,
  onClick: func,
};

export default PasswordVisibleButton;
