"use client";

import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import { motion, useScroll, useTransform } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
import { useRef } from "react";
import Link from "next/link";

const ExperiencesPage = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div className="bg-gray-900 overflow-hidden">
      <div
        className="bg-gradient-to-r p-4 py-24 sm:py-32
        dark:from-primary/10 dark:to-tertiary/10 from-slate-50 to-gray-300 text-white"
      >
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="text-center lg:p-10 mt-10
           md:mt-20"
          >
            Un poco sobre mi.
          </motion.h2>
          <motion.h5
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="text-gray-600  text-center dark:text-white/50 pb-10 mt-5"
          >
            De origen venezolano y autodidacta, aporto una mezcla única de
            pasión y al desarrollo y el diseño. Enfocado con el rendimiento y
            dedicado a crear diseños limpios e impactantes, espero con mi
            trabajo dejar un testamento de la fusión de habilidad y creatividad.
          </motion.h5>
        </div>
        <div className="items-center max-w-7xl mx-auto lg:flex gap-x-8">
          <motion.div style={{ scale }} ref={ref} className="w-full">
            <Image
              src="/perfil.jpeg"
              width={700}
              height={700}
              alt="gallery1123"
            />
          </motion.div>
          {/* Right Content Section */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
          >
            <p className="pb-8 flex flex-col gap-y-2 mt-6 mx-auto">
              Desde que escribí mis primeras líneas de código a fines de 2022
              hasta este punto, he perfeccionado continuamente mis habilidades
              de desarrollo con el tiempo y resolviendo desafíos complejos
              aumentando la complejidad a medida que pasa el tiempo para
              garantizar la mejora.
              <br />
              <span>
                Cada desafío es único, por lo que me aseguro de aprender y
                crecer en cada uno de ellos, asegurándome de no solo dar lo
                mejor de mí, sino también de ofrecer soluciones que las empresas
                se enorgullezcan de llamar propias. ¿Quieres saber más?!!!
              </span>
              <span className="hidden md:block">
                Nos encanta llevar las marcas del punto A al punto B de sus
                sueños y mejorar iterativamente a medida que pasa el tiempo.
              </span>
              <span>
                Explora una recopilación de mis mejores esfuerzos que abarcan
                Diseño Web y y Desarrollo Web. En un viaje digital dinámico,
                durante los últimos 3 años, adaptándome a la constante evolución
                de diseño y el desarrollo. Sigo comprometido con el aprendizaje
                continuo adquirir nuevas habilidades para mantenerme a la
                vanguardia de la innovación.
              </span>
            </p>
            <button
              className="flex  relative max-w-sm items-center shadow-lg duration-200 btn
        text-center transition-all group"
            >
              <Link href="/proyectos" className="flex group-hover:text-primary">
                Proyectos
                <TbArrowUpRight className="w-5 h-5 duration-500 ml-2 group-hover:rotate-45" />
                <div
                  className="absolute rounded-full inset-0 bg-gradient-to-r 
        from-primary/10 to-tertiary/10 opacity-0 
        group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </button>
          </motion.div>
        </div>
        {/* Team Section */}
        <div className="lg:py-20 mx-auto max-w-7xl">
          <div className="pt-8 pb-4">
            <motion.h4
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="bg-gradient-to-r from-[#174d4d]/70 via-[#174d4d]/80
  to-[#174d4d]/90 dark:from-primary dark:via-secondary
dark:to-tertiary font-bold tracking-wider text-center"
            >
              Certificados
            </motion.h4>
          </div>

          <div className="grid py-8 gap-20 lg:grid-cols-3">
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="border-2 border-[#366b48cc] dark:border-primary"
            >
              <div
                className="p-4 text-center flex flex-col justify-center md:justify-end items-center   bg-gradient-to-r from-primary via-secondary
        to-tertiary bg-clip-text text-transparent -m-0.5 aspect-square dark:bg-tertiary transition hover:-translate-y-3 hover:-translate-x-3"
              >
                <Image
                  src="/alura.jpg"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto"
                  alt="profile2"
                />
                <Link
                  href="https://app.aluracursos.com/program/certificate/d723b325-177b-488f-83bb-98946cf2326b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="py-4 text-2xl font-semibold uppercase">
                    Programa Oracle Next Education F2 T4 Front-end
                  </h3>
                </Link>
                <p className="">Alura Latam</p>
              </div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="border-2 border-[#366b48cc] dark:border-primary"
            >
              <div
                className="p-4 text-center flex flex-col justify-center md:justify-end items-center   bg-gradient-to-r from-primary via-secondary
        to-tertiary bg-clip-text text-transparent -m-0.5 aspect-square dark:bg-tertiary transition hover:-translate-y-3 hover:-translate-x-3"
              >
                <Image
                  src="/alura.jpg"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto"
                  alt="profile3"
                />
                <Link
                  href="https://app.aluracursos.com/certificate/9139fa0f-fd71-4b5e-95b3-e4e3dc64aada"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="py-4 text-2xl font-semibold uppercase">
                    Consultas SQL: Avanzando en SQL con MySQL
                  </h3>
                </Link>
                <p className="">Alura Latam</p>
              </div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="border-2 border-[#366b48cc] dark:border-primary"
            >
              <div
                className="p-4 text-center flex flex-col justify-center md:justify-end items-center  bg-gradient-to-r from-primary via-secondary
        to-tertiary bg-clip-text text-transparent -m-0.5 aspect-square  transition hover:-translate-y-3 hover:-translate-x-3"
              >
                <Image
                  src="/alura.jpg"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto"
                  alt="profile1"
                />
                <Link
                  href="https://app.aluracursos.com/degree/certificate/c7b6d717-0550-45a0-915c-e678013740ba"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="py-4 mt-4 text-2xl font-semibold uppercase">
                    Formación Front End G4 - ONE
                  </h3>
                </Link>
                <p className="">Alura Latam</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesPage;

// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { TbArrowNarrowRight } from "react-icons/tb";
// //react intersesction observer
// import { useInView } from "react-intersection-observer";
// import {
//   MdOutlineBuildCircle,
//   MdOutlineDirectionsCar,
//   MdOutlineMapsHomeWork,
// } from "react-icons/md";
// import CountUp from "react-countup";

// import { fadeIn, titleVariants } from "@/utils/animation";

// const SkillsPage = () => {
//   const items = [
//     {
//       id: "01",
//       category: "BEDROOM SETUP",
//       title: "Cossy Bedroom Setup",
//       image: "/perfil.jpeg",
//       description:
//         "family drowing room with a clean and comfortable design for your family.",
//     },
//     {
//       id: "02",
//       category: "KITCHEN SETUP",
//       title: "Neat & Clean Kitchen",
//       image: "/perfil.jpeg",
//       description:
//         "family drowing room with a clean and comfortable design for your family.",
//     },
//     {
//       id: "03",
//       category: "DROWING SETUP",
//       title: "Family Drowing Room",
//       image: "/perfil.jpeg",
//       description:
//         "family drowing room with a clean and comfortable design for your family.",
//     },
//     {
//       id: "04",
//       category: "LIVING SETUP",
//       title: "Neat & Clean Kitchen",
//       image: "/perfil.jpeg",
//       description:
//         "family drowing room with a clean and comfortable design for your family.",
//     },
//   ];
//   const [ref, inView] = useInView({
//     threshold: 0.5,
//   });
//   return (
//     <div className="bg-gray-900 overflow-hidden" ref={ref}>
//       <div
//         className="py-24 sm:py-32 bg-gradient-to-r 
//         dark:from-primary/10 dark:to-tertiary/10 from-slate-50 to-gray-300 text-white  xl:py-24 h-auto lg:justify-between p-4"
//       >
//         <div className="grid lg:grid-cols-2 max-w-7xl mx-auto">
//           <motion.div
//             initial="offscreen"
//             whileInView={"onscreen"}
//             variants={titleVariants}
//             viewport={{ once: false, amount: 0.6 }}
//             className=""
//           >
//             <Image
//               src="/perfil.jpeg"
//               alt="About"
//               width={900}
//               height={500}
//               className="w-[600px] rounded-lg transition-all duration-300 hover:scale-105
//             hover:grayscale cursor-pointer grayscale-0 mt-20 h-4/6 lg:w-[900px] max-md:hidden"
//             />{" "}
//           </motion.div>
//           <div className="items-star md:items-center">
//             <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.5 }}
//               className="px-12 mt-16  py-4 text-center"
//             >
//               We are awards Winning Company
//             </motion.h2>
//             <motion.h4
//               variants={fadeIn("up", 0.4)}
//               initial="hidden"
//               whileInView={"show"}
//               viewport={{ once: false, amount: 0.6 }}
//               className="px-12  text-center  uppercase text-gray-600 mt-3"
//             >
//               World Award
//             </motion.h4>
//             <motion.p
//               variants={fadeIn("left", 0.6)}
//               initial="hidden"
//               whileInView={"show"}
//               viewport={{ once: false, amount: 0.6 }}
//               className="px-12 pb-4 mt-4 text-xl text-gray-500 dark:text-content/80 mb-8"
//             >
//               This is a company engaged in the field of interior design. We
//               provide the best interior design fr your home. We have been
//               trusted by many people to design their homes. We have also recived
//               many awards from various countries for our work.
//             </motion.p>
//             <motion.p
//               variants={fadeIn("right", 0.8)}
//               initial="hidden"
//               whileInView={"show"}
//               viewport={{ once: false, amount: 0.6 }}
//               className="text-xl  mb-8 px-12"
//             >
//               This is a company engaged in the field of interior design. We
//               provide the best interior design fr your home. We have been
//               trusted by many people to design their homes. We have also recived
//               many awards from various countries for our work.
//             </motion.p>
//             <motion.div
//               variants={fadeIn("up", 0.8)}
//               initial="hidden"
//               whileInView={"show"}
//               viewport={{ once: false, amount: 0.6 }}
//               className="flex items-center gap-x-8 mb-12 px-0 md:px-12"
//             >
//               {/* cart types */}
//               <div className="flex flex-col w-[100px] px-12">
//                 <MdOutlineDirectionsCar className="text-5xl text-accent" />
//                 <div className="text-3xl font-black mb-2">
//                   {inView ? (
//                     <CountUp start={0} end={50} duration={3} delay={1} />
//                   ) : (
//                     <CountUp start={0} end={50} duration={3} delay={1} />
//                   )}
//                   +
//                 </div>
//                 <div className="uppercase text-[13px] font-semibold text-secondary">
//                   car <br /> types
//                 </div>
//               </div>
//               {/* rental outlets */}
//               <div className="flex flex-col w-[100px]">
//                 <MdOutlineMapsHomeWork className="text-5xl text-accent" />
//                 <div className="text-3xl font-black mb-2">
//                   {inView ? (
//                     <CountUp start={0} end={135} duration={3} delay={1} />
//                   ) : (
//                     <CountUp start={0} end={135} duration={3} delay={1} />
//                   )}
//                   +
//                 </div>
//                 <div className="uppercase text-[13px] font-semibold text-secondary">
//                   rental <br /> outlets
//                 </div>
//               </div>
//               {/* repair points */}
//               <div className="flex flex-col w-[100px]">
//                 <MdOutlineBuildCircle className="text-5xl text-accent" />
//                 <div className="text-3xl font-black mb-2">
//                   {inView ? (
//                     <CountUp start={0} end={35} duration={3} delay={1} />
//                   ) : (
//                     <CountUp start={0} end={135} duration={3} delay={1} />
//                   )}
//                   +
//                 </div>
//                 <div className="uppercase text-[13px] font-semibold text-secondary">
//                   repair <br /> pointss
//                 </div>
//               </div>
//               {/* Btn */}
//             </motion.div>
//           </div>
//         </div>
//         <div className="grid p-4 gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 divide-gray-300 max-w-7xl  mx-auto lg:divide-x">
//           {items?.map((item, index) => (
//             <div
//               key={index}
//               className="relative overflow-hidden group cursor-pointer"
//             >
//               <div>
//                 <Image
//                   src={item.image}
//                   width={380}
//                   height={100}
//                   alt="itemImage"
//                   className="w-full"
//                 />
//               </div>
//               <div className="absolute top-0 p-8 bg-white text-black bg-opacity-60 backdrop-blur m-12">
//                 <div className="flex justify-between pb-4">
//                   <p className="text-sm">{item.category}</p>
//                   <span className="text-sm">{item.id}</span>
//                 </div>
//                 <a href="" className="block text-xl font-semibold">
//                   {item.title}
//                 </a>
//                 <p className="py-4">{item.description}</p>
//                 <a href="" className="inline-flex items-center font-medium">
//                   See Details <TbArrowNarrowRight className="ml-2" />
//                 </a>
//               </div>
//               <div className="inset-0 bg-gradient-to-b from-[#174d4d]/10 via-[#174d4d]/20 to-[#174d4d]/30 dark:from-primary dark:via-secondary dark:to-tertiary flex-col items-center justify-end md:flex md:absolute gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-b-0 hidden cursor-pointer">
//                 <p className="tracking-wider -rotate-90">{item.category}</p>
//                 <span>{item.id}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillsPage;

