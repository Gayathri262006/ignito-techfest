import { useEffect, useState } from "react";

/**
 * Thin "launch trajectory" progress bar pinned to the very top of the page.
 * Fills left-to-right as the visitor scrolls, with a glowing head that reads
 * like a craft climbing its flight path.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent"
    >
      <div
        className="relative h-full bg-gradient-to-r from-nebula via-starlight to-ignite transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      >
        <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full bg-ignite shadow-[0_0_10px_3px_rgba(255,90,54,0.9)]" />
      </div>
    </div>
  );
}
