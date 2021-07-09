import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "./css2/style.css";
import "./css2/dashboard.css";

import "./css/swiper.css";
import "./css/jquery.scrollbar.css";
import "./css/ion.rangeSlider.min.css";
import "./css/select2.css";
import "./css/animate.css";
import "./css/daterangepicker.css";
import "./css/dropzone.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
