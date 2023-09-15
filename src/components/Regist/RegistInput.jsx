import { useId } from 'react';
import { oneOf, string, number } from 'prop-types';
import styles from "./RegistInput.module.css"

function RegistInput({ type, name, label, placeholder, defaultValue, onChange}) {

    const id = useId();

    return (
    <div className={styles.input__wrapper}>
      
      <label htmlFor={id} className="a11yHidden">{label}</label>
      <input
        className={styles.input}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
}

RegistInput.propTypes = {
  label: string.isRequired,
  type: oneOf(['text', 'password', 'number', 'email']),
  name: string,
  id: string,
  placeholder: string.isRequired,
  defaultValue : string,
};

export default RegistInput;