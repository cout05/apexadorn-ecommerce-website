import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-[url('assets/wave-haikei.png')]  h-screen bg-cover bg-center pt-20 text-[#eff6e0]">
      <div className="max-w-[600px] text-center m-auto">
        <h1
          className=" text-7xl md:text-8xl
         font-bold font-sans">
          ApexAdorn
        </h1>
      </div>

      <h2 className="text-2xl md:text-3xl text-center pt-10">
        Elevated Fashion, Apex Quality
      </h2>
      <div className="text-center mt-16">
        <Link to="/products" className="p-4 bg-slate-600 rounded-lg">
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Home;
