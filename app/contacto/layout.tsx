import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    // metadataBase: new URL(
    //   "https://portfolio-nextjs-pied-six.vercel.app/contacto"
    // ),
    // title: "Pagina de Contacto",
    // description: "Tutorial de portfolio de Nextjs 15",
    // openGraph: {
    //   title: "Oscar Garcia",
    //   description: "Portfolio Nextjs 15 layout contacto opengraph",
    //   url: "https://portfolio-nextjs-pied-six.vercel.app/contact",
    //   images: "/logo1.jpg",
    // },
    // twitter: {
    //   card: "summary_large_image",
    //   site: "@eMartiiin94",
    //   title: "Oscar Garcia",
    //   description: "Portfolio Nextjs 15 layout contacto twitter",
    //   images: "/perfil.jpeg",
    // },
  };
}

export default function SocialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
      {children}
    </div>
  );
}
