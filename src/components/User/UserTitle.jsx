import PropTypes, { bool } from 'prop-types';
import style from './UserTitle.module.css';

function UserTitle({ title, a11yHidden }) {
  return (
    <div className={style.main__title}>
      <h2 className={`${a11yHidden && 'a11yHidden'}`}>{title}</h2>
    </div>
  );
}

UserTitle.defaultProps = {
  a11yHidden: false,
};

UserTitle.propTypes = {
  title: PropTypes.string.isRequired,
  a11yHidden: bool,
};

export default UserTitle;
