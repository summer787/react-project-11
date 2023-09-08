import styles from "./AccountHeader.module.css"

function AccountHeader() {
  return (
    <div className={styles.accountheader}>
        <h1 className>
            <img src="/logo-tving.svg" className={styles.headerimg} alt="TAING" />
        </h1>
      </div>
  )
}

export default AccountHeader

<div>
      <h1>재사용 가능한 버튼</h1>
      <div>
        {buttonsData.map((button) => (
          <button key={button.id} className={styles.button}>
            {button.label}
          </button>
        ))}
      </div>
    </div>