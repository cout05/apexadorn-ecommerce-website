import React from "react";

const SignIn = () => {
  return (
    <section className=" h-screen pt-28 text-[#2D3142]">
      <div
        className="flex flex-col gap-5 
       max-w-[600px] rounded-md m-auto p-20 border border-[#1c1c22] bg-[rgb(255,255,255,0.1)]
        backdrop-filter backdrop-blur-lg backdrop-opacity-50 shadow-2xl">
        <h1 className="text-3xl text-center">Sign In</h1>
        <form className="flex flex-col gap-1 w-96 mx-auto">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            placeholder="Enter email..."
            name="email"
            className="p-2 rounded-2xl"
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            placeholder="Enter password..."
            name="password"
            className="p-2 rounded-2xl"
          />
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
