"use client";
import { useState, useEffect, useRef } from "react";
import ali from "../public/testimonials/avatar-ali.png";
import anisha from "../public/testimonials/avatar-anisha.png";
import richard from "../public/testimonials/avatar-richard.png";
import shanai from "../public/testimonials/avatar-shanai.png";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsRef = useRef(null);
  const isInView = useInView(testimonialsRef, { once: true, margin: "-100px" });

  const testimonials = [
    {
      id: 1,
      name: "Fernanda Travis",
      avatar: anisha,
      opinion:
        "“Gracias a la interfaz intuitiva de Oscar Garcia, he podido optimizar la gestión de mis proyectos y mejorar la eficiencia de mi equipo. Su atención al detalle y profesionalismo son inigualables.”",
    },
    {
      id: 2,
      name: "Luciana Demichelli",
      avatar: ali,
      opinion:
        "“Desde que comenzamos a usar Manage, hemos podido simplificar nuestra comunicación y eliminar la confusión entre herramientas. Ahora, todos están mucho más enfocados en sus tareas.”",
    },
    {
      id: 3,
      name: "Richard Mosquera",
      avatar: richard,
      opinion:
        "“Su diseño y asesoramiento nos permiten estructurar y gestionar nuestros flujos de trabajo. Nos mantiene organizados y concentrados. ¡No puedo dejar de recomendarlo a todos los que conozco!”",
    },
    {
      id: 4,
      name: "Jaquelin Blanco",
      avatar: shanai,
      opinion:
        "“Las funcionalidades que ofrece nos permiten hacer seguimiento, gestionar y colaborar en nuestros proyectos desde cualquier lugar. Mantiene a todo el equipo sincronizado sin ser intrusivo.”",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.screen.width > 1025) {
        setCurrentIndex((prevIndex) => (prevIndex === 1 ? 0 : prevIndex + 1));
      } else if (window.screen.width > 1280) {
        setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <section className="bg-transparent w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={testimonialsRef}
          className="relative mt-10 overflow-hidden w-full"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="mx-auto lg:max-w-[500px]  text-center font-bold mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Testimonios.
          </motion.h2>
          <motion.p
            initial={{ y: -"100px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="dark:text-stone-200 text-[#4b5563] text-base sm:text-lg max-w-2xl md:max-w-3xl text-center mx-auto mb-2 md:mb-6"
          >
            Desarrollo interfaces de usuario intuitivas y atractivas que
            permiten a mis clientes tomar decisiones informadas sobre sus
            finanzas. Nos comprometemos a ofrecer soluciones personalizadas y un
            diseño centrado en el usuario, garantizando una experiencia fluida y
            confiable en cada interacción.
          </motion.p>
          <div className="relative overflow-hidden lg:overflow-visible w-full max-w-lg mx-auto lg:mx-0 lg:max-w-1/2 xl:max-w-1/3">
            <div
              className="mt-20 flex relative lg:gap-5 transition-transform duration-500 ease-in-out z-100"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials?.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 flex justify-center z-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    className="relative rounded-md p-6 bg-gradient-to-b dark:from-primary/10 dark:to-tertiary/10 from-[#174d4d]/70 via-[#174d4d]/80 to-[#174d4d]/90 border-gray-400 dark:border-white/10 mb-10 max-w-[380px] md:max-w-[500px] cursor-pointer shadow-md dark:shadow-primary/50"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    <Image
                      src={testimonial.avatar}
                      alt="avatar image"
                      className="absolute -top-[50px] left-[50%] -translate-x-1/2 rounded-full w-20 lg:w-24"
                    />
                    <div className="flex flex-col items-center">
                      <motion.h3
                        className="my-5 lg:mt-12 text-lg font-bold text-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        {testimonial.name}
                      </motion.h3>
                      <motion.p
                        className="text-center text-content/80 "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        {testimonial.opinion}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <motion.ul
              className="lg:hidden flex items-center justify-center gap-2 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {testimonials?.map((_, index) => {
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  >
                    <motion.div
                      className={`
                    ${
                      currentIndex === index && "dark:bg-stone-100 bg-slate-400"
                    }
                    size-2 border border-[#174d4d]/70 dark:border-tertiary/70 rounded-full`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    ></motion.div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
          {/* <motion.button
            className="block mx-auto mb-5 py-3 px-10 bg-gradient-to-r from-[#DFBD69] to-[#DFBD69]/70 text-white rounded-lg hover:bg-stone-200 transition
          cursor-pointer text-sm shadow-md duration-300 "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Trabajemos!
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
