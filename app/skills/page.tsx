"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TbArrowNarrowRight } from "react-icons/tb";

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
  return (
    <div className="bg-gray-900">
      <div
        className=" py-24  sm:py-32 bg-gradient-to-r 
        from-primary/10 to-tertiary/10 text-white  xl:py-24 h-auto lg:justify-between p-4"
      >
        <div className="grid lg:grid-cols-2 place-items-center max-w-7xl mx-auto">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/perfil.jpeg"
              alt="About"
              width={900}
              height={500}
              className="w-[600px] lg:w-[900px] max-md:hidden"
            />{" "}
          </motion.div>
          <div className="items-center">
            <motion.h2
              initial="offscreen"
              whileInView={"onscreen"}
              className="px-12 bg-gradient-to-r from-primary via-secondary
        to-tertiary bg-clip-text text-transparent py-4 text-3xl font-extrabold leading-tight lg:text-5xl text-center"
            >
              We are awards Winning Company
            </motion.h2>
            <motion.p
              initial="offscreen"
              whileInView={"onscreen"}
              className="px-12 tracking-wider  uppercase text-gray-400 mt-3"
            >
              World Award
            </motion.p>
            <motion.p
              initial="offscreen"
              whileInView={"onscreen"}
              className="px-12 pb-4 mt-4"
            >
              This is a company engaged in the field of interior design. We
              provide the best interior design fr your home. We have been
              trusted by many people to design their homes. We have also recived
              many awards from various countries for our work.
            </motion.p>
            <motion.p
              initial="offscreen"
              whileInView={"onscreen"}
              className="px-12 pb-4"
            >
              This is a company engaged in the field of interior design. We
              provide the best interior design fr your home. We have been
              trusted by many people to design their homes. We have also recived
              many awards from various countries for our work.
            </motion.p>
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
                className="inset-0 bg-gradient-to-t from-primary via-secondary
        to-tertiary flex-col items-center justify-end md:flex md:absolute gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-b-0 hidden cursor-pointer"
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
