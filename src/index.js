import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import classes from "./index.module.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className={classes.App}>
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
