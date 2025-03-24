"use client";

import { titleVariants } from "@/utils/animation";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `Mi enfoque se centra en la colaboración y la mejora continua, con un compromiso hacia el aprendizaje constante y la adopción de nuevas tecnologías en el desarrollo web. Me apasiona crear soluciones funcionales, visualmente atractivas y accesibles. Soy un desarrollador versátil listo para dar vida a tu próxima gran idea.`;

const words = text.split("");

export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  // useMotionValueEvent(scrollYProgress, 'change', (latest) => console.log("latest", latest))

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);

  return (
    <section className="">
      <div className="container">
        <div className="sticky top-16 md:top-28 lg:top-40">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className=" flex items-center justify-center font-semibold text-center lg:p-10 mt-16 mb-4"
          >
            Creador de Soluciones Web Innovadoras
          </motion.h2>
          <div className="text-3xl md:text-4xl lg:text-5xl text-center font-medium mt-10">
            <span className="text-white">
              {words?.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={twMerge(
                    "transition duration-500 text-[#8b93a3]",
                    wordIndex < currentWord &&
                      "bg-gradient-to-r from-[#03363D]/60 via-[#03363D]/70 to-[#03363D]/80 dark:from-white/70 dark:via-white/80 dark:to-white/90 bg-clip-text text-transparent"
                  )}
                >{`${word}`}</span>
              ))}
            </span>
            <span className="text-lime-400 block mt-4">Trabajemos juntos!</span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}
