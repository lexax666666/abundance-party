const contacts = [
  { name: "Janelle", phone: "(443) 577-8643", tel: "+14435778643" },
  { name: "Alia", phone: "(202) 271-8037", tel: "+12022718037" },
];

export default function RsvpSection() {
  return (
    <section id="rsvp" className="relative z-10 px-4 py-16 sm:py-24">
      <h2 className="mb-12 text-center font-[family-name:var(--font-serif)] text-2xl tracking-[0.3em] text-gold-light sm:text-3xl">
        RSVP
      </h2>

      <div className="mx-auto flex max-w-md flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-12">
        {contacts.map((c) => (
          <div key={c.name} className="text-center">
            <p className="mb-1 font-[family-name:var(--font-body)] text-lg text-gold-pale">
              {c.name}
            </p>
            <a
              href={`tel:${c.tel}`}
              className="font-[family-name:var(--font-body)] text-lg text-gold-primary underline decoration-gold-primary/40 underline-offset-4 transition-colors hover:text-gold-light hover:decoration-gold-light"
            >
              {c.phone}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
