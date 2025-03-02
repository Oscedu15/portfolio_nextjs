// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     metadataBase: new URL(
//       "https://portfolio-nextjs-pied-six.vercel.app/contacto"
//     ),
//     title: "Pagina de Contacto",
//     description: "Tutorial de portfolio de Nextjs 15",
//     openGraph: {
//       title: "Oscar Garcia",
//       description: "Portfolio Nextjs 15",
//       images: "/perfil.jpeg",
//     },
//     twitter: {
//       card: "summary_large_image",
//       site: "@eMartiiin94",
//       title: "Oscar Garcia",
//       description: "Portfolio Nextjs 15",
//       images: "/perfil.jpeg",
//     },
//   };
// }

export default function SocialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
