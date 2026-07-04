import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import StarField from "./StarField";
import CountdownTimer from "./CountdownTimer";
import { FEST_DATE } from "../data/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-void pt-28 pb-16"
    >
      <StarField />

      {/* Ambient nebula glow */}
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] animate-pulse-glow rounded-full bg-nebula/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-10%] h-[420px] w-[420px] animate-pulse-glow rounded-full bg-ignite/20 blur-3xl [animation-delay:1.5s]" />

      {/* Orbit signature — right side, hidden on small screens for focus */}
      <div className="pointer-events-none absolute right-[-120px] top-1/2 hidden h-[620px] w-[620px] -translate-y-1/2 md:right-[-60px] md:block lg:right-[0px]">
        <div className="absolute inset-0 rounded-full border border-nebula-soft/20 animate-spin-slow">
          <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-ignite shadow-[0_0_14px_3px_rgba(255,90,54,0.8)]" />
        </div>
        <div className="absolute inset-[70px] rounded-full border border-starlight/15 animate-spin-slower">
          <span className="absolute top-1/2 -right-1 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-starlight shadow-[0_0_12px_3px_rgba(56,189,248,0.8)]" />
        </div>
        <div className="absolute inset-[150px] rounded-full border border-white/10 animate-spin-slow [animation-duration:55s]">
          <span className="absolute bottom-0 left-1/3 h-2 w-2 rounded-full bg-nebula-soft" />
        </div>
        {/* Core planet */}
        <div className="absolute inset-[220px] overflow-hidden rounded-full bg-gradient-to-br from-nebula via-[#3b1f6e] to-void shadow-[0_0_120px_20px_rgba(124,58,237,0.35)]">
          <div className="absolute inset-0 animate-float bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.25),transparent_45%)]" />
          <div className="absolute inset-0 grain-noise mix-blend-overlay" />
        </div>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="hud-corners inline-flex items-center gap-2 rounded-full bg-panel/60 px-3 py-1.5 sm:px-4">
            <Sparkles className="h-3.5 w-3.5 shrink-0 text-ignite" />
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-fog sm:text-[11px] sm:tracking-[0.25em]">
              Mission Control · Sept 18–20, 2026
            </span>
          </div>

          <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight text-white-a sm:text-6xl md:text-7xl">
            <span className="block">IGNIT<span className="text-ignite">O</span></span>
            <span className="mt-2 block text-2xl font-medium tracking-normal text-transparent sm:text-3xl md:text-4xl text-gradient-nebula font-body">
              Where curiosity reaches escape velocity.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-fog sm:text-lg">
            Three days. Infinite possibilities. One national techfest built for
            builders, hackers and dreamers who'd rather send something into
            orbit than talk about it.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#events"
              className="btn-glass-primary group relative overflow-hidden rounded-full px-7 py-3.5 font-display text-sm font-bold uppercase tracking-widest text-white-a hover:scale-105"
            >
              <span className="relative z-10">Begin Countdown</span>
            </a>
            <a
              href="#competitions"
              className="btn-glass hud-corners rounded-full px-7 py-3.5 font-display text-sm font-bold uppercase tracking-widest text-white-a hover:text-ignite"
            >
              View Missions
            </a>
          </div>

          <div className="mt-10">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-fog-dim">
              T-minus to ignition
            </p>
            <CountdownTimer target={FEST_DATE} />
          </div>
        </motion.div>
      </div>

      <a
        href="#mission"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-fog transition-colors hover:text-white-a"
        aria-label="Scroll to next section"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
