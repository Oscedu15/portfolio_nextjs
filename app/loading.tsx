"use client";

import { motion } from "framer-motion";

const loadingContainer = {
  width: "4rem",
  height: "4rem",
  display: "flex",
  justifyContent: "space-around",
};
const loadingCircle = {
  display: "block",
  width: "1rem",
  height: "1rem",
  // backgroundColor: "#B91C1C",
  borderRadius: "0.5rem",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "60%",
  },
};
const loadingCircleTransition = {
  duration: 0.4,
  repeat: 10,
  ease: "easeInOut",
};

const Loader = () => {
  return (
    <div>
      <div className="fixed bg-gradient-to-r from-slate-50 to-gray-300
       dark:bg-gray-900 w-full min-h-screen bg-no-repeat " />
      <div
        className="flex  w-full justify-center items-center h-screen bg-gradient-to-r
    dark:from-primary/10 dark:to-tertiary/10 from-slate-50 to-gray-300"
      >
        <motion.div
          style={loadingContainer}
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          <motion.span
            style={loadingCircle}
            className="from-red-600 via-red-500
        to-red-400 dark:from-primary dark:via-secondary
         dark:to-tertiary  bg-gradient-to-r"
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            className="from-red-600 via-red-500
        to-red-400 dark:from-primary dark:via-secondary
         dark:to-tertiary  bg-gradient-to-r"
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            className="from-red-600 via-red-500
        to-red-400 dark:from-primary dark:via-secondary
         dark:to-tertiary  bg-gradient-to-r
          "
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
