import Image from "next/image";
import ParticleField from "@/components/ParticleField";
import HeroSection from "@/components/HeroSection";
import GoldenDivider from "@/components/GoldenDivider";
import ScheduleTimeline from "@/components/ScheduleTimeline";
import IncludesSection from "@/components/IncludesSection";
import RsvpSection from "@/components/RsvpSection";
import PaymentButton from "@/components/PaymentButton";
import MusicPlaylist from "@/components/MusicPlaylist";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <ParticleField />

      {/* Hero flyer image */}
      <div className="relative z-10 mx-auto w-full max-w-lg px-4 pt-8">
        <Image
          src="/event-flyer.png"
          alt="Abundance Networking & Social — Come as You Are, Leave Inspired · Thursday July 23, 6:30–9:30 PM, Laurel MD · DJ Geovoni · Open bar · $15 admission · Tickets on Eventbrite"
          width={1320}
          height={2868}
          priority
          className="h-auto w-full rounded-2xl border border-gold-primary/20 shadow-[0_0_60px_rgba(212,175,55,0.15)]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cosmic-deep to-transparent" />
      </div>

      <HeroSection />
      <GoldenDivider />
      <MusicPlaylist />
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
          ABUNDANCE &mdash; Networking &amp; Social
        </p>
      </footer>
    </main>
  );
}
