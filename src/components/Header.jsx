import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#eff6e0] fixed w-full md:w-[20%] h-10 md:h-screen ">
      <div
        className="bg-[#1c1c22] relative flex items-center justify-between text-[#eff6e0]
       px-2  md:p-0 md:ml-4 md:mr-5 md:text-center md:rounded-md md:my-4 h-[50px] md:h-[150px]">
        <h1 className="text-xl md:text-2xl md:absolute md:bottom-3 w-full ">
          ApexAdorn
        </h1>
      </div>

      <div className="flex justify-end md:justify-normal md:flex-col w-full md:h-[70%]">
        <Link className="p-2 md:p-5" to="/home">
          Home
        </Link>
        <Link to="/about" className="p-2 md:p-5 rounded-lg">
          About
        </Link>
        <Link to="/products" className="p-2 md:p-5 rounded-lg">
          Products
        </Link>

        <Link to="/" className="p-2 md:p-5">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Header;
