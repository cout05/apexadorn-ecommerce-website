import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);

  const togglePass = () => {
    setShowPass(!showPass);
  };

  return (
    <section className=" h-screen pt-28 text-[#2D3142]">
      <div
        className="flex flex-col gap-5 
       max-w-[600px] rounded-md m-auto p-10 border-2 border-[#1c1c22] bg-[rgb(255,255,255,0.1)]
        backdrop-filter backdrop-blur-lg backdrop-opacity-50 shadow-2xl">
        <BsPersonCircle className="m-auto text-5xl" />
        <h1 className="text-3xl text-center">Sign In</h1>
        <form className="flex flex-col gap-1 w-96 mx-auto">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            placeholder="Enter email..."
            name="email"
            className="p-2 rounded-2xl"
          />
          <div className="relative">
            <div>
              <label htmlFor="password">Password: </label>
              <input
                type={showPass ? "text" : "password"}
                placeholder="Enter password..."
                name="password"
                className="p-2 rounded-2xl block w-full"
              />
            </div>

            {showPass ? (
              <BsEyeSlashFill
                onClick={togglePass}
                className="text-2xl absolute bottom-2 right-3 cursor-pointer"
              />
            ) : (
              <BsEyeFill
                onClick={togglePass}
                className="text-2xl absolute bottom-2 right-3 cursor-pointer"
              />
            )}
          </div>

          <button
            type="submit"
            className="bg-[#1c1c22] text-[#EAE8FF] border mt-5 p-2 rounded-2xl">
            Sign in
          </button>
        </form>
        <div>
          <p>Create an account</p>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
