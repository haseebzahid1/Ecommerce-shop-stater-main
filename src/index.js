import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//product provider
import ProductProvider from "./contexts/ProductContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductProvider>
    <React.StrictMode>
      <BrowserRouter>
        {" "}
        <App />{" "}
      </BrowserRouter>
    </React.StrictMode>
  </ProductProvider>
);
