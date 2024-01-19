import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const togglePass = () => {
    setShowPass(!showPass);
  };

  const redirect = (event) => {
    event.preventDefault();
    navigate("/home");
  };

  return (
    <div
      className="bg-[#1c1c22] text-[#EAE8FF]  flex flex-col gap-5 
      w-full md:max-w-[350px] rounded-md border p-10 md:flex-1">
      <BsPersonCircle className="m-auto text-5xl" />
      <h1 className="text-3xl text-center">Sign In</h1>
      <form onSubmit={redirect} name="login" className="flex flex-col gap-1">
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          placeholder="Enter username..."
          id="username"
          name="username"
          className="p-2 bg-transparent border-b-2 outline-none"
        />
        <div className="relative">
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter password..."
              name="password"
              id="password"
              className="p-2 bg-transparent border-b-2 outline-none w-full"
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
          className="bg-[#1c1c22] hover:bg-[#EAE8FF] text-[#EAE8FF] hover:text-[#1c1c22] border mt-5 p-2 rounded-2xl">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignIn;
