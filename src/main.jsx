import "../src/assets/styles/General.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/github-search_vite-app">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
