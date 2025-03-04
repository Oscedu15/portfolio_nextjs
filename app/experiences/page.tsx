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
    <div className="bg-gray-900">
      <div
        className="bg-gradient-to-r p-4 py-24 sm:py-32
        from-primary/10 to-tertiary/10 text-white"
      >
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="text-5xl md:text-5xl lg:text-6xl font-bold text-center lg:p-10
           mt-20 bg-gradient-to-r from-primary via-secondary
        to-tertiary bg-clip-text text-transparent"
          >
            We have great idea & Interior Design
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="text-2xl text-center text-white/50 pb-10 mt-5"
          >
            Our interior design company is a company that provides interior
            design services for homes, offices, apartments, and others. We
            provide the best interior design services for you. We have a team
            that is experienced in the field of interior.
          </motion.p>
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
            <p className="pb-8 tracking-wide text-xl mt-6 mx-auto">
              We are international Architects. We believe that today it is
              fundamental to totally rethink archi-tectural education.
              Confluence not only integrates new visions on society but also
              incorporates new methods and contemporary tools linked to
              creativity, production and communication. De-signed and
              handcrafted to hold and showcase my year two architecture
              portfolio, the unfolding box allows portfolio sheets. <br className="hidden md:block"/>
              <br />
              <span className="hidden md:block text-xl">
                We are international Architects. We believe that today it is
              fundamental to totally rethink archi-tectural education.
              Confluence not only integrates new visions on society but also
              incorporates new methods and contemporary tools linked to
              creativity, production and communication. De-signed and
              handcrafted to hold and showcase my year two architecture
              portfolio, the unfolding box allows portfolio sheets.
              </span>
               <br className="hidden md:block"/>
              <br />
              <span className="text-xl font-extrabold tracking-tight">
                The backpiperARCH, we share a belief in the transformational
                power of people united in a common purpose.
              </span>
            </p>
            <button
              className="flex  relative max-w-sm items-center px-8 py-3 text-content group-hover:text-primary rounded-full shadow-lg duration-200  bg-surface border
       border-white/10 hover:border-primary/30 text-center transition-all group"
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
            <motion.h1
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="text-4xl font-bold tracking-wider text-center  bg-gradient-to-r from-primary via-secondary
        to-tertiary bg-clip-text text-transparent"
            >
              Testimonios
            </motion.h1>
          </div>

          <div className="grid py-8 gap-20 lg:grid-cols-3">
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="border-2 border-primary"
            >
              <div
                className="p-4 text-center  bg-gradient-to-r from-primary via-secondary
        to-tertiary bg-clip-text text-transparent -m-0.5 aspect-square dark:bg-tertiary transition hover:-translate-y-3 hover:-translate-x-3"
                //!!!!!!!!!!!!!!!!!!!!
              >
                <div className="w-32">
                  <Image
                    src="/perfil.jpeg"
                    width={200}
                    height={200}
                    className="rounded-full mx-auto"
                    alt="profile2"
                  />
                </div>

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
              variants={desVariants}
              className="border-2 border-primary"
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
              className="border-2 border-primary"
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
