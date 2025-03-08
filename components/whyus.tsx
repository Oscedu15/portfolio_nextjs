"use client";
import Image from "next/image";
//Animation
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { desVariants, tagVariants } from "@/utils/animation";

const WhyUs = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(1);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start center", "end start"],
  });

  const height = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["12.91512915129151%", "100%"]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.125) {
      setPosition(1);
    } else if (latest > 0.125 && latest < 0.25) {
      setPosition(2);
    } else if (latest > 0.25 && latest < 0.375) {
      setPosition(3);
    } else {
      setPosition(4);
    }
  });

  return (
    <section className="relative flex w-full flex-col-reverse items-center justify-center gap-16 px-6 pb-16 pt-6 md:flex-row md:px-10 md:pt-10 xl:px-[159px]">
      <div className="relative flex w-full flex-col-reverse gap-16 md:flex-row 3xl:max-w-[1200px]">
        {/* Left Panel Content */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.3,
              ease: [0.44, 0, 0.22, 0.99],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="relative z-10 h-[350px] w-full object-cover sm:h-[450px] md:h-[591px] md:min-w-[400px] xl:min-w-[592px]"
        >
          <Image
            fill
            src="/perfil.jpeg"
            alt="emergency"
            className={`absolute z-[13] h-full w-full scale-[1.01] object-cover transition-all duration-300 ${
              position === 1 ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
          />
          <Image
            fill
            src="/projects/mobile.jpg"
            alt="desntisty"
            className={`absolute z-[13] h-full w-full scale-[1.01] object-cover transition-all duration-300 ${
              position === 2 ? "opacity-100" : "opacity-0"
            }`}
          />
          <Image
            fill
            src="/projects/ecommerce.png"
            alt="surgical"
            className={`absolute z-[11] h-full w-full scale-[1.01] object-cover transition-all duration-300 ${
              position <= 3 ? "opacity-100" : "opacity-0"
            }`}
          />
          <Image
            fill
            src="/perfil.jpeg"
            alt="health"
            className={`absolute z-[10] h-full w-full scale-[1.01] object-cover transition-all duration-300 ${
              position <= 4 ? "opacity-100" : "opacity-0"
            }`}
          />
        </motion.div>
        {/* Left Panel Control */}
        <div ref={cardRef} className="flex flex-col pt-[0px]">
          <motion.h3
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="text-center"
          >
            Medical departments
          </motion.h3>
          {/* Right Panel Control */}
          <div className="relative mt-6 w-full flex-col items-center justify-center gap-6">
            {/* Border Line Content */}
            <div className="[544px] absolute left-0 top-0 h-full w-1 bg-[#eaecf0]">
              <motion.div
                style={{ height: height }}
                className="h-[70px] w-1 rounded-full bg-red-600 dark:bg-violet-700"
              />
            </div>
            {/* Border Line Content */}
            <div
              className={`py-4 pl-6 transition-all ${
                position === 1 ? "opacity-100" : "opacity-30"
              }`}
            >
              <motion.h5
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className="text-[20px] font-bold leading-[30px] text-red-600  dark:text-violet-700"
              >
                Emergency Department
              </motion.h5>
              <motion.p
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className="mt-2 text-base font-medium leading-4 text-[#445469]"
              >
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life.
              </motion.p>
            </div>
            <div
              className={`py-4 pl-6 transition-all ${
                position === 2 ? "opacity-100" : "opacity-30"
              }`}
            >
              <motion.h5
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className="text-[20px] font-bold leading-[30px] text-red-600  dark:text-violet-700"
              >
                Restorative Dentistry
              </motion.h5>
              <motion.p
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className="mt-2 text-base font-medium leading-4 text-[#445469]"
              >
                Our dedicated team of medical professionals is here to guide you
                on your health journey
              </motion.p>
            </div>
            <div
              className={`py-4 pl-6 transition-all ${
                position === 3 ? "opacity-100" : "opacity-30"
              }`}
            >
              <motion.h5
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className="text-[20px] font-bold leading-[30px] text-red-600  dark:text-violet-700"
              >
                Surgical Interventions
              </motion.h5>
              <motion.p
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className="mt-2 text-base font-medium leading-4 text-[#445469]"
              >
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life.
              </motion.p>
            </div>
            <div
              className={`py-4 pl-6 transition-all ${
                position === 4 ? "opacity-100" : "opacity-30"
              }`}
            >
              <motion.h5
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className="text-[20px] font-bold leading-[30px] text-red-600  dark:text-violet-700"
              >
                Health Monitoring
              </motion.h5>
              <motion.p
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className="mt-2 text-base font-medium leading-4 text-[#445469]"
              >
                Our dedicated team of medical professionals is here to guide you
                un your health journey.
              </motion.p>
            </div>
          </div>
          {/* Right Panel Control */}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
