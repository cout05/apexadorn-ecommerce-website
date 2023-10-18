import React, { useContext } from "react";
import { MobileSidebarContext } from "../context/MobileSidebarContext";
import { IoMdArrowForward } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { SidebarContext } from "../context/SidebarContext";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";

const MobileSideBar = () => {
  const { isMobileOpen, handleCloseMobile, setIsMobileOpen } =
    useContext(MobileSidebarContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div
      className={`${isMobileOpen ? "right-0" : "-right-full"}
       w-[50%] md:w-[35vw] xl:max-w-[30vw] h-full bg-white fixed
 top-0 shadow-2xl transition-all duration-300 z-20 
  px-4 lg:px-[35px] overflow-y-auto`}>
      <div className="flex justify-between items-center py-2 border-b-2">
        <div>Menu</div>
        <div
          onClick={handleCloseMobile}
          className="cursor-pointer w-9 h-8 flex justify-center items-center ">
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <div
          onClick={handleClick}
          className="flex gap-2 cursor-pointer border-b-2">
          <AiOutlineShoppingCart className="text-2xl" /> Cart
        </div>
        <div className="border-b-2 flex gap-1 items-center">
          <BsFillPersonFill className="text-2xl" />
          <Link to="/sign_in">
            <p className="text-1xl">Sign in</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileSideBar;
