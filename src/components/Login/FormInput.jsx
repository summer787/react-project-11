import { useId } from 'react';
import { func, oneOf, string } from 'prop-types';

function FormInput({
  type = 'text',
  name = null,
  label,
  autoComplete,
  onChange = null,
}) {
  const id = useId();

  return (
    <label htmlFor={id}>
      <span>{label}</span>
      <input
        type={type}
        name={name}
        id={id}
        autoComplete={autoComplete}
        onChange={onChange}
        placeholder={label}
      />
    </label>
  );
}

FormInput.defaultProps = {
  onChange: null,
};

FormInput.propTypes = {
  type: oneOf(['text', 'password', 'number', 'email', 'search']).isRequired,
  name: string.isRequired,
  label: string.isRequired,
  autoComplete: string.isRequired,
  onChange: func,
};

export default FormInput;
