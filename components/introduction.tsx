"use client";

import { titleVariants } from "@/utils/animation";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

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
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="sticky top-20 md:top-28 lg:top-40">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className=" flex items-center justify-center font-semibold text-center lg:p-10
                       mt-20 mb-4"
          >
            Your creative process deserves better.{" "}
          </motion.h2>
          <div className="text-3xl md:text-4xl lg:text-5xl text-center font-medium mt-10">
            <span className="text-white">
              {words?.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={twMerge(
                    "transition duration-500 text-white",
                    wordIndex < currentWord &&
                      "bg-gradient-to-r from-red-600 via-red-500 to-red-400 dark:from-primary dark:via-secondary dark:to-tertiary bg-clip-text text-transparent"
                  )}
                >{`${word}`}</span>
              ))}
            </span>
            <span className="text-lime-400 block">
              That&apos;s why we built Layers.
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  )
}


