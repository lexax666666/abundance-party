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
