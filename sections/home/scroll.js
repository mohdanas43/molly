"use client";
import { useInView, useMotionValue } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import About from "@/app/components/about";

const Scroll = () => {
  const ref = useRef(null);
  const isInview = useInView(ref);
  const [hovered, sethovered] = useState(0);
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const container = constraintsRef.current;

    if (container) {
      x.onChange((latest) => {
        container.scrollLeft = -latest;
      });
    }
  }, [x]);

  return (
    <div>
      <div>
        <motion.div
          className={`h-[100vh] flex justify-center items-center transition-all duration-300  ${
            isInview ? "bg-[#1E2125]" : "bg-white"
          } `}
        >
          <div
            className="flex overflow-x-scroll md:overflow-auto gap-5 py-[5rem] px-[25px] md:pl-[70px] lg:pl-[250px] xl:pl-[460px] 2xl:pl-[560px] "
            ref={constraintsRef}
            style={{ overflowX: "auto" }}
          >
            <motion.div
              className="flex gap-5"
              drag="x"
              dragConstraints={constraintsRef}
              style={{ x }}
            >
              <div
                className=" z-10 rounded-xl min-w-[256px] hover:scale-105 hover:shadow-xl  transition-all duration-200 md:min-w-[384px] max-w-[256px] md:max-w-[384px]  lg:min-w-[378px] lg:max-w-[378px] h-[513px]  w-full  "
                onMouseEnter={() => sethovered(1)}
                onMouseLeave={() => sethovered(0)}
              >
                <Image
                  onClick={(e) => e.preventDefault()}
                  className="w-full h-full object-cover rounded-xl pointer-events-none"
                  width={500}
                  height={500}
                  src={"/images/baloon.webp"}
                />
                <div
                  className={`relative top-[-4rem] hover:opacity-10 z-50 ${
                    hovered == 1 ? "opacity-100 " : "opacity-30  "
                  } `}
                >
                  <About
                    name={"The Moon"}
                    abouts={"Greenpoint, Brooklyn"}
                  ></About>{" "}
                </div>
              </div>
              <div className="flex justify-end items-end gap-5 ">
                <div
                  className="min-w-[256px] md:min-w-[384px] hover:scale-105 hover:shadow-xl transition-all duration-200 lg:main-w-[378px] lg:max-w-[378px] max-w-[256px] md:max-w-[384px]  w-full h-[436px]  "
                  onMouseEnter={() => sethovered(2)}
                  onMouseLeave={() => sethovered(0)}
                >
                  <video
                    loop
                    muted
                    autoPlay
                    src="https://cdn.prod.website-files.com/654a475fb81e77be0ade5fb4/65dfdbe243ba308489036bb7_Demo-1-transcode.mp4"
                    className="w-full h-full object-cover rounded-xl "
                  ></video>
                  <div
                    className={`relative top-[-4rem] hover:opacity-10 z-50 ${
                      hovered == 2 ? "opacity-100 " : "opacity-30 "
                    } `}
                  >
                    <About
                      name={"Prototype"}
                      abouts={"Swipe up navigation gesture"}
                    ></About>{" "}
                  </div>
                </div>
                <div
                  className="min-w-[256px] md:min-w-[384px] hover:scale-105 hover:shadow-xl transition-all duration-200 lg:main-w-[378px] lg:max-w-[378px] max-w-[256px] md:max-w-[384px]  w-full h-[359px]  "
                  onMouseEnter={() => sethovered(3)}
                  onMouseLeave={() => sethovered(0)}
                >
                  <video
                    loop
                    muted
                    autoPlay
                    src="https://cdn.prod.website-files.com/654a475fb81e77be0ade5fb4/65dfdc80e2cbdc28b6b03a84_Demo-2-transcode.mp4"
                    className="w-full h-full object-cover rounded-xl "
                  ></video>
                  <div
                    className={`relative top-[-4rem] hover:opacity-10 z-50 ${
                      hovered == 3 ? "opacity-100 " : "opacity-30  "
                    } `}
                  >
                    <About
                      name={"Prototype"}
                      abouts={"Fluid navigation paradigms"}
                    ></About>{" "}
                  </div>
                </div>
                <div
                  className="min-w-[256px] md:min-w-[384px] hover:scale-105 hover:shadow-xl transition-all duration-200 lg:main-w-[378px] lg:max-w-[378px] max-w-[256px] md:max-w-[384px]  w-full h-[334px]  "
                  onMouseEnter={() => sethovered(4)}
                  onMouseLeave={() => sethovered(0)}
                >
                  <video
                    loop
                    muted
                    autoPlay
                    src="https://cdn.prod.website-files.com/654a475fb81e77be0ade5fb4/65e1298093a2b15d780ae0d4_Global-Space-Morph-Web-transcode.mp4"
                    className="w-full h-full object-cover rounded-xl "
                  ></video>
                  <div
                    className={`relative top-[-4rem] hover:opacity-10 z-50 ${
                      hovered == 4 ? "opacity-100 " : "opacity-30  "
                    } `}
                  >
                    <About
                      name={"Prototype"}
                      abouts={"Tap to expand for Global Space Ventures"}
                    ></About>{" "}
                  </div>
                </div>
                <div
                  className="min-w-[256px] md:min-w-[384px] hover:scale-105 hover:shadow-xl transition-all duration-200 lg:main-w-[378px] lg:max-w-[378px] max-w-[256px] md:max-w-[384px]  w-full h-[462px]  "
                  onMouseEnter={() => sethovered(5)}
                  onMouseLeave={() => sethovered(0)}
                >
                  <Image
                    className="w-full h-full object-cover rounded-xl pointer-events-none"
                    width={500}
                    height={500}
                    src={"/images/man.webp"}
                  />
                  <div
                    className={`relative top-[-4rem] hover:opacity-10 z-50 ${
                      hovered == 5 ? "opacity-100 " : "opacity-30  "
                    } `}
                  >
                    <About
                      name={"Demo Talks"}
                      abouts={"Greenpoint, Brooklyn"}
                    ></About>{" "}
                  </div>
                </div>
                <div
                  className="min-w-[256px] md:min-w-[384px] hover:scale-105 hover:shadow-xl transition-all duration-200 lg:main-w-[378px] lg:max-w-[378px] max-w-[256px] md:max-w-[384px]  w-full h-[334px]  "
                  onMouseEnter={() => sethovered(6)}
                  onMouseLeave={() => sethovered(0)}
                >
                  <Image
                    className="w-full h-full object-cover rounded-xl pointer-events-none"
                    width={500}
                    height={500}
                    src={"/images/pool.webp"}
                  />
                  <div
                    className={`relative top-[-4rem] hover:opacity-10 z-50 ${
                      hovered == 6 ? "opacity-100 " : "opacity-30  "
                    } `}
                  >
                    <About
                      name={"Morty"}
                      abouts={"Greenpoint, Brooklyn"}
                    ></About>{" "}
                  </div>
                </div>
                <div
                  className="min-w-[256px] md:min-w-[384px] hover:scale-105 hover:shadow-xl transition-all duration-200 lg:main-w-[378px] lg:max-w-[378px] max-w-[256px] md:max-w-[384px]  w-full h-[513px]  "
                  onMouseEnter={() => sethovered(7)}
                  onMouseLeave={() => sethovered(0)}
                >
                  <video
                    loop
                    muted
                    autoPlay
                    src="https://cdn.prod.website-files.com/654a475fb81e77be0ade5fb4/65e12dc08940b94c9d4dc780_Space-Swipe-02-transcode.mp4"
                    className="w-full h-full object-cover rounded-xl "
                  ></video>
                  <div
                    className={`relative top-[-4rem] hover:opacity-10 z-50 ${
                      hovered == 7 ? "opacity-100 " : "opacity-30  "
                    } `}
                  >
                    <About
                      name={"Card stack artifact"}
                      abouts={"Prototype"}
                    ></About>{" "}
                  </div>
                </div>
                <div
                  className="min-w-[256px] md:min-w-[384px] hover:scale-105 hover:shadow-xl transition-all duration-200 lg:main-w-[378px] lg:max-w-[378px] max-w-[256px] md:max-w-[384px]  w-full h-[334px]  "
                  onMouseEnter={() => sethovered(8)}
                  onMouseLeave={() => sethovered(0)}
                >
                  <Image
                    className="w-full h-full object-cover rounded-xl pointer-events-none"
                    width={500}
                    height={500}
                    src={"/images/seat.webp"}
                  />
                  <div
                    className={`relative top-[-4rem] hover:opacity-10 z-50 ${
                      hovered == 8 ? "opacity-100 " : "opacity-30  "
                    } `}
                  >
                    <About
                      name={"Vision Pro Onboarding"}
                      abouts={"Greenpoint, Brooklyn"}
                    ></About>{" "}
                  </div>
                </div>
                <div
                  className="min-w-[256px] md:min-w-[384px] hover:scale-105 hover:shadow-xl transition-all duration-200 lg:main-w-[378px] lg:max-w-[378px] max-w-[256px] md:max-w-[384px]  w-full h-[359px]  "
                  onMouseEnter={() => sethovered(9)}
                  onMouseLeave={() => sethovered(0)}
                >
                  <video
                    loop
                    muted
                    autoPlay
                    src="https://cdn.prod.website-files.com/654a475fb81e77be0ade5fb4/65dfdcb628e19e693a6c9649_Demo-3-d-transcode.mp4"
                    className="w-full h-full object-cover rounded-xl "
                  ></video>
                  <div
                    className={`relative top-[-4rem] hover:opacity-10 z-50 ${
                      hovered == 9 ? "opacity-100 " : "opacity-30  "
                    } `}
                  >
                    <About
                      name={"Prototype"}
                      abouts={"Morphing carousel animations for EightSleep"}
                    ></About>{" "}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className=" bg-[#1E2125] min-h-5 border-none " ref={ref}></div>
    </div>
  );
};

export default Scroll;
// "use client";
// import { motion, useMotionValue } from "framer-motion";
// import { useEffect, useRef } from "react";

// const ScrollOnDrag = () => {

//   return (
//     <div

//       style={{
//         overflowX: "auto",
//         whiteSpace: "nowrap",
//         width: "100%",
//         height: "100px",
//         border: "1px solid #ccc",
//       }}
//     >
// <motion.div >
//         {/* Your content here */}
//         <div
//           style={{
//             display: "inline-block",
//             width: "300px",
//             height: "100px",
//             background: "red",
//             marginRight: "10px",
//           }}
//         >
//           Item 1
//         </div>
//         <div
//           style={{
//             display: "inline-block",
//             width: "300px",
//             height: "100px",
//             background: "blue",
//             marginRight: "10px",
//           }}
//         >
//           Item 2
//         </div>
//         <div
//           style={{
//             display: "inline-block",
//             width: "300px",
//             height: "100px",
//             background: "green",
//             marginRight: "10px",
//           }}
//         >
//           Item 3
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ScrollOnDrag;
