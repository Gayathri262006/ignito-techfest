import { useEffect, useRef, useState } from "react";

export default function CountUp({ value, duration = 1600, className = "" }) {
  const match = String(value).match(/^(\D*?)([\d,]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const target = match ? parseInt(match[2].replace(/,/g, ""), 10) : 0;
  const suffix = match ? match[3] : String(value);
  const hadSeparator = match ? match[2].includes(",") : false;

  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!match) return;
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            // easeOutCubic for a decelerating count
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(Math.round(eased * target));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [match, target, duration]);

  if (!match) {
    return <span className={className}>{value}</span>;
  }

  const formatted = hadSeparator ? display.toLocaleString("en-US") : display;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
