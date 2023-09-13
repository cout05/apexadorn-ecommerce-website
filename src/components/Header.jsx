import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiClothes } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect } from "react";

const Header = (id) => {
  const [isClicked, setIsClicked] = useState(false);
  const [clothes, setClothes] = useState([]);
  const [items, setItems] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [amount, setAmount] = useState();

  useEffect(() => {
    const fetchClothes = () => {
      fetch("https://fakestoreapi.com/products/category/men's clothing")
        .then((res) => res.json())
        .then((json) => setClothes(json));
    };
    fetchClothes();
  }, []);

  useEffect(() => {
    if (id.passId !== undefined) {
      setItems(id.passId);
    }
  }, [id]);

  useEffect(() => {
    const filteredItems = clothes.filter((item) => item.id === items);
    if (
      filteredItems !== undefined &&
      filteredItems.length > 0 &&
      !filtered.includes(filteredItems[0])
    ) {
      setFiltered((prevFiltered) => [...prevFiltered, filteredItems[0]]);
    } else {
      const filteredamount = filteredItems.filter((item, index) =>
        filtered.includes(item)
      );
    }
  }, [items]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <header className="flex fixed w-full justify-between p-4 px-10 md:px-20 text-[#eff6e0]">
      <div>
        <GiClothes className="text-2xl font-bold opacity-50" />
      </div>

      <nav>
        <ul className="hidden md:flex gap-5 font-bold">
          <Link to="/">Home</Link>
          <Link to="/products">Product</Link>
          <button onClick={handleClick}>
            <AiOutlineShoppingCart className="text-xl" />
          </button>
        </ul>

        {isClicked && (
          <div className=" bg-black text-white w-[400px] h-[400px] absolute right-11 top-16 rounded overflow-y-auto">
            <div className="fixed flex items-center justify-between px-4 w-[383px] bg-black rounded">
              <h2 className="text-sm font-semibold py-2 ">SHOPPING BAG</h2>
              <p>items: {filtered.length}</p>
            </div>

            <div className="mt-[40px]">
              {filtered.length > 0 ? (
                <div className="flex flex-col gap-1">
                  {filtered.map((item, index) => (
                    <div
                      className="flex gap-2 pr-2 justify-between"
                      key={index}>
                      <div className="flex">
                        <img
                          className="w-[50px] h-[50px] object-contain"
                          src={item.image}
                          alt={item.title}
                        />
                        <div>
                          <p className="text-sm">{item.title}</p>
                          <p>{item.price}</p>
                        </div>
                      </div>

                      <div>
                        <button className="text-sm p-1 bg-slate-500 rounded">
                          checkout
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-80 flex justify-center items-center">
                  <p className="text-3xl">Empty</p>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
