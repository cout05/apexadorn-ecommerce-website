import React, { createContext, useState } from "react";

export const CartItemContext = createContext();

const CartItemProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  return (
    <CartItemContext.Provider value={{ cartItem, setCartItem }}>
      {children}
    </CartItemContext.Provider>
  );
};

export default CartItemProvider;
