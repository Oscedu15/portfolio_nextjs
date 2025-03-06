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
    <div className={isMounted ? "light" : ""} style={{ colorScheme: "light" }}>
      <button
        className="p-2 rounded-lg dark:bg-white/5 dark:hover:bg-primary/10 bg-[#c24b4bcc]  hover:bg-[#c24b4bcc]/80 transition-colors group"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <MoonIcon className="h-5 w-5 text-content/80 group-hover:text-[#c24b4bcc]/50 group-hover:text-primary transition-colors" />
        ) : (
          <SunIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
        )}
      </button>
    </div>
  );
};
