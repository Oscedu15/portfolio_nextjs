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
  metadataBase: new URL("http://localhost:3000"),
  title: "Title webtsite",
  description: "this is the desciption",
  openGraph: {
    title: "Title webtsite",
    description: "this is the desciption",
    images: "/public/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@eMartiiin94",
    title: "Title webtsite",
    description: "this is the desciption",
    images: "/public/logo.jpg",
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
