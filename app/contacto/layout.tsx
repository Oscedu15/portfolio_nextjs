import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contactanos ",
    description: "Pagina de Contacto",
  };
}

export default function SocialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
