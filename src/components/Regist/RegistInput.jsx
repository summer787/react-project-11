import { forwardRef, useId } from "react";
import { func, node, oneOf, string } from "prop-types";
import styles from "./RegistInput.module.css";

function RegistInput(
  { type, name, label, placeholder, defaultValue, onChange, onBlur, children },
  ref
) {
  const id = useId();

  return (
    <div className={styles.input__wrapper}>
      <label htmlFor={id} className="a11yHidden">
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      />
      <div className={styles.user__input__buttons}>{children}</div>
    </div>
  );
}
const RegistInputRef = forwardRef(RegistInput);

RegistInput.defaultProps = {
  label: "",
  type: null,
  name: "",
  placeholder: "",
  defaultValue: "",
  onChange: () => {},
  onBlur: () => {},
  children: null,
};

RegistInput.propTypes = {
  label: string,
  type: oneOf(["text", "password", "number", "email"]),
  name: string,
  placeholder: string,
  defaultValue: string,
  onChange: func,
  onBlur: func,
  children: node,
};

export default RegistInputRef;
