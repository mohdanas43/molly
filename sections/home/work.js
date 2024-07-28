"use client";
import React, { useState } from "react";
import Text from "@/app/components/text";

const Work = () => {
  const [tab, settab] = useState(0);

  return (
    <div className=" flex flex-col font-sf font-medium gap-10 text-[25px] md:text-[30px] md:px-[120px] pt-[200px] pb-[160px] md:py-[250px] lg:px-[260px] xl:px-[470px] 2xl:px-[550px] px-[40px] ">
      <Text tab={tab} num={1} settab={settab}>
        We work on interaction design, creative art direction, and product
        strategy.
      </Text>
      <Text tab={tab} num={2} settab={settab}>
        We partner with companies and founders who aren’t afraid to challenge
        conventional order. We invest our time, resources and networks in those
        who recognize the value we bring to the table.
      </Text>
      <Text tab={tab} num={3} settab={settab}>
        We work in a research driven manner. We try to ask the right questions
        to understand and uncover the problem space. We identify the nail before
        we start worrying about the hammer.
      </Text>
    </div>
  );
};

export default Work;
