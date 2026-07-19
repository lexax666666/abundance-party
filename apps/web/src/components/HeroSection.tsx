import { VENUE } from "@/lib/site";

const details = [
  {
    label: "Thursday, July 23",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3.75 8.25h16.5M4.5 5.25h15a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75h-15a.75.75 0 01-.75-.75V6a.75.75 0 01.75-.75z"
      />
    ),
  },
  {
    label: "6:30 – 9:30 PM",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6l3.5 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    label: VENUE.publicLabel,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 5.25-7.5 10.5-7.5 10.5s-7.5-5.25-7.5-10.5a7.5 7.5 0 1115 0z"
      />
    ),
  },
];

/** Gold palm-frond corner accent echoing the flyer artwork. */
function PalmFrond({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M10 90 C 30 60, 50 40, 85 12" />
      <path d="M28 72 C 20 60, 16 48, 18 34" />
      <path d="M28 72 C 40 66, 50 56, 54 44" />
      <path d="M44 56 C 36 46, 32 34, 34 22" />
      <path d="M44 56 C 56 52, 66 44, 70 32" />
      <path d="M62 38 C 56 28, 54 18, 56 8" />
      <path d="M62 38 C 72 36, 82 30, 88 22" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center px-4 py-16 text-center sm:py-20">
      <PalmFrond className="pointer-events-none absolute left-2 top-4 h-28 w-28 text-gold-primary/30 sm:h-40 sm:w-40" />
      <PalmFrond className="pointer-events-none absolute bottom-4 right-2 h-28 w-28 rotate-180 text-gold-primary/30 sm:h-40 sm:w-40" />

      <div className="relative space-y-6">
        {/* Primary SEO headline */}
        <h1 className="font-[family-name:var(--font-script)] text-6xl sm:text-7xl md:text-8xl">
          <span className="bg-gradient-to-r from-gold-light via-gold-primary to-gold-deep bg-clip-text text-transparent">
            Abundance
          </span>
        </h1>

        <p className="font-[family-name:var(--font-serif)] text-lg font-bold tracking-[0.3em] text-ink sm:text-xl md:text-2xl">
          NETWORKING &amp; SOCIAL
        </p>

        {/* Date · time · place with thin gold line icons */}
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 pt-4 sm:flex-row sm:gap-10">
          {details.map((d) => (
            <div key={d.label} className="flex items-center gap-2.5">
              <svg
                className="h-6 w-6 text-gold-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                {d.icon}
              </svg>
              <span className="font-[family-name:var(--font-body)] text-lg tracking-wider text-ink sm:text-xl">
                {d.label}
              </span>
            </div>
          ))}
        </div>

        <p className="font-[family-name:var(--font-body)] text-base font-light text-ink-soft sm:text-lg">
          In the DC / Baltimore area &middot; private venue address provided upon
          ticket confirmation
        </p>

        {/* Sounds by */}
        <div className="space-y-2 pt-6">
          <p className="font-[family-name:var(--font-serif)] text-sm tracking-[0.35em] text-gold-deep sm:text-base">
            &mdash; SOUNDS BY &mdash;
          </p>
          <p className="text-5xl text-ink sm:text-6xl">
            <span className="mr-3 align-middle font-[family-name:var(--font-serif)] text-4xl font-bold sm:text-5xl">
              DJ
            </span>
            <span className="font-[family-name:var(--font-script)]">Geovoni</span>
          </p>
          <p className="font-[family-name:var(--font-serif)] text-base tracking-[0.25em] text-ink-soft sm:text-lg">
            R&amp;B &bull; SOCA &amp; FEEL-GOOD FAVORITES
          </p>
        </div>
      </div>
    </section>
  );
}
