import { Rocket, AtSign, Globe, Link2, MessageCircle } from "lucide-react";
import { NAV_LINKS } from "../data/content";

const SOCIALS = [
  { icon: AtSign, href: "#", label: "Instagram" },
  { icon: MessageCircle, href: "#", label: "Discord" },
  { icon: Link2, href: "#", label: "LinkedIn" },
  { icon: Globe, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-void-soft/60 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-nebula-soft/40 bg-panel">
                <Rocket className="h-4 w-4 rotate-45 text-ignite" strokeWidth={2.2} />
              </span>
              <span className="font-display text-lg font-bold tracking-[0.15em] text-white-a">
                IGNIT<span className="text-ignite">O</span>
              </span>
            </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-fog">
  A national-level student tech fest bringing together innovators,
  developers, designers, and creators every September. Built by
  students, for everyone passionate about technology and innovation.
</p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-fog transition-colors hover:bg-white/10 hover:text-white-a"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-fog-dim">
              Navigate
            </p>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-fog transition-colors hover:text-white-a">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-fog-dim">
              Mission Control
            </p>
            <ul className="mt-4 space-y-3 text-sm text-fog">
              <li>control@ignito-fest.in</li>
              <li>+91 1234567890</li>
              <li>Sector 7 Innovation Campus, Kochi</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 font-mono text-xs text-fog-dim sm:flex-row">
          <p>© 2026 IGNITO. All rights reserved.</p>
  <p>Designed & built with innovation.</p>
        </div>
      </div>
    </footer>
  );
}
