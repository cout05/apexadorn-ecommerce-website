import { useEffect, useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartItemContext } from "../context/CartItemContext";
import { SearchContext } from "../context/SearchContext";

const Products = () => {
  const { products } = useContext(ProductContext);
  const { setCartItem, cartItem } = useContext(CartItemContext);
  const { search } = useContext(SearchContext);
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
    <section className="pt-20 text-center mb-4">
      <div className="flex flex-wrap items-center justify-center gap-5 pt-10">
        {clothes.map((item) => (
          <div
            className="border-2 w-[200px] xl:w-[300px] rounded h-[350px]
              py-5 cursor-pointer bg-white"
            key={item.id}>
            <img
              className="h-[160px] m-auto mb-3 object-contain"
              src={item.image}
              alt={item.title}
            />
            <h2 className="h-[50px] max-w-[200px] text-center md:m-auto text-[10px] xl:text-sm xl:mb-3">
              {item.title}
            </h2>
            <p className="text-green-700 mb-2">${item.price}</p>
            <div className="flex flex-col gap-2">
              <button
                className="bg-[#1c1c22] p-2 rounded font-bold text-[#eff6e0] mx-2"
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
