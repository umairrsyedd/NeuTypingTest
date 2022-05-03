import React from "react";
import ReactDOM from "react-dom";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import store from "./State/Store";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);
