const schedule = [
  {
    time: "6:30",
    title: "Doors Open",
    description: "Wine welcome & curated bites",
  },
  {
    time: "7:30 — 8:30",
    title: "Uplifting music and affirmation",
    description: "DJ set by Geovani",
  },
  {
    time: "9:30",
    title: "After-party",
    description: "At a nearby bar or lounge (TBA)",
  },
];

export default function ScheduleTimeline() {
  return (
    <section id="schedule" className="relative z-10 px-4 py-16 sm:py-24">
      <h2 className="mb-16 text-center font-[family-name:var(--font-serif)] text-2xl tracking-[0.3em] text-gold-light sm:text-3xl">
        THE EVENING
      </h2>

      <div className="mx-auto max-w-2xl">
        <div className="relative border-l border-gold-primary/30 pl-8 sm:pl-12">
          {schedule.map((item, i) => (
            <div key={i} className="relative mb-12 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rotate-45 border border-gold-primary bg-cosmic-deep sm:-left-[calc(3rem+5px)]" />

              {/* Time */}
              <p className="mb-1 font-[family-name:var(--font-serif)] text-xl font-semibold text-gold-light sm:text-2xl">
                {item.time}
              </p>

              {/* Title */}
              <p className="font-[family-name:var(--font-body)] text-lg text-gold-pale sm:text-xl">
                {item.title}
              </p>

              {/* Description */}
              <p className="mt-1 font-[family-name:var(--font-body)] text-base font-light text-gold-warm/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
