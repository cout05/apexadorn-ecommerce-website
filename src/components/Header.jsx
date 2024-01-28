import { Link } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { PiCoatHangerBold } from "react-icons/pi";
import { MdLogout } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="bg-[#fff] fixed w-full md:w-[20%] md:h-screen ">
      <div
        className="bg-[#2D3142] relative flex items-center text-[#fff]
       px-2  md:p-0 md:ml-4 md:mr-5 md:text-center md:rounded-md md:my-4 h-14 md:h-[150px]">
        <h1 className="text-xl md:text-2xl md:absolute md:bottom-3 w-full flex gap-1 md:justify-center items-center">
          <MdOutlineShoppingBag className="text-2xl" />
          ApexAdorn
        </h1>
      </div>

      <div className="bg-[#fff] font-semibold rounded  md:bg-transparent flex justify-center m-auto md:justify-normal gap-10 md:gap-0 md:flex-col h-14 md:h-[70%]">
        <Link
          className={`${
            location.pathname === "/home"
              ? "bg-[#2D3142] text-[#fff] md:rounded-lg md:mx-4"
              : ""
          } px-5 md:p-5 flex items-center gap-2  flex-1 md:flex-none`}
          to="/home">
          <TiHomeOutline className="text-2xl md:text-xl mx-auto md:mx-0" />
          <span className="hidden md:block">Home</span>
        </Link>
        <Link
          to="/products"
          className={`${
            location.pathname === "/products"
              ? "bg-[#2D3142] text-[#fff] md:rounded-lg md:mx-4"
              : ""
          } px-5 md:p-5 flex items-center gap-2  flex-1 md:flex-none`}>
          <PiCoatHangerBold className="text-2xl md:text-xl mx-auto md:mx-0" />
          <span className="hidden md:block">Products</span>
        </Link>
        <Link
          to="/profile"
          className={`${
            location.pathname === "/profile"
              ? "bg-[#2D3142] text-[#fff] md:rounded-lg md:mx-4"
              : ""
          } px-5 md:p-5 flex items-center gap-2 flex-1 md:flex-none`}>
          <CgProfile className="text-2xl mx-auto md:mx-0 md:text-xl" />
          <span className="hidden md:block">Profile</span>
        </Link>
        <Link
          to="/"
          className={`${
            location.pathname === "/"
              ? "bg-[#2D3142] text-[#fff] md:rounded-lg md:mx-4"
              : ""
          } px-5 md:p-5 flex items-center gap-2  flex-1 md:flex-none`}>
          <MdLogout className="text-2xl md:text-xl mx-auto md:mx-0" />
          <span className="hidden md:block">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
