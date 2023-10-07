import React from "react";

const SignIn = () => {
  return (
    <section className="bg-[url('assets/wave-haikei.png')] h-screen bg-cover md:bg-center pt-32 text-[#eff6e0]">
      <div
        className="flex flex-col gap-5 justify-center items-center h-[50vh]
       max-w-[600px] rounded-md m-auto p-20 border bg-[rgb(255,255,255,0.1)]
        backdrop-filter backdrop-blur-lg backdrop-opacity-50">
        <h1 className="text-3xl text-center">Log In</h1>
        <form className="flex flex-col gap-1 w-96">
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
            className="bg-[#124559] border mt-5 p-2 rounded-2xl">
            Log in
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
