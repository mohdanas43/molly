import React from "react";
import { motion } from "framer-motion";

const About = ({ name, abouts, hovered }) => {
  return (
    <div className="px-5">
      <div className="text-white" >{name}</div>
      <div className="text-[#807975] " >{abouts}</div>
    </div>
  );
};

export default About;
