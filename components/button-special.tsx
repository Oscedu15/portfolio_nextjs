"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiFramer,
  SiTailwindcss,
  SiSwiper,
  SiJavascript,
} from "react-icons/si";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { TbArrowRight } from "react-icons/tb";

const proyects2 = [
  {
    title: "Restaurante W-Food",
    description: "Sabor que enamora, en cada bocado.",
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Next.js", icon: SiNextdotjs, color: "000000" },
      { name: "Framer Motion", icon: SiFramer, color: "00000" },
      { name: "Tailwind", icon: SiTailwindcss, color: "06B6D4" },
    ],
    image: "/projects/w-food.png",
    href: "https://w-food-two.vercel.app/",
  },
  {
    title: "Agencia Espacial",
    description: "Impulsando la exploración más allá de nuestro planeta.",
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Next.js", icon: SiNextdotjs, color: "000000" },
      { name: "Framer Motion", icon: SiFramer, color: "00000" },
      { name: "Tailwind", icon: SiTailwindcss, color: "06B6D4" },
    ],
    image: "/projects/space.png",
    href: "https://espacio-flax.vercel.app/",
  },
  {
    title: "Gym FitPhysque",
    description: "Donde la fuerza se encuentra con la determinación.",
    tech: [
      { name: "Swiper", icon: SiSwiper, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Next.js", icon: SiNextdotjs, color: "000000" },
      { name: "Framer Motion", icon: SiFramer, color: "00000" },
      { name: "Tailwind", icon: SiTailwindcss, color: "06B6D4" },
    ],
    image: "/projects/gym.png",
    href: "https://gym-tawny-nu.vercel.app/",
  },
  {
    title: "Home Axil",
    description:
      "Construyendo futuros, encuentra el lugar perfecto para tu historia.",
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Javascript", icon: SiJavascript, color: "#FFCA28" },
      { name: "Next.js", icon: SiNextdotjs, color: "000000" },
      { name: "Framer Motion", icon: SiFramer, color: "00000" },
      { name: "Tailwind", icon: SiTailwindcss, color: "06B6D4" },
    ],
    image: "/projects/home-axil.png",
    href: "https://home-axil-ruby.vercel.app/",
  },
  {
    title: "AppSocially",
    description: "Conectando vidas, compartiendo momentos.",
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Next.js", icon: SiNextdotjs, color: "000000" },
      { name: "Framer Motion", icon: SiFramer, color: "00000" },
      { name: "Tailwind", icon: SiTailwindcss, color: "06B6D4" },
    ],
    image: "/projects/appsocially.png",
    href: "https://osocially.vercel.app/",
  },
  {
    title: "Ar-tico",
    description:
      "Mantén la frescura en casa, en la industria y en la carretera.",
    tech: [
      { name: "Swiper", icon: SiSwiper, color: "#61DAFB" },
      { name: "Javascript", icon: SiJavascript, color: "#FFCA28" },
      { name: "Next.js", icon: SiNextdotjs, color: "000000" },
      { name: "Framer Motion", icon: SiFramer, color: "00000" },
      { name: "Tailwind", icon: SiTailwindcss, color: "06B6D4" },
    ],
    image: "/projects/ar-tico.png",
    href: "https://construccion-psi.vercel.app/",
  },
];

const ShowMoreButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col items-center mt-4 md:mt-6">
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isVisible ? 1 : 0, height: isVisible ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        {/* Project Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 md:mt-6 lg:grid-cols-3 gap-8 relative z-10 px-2 lg:px-0">
          {proyects2.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="group relative h-[500px] rounded-3xl overflow-hidden
                            dark:bg-surface bg-gradient-to-r from-[#174d4d]/70 via-[#174d4d]/80 to-[#174d4d]/90 border border-gray-400 dark:border-white/10 cursor-pointer
                        dark:from-surface dark:via-surface
                        dark:to-surface"
            >
              {/* Image Section */}
              <motion.div
                className="h-[250px] relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-fill overflow-hidden"
                  priority
                />
              </motion.div>

              {/* Content Section */}
              <motion.div
                className="p-6 h-[25px] bg-red-700/900 dark:bg-surface"
                transition={{ duration: 0.3 }}
              >
                <div
                  className="flex justify-between items-start
                                mb-4 group/title"
                >
                  <Link href={project.href} target="_blank" rel="noopener">
                    <h3
                      className="text-2xl font-bold text-content dark:bg-gradient-to-r
                              hover:text-3xl hover:text-white
                         dark:from-primary dark:via-secondary
                        dark:to-tertiary 
                        hover:bg-clip-text dark:hover:text-transparent duration-500 transition-all"
                    >
                      {project.title}
                    </h3>
                  </Link>

                  <ArrowUpRightIcon
                    className="h-6 w-6 text-content/50 group-hover/title:text-white
                                 dark:group-hover/title:text-lime-400  transition-colors duration-300"
                  />
                </div>
                <p className="text-content/80 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-full bg-white/5 text-white dark:text-content/80
                                    text-sm border border-white/5 hover:bg-[#174d4d]/90
                                    dark:hover:bg-surface transition-colors flex items-center
                                     gap-1.5 group/tech"
                    >
                      <tech.icon
                        style={{ color: tech.color }}
                        className="w-4 h-4 transition-colors"
                      />
                      <span className="group-hover/tech:text-content transition-colors">
                        {tech.name}
                      </span>
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        onClick={toggleVisibility}
        className="relative mt-4 overflow-hidden btn rounded-full  transition-all group"
      >
        <span className="flex group-hover:text-primary text-white">
          {isVisible ? "Ver Menos" : "Ver Más"}
          <TbArrowRight
            className={`w-5 h-5 duration-500 ml-2 ${
              isVisible ? "group-hover:-rotate-90" : "group-hover:rotate-90"
            } `}
          />
          <div
            className="absolute rounded-full inset-0 bg-gradient-to-r 
        from-primary/10 to-tertiary/10 opacity-0 
        group-hover:opacity-100 transition-opacity"
          />
        </span>
      </motion.button>
    </div>
  );
};

export default ShowMoreButton;
