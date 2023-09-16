import { useId } from 'react';
import { bool, func, oneOf, string } from 'prop-types';
import style from './UserInput.module.css';
import InputClearButton from './InputClearButton';
import PasswordVisibleButton from './PasswordVisibleButton';

function UserInput({
  type = 'text',
  name = null,
  label,
  onChange = null,
  togglePasswordVisibility,
  passwordVisible,
}) {
  const id = useId();

  return (
    <div className={style.user__input__wrapper}>
      <label htmlFor={id} className={style.form__input__label}>
        <span className='a11yHidden'>{label}</span>
        <input
          type={type}
          name={name}
          id={id}
          onChange={onChange}
          placeholder={label}
          className={style.form__input}
        />
      </label>
      <div className={style.user__input__buttons}>
        <InputClearButton />
        {name.includes('password') && (
          <PasswordVisibleButton
            togglePasswordVisibility={togglePasswordVisibility}
            passwordVisible={passwordVisible}
          />
        )}
      </div>
    </div>
  );
}

UserInput.defaultProps = {
  type: 'text',
  onChange: null,
  togglePasswordVisibility: null,
  passwordVisible: false,
};

UserInput.propTypes = {
  type: oneOf(['text', 'password', 'number', 'email', 'search']),
  name: string.isRequired,
  label: string.isRequired,
  onChange: func,
  togglePasswordVisibility: bool,
  passwordVisible: bool,
};

export default UserInput;
