import { useState } from "react";
import { Trophy, Gauge, Users2, ArrowUpRight, Check } from "lucide-react";
import Reveal from "./Reveal";
import { COMPETITIONS } from "../data/content";

const ACCENTS = {
  ignite: {
    ring: "hover:shadow-[0_20px_60px_-20px_rgba(255,90,54,0.55)]",
    text: "text-ignite",
    bar: "from-ignite to-ignite-soft",
  },
  nebula: {
    ring: "hover:shadow-[0_20px_60px_-20px_rgba(124,58,237,0.55)]",
    text: "text-nebula-soft",
    bar: "from-nebula to-nebula-soft",
  },
  starlight: {
    ring: "hover:shadow-[0_20px_60px_-20px_rgba(56,189,248,0.55)]",
    text: "text-starlight",
    bar: "from-starlight to-nebula-soft",
  },
};

export default function Competitions() {
  const [entered, setEntered] = useState(() => new Set());

  function toggleEnter(title) {
    setEntered((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  }

  return (
    <section id="competitions" className="relative bg-transparent py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-nebula-soft/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ignite">
            Launch Pads
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white-a sm:text-4xl">
            Flagship competitions
          </h2>
          <p className="mt-4 text-base text-fog sm:text-lg">
            Four high-stakes tracks with real prize pools. Pick your pad and
            start prepping — qualifiers open two weeks before launch.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {COMPETITIONS.map((comp, i) => {
            const accent = ACCENTS[comp.accent];
            return (
              <Reveal key={comp.title} delay={i * 0.1}>
                <article
                  className={`hud-corners group relative flex h-full flex-col overflow-hidden rounded-2xl bg-panel/50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:bg-panel/80 ${accent.ring}`}
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent.bar}`} />

                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-xs uppercase tracking-widest ${accent.text}`}>
                      {comp.pad}
                    </span>
                    <ArrowUpRight className={`h-5 w-5 ${accent.text} transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1`} />
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold text-white-a">
                    {comp.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fog">{comp.tagline}</p>

                  <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/5 pt-5">
                    <div>
                      <Trophy className={`h-4 w-4 ${accent.text}`} />
                      <p className="mt-2 font-mono text-sm font-semibold text-white-a">{comp.prize}</p>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-fog-dim">Prize</p>
                    </div>
                    <div>
                      <Gauge className={`h-4 w-4 ${accent.text}`} />
                      <p className="mt-2 font-mono text-sm font-semibold text-white-a">{comp.difficulty}</p>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-fog-dim">Level</p>
                    </div>
                    <div>
                      <Users2 className={`h-4 w-4 ${accent.text}`} />
                      <p className="mt-2 font-mono text-sm font-semibold text-white-a">{comp.slots}</p>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-fog-dim">Slots</p>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleEnter(comp.title)}
                    aria-pressed={entered.has(comp.title)}
                    className={`mt-6 flex w-full items-center justify-center gap-2 rounded-full py-3 font-display text-xs font-bold uppercase tracking-widest ${
                      entered.has(comp.title)
                        ? "btn-glass-success text-emerald-300"
                        : "btn-glass text-white-a"
                    }`}
                  >
                    {entered.has(comp.title) ? (
                      <>
                        <Check className="h-3.5 w-3.5" /> Entered · {comp.pad}
                      </>
                    ) : (
                      `Enter ${comp.pad}`
                    )}
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
