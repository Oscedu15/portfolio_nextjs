"use client";
import { motion } from "framer-motion";
import {
  SiFirebase,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPrisma,
  SiFramer,
  SiVite,
  SiJavascript,
} from "react-icons/si";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import ShowMoreButton from "./button-special";

const projects = [
  {
    title: "Carland Rent",
    description: "Experiencia de reserva de autos con Next.js y Javacript",
    tech: [
      { name: "Next.js", icon: SiNextdotjs, color: "000000" },
      { name: "Tailwind", icon: SiTailwindcss, color: "06B6D4" },
      { name: "Framer Motion", icon: SiFramer, color: "06B6D4" },
      { name: "Javascript", icon: SiJavascript, color: "#FFCA28" },
    ],
    image: "/projects/carland.png",
    href: "https://carland-og.vercel.app/",
  },
  {
    title: "Hotel",
    description: "Real-time data visualization platform",
    tech: [
      { name: "Next.js", icon: SiNextdotjs, color: "000000" },
      { name: "Tailwind", icon: SiTailwindcss, color: "06B6D4" },
      { name: "Framer Motion", icon: SiFramer, color: "00000" },
      { name: "Javascript", icon: SiJavascript, color: "#FFCA28" },
    ],
    image: "/projects/hotel.png",
    href: "https://hotey-next-js.vercel.app/",
  },
  {
    title: "Spa Irene",
    description: "Cross-platform mobile app for health tracking",
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "06B6D4" },
      { name: "Next.js", icon: SiNextdotjs, color: "000000" },
      { name: "Framer Motion", icon: SiFramer, color: "00000" },
    ],
    image: "/projects/spa.png",
    href: "https://serene-hazel.vercel.app/",
  },
  {
    title: "Administrador de Productos",
    description: "Cross-platform mobile app for health tracking",
    tech: [
      { name: "Next.js", icon: SiNextdotjs, color: "000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Tailwind", icon: SiTailwindcss, color: "06B6D4" },
    ],
    image: "/projects/firebase.png",
    href: "https://product-admin-project-nextjs.vercel.app/",
  },
  {
    title: "Mediprime Salud",
    description: "Cross-platform mobile app for health tracking",
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "06B6D4" },
      { name: "Vite", icon: SiVite, color: "#FFCA28" },
      { name: "Framer Motion", icon: SiFramer, color: "00000" },
    ],
    image: "/projects/mediprime.png",
    href: "https://mediprime.vercel.app/",
  },
  {
    title: "LinkTree Clone",
    description: "Cross-platform mobile app for health tracking",
    tech: [
      { name: "Tailwind", icon: SiTailwindcss, color: "06B6D4" },
      { name: "Prisma", icon: SiPrisma, color: "06B6D4" },
      { name: "Next.js", icon: SiNextdotjs, color: "000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Framer Motion", icon: SiFramer, color: "00000" },
    ],
    image: "/projects/linktree.png",
    href: "https://linktree-clone-lac-seven.vercel.app/",
  },
];

export default function Main() {
  return (
    <section className="pt-24 pb-20 sm:pt-32 sm:pb-24 relative id='work'">
      <div className="max-w-7xl mx-auto px-0 md:px-6">
        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20"
        >
          <h2 className=" mb-4 text-center">Proyectos Destacados</h2>
          <div
            className="w-24 h-1 bg-gradient-to-l from-[#174d4d]/70 via-[#174d4d]/80
  to-[#174d4d]/90 dark:from-primary dark:via-secondary
        dark:to-tertiary  rounded-full"
          />
        </motion.div>
        {/* Project Grid */}

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-8 relative z-10 px-2 lg:px-0"
        >
          {projects?.map((project, i) => (
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
        {/* View More Button */}
        <ShowMoreButton />
      </div>
    </section>
  );
}
