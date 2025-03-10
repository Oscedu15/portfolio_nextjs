"use client";
import { useState } from "react";
// import Tag from "../components/Tag";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "How is Layers different from other design tools?",
    answer:
      "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
  },
  {
    question: "Is there a learning curve?",
    answer:
      "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
  },
  {
    question: "How do you handle version control?",
    answer:
      "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
  },
  {
    question: "Can I work offline?",
    answer:
      "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
  },
  {
    question: "How does Layers handle collaboration?",
    answer:
      "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
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
          ¿Tienes preguntas?
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className=" px-12 md:px-0"
          >
            Tenemos respuestas.
          </motion.span>
        </motion.span>

        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
          {faqs?.map((faq, faqIndex) => (
            <div
              key={faqIndex}
              className="bg-gradient-to-r
        dark:from-primary/10 dark:to-tertiary/10 from-gray-300/50 to-gray-400/50 text-white rounded-2xl border border-white/10 p-6
        dark:shadow-2xl dark:shadow-primary/10 shadow-xl shadow-[#366b48cc]"
            >
              <div
                className="flex justify-between items-center mx-auto"
                onClick={() => setSelectedIndex(faqIndex)}
              >
                <p className="font-poppins font-semibold text-center text-[#03363D]/70">
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
                    <span className="dark:text-white/50 text-[#174d4d]/60 font-semibold font-ponnala">
                      {faq.answer}
                    </span>
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
