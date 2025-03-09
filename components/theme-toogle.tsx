"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <button
      className={`${isMounted ? "light" : ""}
    p-2 rounded-lg dark:bg-white/5 dark:hover:bg-primary/10 bg-[#03363D] transition-colors group hover:border-[#03363D]/90 hover:border dark:border-none`}
      style={{ colorScheme: "light" }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <MoonIcon className="h-5 w-5 text-content/80 group-hover:text-[#c24b4bcc]/50 dark:group-hover:text-primary transition-colors group-hover:text-white" />
      ) : (
        <SunIcon className="h-5 w-5 text-content/80 dark:group-hover:text-primary group-hover:text-white transition-colors" />
      )}
    </button>
  );
};
