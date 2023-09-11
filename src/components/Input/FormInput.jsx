import { oneOf, string } from 'prop-types';
import styles from "./FormInput.module.css"

function FormInput({ label, inputRef, type, id, placeholder }) {
  return (
    <div className={styles.input__wrapper}>
      <label htmlFor={id} className="a11yHidden">{label}</label>
      <input
        className={styles.input}
        ref={inputRef}
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}
export default FormInput;

FormInput.propTypes = {
  label: string.isRequired,
  inputRef:,
  type: oneOf(['text', 'password', 'number', 'email']),
  name: string,
  id: string,
  placeholder: string.isRequired,
};