import { string } from 'prop-types';
import { useState } from 'react';
import style from './CheckboxNoline.module.css';

function CheckboxNoline({ label }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={style.rounded__checkbox__wrapper}>
      <input
        type='checkbox'
        name='rounded__checkbox'
        id='rounded__checkbox'
        className={style.rounded__checkbox}
        onChange={handleCheck}
      />
      <label
        htmlFor='rounded__checkbox'
        className={`${style.rounded__checkbox__label} ${
          isChecked && style.checked
        }`}
        onChange={handleCheck}
      >
        {label}
      </label>
    </div>
  );
}

CheckboxNoline.defaultProps = {
  label: '',
};

CheckboxNoline.propTypes = {
  label: string,
};

export default CheckboxNoline;
