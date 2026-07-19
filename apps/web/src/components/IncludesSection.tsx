const includes = [
  {
    label: "Open Bar",
    detail: "Wine, punch & liquor",
    // Cocktail glass
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 4.5h15L12 13.5m0 0v6m-3.75 0h7.5M7 7.5h10"
      />
    ),
  },
  {
    label: "Light Bites",
    detail: "Delicious bites to enjoy",
    // Serving platter with skewered bites
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 15.75h16.5M5.25 15.75a6.75 6.75 0 0113.5 0M9 9V5.25M9 5.25a.75.75 0 110-1.5.75.75 0 010 1.5zM15 9V5.25M15 5.25a.75.75 0 110-1.5.75.75 0 010 1.5zM7.5 18.75h9"
      />
    ),
  },
  {
    label: "Build New Connections",
    detail: "Meet-and-mingle networking",
    // Group of people
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    ),
  },
  {
    label: "Good People",
    detail: "Positive vibes",
    // Sparkles
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
      />
    ),
  },
];

export default function IncludesSection() {
  return (
    <section id="includes" className="relative z-10 px-4 py-16 sm:py-24">
      <h2 className="mb-12 text-center font-[family-name:var(--font-serif)] text-2xl tracking-[0.3em] text-ink sm:text-3xl">
        INCLUDES
      </h2>

      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {includes.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-gold-primary/40 bg-cream-card p-6 text-center shadow-sm transition-colors duration-300 hover:border-gold-primary"
          >
            <svg
              className="mx-auto mb-4 h-10 w-10 text-gold-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              {item.icon}
            </svg>
            <p className="font-[family-name:var(--font-serif)] text-base font-semibold tracking-wider text-ink sm:text-lg">
              {item.label}
            </p>
            <p className="mt-1 font-[family-name:var(--font-body)] text-base text-ink-soft">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
