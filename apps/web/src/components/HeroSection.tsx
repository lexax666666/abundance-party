export default function HeroSection() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
      {/* Radial gold glow behind hero */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_0%,_transparent_60%)]" />

      <div className="relative space-y-6">
        <h1
          className="font-[family-name:var(--font-serif)] text-lg font-bold tracking-[0.2em] text-gold-light sm:text-xl md:text-2xl"
          style={{
            textShadow: "0 0 40px rgba(255, 215, 0, 0.3), 0 0 80px rgba(212, 175, 55, 0.15)",
          }}
        >
          MUSIC &amp; ART PARTY
        </h1>

        {/* Event date */}
        <div className="mx-auto max-w-sm space-y-3">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold-primary/50" />
            <p className="font-[family-name:var(--font-body)] text-lg font-light tracking-wider text-gold-pale/80 sm:text-xl">
              Thursday, July 23
            </p>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold-primary/50" />
          </div>
        </div>

        <p className="font-[family-name:var(--font-serif)] text-lg tracking-[0.2em] text-gold-light sm:text-xl md:text-2xl">
          Laurel, MD
        </p>
        <p className="font-[family-name:var(--font-body)] text-base font-light text-gold-warm sm:text-lg">
          Private venue address provided upon ticket confirmation
        </p>

        <p className="mx-auto max-w-md font-[family-name:var(--font-body)] text-base font-light italic text-gold-warm sm:text-lg md:max-w-lg md:text-xl">
          An elevated night of music,
          <br />
          connection, and positive energy
        </p>
        <p
          className="mt-4 font-[family-name:var(--font-script)] text-4xl text-gold-light sm:text-5xl md:text-6xl"
          style={{
            textShadow: "0 0 30px rgba(255, 215, 0, 0.25)",
          }}
        >
          Realign your energy
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-float">
        <svg
          className="h-8 w-8 text-gold-primary opacity-60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  );
}
