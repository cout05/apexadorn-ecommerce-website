import { useContext } from "react";
import Cart from "./Cart";
import { IoMdArrowForward } from "react-icons/io";
import { SidebarContext } from "../context/SidebarContext";
import { CartItemContext } from "../context/CartItemContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cartItem } = useContext(CartItemContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full md:w-[35vw] xl:max-w-[30vw] h-full bg-white fixed
     top-0 shadow-2xl transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-y-auto`}>
      <div className="flex items-center justify-between py-6 border-b">
        <div>Cart ({cartItem.length})</div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-9 h-8 flex justify-center items-center ">
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default Sidebar;
