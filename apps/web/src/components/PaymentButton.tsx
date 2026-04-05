// TODO: Replace this placeholder URL with your real Stripe Payment Link
// Create one at: https://dashboard.stripe.com/payment-links/create
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_PLACEHOLDER";

export default function PaymentButton() {
  return (
    <section className="relative z-10 px-4 py-16 text-center sm:py-24">
      <a
        href={STRIPE_PAYMENT_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-block rounded-full bg-gradient-to-r from-gold-warm via-gold-light to-gold-warm px-10 py-4 font-[family-name:var(--font-serif)] text-lg font-semibold tracking-wider text-cosmic-deep transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] sm:text-xl animate-pulse-glow"
      >
        Contribute $50
      </a>

      <p className="mt-4 font-[family-name:var(--font-body)] text-sm text-gold-warm/60">
        Secure payment via Stripe
      </p>
    </section>
  );
}
