import type { Metadata } from "next";

import "./globals.css";
import { Poppins, Ponnala } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const ponnala = Ponnala({
  subsets: ["latin"],
  weight:["400"],
  variable: "--font-ponnala",
});

// export const metadata: Metadata = {
//   //El %s en template, nos permite capturar lo que este en el titulo de la pagina que este pasando por este layout
//   title: {
//     template: "%s | Oscar Garcia",
//     default: "Portfolio Nextjs 15",
//   },
//   description: "Tutorial de portfolio de Nextjs 15",
//   openGraph: {
//     type: "website",
//     url: "https://github.com/Oscedu15",
//     title: "Oscar Garcia Portfolio Nextjs",
//     description: "Front End Developer Oscar Garcia",
//     siteName: "Mi Portfolio",
//     images: [
//       {
//         url: "/public//ecommerce.png",
//       },
//     ],
//   },
// };

// export const metadata = {
//   metadataBase: new URL('http://localhost:3000'),
//   alternates: {
//     canonical: '/',
//     languages: {
//       'en-US': '/en-US',
//       'de-DE': '/de-DE',
//     },
//   },
//   openGraph: {
//     images: '/og-image.png',
//   },
// }

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-nextjs-pied-six.vercel.app"),
  title: {
    template: "%s | ",
    default: "Oscar Garcia Portfolio",
  },
  description: "Tutorial de portfolio de Nextjs 15",
  openGraph: {
    type: "website",
    title: "Oscar Garcia",
    description: "Portfolio Nextjs 15 OpenGraph",
    siteName: "Mi Portfolio",
    url: "https://portfolio-nextjs-pied-six.vercel.app",
    images: "/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@eMartiiin94",
    title: "Oscar Garcia",
    description: "Portfolio Nextjs 15",
    images: "/mobile.jpg",
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
        className={`${poppins.variable} ${ponnala.variable} font-poppins dark:bg-blue-50 antialiased text-black  dark:text-white`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
