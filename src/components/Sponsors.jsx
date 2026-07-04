import Reveal from "./Reveal";
import { SPONSORS } from "../data/content";

export default function Sponsors() {
  const loop = [...SPONSORS, ...SPONSORS];

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-transparent py-14">
      <Reveal className="mx-auto mb-8 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-fog-dim">
          Fueled by
        </span>
      </Reveal>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-void to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-void to-transparent" />
        <div className="flex w-max animate-marquee gap-16">
          {loop.map((name, i) => (
            <span
              key={name + i}
              className="flex items-center font-display text-xl font-bold tracking-widest text-fog-dim/70 transition-colors hover:text-white-a"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
