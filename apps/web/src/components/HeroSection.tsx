export default function HeroSection() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
      {/* Radial gold glow behind hero */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_0%,_transparent_60%)]" />

      <div className="relative space-y-6">
        <h1
          className="font-[family-name:var(--font-serif)] text-5xl font-bold tracking-[0.15em] text-gold-light sm:text-6xl md:text-8xl lg:text-9xl"
          style={{
            textShadow: "0 0 40px rgba(255, 215, 0, 0.3), 0 0 80px rgba(212, 175, 55, 0.15)",
          }}
        >
          ABUNDANCE
        </h1>
        <p className="font-[family-name:var(--font-serif)] text-lg tracking-[0.3em] text-gold-primary sm:text-xl md:text-2xl">
          MUSIC &amp; ART PARTY
        </p>
        <p className="font-[family-name:var(--font-body)] text-xl font-light tracking-wider text-gold-pale sm:text-2xl">
          Thursday, May 14th
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
