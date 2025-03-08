"use client";

import { TbArrowUpRight } from "react-icons/tb";
import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

const Badge = () => {
  return (
    <div className="max-w-7xl dark:from-primary/10 dark:to-tertiary/10 text-white py-12 xl:py-24 h-[auto] text-center lg:py-0 lg:text-left lg:flex lg:justify-between mx-auto">
      <div className="block md:flex  md:flex-row-reverse">
        {/* left section */}
        <div className="lg:w-1/2 py-0 md:py-8 lg:text-left">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="text-center lg:p-10
             md:mt-0"
          >
            Offer for the best Interior
          </motion.h2>

          <motion.h3
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className=" text-content/80 my-8 px-12 text-3xl text-center  uppercase text-gray-600 mt-3"
          >
            Make your home a piece of art
          </motion.h3>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="pb-6 text-muted-foreground xl:pb-10 px-4 md:px-0"
          >
            Change your view with the best interior design. Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Repudiandae, provident! Eos,
            quaerat fugit quasi aut saepe magnam tempora. Sit, asperiores.
            Repudiandae, provident! Eos, quaerat fugit quasi aut saepe magnam
            tempora. Sit, asperiores.
          </motion.p>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
          >
            <button
              className="relative btn transition-all group"
            >
              <span className="text-content group-hover:text-primary transition-colors flex">
                Book Now <TbArrowUpRight className="w-5 h-5 ml-2" />
              </span>
              <div
                className="absolute inset-0 bg-gradient-to-r 
        from-primary/10 to-tertiary/10 opacity-0
        group-hover:opacity-100 transition-opacity"
              />
            </button>
          </motion.div>
        </div>
        {/* right section */}
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="w-1/2
        "
        >
          <Image
            src="/perfil.jpeg"
            alt="heroImage"
            className="absolute right-18  xl:h-[448px] xl:w-[575px] lg:h-[344px] lg:w-[500px] hidden lg:block"
            width={800}
            height={500}
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Badge;
