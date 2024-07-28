"use client";
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div className=" font-sf text-[14px] max-w-[1500px] ml-auto mr-auto px-[40px] leading-[1.2] box-border  h-[100vh] ">
      <motion.div
        style={{
          transform: inView ? "none" : "translatey(100px)",
          opacity: inView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        ref={ref}
        className=" font-sf text-[23px] md:text-[29.5px] lg:text-[38px] xl:text-[29.5px] 2xl:text-[32px] flex-1 ml-auto mr-auto max-w-none font-medium  flex w-full h-full justify-center text-center items-center leading-[1.2] "
      >
        A design studio in Brooklyn, New York.
      </motion.div>
    </div>
  );
};

export default Hero;
