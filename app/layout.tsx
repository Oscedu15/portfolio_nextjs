import type { Metadata } from "next";

import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  //El %s en template, nos permite capturar lo que este en el titulo de la pagina que este pasando por este layout
  title: {
    template: "%s | Oscar Garcia",
    default: "Portfolio Nextjs 15",
  },
  description: "Tutorial de portfolio de Nextjs 15",
  openGraph: {
    type: "website",
    url: "https://github.com/Oscedu15",
    title: "My Website",
    description: "My Website Description",
    siteName: "Mi Portfolio",
    images: [
      {
        url: "/public//ecommerce.png",
      },
    ],
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
        suppressHydrationWarning
        className={`${poppins.variable} font-poppins antialiased `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
