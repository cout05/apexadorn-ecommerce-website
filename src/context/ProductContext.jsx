import React, { createContext, useState, useEffect } from "react";
import { fetchPost } from "../services/apiService";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchClothes = async () => {
      const response = await fetchPost();
      if (response) {
        setProducts(response);
      }
    };
    fetchClothes();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
