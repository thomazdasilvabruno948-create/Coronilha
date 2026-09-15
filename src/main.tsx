import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { updateSeo } from "./seo";
import "./styles.css";
import "./contact-layout.css";
import "./fields-layout.css";
import "./detail-layout.css";

updateSeo(window.location.pathname);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

window.addEventListener("popstate", () => updateSeo(window.location.pathname));
