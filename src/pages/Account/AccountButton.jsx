import AccountImage from "@/assets/Account/account_icons";
import PropTypes from "prop-types";
import styles from "./AccountButton.module.css";

const buttons = [
  { id: 1, text: 'TVING ID로 시작하기', image: AccountImage.tvingIcon},
  { id: 2, text: '네이버로 시작하기', image: AccountImage.naverIcon},
  { id: 3, text: '카카오로 시작하기', image: AccountImage.kakaoIcon},
  { id: 4, text: '페이스북으로 시작하기', image: AccountImage.facebookIcon},
  { id: 5, text: '트위터로 시작하기', image: AccountImage.twitterIcon},
  { id: 6, text: 'Apple로 계속하기', image: AccountImage.appleIcon},
  { id: 7, text: 'CJ ONE으로 시작하기', image: AccountImage.cjIcon},


];

function AccountButton({ id, text, image }) {
  return (
    <button type="button" className={styles.account_button} key={id}>
      <div className={styles.button_content}>
        <img src={image} className={styles.icon_image} alt={text} />
        <span>{text}</span>
      </div>
    </button>
  );
}

function AccountButtonLIst() {
  return (
    <div>
      {buttons.map((button) => (
        <AccountButton key={button.id}image={button.image}text={button.text}  />
      ))}
    </div>
  );
}

export default AccountButtonLIst;

AccountButton.propTypes = {
  id: PropTypes.number.isRequired,      
  text: PropTypes.string.isRequired,  
  image: PropTypes.string.isRequired, 
};