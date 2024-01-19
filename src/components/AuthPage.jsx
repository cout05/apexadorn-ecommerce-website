import React, { useState } from "react";
import hero from "../assets/undraw_businessman_e7v0.svg";
import SignIn from "./SignIn";
import SignUp from "./Signup";

const AuthPage = () => {
  const [isClick, setIsClick] = useState(false);

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center bg-[#D8D5DB] h-screen px-5 md:p-20 text-[#2D3142]">
      <div className="px-10 py-4 md:py-0 w-full md:max-w-[350px] -order-first md:-order-last">
        <h1 className="text-2xl bold text-center hidden md:block mb-10">
          Welcome to Apex Adorn
        </h1>
        <img
          src={hero}
          alt="hero"
          className="w-[200px] m-auto hidden md:block"
        />
        <div className="flex flex-col gap-3 text-center md:mt-10">
          {isClick ? (
            <p>Already have an Account?</p>
          ) : (
            <p>Don't have an account yet?</p>
          )}

          <button
            onClick={() => setIsClick(!isClick)}
            className="bg-[#2D3142] rounded-lg p-2 text-sm  text-[#D8D8DB]">
            {isClick ? "Sign In" : "Create an Account"}
          </button>
        </div>
      </div>
      {isClick ? <SignUp /> : <SignIn />}
    </section>
  );
};

export default AuthPage;
