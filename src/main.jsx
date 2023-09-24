import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import axe from "@axe-core/react";
import ko from "axe-core/locales/ko.json";
import App from "./App";

const queryClient = new QueryClient();

if (process.env.NODE_ENV !== "production") {
  axe(React, ReactDOM, 1000, { locale: ko });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  </React.StrictMode>
);