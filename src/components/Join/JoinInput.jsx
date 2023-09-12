import { oneOf, string } from 'prop-types';
import styles from "./JoinInput.module.css"

function JoinInput({ label, type, id, placeholder }) {
  return (
    <div className={styles.input__wrapper}>
      <label htmlFor={id} className="a11yHidden">{label}</label>
      <input
        className={styles.input}
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}
export default JoinInput;

JoinInput.propTypes = {
  label: string.isRequired,
  type: oneOf(['text', 'password', 'number', 'email']),
  name: string,
  id: string,
  placeholder: string.isRequired,
};