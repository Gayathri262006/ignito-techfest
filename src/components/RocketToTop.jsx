import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Rocket } from "lucide-react";


export default function RocketToTop() {
  const [visible, setVisible] = useState(false);
  const [launching, setLaunching] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.9);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick() {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    setLaunching(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.setTimeout(() => setLaunching(false), 1100);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          onClick={handleClick}
          aria-label="Back to top"
          className="group fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-nebula-soft/40 bg-panel/70 backdrop-blur-md shadow-[0_0_30px_-8px_rgba(124,58,237,0.7)] transition-colors hover:border-ignite"
        >
          <span className="absolute inset-0 rounded-full bg-nebula/20 opacity-0 transition-opacity group-hover:opacity-100" />
          <Rocket
            className={`h-5 w-5 -rotate-45 text-ignite ${launching ? "animate-launch" : ""}`}
            strokeWidth={2.2}
          />
         
          <span className="absolute bottom-2 left-1/2 h-3 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-ignite to-transparent opacity-0 transition-opacity group-hover:opacity-90" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
