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
        className=" text-[#fff] font-semibold md:bg-[rgb(28,28,34,0.8)] backdrop-blur-10 rounded-tl-[0%] rounded-tr-[0%] rounded-br-[50%] rounded-bl-[50%] flex items-center gap-1 cursor-pointer fixed right-3 top-2 md:top-[-20px] p-2 md:mr-0 md:mt-5 md:shadow-md">
        <AiOutlineShoppingCart className="text-xl md:text-2xl" />
        Cart
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center mx-2 md:mx-10 pt-[150px] md:pt-10">
        {clothes.map((item) => (
          <div
            onClick={() => handleCart(item.id)}
            className="flex-2 w-[170px] md:w-[320px] cursor-pointer mb-10"
            key={item.id}>
            <div className="bg-[#fff] h-[250px] md:h-[300px] mb-2 w-full py-10 md:p-10">
              <img
                className="h-[160px] mx-auto object-contain"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="w-full text-left">
              <p className="font-semibold text-md">{item.title}</p>
              <p className="capitalize text-[#2D3142bd] mb-2 font-semibold">
                {item.category}
              </p>
              <p className="text-green-700">
                $<span className="font-semibold">{item.price}</span>
              </p>
            </div>
          </div>
        ))}
        {addToCart ? <AddToCart filteredProduct={filteredProduct} /> : null}
      </div>
    </section>
  );
};

export default Products;
