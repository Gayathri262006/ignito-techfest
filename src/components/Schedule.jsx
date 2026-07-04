import { useState } from "react";
import { Clock, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { SCHEDULE } from "../data/content";

export default function Schedule() {
  const [active, setActive] = useState(0);
  const day = SCHEDULE[active];

  return (
    <section id="schedule" className="relative bg-void-soft/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-nebula-soft">
            Flight Plan
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white-a sm:text-4xl">
            Three-day trajectory
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[280px_1fr]">
          {/* Day selector */}
          <Reveal delay={0.1} className="grid grid-cols-3 gap-2 sm:gap-3 lg:flex lg:flex-col">
            {SCHEDULE.map((d, i) => (
              <button
                key={d.day}
                onClick={() => setActive(i)}
                className={`hud-corners flex flex-col items-start rounded-2xl p-3 text-left transition-all duration-300 sm:p-5 ${
                  active === i
                    ? "bg-gradient-to-br from-nebula/25 to-panel"
                    : "bg-panel/40 hover:bg-panel/70"
                }`}
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-fog-dim">
                  {d.date}
                </span>
                <span className="mt-1 font-display text-base font-bold text-white-a sm:text-lg">{d.day}</span>
                <span className={`mt-1 text-xs sm:text-sm ${active === i ? "text-ignite-soft" : "text-fog"}`}>
                  {d.title}
                </span>
              </button>
            ))}
          </Reveal>

          
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-nebula-soft/50 via-white/10 to-transparent" />
            <div className="space-y-6">
              {day.items.map((item, i) => (
                <Reveal key={item.label + item.time} delay={i * 0.08} className="relative pl-8">
                  <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-ignite bg-void shadow-[0_0_12px_2px_rgba(255,90,54,0.6)]" />
                  <div className="hud-corners rounded-2xl bg-panel/50 p-5 transition-colors duration-300 hover:bg-panel/80">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-display text-lg font-bold text-white-a">{item.label}</h3>
                      <span className="rounded-full bg-white/5 px-3 py-1 font-mono text-[11px] text-fog">
                        {item.time}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-4 font-mono text-xs text-fog">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-nebula-soft" /> {item.time} IST
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-nebula-soft" /> {item.place}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
