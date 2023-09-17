import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiClothes } from "react-icons/gi";
import Cart from "./Cart";

import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = (id) => {
  const [isClicked, setIsClicked] = useState(false);

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

        {isClicked && <Cart handlePassId={id} />}
      </nav>
    </header>
  );
};

export default Header;
