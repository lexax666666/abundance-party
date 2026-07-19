import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import GoldenDivider from "@/components/GoldenDivider";
import IncludesSection from "@/components/IncludesSection";
import RsvpSection from "@/components/RsvpSection";
import PaymentButton from "@/components/PaymentButton";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero banner image */}
      <div className="relative z-10 w-full">
        <Image
          src="/hero-banner.png"
          alt="Abundance — Networking & Social flyer"
          width={1600}
          height={900}
          priority
          className="h-auto w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream-base to-transparent" />
      </div>

      <HeroSection />
      <GoldenDivider />
      <IncludesSection />
      <GoldenDivider />
      <RsvpSection />
      <GoldenDivider />
      <PaymentButton />

      <footer className="relative z-10 border-t border-gold-primary/20 py-8 text-center">
        <p className="font-[family-name:var(--font-body)] text-sm text-ink-soft/60">
          ABUNDANCE &mdash; Networking &amp; Social
        </p>
      </footer>
    </main>
  );
}
