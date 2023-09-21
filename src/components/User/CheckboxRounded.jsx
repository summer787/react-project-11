import { bool, func, string } from 'prop-types';
import { useState } from 'react';
import style from './CheckboxRounded.module.css';

function CheckboxRounded({ checked, label, onChange, isCenter }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={`${style.rounded__checkbox__wrapper} ${
        isCenter && style.rounded__checkbox__center
      }`}
    >
      <label
        htmlFor='rounded__checkbox'
        className={`${style.rounded__checkbox__label} ${
          isChecked && style.checked
        } ${checked && style.checked}`}
        onChange={onChange || handleCheck}
      >
        <input
          type='checkbox'
          name='rounded__checkbox'
          id='rounded__checkbox'
          className={style.rounded__checkbox}
          onChange={onChange || handleCheck}
        />
        {label}
      </label>
    </div>
  );
}

CheckboxRounded.defaultProps = {
  checked: false,
  label: '',
  onChange: null,
  isCenter: false,
};

CheckboxRounded.propTypes = {
  checked: bool,
  label: string,
  onChange: func,
  isCenter: func,
};

export default CheckboxRounded;
