"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Roles = () => {
  const [hovered, sethovered] = useState(false);
  return (
    <div className="px-[40px] flex flex-col gap-8 md:px-[150px] lg:px-[250px] xl:px-[450px] 2xl:px-[600px] ">
      <div className="text-[#789DC0] font-sf text-[20px]  font-medium ">
        Open Roles
      </div>

      <div
        className=" relative tranasition-all ease-in-out duration-500 overflow-hidden p-[20px] font-sf text-[25px] rounded-xl bg-[#F8F8F8]  "
        onClick={() => {
          sethovered(!hovered);
        }}
      
      >
        <div className="flex justify-between items-center 2xl:h-[50px]">
          <div>Digital Designer </div>
          <motion.div
            className="w-[16px] "
            initial={{ rotate: "-45deg" }}
            animate={{ rotate: hovered ? "0deg" : "-45deg" }}
          >
            <Image
              width={500}
              height={500}
              className="object-cover w-full h-full "
              src={"/images/cross.svg"}
            />
          </motion.div>
        </div>

        <div
          className={`${
            hovered ? "max-h-[30rem] md:pt-10 " : "max-h-0 , overflow-hidden pt-0"
          } flex flex-col gap-5 md:gap-10  tranasition-all ease-in-out duration-500 `}
        >
          {" "}
          <div>
            If you want to work on digital products, services, websites and feel
            like you would be a great addition to our team or are curious about
            our work, reach out.
          </div>{" "}
          <div className="p-[10px] bg-black flex justify-between  text-white rounded-xl w-full ">
            <div className="text-[18px]">Apply</div>
            <div className="w-[16px]">
              {" "}
              <Image
                width={500}
                height={500}
                className="object-cover w-full h-full "
                src={"/images/arrow.svg"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;
