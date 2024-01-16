import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./context/ProductContext.jsx";
import SidebarProvider from "./context/SidebarContext.jsx";
import CartItemProvider from "./context/CartItemContext.jsx";
import AddToCartProvider from "./context/AddToCartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AddToCartProvider>
    <CartItemProvider>
      <SidebarProvider>
        <ProductProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ProductProvider>
      </SidebarProvider>
    </CartItemProvider>
  </AddToCartProvider>
);
