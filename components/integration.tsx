import figmaIcon from "@/public/integration/figma-logo.svg";
import nextjsIcon from "@/public/integration/next-logo.svg";
import reactIcon from "@/public/integration/react-logo.svg";
import framerIcon from "@/public/integration/framer-logo.svg";
import githubIcon from "@/public/integration/github-logo.svg";
import tailwindIcon from "@/public/integration/tailwind-logo.svg";
import IntegrationsColumn from "./IntegrationsColumn";
import { motion } from "framer-motion";
import { titleVariants, desVariants } from "@/utils/animation";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";

const integrations = [
  {
    name: "Figma",
    icon: figmaIcon,
    description: "Figma es una herramienta de diseño de interfaz colaborativa.",
  },
  {
    name: "Nextjs",
    icon: nextjsIcon,
    description:
      "Crea aplicaciones web de alta calidad con el poder de los componentes React.",
  },
  {
    name: "Tailwind",
    icon: tailwindIcon,
    description:
      "Es un framework de CSS que usamos para crear interfaces de usuario personalizadas.",
  },
  {
    name: "React",
    icon: reactIcon,
    description:
      "Es una biblioteca de JavaScript, que permite crear interfaces para aplicaciones web y móviles",
  },
  {
    name: "Framer",
    icon: framerIcon,
    description:
      "Es una biblioteca de animación, que permite crear animaciones e interacciones en aplicaciones.",
  },
  {
    name: "GitHub",
    icon: githubIcon,
    description:
      "GitHub es la plataforma líder para la colaboración de código.",
  },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
  return (
    <section className="py-0 md:py-16 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div className="flex flex-col justify-center items-center">
            <motion.h3
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="text-5xl md:text-6xl flex-col lg:text-7xl flex items-center justify-center font-semibold text-wrap text-center lg:p-10 mt-20 mb-4"
            >
              Transformar Ideas en Realidad{" "}
              <span className="text-lime-400">Digital</span>
            </motion.h3>
            <motion.p
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="dark:text-white/50 text-center text-gray-400 mt-4 text-xl italic mb-8"
            >
              Cada desafío es único, por lo que me aseguro de aprender y crecer
              en cada uno de ellos, asegurándome de no solo dar lo mejor de mí,
              sino también de ofrecer soluciones que las empresas se
              enorgullezcan de llamar propias. ¿Quieres saber más?
              <br /> Contactame!
            </motion.p>
            <button
              className="flex text-white relative max-w-sm items-center shadow-lg duration-200 btn
                    text-center transition-all group hover:scale-95"
            >
              <Link href="/contacto" className="flex group-hover:text-primary ">
                Contacto
                <TbArrowUpRight className="w-5 h-5 duration-500 ml-2 group-hover:rotate-45" />
                <div
                  className="absolute rounded-full inset-0 bg-gradient-to-r 
                    from-primary/10 to-tertiary/10 opacity-0 
                    group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </button>
          </div>
          <div>
            <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_90%,transparent)]">
              <IntegrationsColumn integrations={integrations} />
              <IntegrationsColumn
                integrations={integrations.slice().reverse()}
                className="hidden md:flex"
                reverse
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
