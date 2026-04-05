import Image from "next/image";
import ParticleField from "@/components/ParticleField";
import HeroSection from "@/components/HeroSection";
import GoldenDivider from "@/components/GoldenDivider";
import ScheduleTimeline from "@/components/ScheduleTimeline";
import IncludesSection from "@/components/IncludesSection";
import RsvpSection from "@/components/RsvpSection";
import PaymentButton from "@/components/PaymentButton";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <ParticleField />

      {/* Hero banner image */}
      <div className="relative z-10 w-full">
        <Image
          src="/hero-banner.png"
          alt="Abundance Sound & Art Experience — Realign your energy"
          width={1500}
          height={844}
          priority
          className="h-auto w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cosmic-deep to-transparent" />
      </div>

      <HeroSection />
      <GoldenDivider />
      <ScheduleTimeline />
      <GoldenDivider />
      <IncludesSection />
      <GoldenDivider />
      <RsvpSection />
      <GoldenDivider />
      <PaymentButton />

      <footer className="relative z-10 border-t border-gold-primary/10 py-8 text-center">
        <p className="font-[family-name:var(--font-body)] text-sm text-gold-warm/40">
          ABUNDANCE &mdash; Music &amp; Art Party
        </p>
      </footer>
    </main>
  );
}
