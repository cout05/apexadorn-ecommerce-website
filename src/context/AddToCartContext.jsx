import React, { createContext, useState } from "react";

export const AddToCartContext = createContext();

const AddToCartProvider = ({ children }) => {
  const [addToCart, setAddToCart] = useState(false);
  return (
    <AddToCartContext.Provider value={{ addToCart, setAddToCart }}>
      {children}
    </AddToCartContext.Provider>
  );
};

export default AddToCartProvider;
