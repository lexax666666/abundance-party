import { TICKETS_URL } from "@/lib/site";

export default function PaymentButton() {
  return (
    <section className="relative z-10 px-4 py-16 text-center sm:py-24">
      <a
        href={TICKETS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-block rounded-full bg-gradient-to-r from-gold-warm via-gold-light to-gold-warm px-10 py-4 font-[family-name:var(--font-serif)] text-lg font-semibold tracking-wider text-cosmic-deep transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] sm:text-xl animate-pulse-glow"
      >
        Put Yourself on the Guest List
      </a>

      <p className="mt-4 font-[family-name:var(--font-body)] text-sm text-gold-warm/60">
        Check out and get tickets on Eventbrite (free options available)
      </p>
    </section>
  );
}
