import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-between py-6 px-8 fixed w-screen text-white ">
      <Link to="/">
        <h1 className="text-2xl">ApexAdorn</h1>
      </Link>

      <div onClick={handleClick} className="cursor-pointer">
        <AiOutlineShoppingCart className="text-2xl" />
      </div>
    </div>
  );
};

export default Header;
