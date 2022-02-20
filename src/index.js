import React from "react";
import ReactDOM from "react-dom";
import Home from "./Pages/Home";
import "./index.css";
import { Provider } from "react-redux";
import store from "./State/Store";

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);
