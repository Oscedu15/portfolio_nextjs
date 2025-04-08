"use client";

import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";

interface BackToTopBtnProps {
  position?: { right?: string; bottom?: string };
  className?: string;
}

export default function BackToTopBtn({
  position = { right: "16px", bottom: "11px" },
  className = "",
}: BackToTopBtnProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Define el comportamiento de desplazamiento suave
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed bg-gradient-to-r
  from-[#174d4d]/70 via-[#174d4d]/50 to-[#174d4d]/30 border dark:from-surface dark:via-surface dark:to-surface
 dark:border-white/10 dark:hover:border-primary/30 overflow-hidden  px-5 py-4 transition-all group
      w-4 h-10 z-10 cursor-pointer flex justify-center items-center text-white border-transparent
        dark:border-[#d6dae0]  p-2 rounded-lg  group ${className}`}
      style={{ right: position.right, bottom: position.bottom }}
      aria-label="Volver al inicio"
      onClick={scrollToTop} // Llama a la función al hacer clic
    >
      <span className="flex group-hover:text-primary text-white">
        <FaChevronUp className="text-xl" />
        <div
          className="absolute rounded-lg inset-0 bg-gradient-to-r 
        from-primary/10 to-tertiary/10 opacity-0 px-5 py-4
        group-hover:opacity-100 transition-opacity"
        />
      </span>
    </motion.button>
  );
}
