import styles from "./AccountHeader.module.css"

function AccountHeader() {
  return (
    <header className={styles.account_header}>
        <h1 className="a11yHidden">티빙 로고</h1>
            <img src="/account_tving_logo.svg" className={styles.header_img} alt="tving" />
      </header>
  )
}

export default AccountHeader

