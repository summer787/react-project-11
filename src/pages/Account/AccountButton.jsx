import AccountImage from "@/assets/Account/account_icons";
import styles from "./AccountButton.module.css";

const buttons = [
  { id: 1, text: 'TVING ID로 시작하기', image: AccountImage.tvingIcon},
  { id: 2, text: '카카오로 시작하기', image: AccountImage.kakaoIcon},
];

function Button({ id, text, image }) {
  return (
    <button type="button" className={styles.accountbutton} key={id}>
      <img src={image} className={styles.iconimage} alt={text} />
      {text}
    </button>
  );
}

function AccountButton() {
  return (
    <div>
      {buttons.map((button) => (
        <Button key={button.id} {...button} />
      ))}
    </div>
  );
}

export default AccountButton;