import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const CONTACT_DETAILS = [
  { icon: Mail, label: "Email", value: "control@ignito-fest.in" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: MapPin, label: "Location", value: "Sector 7 Innovation Campus, Kochi" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Dummy submit — wire this up to a real endpoint later.
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-transparent py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-pulse-glow rounded-full bg-nebula/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ignite">
            Ground Control
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white-a sm:text-4xl">
            Send a transmission
          </h2>
          <p className="mt-4 text-base text-fog sm:text-lg">
            Questions about registration, sponsorship, or media passes —
            reach the crew and we'll respond within one orbit (24 hours).
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Contact details */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="hud-corners flex h-full flex-col justify-between gap-8 rounded-2xl bg-panel/50 p-7">
              <div className="space-y-6">
                {CONTACT_DETAILS.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5">
                      <Icon className="h-4 w-4 text-nebula-soft" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-fog-dim">
                        {label}
                      </p>
                      <p className="mt-1 text-sm text-white-a">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-void-soft/70 p-5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-fog-dim">
                  Status
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-white-a">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  Registrations open · Closes Sep 10
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.2} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="hud-corners space-y-5 rounded-2xl bg-panel/50 p-7"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-fog">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ada Lovelace"
                    className="w-full rounded-xl border border-white/10 bg-void-soft/70 px-4 py-3 text-sm text-white-a placeholder:text-fog-dim outline-none transition-colors focus:border-ignite"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-fog">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ada@orbit.dev"
                    className="w-full rounded-xl border border-white/10 bg-void-soft/70 px-4 py-3 text-sm text-white-a placeholder:text-fog-dim outline-none transition-colors focus:border-ignite"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-fog">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what you're building..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-void-soft/70 px-4 py-3 text-sm text-white-a placeholder:text-fog-dim outline-none transition-colors focus:border-ignite"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="btn-glass-primary flex w-full items-center justify-center gap-2 rounded-full py-3.5 font-display text-sm font-bold uppercase tracking-widest text-white-a hover:scale-[1.02] disabled:opacity-70"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Transmission received
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
