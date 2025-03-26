'use client';

import { useEffect, useState } from "react";
import { FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface BackToTopBtnProps {
  position?: { right?: string; bottom?: string };
  className?: string;
}

export default function BackToTopBtn({ position = { right: '16px', bottom: '11px' }, className = '' }: BackToTopBtnProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Define el comportamiento de desplazamiento suave
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: isActive ? 1 : 0 }} 
      transition={{ duration: 0.3 }} 
      className={`fixed bg-[#174d4d]/90 dark:bg-secondary dark:hover:bg-secondary/70
      w-12 h-12 z-10 cursor-pointer flex justify-center items-center text-white 
      border-2  border-[#d6dae0] rounded-xl overflow-hidden ${className}`} 
      style={{ right: position.right, bottom: position.bottom }} 
      aria-label="Volver al inicio"
      onClick={scrollToTop} // Llama a la función al hacer clic
    >
      <FaChevronUp className='text-xl' />
    </motion.div>
  );
}