import { forwardRef, useId } from 'react';
import { func, oneOf, string, node } from 'prop-types';
import style from './UserInput.module.css';

function UserInput(
  {
    type = 'text',
    name = null,
    label,
    defaultValue,
    autoComplete,
    onChange = null,
    children,
  },
  ref
) {
  const id = useId();

  return (
    <div className={style.user__input__wrapper}>
      <label htmlFor={id} className={style.form__input__label}>
        <span className='a11yHidden'>{label}</span>
        <input
          type={type}
          name={name}
          id={id}
          placeholder={label}
          className={style.form__input}
          defaultValue={defaultValue}
          autoComplete={autoComplete}
          onChange={onChange}
          ref={ref}
        />
      </label>
      <div className={style.user__input__buttons}>{children}</div>
    </div>
  );
}

const UserInputRef = forwardRef(UserInput);

UserInput.defaultProps = {
  type: 'text',
  defaultValue: null,
  autoComplete: 'on',
  onChange: null,
  children: null,
};

UserInput.propTypes = {
  type: oneOf(['text', 'password', 'number', 'email', 'search']),
  name: string.isRequired,
  label: string.isRequired,
  defaultValue: string,
  autoComplete: string,
  onChange: func,
  children: node,
};

export default UserInputRef;
