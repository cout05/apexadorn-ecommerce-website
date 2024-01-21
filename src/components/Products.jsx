import { useEffect, useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { SidebarContext } from "../context/SidebarContext";
import { AddToCartContext } from "../context/AddToCartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import AddToCart from "./AddToCart";

const Products = () => {
  const { products } = useContext(ProductContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { addToCart, setAddToCart } = useContext(AddToCartContext);
  const [clothes, setClothes] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setClothes(products);
  }, [products]);

  const handleCart = (id) => {
    setAddToCart(true);
    setFilteredProduct(() => clothes.filter((item) => item.id === id));
  };

  return (
    <section className="text-center pb-4 md:w-[80%] ml-auto">
      <div
        onClick={handleClick}
        className=" text-[#fff] md:text-neutral-950 rounded flex items-center gap-1 cursor-pointer fixed right-3 top-2 md:top-0 p-2 md:mr-0 md:mt-5 shadow-md">
        <AiOutlineShoppingCart className="text-xl md:text-2xl" />
        Cart
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5 pt-[120px] md:pt-10">
        {clothes.map((item) => (
          <div
            className="border-2 w-[150px] md:w-[300px] rounded h-[280px] md:h-[350px]
              py-5 cursor-pointer bg-[#fff]"
            key={item.id}>
            <img
              className="h-[120px] md:h-[160px] m-auto mb-3 object-contain"
              src={item.image}
              alt={item.title}
            />
            <h2 className="h-[50px] max-w-[200px] text-center md:m-auto text-[10px] xl:text-sm">
              {item.title}
            </h2>
            <p className="text-green-700 mt-0 md:mt-7 mb-2">${item.price}</p>
            <div className="flex flex-col gap-2">
              <button
                className="bg-[#1c1c22] py-1 md:p-2 rounded text-sm md:text-md md:font-bold text-[#fff] mx-3 md:mx-2"
                onClick={() => handleCart(item.id)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
        {addToCart ? <AddToCart filteredProduct={filteredProduct} /> : null}
      </div>
    </section>
  );
};

export default Products;
