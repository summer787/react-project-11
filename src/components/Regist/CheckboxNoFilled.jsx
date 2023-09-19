import { string } from 'prop-types';
import { useState } from 'react';
import style from './CheckboxNoFilled.module.css';

function CheckboxNoFilled({ label, checked, onChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
    onChange()
  };

  return (
    <div className={style.nofilled__checkbox__wrapper}>
      <input
        type='checkbox'
        name='nofilled__checkbox'
        id={label}
        className={style.nofilled__checkbox}
        onChange={handleCheck}
        checked={checked}
      />
      <label
        htmlFor={label}
        className={`${style.nofilled__checkbox__label} ${
          checked && style.checked
        }`}
        onChange={handleCheck}
       
      >
        {label}
      </label>
    </div>
  );
}

CheckboxNoFilled.defaultProps = {
  label: '',
};

CheckboxNoFilled.propTypes = {
  label: string,
};

export default CheckboxNoFilled;
