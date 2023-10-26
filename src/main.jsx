import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./context/ProductContext.jsx";
import SidebarProvider from "./context/SidebarContext.jsx";
import CartItemProvider from "./context/CartItemContext.jsx";
import SearchProvider from "./context/SearchContext.jsx";
import MobileSidebarProvider from "./context/MobileSidebarContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MobileSidebarProvider>
    <SearchProvider>
      <CartItemProvider>
        <SidebarProvider>
          <ProductProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ProductProvider>
        </SidebarProvider>
      </CartItemProvider>
    </SearchProvider>
  </MobileSidebarProvider>
);
