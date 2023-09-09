import styles from "./AccountHeader.module.css"

function AccountHeader() {
  return (
    <div className={styles.accountheader}>
        <h1 className>
            <img src="/account_tving_logo.svg" className={styles.headerimg} alt="tving" />
        </h1>
      </div>
  )
}

export default AccountHeader

