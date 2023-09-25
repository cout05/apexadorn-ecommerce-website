import { useEffect, useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartItemContext } from "../context/CartItemContext";

const Products = () => {
  const products = useContext(ProductContext);
  const { setCartItem } = useContext(CartItemContext);
  const [clothes, setClothes] = useState([]);

  // to fetch the clothes
  useEffect(() => {
    setClothes(products);
  }, [products]);

  const handleCart = (id) => {
    const filtered = clothes.filter((item) => item.id === id);
    setCartItem((prevState) => [...prevState, filtered[0]]);
  };

  return (
    <section className="bg-[#01161e] h-full md:h-screen pt-20 text-center">
      <h1 className="font-bold text-3xl  text-[#eff6e0]">
        ApexAdor Men's Clothing
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 pt-10">
        {clothes.map((item) => (
          <div
            className="border-2 w-[300px] xl:w-[300px] rounded h-[350px] px-5 xl:px-10 py-5 cursor-pointer bg-white"
            key={item.id}>
            <img
              className="max-h-[160px] m-auto mb-3"
              src={item.image}
              alt={item.title}
            />
            <h2 className="h-[50px] xl: mb-3">{item.title}</h2>
            <p className="text-green-700 mb-2">${item.price}</p>
            <div className="flex flex-col gap-2">
              <button
                className="bg-[#124559] p-2 rounded font-bold text-[#eff6e0]"
                onClick={() => handleCart(item.id)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
