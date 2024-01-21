import { Link } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdLogout } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-[#fff] fixed w-full md:w-[20%] md:h-screen ">
      <div
        className="bg-[#1c1c22] relative flex items-center text-[#fff]
       px-2  md:p-0 md:ml-4 md:mr-5 md:text-center md:rounded-md md:my-4 h-14 md:h-[150px]">
        <h1 className="text-xl md:text-2xl md:absolute md:bottom-3 w-full flex gap-1 md:justify-center items-center">
          <MdOutlineShoppingBag className="text-2xl" />
          ApexAdorn
        </h1>
      </div>

      <div className="bg-[#fff] rounded  md:bg-transparent flex justify-center m-auto md:justify-normal gap-10 md:gap-0 md:flex-col h-14 md:h-[70%]">
        <Link
          className="px-5 md:p-5 flex items-center gap-2 flex-1 md:flex-none"
          to="/home">
          <TiHomeOutline className="text-2xl md:text-xl" />
          <span className="hidden md:block">Home</span>
        </Link>
        <Link
          to="/products"
          className="px-5 py-6 md:p-5 rounded-lg flex items-center gap-2 flex-1 md:flex-none">
          <AiOutlineShoppingCart className="text-2xl md:text-xl" />
          <span className="hidden md:block">Products</span>
        </Link>
        <Link
          to="/profile"
          className="px-5 py-6 md:p-5 rounded-lg flex items-center gap-2 flex-1 md:flex-none">
          <CgProfile className="text-2xl md:text-xl" />
          <span className="hidden md:block">Profile</span>
        </Link>
        <Link
          to="/"
          className="px-5 py-6 md:p-5 flex items-center gap-2 flex-1 md:flex-none">
          <MdLogout className="text-2xl md:text-xl" />
          <span className="hidden md:block">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
