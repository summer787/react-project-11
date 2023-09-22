import { bool, func, string } from 'prop-types';
import style from './CheckboxRounded.module.css';

function CheckboxRounded({ checked, label, onChange, isCenter }) {
  return (
    <div
      className={`${style.rounded__checkbox__wrapper} ${
        isCenter && style.rounded__checkbox__center
      }`}
    >
      <label
        htmlFor='rounded__checkbox'
        className={`${style.rounded__checkbox__label} ${
          checked && style.checked
        }`}
        onChange={onChange}
      >
        <input
          type='checkbox'
          name='rounded__checkbox'
          id='rounded__checkbox'
          className={style.rounded__checkbox}
          onChange={onChange}
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
  isCenter: bool,
};

export default CheckboxRounded;
