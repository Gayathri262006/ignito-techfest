import { Radio } from "lucide-react";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { STATS } from "../data/content";

export default function Mission() {
  return (
    <section id="mission" className="relative bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-panel/60 px-4 py-1.5">
              <Radio className="h-3.5 w-3.5 text-starlight" />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-fog">
                Mission Briefing
              </span>
            </div>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-white-a sm:text-4xl">
              Not a festival.
              <br />
              <span className="text-gradient-ignite">A launch sequence.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-fog sm:text-lg">
  <strong>IGNITO</strong> is a premier student-led national techfest that brings
  together innovators, developers, designers, and technology enthusiasts from
  across the country. Inspired by the limitless possibilities of space, IGNITO
  provides a platform to explore emerging technologies through competitions,
  workshops, hackathons, exhibitions, and expert sessions.
</p>

<p className="mt-4 max-w-xl text-base leading-relaxed text-fog sm:text-lg">
  Every mission at IGNITO is designed to challenge creativity, encourage
  collaboration, and transform bold ideas into reality. Whether you're coding
  your next breakthrough, building intelligent robots, or pitching innovative
  solutions, IGNITO is where curiosity ignites innovation and the future takes
  flight.
</p>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.code} delay={i * 0.08}>
                <div className="hud-corners group h-full rounded-2xl bg-panel/50 p-6 transition-colors duration-300 hover:bg-panel/80">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-fog-dim">
                    {stat.code}
                  </span>
                  <p className="mt-3 font-display text-3xl font-extrabold text-white-a sm:text-4xl">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="mt-1 text-sm text-fog">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
