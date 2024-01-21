import React from "react";
import { FaClipboardList } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";
import { HiMiniBanknotes } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";

const Profile = () => {
  return (
    <div className="md:w-[80%] md:relative flex pt-[7.3rem] md:pt-0 md:ml-auto h-screen text-[#fff]">
      <div className="flex flex-col items-center gap-2 p-2 h-36 absolute top-[160px] md:top-[50px] left-0 right-0 md:right-[900px]">
        <div className="w-[100px] h-[100px] bg-slate-500 rounded-full"></div>
        <p className="text-1xl">Profile</p>
      </div>
      <div className="bg-[#1c1c22] pt-16 md:pt-28 mt-[100px] flex-1 rounded-t-[50px] md:rounded-tl-none">
        <div className="flex gap-4 px-4 py-2 border-b border-t items-center justify-center mt-[50px] mb-16">
          <div className="text-[#fff] text-center cursor-pointer md:flex-1">
            <FaClipboardList className="text-2xl mx-auto" />
            Orders
          </div>
          <div className="text-[#fff] text-center cursor-pointer md:flex-1">
            <MdMessage className="text-2xl mx-auto" />
            Reviews
          </div>
          <div className="text-[#fff] text-center cursor-pointer md:flex-1">
            <RiCoupon2Fill className="text-2xl mx-auto" /> Coupons
          </div>
          <div className="text-[#fff] text-center cursor-pointer md:flex-1">
            <HiMiniBanknotes className="text-2xl mx-auto" />
            Payment Method
          </div>
        </div>
        <div className="capitalize flex flex-col gap-4 items-center mt-4">
          <p>
            personal info <IoIosArrowForward className="inline" />
          </p>
          <p>
            address info <IoIosArrowForward className="inline" />{" "}
          </p>
          <p>
            settings <IoIosArrowForward className="inline" />
          </p>
          <p>
            about us <IoIosArrowForward className="inline" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
