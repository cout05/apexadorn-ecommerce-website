import React from "react";
import { FaClipboardList } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";
import { HiMiniBanknotes } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";

const Profile = () => {
  return (
    <div className="md:w-[80%] font-semibold md:relative flex flex-col md:flex-row pt-[7rem] md:pt-0 md:ml-auto h-screen text-[#2D3142]">
      <div className="bg-[#fff] w-full md:w-[300px] flex flex-col md:ml-8 md:mt-4 p-4 items-center">
        <div className="w-[100px] h-[100px] bg-[#2D3142] rounded-full"></div>
        <p className="text-1xl font-semibold">Profile</p>
      </div>
      <div className="bg-[#fff] w-full md:w-[700px] pb-20 mt-0 md:mt-40 ml-0 md:mx-auto">
        <div className="flex gap-4 px-4 py-2 border-b border-t items-center justify-center mt-[50px] mb-16">
          <div className="text-[#2D3142] text-center cursor-pointer md:flex-1">
            <FaClipboardList className="text-2xl mx-auto" />
            Orders
          </div>
          <div className="text-[#2D3142] text-center cursor-pointer md:flex-1">
            <MdMessage className="text-2xl mx-auto" />
            Reviews
          </div>
          <div className="text-[#2D3142] text-center cursor-pointer md:flex-1">
            <RiCoupon2Fill className="text-2xl mx-auto" /> Coupons
          </div>
          <div className="text-[#2D3142] text-center cursor-pointer md:flex-1">
            <HiMiniBanknotes className="text-2xl mx-auto" />
            Payment Method
          </div>
        </div>
        <div className="capitalize flex flex-col gap-4 items-center mt-4">
          <p>
            personal info <IoIosArrowForward className="inline" />
          </p>
          <p>
            address info <IoIosArrowForward className="inline" />
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
