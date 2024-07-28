import React from "react";
import Video from "../sections/home/video";
import Work from "@/sections/home/work";
import Hero from "@/sections/home/hero";
import Roles from "@/sections/home/roles";
import Scroll from "@/sections/home/scroll";
import Footer from "@/sections/home/footer";

const Page = () => {
  return (
    <div>
      <Hero />
      <Video />
      <Work />
      <Roles/>
      <Scroll/>
      <Footer/>
    </div>
  );
};

export default Page;
