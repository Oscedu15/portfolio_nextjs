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
      <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl text-center md:text-5xl lg:text-6xl font-bold bg-gradient-to-r
        from-red-600 via-red-500
        to-red-400 dark:from-primary dark:via-secondary
        dark:to-tertiary 
        bg-clip-text text-transparent mb-6"
            >
              ¿Tienes preguntas? 
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-r from-red-600 via-red-500
        to-red-400 dark:from-primary dark:via-secondary
        dark:to-tertiary bg-clip-text text-transparent"
              >
              Tenemos respuestas.
              </motion.span>
            </motion.h1>
        
    
        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
          {faqs?.map((faq, faqIndex) => (
            <div
              key={faqIndex}
              className="bg-gradient-to-r 
        from-primary/10 to-tertiary/10 text-white rounded-2xl border border-white/10 p-6
        shadow-2xl shadow-primary/10"
            >
              <div
                className="flex justify-between items-center mx-auto"
                onClick={() => setSelectedIndex(faqIndex)}
              >
                <p className="font-poppins font-semibold text-red-600">{faq.question}</p>
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
                    "feather feather-plus text-red-700 dark:text-lime-400 flex-shrink-0 transition duration-300 cursor-pointer",
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
                    <span className="dark:text-white/50 font-semibold text-gray-800 font-ponnala">{faq.answer}</span>
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
