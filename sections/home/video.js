"use client";
import React from "react";
import { motion } from "framer-motion";

const Video = () => {
  return (
    <div className= " relative top-0 px-[40px] h-[100vh]  flex justify-center items-center ">
      <div className="absolute top-[-15rem] blur-[100px] h-full min-h-[20rem] max-h-[10rem] min-w-[40rem]   max-w-[40rem] w-full opacity-30 z-10 ">
        <video
          muted
          autoPlay
          playsInline
          loop
          src="https://mollystudio.s3.amazonaws.com/Sizzle-Render-Final-Vertical-01.mp4"
        ></video>
      </div>
      <motion.div
        className="rounded-2xl z-[100]"
        initial={{ scale: 0.4 }}
        whileInView={{ scale: 1 }}
        transition={{
          ease: "linear",
          duration: 0.4,
        }}
      >
        <video
          muted
          autoPlay
          playsInline
          loop
          src="https://mollystudio.s3.amazonaws.com/Sizzle-Render-Final-Vertical-01.mp4"
          className="object-cover rounded-2xl md:w-[688px] md:h-[387px] lg:w-[864px] lg:h-[486px] xl:w-[1280px] xl:h-[720px] 2xl:w-[1340px] 2xl:h-[754px] "
        ></video>
      </motion.div>
    </div>
  );
};

export default Video;
