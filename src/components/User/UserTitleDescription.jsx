import { bool, shape, string } from 'prop-types';
import style from './UserTitleDescription.module.css';

function UserTitleDescription({ activeImage, description }) {
  const { mainText, subText } = description;

  return (
    <div className={style.user__description__wrapper}>
      <span
        className={`${style.user__description__main} ${
          activeImage && style.active__check__image
        }`}
      >
        {mainText}
      </span>
      <q className={style.user__description__sub}>{subText}</q>
    </div>
  );
}

UserTitleDescription.defaultProps = {
  activeImage: false,
  description: shape({
    mainText: '',
    subText: '',
  }),
};

UserTitleDescription.propTypes = {
  activeImage: bool,
  description: shape({
    mainText: string,
    subText: string,
  }),
};

export default UserTitleDescription;
