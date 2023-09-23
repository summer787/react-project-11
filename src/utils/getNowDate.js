function nowDate() {
  const now = new Date();
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };

  return new Intl.DateTimeFormat("ko-KR", options).format(now);
}

export default nowDate;
