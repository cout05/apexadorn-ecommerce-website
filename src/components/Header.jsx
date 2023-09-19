import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiClothes } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import Cart from "./Cart";

import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = (id) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleMenuClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <header className="flex  fixed w-full justify-between p-4 px-10 md:px-20 text-[#eff6e0]">
      <div>
        <GiClothes className="text-2xl font-bold opacity-50" />
      </div>

      <nav
        className={
          isMenuClicked
            ? "flex absolute right-3 top-14 bg-[#1c1c22] py-7 rounded-lg px-5 md:block"
            : "hidden md:block"
        }>
        <ul className="flex flex-col md:flex-row gap-5 font-bold">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <button onClick={handleClick}>
            <AiOutlineShoppingCart className="text-xl" />
          </button>
        </ul>
        {isClicked && <Cart handlePassId={id} />}
      </nav>

      <div className="block md:hidden">
        <RxHamburgerMenu
          className="cursor-pointer text-xl"
          onClick={handleMenuClick}
        />
      </div>
    </header>
  );
};

export default Header;
