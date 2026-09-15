import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { updateSeo } from "./seo";
import "./styles.css";
import "./contact-layout.css";
import "./fields-layout.css";
import "./detail-layout.css";
import "./bege-background.css";
import "./theme-overrides.css";
import "./card-style-overrides.css";

updateSeo(window.location.pathname);

const originalPushState = window.history.pushState.bind(window.history);
window.history.pushState = ((state, unused, url) => {
  originalPushState(state, unused, url);
  updateSeo(window.location.pathname);
}) as typeof window.history.pushState;

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

window.addEventListener("popstate", () => updateSeo(window.location.pathname));
