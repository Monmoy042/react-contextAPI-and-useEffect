import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App.jsx";
import ClickMe from "./ClickMe";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <ClickMe />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
