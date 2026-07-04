import { motion } from "framer-motion";

/**
 * Wraps children in a scroll-triggered fade/slide-up reveal.
 * `delay` staggers groups of items; `y` controls travel distance.
 */
export default function Reveal({ children, delay = 0, y = 24, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
