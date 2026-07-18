const includes = [
  {
    icon: "🎵",
    label: "DJ Geovoni",
    sub: "Good music, good vibes",
  },
  {
    icon: "🍸",
    label: "Open Bar",
    sub: "Punch & light bites",
  },
  {
    icon: "🤝",
    label: "Build New Connections",
    sub: "Come as you are, leave inspired",
  },
];

export default function IncludesSection() {
  return (
    <section id="includes" className="relative z-10 px-4 py-16 sm:py-24">
      <h2 className="mb-12 text-center font-[family-name:var(--font-serif)] text-2xl tracking-[0.3em] text-gold-light sm:text-3xl">
        THE VIBE
      </h2>

      <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
        {includes.map((item, i) => (
          <div
            key={i}
            className="group rounded-lg border border-gold-primary/20 bg-cosmic-surface/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-gold-primary/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]"
          >
            <span className="mb-3 block text-3xl" role="img" aria-hidden="true">
              {item.icon}
            </span>
            <p className="font-[family-name:var(--font-body)] text-base font-semibold text-gold-pale sm:text-lg">
              {item.label}
            </p>
            <p className="mt-1 font-[family-name:var(--font-body)] text-sm font-light text-gold-warm/80">
              {item.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
