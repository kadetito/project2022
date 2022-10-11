import React from "react";
import "./i18n";
import ReactDOM from "react-dom/client";
import BasePattern from "./BasePattern";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BasePattern />
  </React.StrictMode>
);
