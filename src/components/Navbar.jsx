import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { NAV_LINKS } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
 
  const lockUntil = useRef(0);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < lockUntil.current) return;
        // Of the sections crossing the focus band, pick the topmost one.
        const inView = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (inView[0]) setActive(`#${inView[0].target.id}`);
      },
     
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function handleClick(href) {
    setActive(href);
    setOpen(false);
    
    lockUntil.current = Date.now() + 900;
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={`glass-panel flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
            scrolled ? "shadow-[0_0_40px_-12px_rgba(124,58,237,0.6)]" : ""
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5" onClick={() => handleClick("#home")}>
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-nebula-soft/40 bg-void-soft">
              <Rocket className="h-4 w-4 rotate-45 text-ignite" strokeWidth={2.2} />
              <span className="absolute inset-0 animate-pulse-glow rounded-full bg-nebula/40" />
            </span>
            <span className="font-display text-lg font-bold tracking-[0.15em] text-white-a">
              IGNIT<span className="text-ignite">O</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`relative rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors duration-300 ${
                    active === link.href
                      ? "text-white-a"
                      : "text-fog hover:text-white-a"
                  }`}
                >
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/5 ring-1 ring-nebula-soft/40"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#events"
            className="btn-glass-primary hidden rounded-full px-5 py-2.5 font-display text-xs font-bold uppercase tracking-widest text-white-a hover:scale-105 lg:inline-block"
          >
            Register
          </a>

          {/* Mobile toggle */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white-a lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -12, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="glass-menu mt-2 overflow-hidden rounded-2xl lg:hidden"
            >
              <ul className="flex flex-col divide-y divide-white/5 p-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => handleClick(link.href)}
                      className="block px-4 py-3 font-mono text-sm uppercase tracking-widest text-fog transition-colors hover:text-white-a"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="p-2">
                  <a
                    href="#events"
                    onClick={() => handleClick("#events")}
                    className="btn-glass-primary block rounded-xl px-4 py-3 text-center font-display text-xs font-bold uppercase tracking-widest text-white-a"
                  >
                    Register
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
