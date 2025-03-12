"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import MenuItem from "./menu-items";
import { GithubIcon, LinkedInIcon } from "./social-icons";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ThemeToggle } from "./theme-toogle";

const navItems = [
  { name: "About", href: "about" },
  { name: "Proyectos", href: "proyectos" },
  { name: "Experiencia", href: "experiencia" },
  { name: "Contacto", href: "contacto" },
];

const socialLinks = {
  github: "https://github.com/Oscedu15",
  linkedin: "https://linkedin.com/in/oscar-eduardo-garcía-leon-a15a14195",
  twitter: "https://twitter.com/yourusername",
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();


  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 ${
        isScrolled
          ? "backdrop-blur-3xl dark:bg-background/90 bg-[#174d4d]/50 md:bg-[#174d4d]/80 dark:shadow-2xl shadow-md shadow-[#366b48cc] dark:shadow-primary/10"
          : "backdrop-blur-lg dark:bg-background/50  bg-[#174d4d]/60 md:bg-[#174d4d]/60  text-black shadow-md"
      } transition-all duration-300 ease-out`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 group"
          >
            <div className="relative h-8 w-8 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-content/80 to-content/90 dark:from-primary dark:to-tertiary animate-spin-slow [mask-image:linear-gradient(transparent,white)]" />
              <div className="absolute inset-[2px] bg-[#91b99ecc]  dark:bg-background rounded-full flex items-center justify-center">
                <span className="font-bold bg-gradient-to-r from-[#174D4D] to-[#03363D] dark:from-primary dark:to-tertiary bg-clip-text text-transparent">
                  OG
                </span>
              </div>
            </div>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <span className="font-semibold text-[#d6dae0]/90 md:text-content/80 md:dark:text-content/90 md:dark:group-hover:text-primary transition-colors">
                Oscar Garcia
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div
              className="flex items-center gap-6 bg-[#03363D] dark:bg-background/80 px-4 py-2 
            rounded-full border border-white/5 shadow-lg shadow-primary/5"
            >
              {navItems?.map((item, i) => (
                <MenuItem key={item.name} index={i} href={item.href}>
                  {item.name}
                </MenuItem>
              ))}
            </div>

            <div className="h-6 w-px bg-white/10 mx-2" />

            <div className="flex gap-3">
              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg dark:bg-white/5 bg-[#03363D] hover:bg-[#03363D]/90 transition-colors group"
              >
                <GithubIcon className="h-5 w-5 text-content/80 group-hover:text-[#c24b4bcc]/50  dark:group-hover:text-primary transition-colors group-hover:text-white" />
              </Link>
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg dark:bg-white/5 bg-[#03363D] hover:bg-[#03363D]/90  transition-colors group"
              >
                <LinkedInIcon className="h-5 w-5 text-content/80 dark:group-hover:text-primary transition-colors group-hover:text-white " />
              </Link>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex gap-x-2 md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#03363D] group hover:border-[#03363D]/90 hover:border dark:border-none  dark:bg-white/5 dark:hover:bg-primary/10 transition-colors"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-content/80" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-content/80" />
              )}
            </button>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4 bg-opacity-100"
          >
            {navItems?.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block z-20 px-4 py-2 text-[#d6dae0]/70 hover:text-[#d6dae0]
                 hover:bg-[#174D4D]/50 dark:text-primary dark:hover:text-primary/90 dark:hover:bg-white/5 
                rounded-lg transition-colors italic"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex justify-center items-centerborder-t border-white/5 gap-4">
              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#03363D] dark:bg-white/5 dark:hover:bg-primary/10 transition-colors group"
              >
                <GithubIcon className="h-5 w-5 text-white  dark:text-content/80 dark:group-hover:text-primary transition-colors" />
              </Link>
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#03363D] dark:bg-white/5 dark:hover:bg-primary/10 transition-colors group"
              >
                <LinkedInIcon className="h-5 w-5 text-white  dark:text-content/80 dark:group-hover:text-primary transition-colors" />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
