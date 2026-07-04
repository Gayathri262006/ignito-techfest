import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function getTimeLeft(target) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hrs" },
  { key: "minutes", label: "Min" },
  { key: "seconds", label: "Sec" },
];

export default function CountdownTimer({ target }) {
  const [time, setTime] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div className="flex items-center gap-1.5 sm:gap-4" role="timer" aria-label="Countdown to launch">
      {UNITS.map((unit, i) => {
        const text = String(time[unit.key]).padStart(2, "0");
        return (
          <div key={unit.key} className="flex items-center gap-1.5 sm:gap-4">
            <div className="hud-corners relative flex w-[3.25rem] flex-col items-center overflow-hidden rounded-lg bg-panel/70 py-2.5 sm:w-20 sm:py-3">
              <div className="relative h-7 sm:h-9">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={text}
                    initial={{ y: "-100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "100%", opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="block font-mono text-xl font-semibold tabular-nums text-white-a sm:text-3xl"
                  >
                    {text}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="mt-1 font-mono text-[9px] uppercase tracking-widest text-fog sm:text-[10px]">
                {unit.label}
              </span>
            </div>
            {i < UNITS.length - 1 && (
              <span className="font-mono text-base text-nebula-soft/60 sm:text-lg">:</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
