import { motion } from "framer-motion";

interface AnimatedComponentProps {
  children: React.ReactNode;
}

const AnimatedComponent = ({ children }: AnimatedComponentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        y: { duration: 1 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
