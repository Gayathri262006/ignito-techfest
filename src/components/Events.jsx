import { useState, useMemo } from "react";
import { Calendar, Clock, MapPin, Users, Check } from "lucide-react";
import Reveal from "./Reveal";
import { EVENTS } from "../data/content";

const CATEGORIES = ["All", ...new Set(EVENTS.map((e) => e.category))];

export default function Events() {
  const [filter, setFilter] = useState("All");
  const [reserved, setReserved] = useState(() => new Set());

  function toggleReserve(code) {
    setReserved((prev) => {
      const next = new Set(prev);
      if (next.has(code)) next.delete(code);
      else next.add(code);
      return next;
    });
  }

  const filtered = useMemo(
    () => (filter === "All" ? EVENTS : EVENTS.filter((e) => e.category === filter)),
    [filter]
  );

  return (
    <section id="events" className="relative bg-void-soft/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-starlight">
            Mission Log
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white-a sm:text-4xl">
            Events on the manifest
          </h2>
          <p className="mt-4 text-base text-fog sm:text-lg">
            Workshops, hackathons and exhibits running across all three days.
            Filter by mission type to plan your route.
          </p>
        </Reveal>

        {/* Filter pills */}
        <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all duration-300 ${
                filter === cat
                  ? "btn-glass-primary text-white-a"
                  : "btn-glass text-fog hover:text-white-a"
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event, i) => (
            <Reveal key={event.code} delay={(i % 3) * 0.08}>
              <article className="hud-corners group flex h-full flex-col rounded-2xl bg-panel/50 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-panel/80 hover:shadow-[0_20px_50px_-20px_rgba(124,58,237,0.5)]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-fog-dim">
                    {event.code}
                  </span>
                  <span className="rounded-full bg-starlight/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-starlight">
                    {event.category}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold text-white-a transition-colors group-hover:text-ignite-soft">
                  {event.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-fog">
                  {event.description}
                </p>

                <div className="mt-5 space-y-2 border-t border-white/5 pt-4 font-mono text-xs text-fog">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5 text-nebula-soft" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-nebula-soft" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-nebula-soft" />
                    {event.venue}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-3.5 w-3.5 text-nebula-soft" />
                    {event.seats}
                  </div>
                </div>

                <button
                  onClick={() => toggleReserve(event.code)}
                  aria-pressed={reserved.has(event.code)}
                  className={`mt-5 flex items-center justify-center gap-2 rounded-full py-2.5 font-display text-xs font-bold uppercase tracking-widest ${
                    reserved.has(event.code)
                      ? "btn-glass-success text-emerald-300"
                      : "btn-glass text-white-a hover:text-ignite"
                  }`}
                >
                  {reserved.has(event.code) ? (
                    <>
                      <Check className="h-3.5 w-3.5" /> Reserved
                    </>
                  ) : (
                    "Reserve Slot"
                  )}
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
