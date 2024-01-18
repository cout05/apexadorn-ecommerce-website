import React from "react";

const Profile = () => {
  return (
    <div className="md:w-[80%] pt-[7.3rem] md:pt-0 md:ml-auto h-screen">
      <div className="flex flex-col items-center gap-2 p-2 h-36">
        <div className="w-[40px] h-[40px] bg-slate-500 rounded-full"></div>
        <p className="text-xl">Profile</p>
      </div>
      <div className="flex gap-4 items-center justify-center h-16">
        <p>Orders</p>
        <p>Reviews</p>
        <p>Coupons</p>
        <p>Payment Method</p>
      </div>
      <div className="capitalize flex flex-col gap-4 items-center mt-4">
        <p>personal info</p>
        <p>address info </p>
        <p>settings</p>
        <p>about us</p>
      </div>
    </div>
  );
};

export default Profile;
