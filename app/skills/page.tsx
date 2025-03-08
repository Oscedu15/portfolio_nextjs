"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TbArrowNarrowRight } from "react-icons/tb";
//react intersesction observer
import { useInView } from "react-intersection-observer";
import {
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
  MdOutlineMapsHomeWork,
} from "react-icons/md";
import CountUp from "react-countup";

import { fadeIn } from "@/utils/animation";

const SkillsPage = () => {
  const items = [
    {
      id: "01",
      category: "BEDROOM SETUP",
      title: "Cossy Bedroom Setup",
      image: "/perfil.jpeg",
      description:
        "family drowing room with a clean and comfortable design for your family.",
    },
    {
      id: "02",
      category: "KITCHEN SETUP",
      title: "Neat & Clean Kitchen",
      image: "/perfil.jpeg",
      description:
        "family drowing room with a clean and comfortable design for your family.",
    },
    {
      id: "03",
      category: "DROWING SETUP",
      title: "Family Drowing Room",
      image: "/perfil.jpeg",
      description:
        "family drowing room with a clean and comfortable design for your family.",
    },
    {
      id: "04",
      category: "LIVING SETUP",
      title: "Neat & Clean Kitchen",
      image: "/perfil.jpeg",
      description:
        "family drowing room with a clean and comfortable design for your family.",
    },
  ];
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div className="bg-gray-900 overflow-hidden" ref={ref}>
      <div
        className="py-24 sm:py-32 bg-gradient-to-r 
        dark:from-primary/10 dark:to-tertiary/10 from-slate-50 to-gray-300 text-white  xl:py-24 h-auto lg:justify-between p-4"
      >
        <div className="grid lg:grid-cols-2 max-w-7xl mx-auto">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className=""
          >
            <Image
              src="/perfil.jpeg"
              alt="About"
              width={900}
              height={500}
              className="w-[600px] mt-20 h-[400px] lg:w-[900px] max-md:hidden"
            />{" "}
          </motion.div>
          <div className="items-star md:items-center">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="px-12 mt-16  py-4 text-center"
            >
              We are awards Winning Company
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="px-12 tracking-wider text-3xl text-center  uppercase text-gray-600 mt-3"
            >
              World Award
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="px-12 pb-4 mt-4 text-xl text-gray-500 dark:text-content/80 mb-8"
            >
              This is a company engaged in the field of interior design. We
              provide the best interior design fr your home. We have been
              trusted by many people to design their homes. We have also recived
              many awards from various countries for our work.
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="text-xl  mb-8 px-12"
            >
              This is a company engaged in the field of interior design. We
              provide the best interior design fr your home. We have been
              trusted by many people to design their homes. We have also recived
              many awards from various countries for our work.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="flex items-center gap-x-8 mb-12 px-0 md:px-12"
            >
              {/* cart types */}
              <div className="flex flex-col w-[100px] px-12">
                <MdOutlineDirectionsCar className="text-5xl text-accent" />
                <div className="text-3xl font-black mb-2">
                  {inView ? (
                    <CountUp start={0} end={50} duration={3} delay={1} />
                  ) : (<CountUp start={0} end={50} duration={3} delay={1} />)}
                  +
                </div>
                <div className="uppercase text-[13px] font-semibold text-secondary">
                  car <br /> types
                </div>
              </div>
              {/* rental outlets */}
              <div className="flex flex-col w-[100px]">
                <MdOutlineMapsHomeWork className="text-5xl text-accent" />
                <div className="text-3xl font-black mb-2">
                  {inView ? (
                    <CountUp start={0} end={135} duration={3} delay={1} />
                  ) : <CountUp start={0} end={135} duration={3} delay={1} />}
                  +
                </div>
                <div className="uppercase text-[13px] font-semibold text-secondary">
                  rental <br /> outlets
                </div>
              </div>
              {/* repair points */}
              <div className="flex flex-col w-[100px]">
                <MdOutlineBuildCircle className="text-5xl text-accent" />
                <div className="text-3xl font-black mb-2">
                  {inView ? (
                    <CountUp start={0} end={35} duration={3} delay={1} />
                  ) : <CountUp start={0} end={135} duration={3} delay={1} />}
                  +
                </div>
                <div className="uppercase text-[13px] font-semibold text-secondary">
                  repair <br /> pointss
                </div>
              </div>
              {/* Btn */}
            </motion.div>
          </div>
        </div>
        <div className="grid p-4 gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 divide-gray-300 max-w-7xl  mx-auto lg:divide-x">
          {items?.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden group cursor-pointer"
            >
              <div>
                <Image
                  src={item.image}
                  width={380}
                  height={100}
                  alt="itemImage"
                  className="w-full"
                />
              </div>
              <div className="absolute top-0 p-8 bg-white text-black bg-opacity-60 backdrop-blur m-12">
                <div className="flex justify-between pb-4">
                  <p className="text-sm">{item.category}</p>
                  <span className="text-sm">{item.id}</span>
                </div>
                <a href="" className="block text-xl font-semibold">
                  {item.title}
                </a>
                <p className="py-4">{item.description}</p>
                <a href="" className="inline-flex items-center font-medium">
                  See Details <TbArrowNarrowRight className="ml-2" />
                </a>
              </div>
              <div
                className="inset-0 from-red-600 via-red-700
        to-red-800 dark:from-primary dark:via-secondary
         dark:to-tertiary  bg-gradient-to-b flex-col items-center justify-end md:flex md:absolute gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-b-0 hidden cursor-pointer"
              >
                <p className="tracking-wider -rotate-90">{item.category}</p>
                <span>{item.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;

// const SkillsPage = () => {
//   return (
//     <div className="h-screen flex justify-center items-center bg-gradient-to-r from-slate-300 to-slate-500">SkillsPage</div>
//   )
// }

// export default SkillsPage
