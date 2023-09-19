import { func } from 'prop-types';
import style from './InputClearButton.module.css';

function InputClearButton({ onClick }) {
  return (
    <button
      type='button'
      aria-label='입력 내용 지우기'
      className={style.input__clear__button}
      onClick={onClick}
    />
  );
}

InputClearButton.defaultProps = {
  onClick: null,
};

InputClearButton.propTypes = {
  onClick: func,
};

export default InputClearButton;
