import React from "react";
import ReactDOM from "react-dom/client";
import axe from '@axe-core/react';
import ko from 'axe-core/locales/ko.json';
import App from "./App";
if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000, { locale: ko });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
