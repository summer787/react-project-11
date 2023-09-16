export function UsernameReg(text) {
  const re = /^[a-z\d]{6,12}$/;
  return re.test(String(text));
}

export function PasswordReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*])[a-zA-Z0-9~!@#$%^&*]{8,15}$/;
  return re.test(String(text));
}