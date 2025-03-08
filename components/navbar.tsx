"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import MenuItem from "./menu-items";
import { GithubIcon, LinkedInIcon } from "./social-icons";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ThemeToggle } from "./theme-toogle";

const navItems = [
  { name: "Projects", href: "projects" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Experience", href: "experiences" },
  { name: "Contact", href: "contacto" },
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
          ? "backdrop-blur-3xl dark:bg-background/90 bg-white/40 dark:shadow-2xl shadow-sm shadow-[#c24b4bcc] dark:shadow-primary/10"
          : "backdrop-blur-lg dark:bg-background/50  bg-white/50  text-black shadow-md"
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
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-[#c24b4bcc] dark:from-primary dark:to-tertiary animate-spin-slow [mask-image:linear-gradient(transparent,white)]" />
              <div className="absolute inset-[2px] bg-slate-200  dark:bg-background rounded-full flex items-center justify-center">
                <span className="font-bold bg-gradient-to-r from-red-700 to-[#c24b4bcc] dark:from-primary dark:to-tertiary bg-clip-text text-transparent">
                  OG
                </span>
              </div>
            </div>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <span className="font-semibold text-red-700 group-hover:text-red-800  dark:text-content/90 dark:group-hover:text-primary transition-colors">
                Oscar Garcia
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div
              className="flex items-center gap-6 bg-[#c24b4bcc] dark:bg-background/80 px-4 py-2 
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
                className="p-2 rounded-lg dark:bg-white/5 bg-[#c24b4bcc] hover:bg-primary/10 transition-colors group"
              >
                <GithubIcon className="h-5 w-5 text-content/80 group-hover:text-[#c24b4bcc]/50   transition-colors" />
              </Link>
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg dark:bg-white/5 bg-[#c24b4bcc]  hover:bg-primary/10 transition-colors group"
              >
                <LinkedInIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
              </Link>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex gap-x-2 md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-red-600 hover:bg-[#c24b4bcc]/50 dark:bg-white/5 dark:hover:bg-primary/10 transition-colors"
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
                className="block z-20 px-4 py-2 text-red-500 hover:text-red-600 hover:bg-gray-200 dark:text-primary dark:hover:text-primary/90 dark:hover:bg-white/5 
                rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex justify-center items-centerborder-t border-white/5 gap-4">
              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-red-600 dark:bg-white/5 dark:hover:bg-primary/10 transition-colors group"
              >
                <GithubIcon className="h-5 w-5 text-white  dark:text-content/80 dark:group-hover:text-primary transition-colors" />
              </Link>
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-red-600 dark:bg-white/5 dark:hover:bg-primary/10 transition-colors group"
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
