/**
 * Fixed, full-page cosmic backdrop that sits behind every section so the
 * whole site reads as one continuous view of deep space. Purely decorative:
 * distant star dust (layered radial gradients) plus two slow drifting nebula
 * auroras. Pointer-events are disabled and motion is dropped under
 * prefers-reduced-motion via the global media query in index.css.
 */
export default function CosmicBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void"
    >
      {/* Distant, static star dust — three offset layers for depth */}
      <div className="absolute inset-0 opacity-70 star-dust" />

      {/* Drifting nebula auroras */}
      <div className="absolute -left-[10%] top-[8%] h-[45vw] w-[45vw] animate-aurora rounded-full bg-nebula/12 blur-[120px]" />
      <div className="absolute right-[-8%] top-[45%] h-[40vw] w-[40vw] animate-aurora rounded-full bg-starlight/10 blur-[120px] [animation-delay:-8s]" />
      <div className="absolute bottom-[-5%] left-[30%] h-[38vw] w-[38vw] animate-aurora rounded-full bg-ignite/8 blur-[130px] [animation-delay:-15s]" />

      {/* Faint grain to break up the gradients */}
      <div className="absolute inset-0 grain-noise opacity-40" />
    </div>
  );
}
