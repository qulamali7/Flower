import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import SearchProvider from "./context/SearchContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </React.StrictMode>
);
