import Image from "next/image";
import ParticleField from "@/components/ParticleField";
import HeroSection from "@/components/HeroSection";
import GoldenDivider from "@/components/GoldenDivider";
import ScheduleTimeline from "@/components/ScheduleTimeline";
import IncludesSection from "@/components/IncludesSection";
import RsvpSection from "@/components/RsvpSection";
import PaymentButton from "@/components/PaymentButton";
import MusicPlaylist from "@/components/MusicPlaylist";

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "ABUNDANCE — Music & Art Party",
  description:
    "An elevated night of music, connection, and positive energy. A DJ set by GeoVoni, a wine reception with curated bites, and manifestation art throughout the space.",
  startDate: "2026-07-23T18:30:00-04:00",
  endDate: "2026-07-23T21:30:00-04:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  image: ["https://abundancesoundart.com/hero-banner.png"],
  url: "https://abundancesoundart.com",
  organizer: {
    "@type": "Organization",
    name: "Abundance Sound & Art",
    url: "https://abundancesoundart.com",
  },
  performer: {
    "@type": "PerformingGroup",
    name: "DJ GeoVoni",
  },
  offers: {
    "@type": "Offer",
    url: "https://buy.stripe.com/dRm7sK7oe51s6J46rW7Re00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    validFrom: "2026-06-23T00:00:00-04:00",
  },
};

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
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
          ABUNDANCE &mdash; Music &amp; Art Party
        </p>
      </footer>
    </main>
  );
}
