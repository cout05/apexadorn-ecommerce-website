import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/undraw_businessman_e7v0.svg";
import { FaClipboardCheck } from "react-icons/fa";
import { PiCoatHangerBold } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";

const Home = () => {
  return (
    <section className="bg-[#D8D5DB] md:ml-[300px] md:w-[75%] md:block text-[#2D3142]">
      <div className="xl:flex h-screen py-40 items-center justify-center max-w-[600px] text-center md:m-auto">
        <img src={hero} alt="hero" className="w-[250px] md:w-[300px] m-auto" />
        <div>
          <h1 className=" text-2xl md:text-3xl">
            Experience the Art of Adornment with Apex Adorn Store
          </h1>
        </div>
      </div>
      <div className="h-full md:h-screen">
        <h1 className="font-bold text-center text-4xl p-5">About Us</h1>
        <div className="grid md:my-24 grid-cols-1 md:grid-cols-3 justify-items-center gap-4 md:gap-0">
          <div className="w-[350px] md:w-[300px] h-[300px] text-center bg-[#fff] p-2 rounded-xl">
            <FaClipboardCheck className="mx-auto my-4 text-5xl text-[#2D3142]" />
            <h2 className="text-[#2D3142] font-bold text-2xl">Lorem</h2>
            <p className="text-[#2D3142]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              saepe mollitia ut ducimus, ad in. Aperiam sunt, aspernatur,
              cupiditate, animi magnam at ipsa ipsam eaque aliquid consequatur
              harum iste illo.
            </p>
          </div>
          <div className="w-[350px] md:w-[300px] h-[300px] text-center bg-[#fff] p-2 rounded-xl">
            <PiCoatHangerBold className="mx-auto my-4 text-5xl text-[#2D3142]" />
            <h2 className="text-[#2D3142] font-bold text-2xl">Lorem</h2>
            <p className="text-[#2D3142]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              saepe mollitia ut ducimus, ad in. Aperiam sunt, aspernatur,
              cupiditate, animi magnam at ipsa ipsam eaque aliquid consequatur
              harum iste illo.
            </p>
          </div>
          <div className="w-[350px] md:w-[300px] h-[300px] text-center bg-[#fff] p-2 rounded-xl">
            <TbTruckDelivery className="mx-auto my-4 text-5xl text-[#2D3142]" />
            <h2 className="text-[#2D3142] font-bold text-2xl">Lorem</h2>
            <p className="text-[#2D3142]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              saepe mollitia ut ducimus, ad in. Aperiam sunt, aspernatur,
              cupiditate, animi magnam at ipsa ipsam eaque aliquid consequatur
              harum iste illo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
