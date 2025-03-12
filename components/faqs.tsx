"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "Mejora de la visibilidad",
    answer:
      "Tener un sitio web permite que tu negocio sea encontrado fácilmente en línea, lo que aumenta la exposición a clientes potenciales.",
  },
  {
    question: "Credibilidad y confianza",
    answer:
      "Un sitio web profesional genera confianza en los consumidores, ya que les proporciona información clara sobre tu negocio y productos.",
  },
  {
    question: "Análisis de datos",
    answer:
      "Un sitio web te permite recopilar datos sobre el comportamiento de los usuarios, lo que puede ayudarte a ajustar tus estrategias de marketing y mejorar la experiencia del cliente.",
  },
  {
    question: "Facilitación de la comunicación",
    answer:
      "Puedes ofrecer múltiples canales de contacto, como formularios, chat en vivo y correos electrónicos, mejorando la atención al cliente.",
  },
  {
    question: "Disponibilidad 24/7",
    answer:
      "A diferencia de un negocio físico, un sitio web está disponible todo el tiempo, lo que permite a los clientes realizar compras o consultas en cualquier momento.",
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="pb-28 mx-auto max-w-7xl">
      <div className="mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-center md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#03363D]/60 via-[#03363D]/70 to-[#03363D]/80 dark:from-primary dark:via-secondary dark:to-tertiary bg-clip-text text-transparent flex flex-col"
        >
          Beneficios de adquirir un
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className=" px-12 md:px-0"
          >
            servicio de página web.
          </motion.span>
        </motion.span>

        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
          {faqs?.map((faq, faqIndex) => (
            <div
              key={faqIndex}
              className="bg-gradient-to-r
        dark:from-primary/10 dark:to-tertiary/10 from-gray-300/50 to-gray-400/50 text-white rounded-2xl border border-white/10 p-6
        dark:shadow-2xl dark:shadow-primary/10 shadow-lg shadow-[#366b48cc]"
            >
              <div
                className="flex justify-between items-center mx-auto"
                onClick={() => setSelectedIndex(faqIndex)}
              >
                <p className="font-bold text-center text-[#03363D]/70">
                  {faq.question}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={twMerge(
                    "feather feather-plus text-[#03363D]/90 dark:text-lime-400 flex-shrink-0 transition duration-300 cursor-pointer",
                    selectedIndex === faqIndex && "rotate-45"
                  )}
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{
                      height: 0,
                      marginTop: 0,
                    }}
                    animate={{
                      height: "auto",
                      marginTop: 24,
                    }}
                    exit={{ height: 0, marginTop: 0 }}
                    className={twMerge("overflow-hidden")}
                  >
                    <p className="dark:text-white/50 text-[#174d4d]/60 ">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
