"use client";
import { ParticleCanvas } from "@/hooks/particle";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden dark:bg-black">
      <ParticleCanvas />
      <div className="max-w-7xl mx-auto px-6 pt-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group lg:w-1/2"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className=" mb-6"
            >
              Front End
              <br />
              Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-2xl text-content/80 mb-8"
            >
              Especializado en React, Next.js, Tailwindcss y Prisma. Creación de
              aplicaciones escalables con tecnologías modernas.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="relative btn"
            >
              <span className="text-content rounded-full group-hover:text-primary transition-colors">
                Explorar
              </span>
              <div
                className="absolute rounded-full inset-0 bg-gradient-to-r 
        from-primary/10 to-tertiary/10 opacity-0
        group-hover:opacity-100 transition-opacity"
              />
            </motion.button>
          </motion.div>
          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="lg:w-1/2 relative"
            style={{ y }}
          >
            <div className="realtive w-full aspect-square group">
              {/* Animated Border */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="absoulte inset-0 rounded-3xl
                                    bg-gradient-to-r from-primary/30
                                via-secondary/30 to-tertiary/30
                                 opacity-50"
              />
              {/* Floating Animation */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="realtive w-full aspect-square 
                                rounded-3xl overflow-hidden
                                border border-white/10 bg-surface 
                                backdrop-blur-sm"
              >
                <Image
                  src="/perfil.jpeg"
                  alt="Avatar"
                  fill
                  priority
                  quality={100}
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                />
                <div className="absoulte inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.6,
                  }}
                  className="absolute bottom-8 left-8"
                >
                  <div className="text-2xl font-bold text-content">
                    Actualmente en:
                    <motion.span
                      className="block bg-gradient-to-r from-red-600 via-red-500
  to-red-400 dark:from-primary dark:via-secondary
  dark:to-tertiary bg-clip-text text-transparent"
                      animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "mirror",
                      }}
                      style={{
                        backgroundSize: "200% 200%",
                      }}
                    >
                      Cordoba, Argentina.
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
