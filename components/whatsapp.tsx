"use client";

import Link from "next/link";
import { ImWhatsapp } from "react-icons/im";

import { motion } from "framer-motion";

function WhatsApp() {
  return (
    <motion.div
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="animate-pulse text-white fixed bottom-8 lg:bottom-8 right-12 border bg-[#25D366] z-50 border-transparent rounded-full w-[60px] h-[60px] flex justify-center items-center hover:bg-white hover:text-[#25D366] transition-colors duration-300 hover:scale-110 p-2 shadow-md shadow-slate-50 hover:shadow-[#25D366] "
    >
      <Link href="https://wa.me//+5492235365483" target="_blank" rel="noopener">
        <ImWhatsapp size={35} />
      </Link>
    </motion.div>
  );
}

export default WhatsApp;
