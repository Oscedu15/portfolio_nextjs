"use client";

// import { TbArrowUpRight } from "react-icons/tb";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, tagVariants, titleVariants } from "@/utils/animation";
import { TbArrowUpRight } from "react-icons/tb";
import Link from "next/link";
import { blurhashToBase64 } from "blurhash-base64";

const Badge = () => {
  return (
    <div className="max-w-7xl dark:from-primary/10 dark:to-tertiary/10 text-white py-12 xl:py-24 h-[auto] text-center lg:py-0 lg:text-left lg:flex lg:justify-between mx-auto">
      <div className="block md:flex  md:flex-row-reverse">
        {/* left section */}
        <div className="lg:w-1/2 py-0 md:py-8 lg:text-left">
          <motion.h3
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="text-center lg:p-10 my-4 px-4 md:px-0 md:mt-0"
          >
            Hola, mi nombre es Oscar
          </motion.h3>
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="pb-6 text-center xl:pb-10 px-4 md:px-0"
          >
            Soy un desarrollador Front-End Jr, radicado en Cordoba - Argentina,
            enfocado en crear interfaces de usuario accesibles e interactivas.
            Trabajando con herramientas líderes en la industria como Prisma,
            Nextjs, React, Tailwindcss, FramerMotion, entre otros. <br />
            <br /> Mi trabajo favorito se encuentra en la intersección del
            diseño y el desarrollo. Creando experiencias que no sólo se ven
            geniales sino que están meticulosamente diseñadas para el
            rendimiento y la facilidad de uso.
            <br />
            <br />
            Embárcate en un viaje a través de mi experiencia dinámica, que
            abarca el diseño web, desarrollo, mantenimiento, diseño de
            aplicaciones y desarrollo.
            <br />
            ¿Interesado en colaborar conmigo?
          </motion.p>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="flex justify-center"
          >
            <button
              className="flex relative max-w-sm items-center shadow-lg duration-200 btn
        text-center transition-all group hover:scale-95"
            >
              <Link
                href="/proyectos"
                className="flex group-hover:text-primary "
              >
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
        {/* right section */}
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="w-1/2
        "
        >
          <Image
            src="/foto-perfil.jpg"
            alt="heroImage"
            className="absolute right-18  xl:h-fit xl:w-[575px] max-h-[700px] lg:w-[500px] hidden lg:block"
            width={800}
            height={500}
            placeholder="blur"
            blurDataURL={blurhashToBase64("LQJ@LFJnp{-Uxuf6RjWVK5s:xGRj")}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Badge;
