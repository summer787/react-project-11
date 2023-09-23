function debounce(callback, timeout = 200) {
  let cleanup;
  return (...args) => {
    clearTimeout(cleanup);
    cleanup = setTimeout(callback.bind(null, ...args), timeout);
  };
}

export default debounce;
