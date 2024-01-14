import React from "react";

const Footer = () => {
  return (
    <footer className="z-10 relative p-5 bg-[#1c1c22] flex flex-col gap-1 text-center md:text-start md:flex-row justify-center items-center md:justify-between text-white">
      <div>
        <h1 className="text-3xl">Apex Adorn</h1>
      </div>
      <div>
        <h2>Contact us</h2>
        <p>apexadorn@gmail.com</p>
        <p>@apexadorn</p>
      </div>
    </footer>
  );
};

export default Footer;
