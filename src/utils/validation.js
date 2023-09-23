export function UsernameReg(text) {
  const re = /^[a-z\d]{6,12}$/;
  return re.test(String(text));
}

export function PasswordReg(text) {
  const re =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*])[a-zA-Z0-9~!@#$%^&*]{8,15}$/;
  return re.test(String(text));
}

export function EmailReg(email) {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(String(email));
}
