import { TICKETS_URL, PRICE } from "@/lib/site";

export default function PaymentButton() {
  return (
    <section className="relative z-10 px-4 py-16 text-center sm:py-24">
      {/* Admission box echoing the flyer */}
      <div className="mx-auto mb-10 inline-block rounded-2xl border-2 border-gold-primary px-10 py-4">
        <p className="font-[family-name:var(--font-serif)] text-4xl font-bold text-ink sm:text-5xl">
          ${PRICE.amount}
        </p>
        <p className="mt-1 font-[family-name:var(--font-serif)] text-sm tracking-[0.3em] text-ink-soft">
          ADMISSION
        </p>
      </div>

      <div>
        <a
          href={TICKETS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-gradient-to-r from-gold-primary via-gold-light to-gold-primary px-10 py-4 font-[family-name:var(--font-serif)] text-lg font-semibold tracking-wider text-ink shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg sm:text-xl"
        >
          Put Yourself on the Guest List
        </a>

        <p className="mt-4 font-[family-name:var(--font-body)] text-sm text-ink-soft">
          Get tickets on Eventbrite
        </p>
      </div>
    </section>
  );
}
