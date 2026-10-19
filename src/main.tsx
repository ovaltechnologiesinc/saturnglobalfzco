import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// @ts-ignore CSS is loaded by the app's bundler.
import "./index.css";

// Restore SPA deep-link path if redirected via S3/CloudFront 404 fallback
const redirectPath = sessionStorage.getItem("spa_redirect_path");
if (redirectPath) {
  sessionStorage.removeItem("spa_redirect_path");
  window.history.replaceState(null, "", redirectPath);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
