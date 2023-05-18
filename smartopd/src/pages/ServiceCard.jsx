import { GiHypodermicTest } from "react-icons/gi";
import { GrBaby } from "react-icons/gr";
import { RiHospitalLine } from "react-icons/ri";
import { RiWaterFlashLine } from "react-icons/ri";
import { CgGirl } from "react-icons/cg";
import { MdFamilyRestroom } from "react-icons/md";
import { BsHeartPulse } from "react-icons/bs";
import { BiClinic } from "react-icons/bi";

import { useIntersectionObserver } from "react-intersection-observer-hook";
import { useAnimate, useInView, motion } from "framer-motion";
import { useEffect } from "react";

export const ServiceCard = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 }, { x: 0 });
    }
  }, [isInView]);

  return (
    <>
      {" "}
      <div className="mt-10 flex justify-center bg-[#f5f9ffb0] p-20 ">
        <div className="container flex justify-center   ">
          <div className="flex  flex-wrap content-center justify-center">
            <motion.div
              ref={scope}
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 1, stiffness: 200 }}
              className="flex gap-5 flex-wrap w-[30rem] md:w-[50rem] lg:w-auto justify-center"
            >
              <motion.div
                whileHover={{
                  scale: 0.9,

                  transition: {
                    duration: 1,
                    repeat: Infinity,
                  },
                }}
                className="h-[150px] flex flex-col  justify-center items-center w-[200px] bg-transparent shadow-xl rounded-lg"
              >
                <p className="justify-center flex mb-2 content-center bg-violet-200  h-10 w-10 rounded-full items-center">
                  <GiHypodermicTest
                    className="text-center"
                    size="30"
                    color="#ff0ade"
                  />{" "}
                </p>
                <p className="text-center font-bold">Dermatology</p>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 0.9,
                  transition: {
                    duration: 1,
                    repeat: Infinity,
                  },
                }}
                className="h-[150px] flex flex-col  justify-center items-center w-[200px] bg-transparent shadow-xl rounded-lg"
              >
                <p className="justify-center flex mb-2 content-center bg-lime-100  h-10 w-10 rounded-full items-center">
                  <GrBaby className="text-center" size="30" color="#7bff00" />{" "}
                </p>
                <p className="text-center font-bold">Pediatrics</p>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 0.9,

                  transition: {
                    duration: 1,
                    repeat: Infinity,
                  },
                }}
                className="h-[150px] flex flex-col  justify-center items-center w-[200px] bg-transparent shadow-xl rounded-lg"
              >
                <p className="justify-center flex mb-2 content-center bg-purple-200  h-10 w-10 rounded-full items-center">
                  <RiHospitalLine
                    className="text-center"
                    size="30"
                    color="#3730a3"
                  />{" "}
                </p>
                <p className="text-center font-bold">General Practice</p>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 0.9,

                  transition: {
                    duration: 0.9,
                    repeat: Infinity,
                  },
                }}
                className="h-[150px] flex flex-col  justify-center items-center w-[200px] bg-transparent shadow-xl rounded-lg"
              >
                <p className="justify-center flex mb-2 content-center bg-green-200  h-10 w-10 rounded-full items-center">
                  <CgGirl className="text-center" size="30" color="#00960c" />{" "}
                </p>
                <p className="text-center font-bold">Gynecology</p>
              </motion.div>
            </motion.div>
            <div className="flex gap-5 mt-5 flex-wrap w-[30rem] md:w-[50rem] lg:w-auto justify-center ">
              <motion.div
                whileHover={{
                  scale: 0.9,

                  transition: {
                    duration: 1,
                    repeat: Infinity,
                  },
                }}
                className="h-[150px] flex flex-col  justify-center items-center w-[200px] bg-transparent shadow-xl rounded-lg"
              >
                <p className="justify-center flex mb-2 content-center bg-cyan-200  h-10 w-10 rounded-full items-center">
                  <CgGirl className="text-center" size="30" color="#3730a3" />{" "}
                </p>
                <p className="text-center font-bold">Optometry</p>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 0.9,

                  transition: {
                    duration: 1,
                    repeat: Infinity,
                  },
                }}
                className="h-[150px] flex flex-col  justify-center items-center w-[200px] bg-transparent shadow-xl rounded-lg"
              >
                <p className="justify-center flex mb-2 content-center bg-indigo-200  h-10 w-10 rounded-full items-center">
                  <MdFamilyRestroom
                    className="text-center"
                    size="30"
                    color="#9900ff"
                  />{" "}
                </p>
                <p className="text-center font-bold">Family Medicine</p>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 0.9,

                  transition: {
                    duration: 1,
                    repeat: Infinity,
                  },
                }}
                className="h-[150px] flex flex-col  justify-center items-center w-[200px] bg-transparent shadow-xl rounded-lg"
              >
                <p className="justify-center flex mb-2 content-center bg-rose-200  h-10 w-10 rounded-full items-center">
                  <RiWaterFlashLine
                    className="text-center"
                    size="30"
                    color="#aa0047"
                  />{" "}
                </p>
                <p className="text-center font-bold">Endocrinology</p>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 0.9,

                  transition: {
                    duration: 1,
                    repeat: Infinity,
                  },
                }}
                className="h-[150px] flex flex-col  justify-center items-center w-[200px] bg-transparent shadow-xl rounded-lg"
              >
                <p className="justify-center flex mb-2 content-center bg-pink-300  h-10 w-10 rounded-full items-center">
                  <BsHeartPulse
                    className="text-center"
                    size="30"
                    color="#3730a3"
                  />{" "}
                </p>
                <p className="text-center font-bold">Cardiology</p>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 0.9,

                  transition: {
                    duration: 1,
                    repeat: Infinity,
                  },
                }}
                className="h-[150px] flex flex-col  justify-center items-center w-[200px] bg-transparent shadow-xl rounded-lg"
              >
                <p className="justify-center flex mb-2 content-center bg-green-300  h-10 w-10 rounded-full items-center">
                  <BiClinic className="text-center" size="30" color="#e47d1d" />{" "}
                </p>
                <p className="text-center font-bold">clinical psychology</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
