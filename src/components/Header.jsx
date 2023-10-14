import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { SlMagnifier } from "react-icons/sl";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="flex justify-between py-3 px-3 md:px-8 fixed
            left-1/2 transform -translate-x-1/2  w-screen xl:w-[1000px]
             text-[#2D3142] bg-[#fff] md:rounded-[100px] ">
      <Link to="/">
        <h1 className="text-xl md:text-2xl">ApexAdorn</h1>
      </Link>

      <div className="hidden md:flex gap-2 items-center">
        <input
          type="text"
          placeholder="Search an item..."
          className="rounded outline-none text-[#000000] p-1"
        />
        <SlMagnifier className="text-2xl cursor-pointer" />
      </div>

      <div className="hidden md:flex gap-5 items-center">
        <div onClick={handleClick} className="cursor-pointer">
          <AiOutlineShoppingCart className="text-2xl" />
        </div>
        <div>
          <Link to="/sign_in">
            <p className="text-1xl">Log in</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
