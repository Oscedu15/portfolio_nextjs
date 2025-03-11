"use client";

import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import { motion, useScroll, useTransform } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
import { useRef } from "react";

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
            We have great idea & Interior Design
          </motion.h2>
          <motion.h5
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="text-gray-600  text-center dark:text-white/50 pb-10 mt-5"
          >
            Aquí encontrarás mis escritos sobre temas que van desde la
            codificación y la industria web hasta la lingüística y el
            procesamiento del lenguaje natural; también hay un práctico canal
            RSS, si prefieres suscribirte.
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
            <p className="pb-8 tracking-wide  mt-6 mx-auto">
              El equipo técnico de un solo hombre listo para darle vida a tu
              próxima gran idea. Trabajemos juntos. Desde diseño de interacción
              hasta sistemas de diseño escalables, aplicaciones de una sola
              página y algo más experimental con WebGL. Ayudo a gente increíble
              a crear proyectos web ambiciosos y accesibles: cuanto más
              atrevidos, mejor.
              <br className="hidden md:block" />
              <br />
              <span className="hidden md:block ">
                Soy un desarrollador apasionado por crear interfaces de usuario
                accesibles y perfectas en cuanto a píxeles que combinen un
                diseño bien pensado con una ingeniería sólida. Mi trabajo
                favorito se encuentra en la intersección del diseño y el
                desarrollo. Creando experiencias que no sólo se ven geniales
                sino que están meticulosamente diseñadas para el rendimiento y
                la facilidad de uso.
              </span>
              <br className="hidden md:block" />
              <br />
              <span className="text-xl font-extrabold tracking-tight">
                The backpiperARCH, we share a belief in the transformational
                power of people united in a common purpose.
              </span>
            </p>
            <button
              className="flex  relative max-w-sm items-center   shadow-lg duration-200 btn
        text-center transition-all group"
            >
              Read More
              <TbArrowUpRight className="w-5 h-5 ml-2" />
              <div
                className="absolute rounded-full inset-0 bg-gradient-to-r 
        from-primary/10 to-tertiary/10 opacity-0
        group-hover:opacity-100 transition-opacity"
              />
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
              Testimonios
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
                className="p-4 text-center  bg-gradient-to-r from-primary via-secondary
        to-tertiary bg-clip-text text-transparent -m-0.5 aspect-square dark:bg-tertiary transition hover:-translate-y-3 hover:-translate-x-3"
              >
                <Image
                  src="/perfil.jpeg"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto"
                  alt="profile2"
                />

                <h2 className="py-4 text-2xl font-semibold uppercase">
                  Building Surveys
                </h2>
                <p className="text-base">
                  Creativity is the obility to generate, create, or discover new
                  ideas, solutions, and possibilities.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="border-2 border-[#366b48cc] dark:border-primary"
            >
              <div
                className="p-4 text-center  bg-gradient-to-r from-primary via-secondary
        to-tertiary bg-clip-text text-transparent -m-0.5 aspect-square dark:bg-tertiary transition hover:-translate-y-3 hover:-translate-x-3"
              >
                <Image
                  src="/perfil.jpeg"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto"
                  alt="profile3"
                />
                <h2 className="py-4 text-2xl font-semibold uppercase">
                  Building Surveys
                </h2>
                <p className="text-sm">
                  Creativity is the obility to generate, create, or discover new
                  ideas, solutions, and possibilities.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="border-2 border-[#366b48cc] dark:border-primary"
            >
              <div
                className="p-4 text-center  bg-gradient-to-r from-primary via-secondary
        to-tertiary bg-clip-text text-transparent -m-0.5 aspect-square  transition hover:-translate-y-3 hover:-translate-x-3"
              >
                <Image
                  src="/perfil.jpeg"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto"
                  alt="profile1"
                />
                <h2 className="py-4 text-2xl font-semibold uppercase">
                  Building Surveys
                </h2>
                <p className="text-sm">
                  Creativity is the obility to generate, create, or discover new
                  ideas, solutions, and possibilities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesPage;

// const ExperiencesPage = () => {
//   return (
//     <div className="h-screen flex justify-center items-center bg-gradient-to-r from-stone-500 to-stone-700 text-white">ExperiencesPage</div>
//   )
// }

// export default ExperiencesPage
