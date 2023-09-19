import { string } from 'prop-types';
import { useState} from 'react';
import style from './CheckboxNoFilled.module.css';
// 아이디 라벨이랑 연결하기기
function CheckboxNoFilled({ label }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={style.nofilled__checkbox__wrapper}>
      <input
        type='checkbox'
        name='nofilled__checkbox'
        id=  {label}
        className={style.nofilled__checkbox}
        onChange={handleCheck}
      />
      <label
        htmlFor={label}


        className={`${style.nofilled__checkbox__label} ${
          isChecked && style.checked
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
