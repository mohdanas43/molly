import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1E2125]" >
      <div className="flex flex-col md:flex-row md:px-10 lg:px-0 md:justify-around justify-center items-center gap-[30px] text-[20px] font-sf py-10 ">
      <div className="text-[#808080] hidden md:block ">Brooklyn, NY</div>
        <div className="w-[190px] "><Image width={500} height={500} className="w-full h-full " src={"/images/Loader.gif"} /></div>
        <div className="text-[#808080]">Contact Us</div>
        <div className="text-[#808080]">Studio Deck</div>
      </div>
    </div>
  );
};

export default Footer;
