import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./services/reportWebVitals";
import EnneagramTestPage from "./pages/EnneagramTestPage";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <EnneagramTestPage />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
