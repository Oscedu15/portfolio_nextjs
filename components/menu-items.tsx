import { motion } from "framer-motion";
import Link from "next/link";

const MenuItem = ({
  children,
  index,
  href,
}: {
  children: React.ReactNode;
  index: number;
  href: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        delay: index * 0.1,
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      <Link href={href} className="realtive overflow-hidden px-2 py-1">
        <span className="text-content/80 hover:text-primary transition-colors">
          {children}
        </span>
      </Link>
    </motion.div>
  );
};

export default MenuItem;
