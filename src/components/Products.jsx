import { useEffect, useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartItemContext } from "../context/CartItemContext";

import { SidebarContext } from "../context/SidebarContext";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Products = () => {
  const { products } = useContext(ProductContext);
  const { setCartItem, cartItem } = useContext(CartItemContext);
  const [clothes, setClothes] = useState([]);
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // to fetch the clothes
  useEffect(() => {
    setClothes(products);
  }, [products]);

  const handleCart = (id) => {
    const filtered = clothes.filter((item) => item.id === id);
    setCartItem((prevState) => [...prevState, filtered[0]]);
  };

  return (
    <section className="text-center pb-4 md:w-[80%] ml-auto">
      <div
        onClick={handleClick}
        className="flex cursor-pointer justify-end p-5">
        <AiOutlineShoppingCart className="text-2xl" />
        Cart
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5 pt-10">
        {clothes.map((item) => (
          <div
            className="border-2 w-[150px] md:w-[300px] rounded h-[300px] md:h-[350px]
              py-5 cursor-pointer bg-white"
            key={item.id}>
            <img
              className="h-[120px] md:h-[160px] m-auto mb-3 object-contain"
              src={item.image}
              alt={item.title}
            />
            <h2 className="h-[50px] max-w-[200px] text-center md:m-auto text-[10px] xl:text-sm xl:mb-3">
              {item.title}
            </h2>
            <p className="text-green-700 mb-2 mt-7 md:mt-7">${item.price}</p>
            <div className="flex flex-col gap-2">
              <button
                className="bg-[#1c1c22] py-1 md:p-2 rounded text-sm md:text-md md:font-bold text-[#eff6e0] md:mx-2"
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
