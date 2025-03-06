"use client";
import { PropsWithChildren, FC } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      {children}
    </NextThemesProvider>
  );
};

export default Providers;
