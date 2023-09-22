import { NavLink } from 'react-router-dom';
import AccountImage from '@/assets/Account/account_icons';
import { bool, number, string } from 'prop-types';
import styles from './AccountButton.module.css';

const buttons = [
  {
    id: 1,
    text: 'TVING ID로 시작하기',
    image: AccountImage.tvingIcon,
    link: '/user/tvingLogin',
    isService: true,
  },
  {
    id: 2,
    text: '네이버로 시작하기',
    image: AccountImage.naverIcon,
    link: '#',
    isService: false,
  },
  {
    id: 3,
    text: '카카오로 시작하기',
    image: AccountImage.kakaoIcon,
    link: '#',
    isService: false,
  },
  {
    id: 4,
    text: '페이스북으로 시작하기',
    image: AccountImage.facebookIcon,
    link: '#',
    isService: false,
  },
  {
    id: 5,
    text: '트위터로 시작하기',
    image: AccountImage.twitterIcon,
    link: '#',
    isService: false,
  },
  {
    id: 6,
    text: 'Apple로 계속하기',
    image: AccountImage.appleIcon,
    link: '#',
    isService: false,
  },
  {
    id: 7,
    text: 'CJ ONE으로 시작하기',
    image: AccountImage.cjIcon,
    link: '#',
    isService: false,
  },
];

export function AccountButton({ id, text, image, link, isService }) {
  return (
    <NavLink to={link} key={id}>
      <button type='button' className={styles.account__button}>
        <div className={styles.button__content}>
          <img src={image} className={styles.icon__image} alt={text} />
        </div>
        <div className={styles.account__buttonlable__wrpper}>
          <span>{text}</span>
          {isService || (
            <span className={styles.account__onService}>서비스 예정</span>
          )}
        </div>
      </button>
    </NavLink>
  );
}

function AccountButtonLIst() {
  return (
    <div>
      {buttons.map((button) => (
        <AccountButton
          key={button.id}
          image={button.image}
          text={button.text}
          link={button.link}
          isService={button.isService}
          id={button.id}
        />
      ))}
    </div>
  );
}

AccountButton.defaultProps = {
  isService: true,
};

AccountButton.propTypes = {
  id: number.isRequired,
  text: string.isRequired,
  image: string.isRequired,
  link: string.isRequired,
  isService: bool,
};

export default AccountButtonLIst;
