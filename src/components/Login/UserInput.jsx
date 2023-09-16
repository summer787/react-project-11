import { useId } from 'react';
import { func, oneOf, string } from 'prop-types';
import style from './UserInput.module.css';
import InputClearButton from './InputClearButton';
import PasswordVisibleButton from './PasswordVisibleButton';

function UserInput({
  type = 'text',
  name = null,
  label,
  autoComplete,
  onChange = null,
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
          autoComplete={autoComplete}
          onChange={onChange}
          placeholder={label}
          className={style.form__input}
        />
      </label>
      <div className={style.user__input__buttons}>
        <InputClearButton />
        <PasswordVisibleButton />
      </div>
    </div>
  );
}

UserInput.defaultProps = {
  onChange: null,
};

UserInput.propTypes = {
  type: oneOf(['text', 'password', 'number', 'email', 'search']).isRequired,
  name: string.isRequired,
  label: string.isRequired,
  autoComplete: string.isRequired,
  onChange: func,
};

export default UserInput;
