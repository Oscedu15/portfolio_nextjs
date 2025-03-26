import { tagVariants } from "@/utils/animation";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  return (
    <div>
      <div className="bg-[url('/programacion1.avif')] h-5/6 md:h-full text-center bg-center bg-cover">
        <motion.h2
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="mx-auto max-w-7xl py-64 font-bold bg-gradient-to-r from-[#06b4cccc]/70 via-[#06b4cccc]/80 to-[#06b4cccc]/90 dark:from-primary dark:via-secondary dark:to-tertiary bg-clip-text  font-poppins"
        >
          Our Projects
        </motion.h2>
      </div>
    </div>
  );
};

export default ProjectsPage;
