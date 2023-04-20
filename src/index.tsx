import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import ShoppingCartContextProvider from "./context/ShoppingCartContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ShoppingCartContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShoppingCartContextProvider>
  </React.StrictMode>
);
