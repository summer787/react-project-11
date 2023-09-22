import { string, bool } from 'prop-types';
import style from './UserTitle.module.css';

function UserTitle({ title, a11yHidden, sidePosition }) {
  return (
    <div
      className={`${style.main__title__wrapper} ${
        sidePosition ? style.main__title__side : style.main__title__center
      }`}
    >
      <h2 className={`${a11yHidden && 'a11yHidden'} ${style.main__title}`}>
        {title}
      </h2>
    </div>
  );
}

UserTitle.defaultProps = {
  sidePosition: false,
  a11yHidden: false,
};

UserTitle.propTypes = {
  title: string.isRequired,
  sidePosition: bool,
  a11yHidden: bool,
};

export default UserTitle;
