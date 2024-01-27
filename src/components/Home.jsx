import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/undraw_businessman_e7v0.svg";

const Home = () => {
  return (
    <section className="bg-[#D8D5DB] md:ml-auto md:w-[75%] md:block text-[#2D3142]">
      <div className="xl:flex h-screen items-center justify-center max-w-[600px] text-center md:m-auto">
        <img src={hero} alt="hero" className="w-[250px] md:w-[300px] m-auto" />
        <div>
          <h1 className=" text-2xl md:text-3xl">
            Experience the Art of Adornment with Apex Adorn Store
          </h1>
        </div>
      </div>
      <div className="h-screen">
        <h1 className="font-bold text-center text-4xl p-5">About Us</h1>
        <div className="grid my-24 grid-cols-3">
          <div className="w-[300px] h-[300px] bg-black p-2">
            <h2 className="text-[#fff] font-bold text-2xl">lorem</h2>
            <p className="text-[#fff]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              saepe mollitia ut ducimus, ad in. Aperiam sunt, aspernatur,
              cupiditate, animi magnam at ipsa ipsam eaque aliquid consequatur
              harum iste illo.
            </p>
          </div>
          <div className="w-[300px] h-[300px] bg-black p-2">
            <h2 className="text-[#fff] font-bold text-2xl">lorem</h2>
            <p className="text-[#fff]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              saepe mollitia ut ducimus, ad in. Aperiam sunt, aspernatur,
              cupiditate, animi magnam at ipsa ipsam eaque aliquid consequatur
              harum iste illo.
            </p>
          </div>
          <div className="w-[300px] h-[300px] bg-black p-2">
            <h2 className="text-[#fff] font-bold text-2xl">lorem</h2>
            <p className="text-[#fff]">
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
