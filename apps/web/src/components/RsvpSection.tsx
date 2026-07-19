import { CONTACT } from "@/lib/site";

export default function RsvpSection() {
  return (
    <section id="rsvp" className="relative z-10 px-4 py-16 sm:py-24">
      <h2 className="mb-4 text-center font-[family-name:var(--font-serif)] text-2xl tracking-[0.3em] text-ink sm:text-3xl">
        CONNECT WITH US
      </h2>
      <p className="mb-8 text-center font-[family-name:var(--font-body)] text-base font-light text-ink-soft sm:text-lg">
        For details or info
      </p>

      <div className="text-center">
        <a
          href={`tel:${CONTACT.tel}`}
          className="font-[family-name:var(--font-body)] text-xl text-gold-deep underline decoration-gold-primary/40 underline-offset-4 transition-colors hover:text-ink hover:decoration-gold-primary sm:text-2xl"
        >
          {CONTACT.phone}
        </a>
      </div>
    </section>
  );
}
