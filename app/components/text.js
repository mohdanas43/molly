"use client";
import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const Text = ({ children, num, tab, settab }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin:"-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) {
      settab(num);
    }
  }, [isInView, num]);

  return (
    <div ref={ref}>
      <div className={`${tab === num ? "text-black" : "text-gray-300"} `}>
        {children}
      </div>
    </div>
  );
};

export default Text;
