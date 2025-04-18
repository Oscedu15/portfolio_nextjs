import type { Metadata } from "next";

import "./globals.css";
import { Poppins, Open_Sans } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";
import BackToTopBtn from "@/components/buttontop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-nextjs-pied-six.vercel.app"),
  title: "Oscar Gracia | Frontend Developer",
  description: "Portfolio personal en Nextjs 15",
  openGraph: {
    title: "Oscar Garcia",
    siteName: "Mi Portfolio",
    url: "https://portfolio-nextjs-pied-six.vercel.app",
    images: [
      {
        url: "/logo.jpg", // Ruta relativa a la imagen en la carpeta public
        width: 1200, // Ancho de la imagen
        height: 630, // Alto de la imagen
        alt: "Osc FrontEnd", // Texto alternativo para la imagen
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} ${open_sans.variable} font-poppins dark:bg-gray-900 bg-blue-50 antialiased text-black dark:text-white max-w-[1500px] mx-auto`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Navbar />
          {children}
          <BackToTopBtn/>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
