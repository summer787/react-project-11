import { string } from 'prop-types';
import style from './DivisionLine.module.css';

function DivisionLine({ text }) {
  return (
    <div className={style.division__wrapper}>
      <hr className={style.division__line} />
      {text && <span className={style.division__text}>{text}</span>}
      <hr className={style.division__line} />
    </div>
  );
}

DivisionLine.defaultProps = {
  text: '',
};

DivisionLine.propTypes = {
  text: string,
};

export default DivisionLine;
