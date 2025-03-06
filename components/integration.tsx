import figmaIcon from "@/public/integration/figma-logo.svg";
import notionIcon from "@/public/integration/notion-logo.svg";
import slackIcon from "@/public/integration/slack-logo.svg";
import relumeIcon from "@/public/integration/relume-logo.svg";
import framerIcon from "@/public/integration/framer-logo.svg";
import githubIcon from "@/public/integration/github-logo.svg";
import IntegrationsColumn from "./IntegrationsColumn";
import { motion } from "framer-motion";
import { titleVariants, desVariants } from "@/utils/animation";

const integrations = [
  {
    name: "Figma",
    icon: figmaIcon,
    description: "Figma es una herramienta de diseño de interfaz colaborativa.",
  },
  {
    name: "Notion",
    icon: notionIcon,
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: slackIcon,
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: relumeIcon,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: framerIcon,
    description:
      "Framer Motion es una herramienta profesional de creación de prototipos de sitios web.",
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
          <div>
            <motion.h2
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="text-5xl md:text-6xl flex-col lg:text-7xl flex items-center justify-center font-semibold text-center lg:p-10
                       mt-20 bg-gradient-to-r from-red-600 via-red-500  to-red-400 dark:from-primary dark:via-secondary dark:to-tertiary bg-clip-text text-transparent mb-4"
            >
              Juega bien con los <span className="text-lime-400">demás.</span>
            </motion.h2>
            <motion.p
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="dark:text-white/50 text-gray-400 mt-4 text-xl italic mb-8"
            >
              Layers se conecta perfectamente con tus herramientas favoritas, es
              fácil integrarlo en cualquier flujo de trabajo y colaborar en
              diferentes plataformas.
            </motion.p>
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
