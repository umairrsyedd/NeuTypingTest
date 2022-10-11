import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import store from "./State/Store";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <Home />
  </Provider>
);
