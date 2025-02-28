import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Layout Contacto",
    description: "Created by Oscar Garcia",
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
          className={``}
        >
          {children}
        </body>
      </html>
    );
  }
  