import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import logo from "../src/logo.svg";
import PlanImg from "./img/YT.doympyOFlKE.План.JPG";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  // return (
  <div className="plan">
    <header className="plan__header">
      <img src={logo} className="plan__logo" alt="logo" />
      <p>
        Работа над <code>Plan/index.html</code>
      </p>
      <a
        className="plan__link"
        href="https://#"
        target="_blank"
        rel="noopener noreferrer"
      >
        План по изучению React
      </a>
    </header>
    <div className="plan__body">
      <img src={PlanImg} alt="PlanImg" />
    </div>
  </div>,
  // )
  document.getElementById("root")
);
