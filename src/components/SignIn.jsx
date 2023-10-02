import React from "react";

const SignIn = () => {
  return (
    <section className="bg-[url('assets/wave-haikei.png')] h-screen bg-cover md:bg-center pt-32 text-[#eff6e0]">
      <h1 className="text-3xl text-center">Sign In</h1>
      <div className="flex flex-col justify-center items-center h-[50vh] m-auto p-20 ">
        <form className="flex flex-col gap-1  ">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            placeholder="Enter email..."
            name="email"
            className="p-2"
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            placeholder="Enter password..."
            name="password"
            className="p-2"
          />
          <button
            type="submit"
            className="bg-[#1c1c22] border mt-5 p-2 rounded">
            Sign in
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
