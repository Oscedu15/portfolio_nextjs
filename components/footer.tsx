"use client";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { GithubIcon, LinkedInIcon } from "./social-icons";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="dark:bg-gray-900 border-t bg-gradient-to-l from-[#174d4d]/90 via-[#174d4d]/80
  to-[#174d4d]/90 border dark:from-surface dark:via-surface dark:to-surface dark:border-gray-800"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6
         lg:px-8 py-12"
      >
        <div className="grid text-center grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
            <h3 className="text-lg font-semibold text-white mb-4">Sobre Mi</h3>
            <span className="dark:text-gray-400 text-[#d6dae0]">
              Construyendo experiencias digitales que combinan tecnología
              moderna con un diseño excepcional.
            </span>
          </motion.div>
          <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
            <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="experiencia"
                  className="dark:text-gray-400 text-[#d6dae0]
                         hover:text-white transition-colors"
                >
                  Experiencia
                </Link>
              </li>
              <li>
                <Link
                  href="proyectos"
                  className="dark:text-gray-400 text-[#d6dae0]
                         hover:text-white transition-colors"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="about"
                  className="dark:text-gray-400 text-[#d6dae0]
                         hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="contacto"
                  className="dark:text-gray-400 text-[#d6dae0]
                         hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#privacy"
                  className="dark:text-gray-400 text-[#d6dae0]
                         hover:text-white transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#terms"
                  className="dark:text-gray-400 text-[#d6dae0]
                         hover:text-white transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
            <h3 className="text-lg font-semibold text-white mb-4">Redes</h3>
            <ul className="flex space-x-4 items-center justify-center">
              <Link
                href="https://github.com/Oscedu15"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon
                  className="dark:text-gray-400 text-[#d6dae0] h-6 w-6
                        hover:text-white dark:hover:text-white transition-colors"
                />
              </Link>
              <Link
                href="https://linkedin.com/in/oscar-eduardo-garcía-leon-a15a14195"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  className="dark:text-gray-400 text-[#d6dae0] h-6 w-6
                        hover:text-white dark:hover:text-white transition-colors"
                />
              </Link>
              <Link
                href="mailto:oscaregarcialeon@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <EnvelopeIcon
                  className="dark:text-gray-400 text-[#d6dae0] h-6 w-6
                        hover:text-white dark:hover:text-white transition-colors"
                />
              </Link>
            </ul>
          </motion.div>
        </div>
        <div className="border-t dark:border-gray-800  border-gray-400 mt-12 pt-8 text-center">
          <span className="dark:text-gray-400 text-[#d6dae0]">
            &copy; {new Date().getFullYear()} Oscar Garcia. Todos los derchos
            reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
