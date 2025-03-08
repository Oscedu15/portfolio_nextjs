"use client";
import { tagVariants } from "@/utils/animation";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  return (
    <div>
      <div className="bg-[url('/programacion.jpg')] text-center bg-center bg-cover">
        <motion.h2
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="mx-auto max-w-7xl py-64 "
        >
          Our Projects
        </motion.h2>
      </div>
    </div>
  );
};

export default ProjectsPage;
