import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/undraw_businessman_e7v0.svg";

const Home = () => {
  return (
    <section className="bg-[#D8D5DB] flex flex-col justify-center items-center md:block h-screen md:pt-32 text-[#2D3142">
      <div className="xl:flex items-center justify-center max-w-[600px] text-center md:m-auto">
        <img src={hero} alt="hero" className="w-[300px] m-auto" />
        <div>
          <h1 className="text-3xl">
            Experience the Art of Adornment with Apex Adorn Store
          </h1>
          <div className="text-center mt-16">
            <Link
              to="/products"
              className="p-4 bg-[#1c1c22] rounded-lg text-[#EAE8FF]">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
