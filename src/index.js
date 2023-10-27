import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";

import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { HashRouter } from "react-router-dom";
import store from "@/store";

import "normalize.css";
import "@/assets/css/index.less";
import theme from "assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Suspense fallback="loading">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
  // </React.StrictMode>
);
