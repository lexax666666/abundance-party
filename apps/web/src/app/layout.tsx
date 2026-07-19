import type { Metadata } from "next";
import { playfair, greatVibes, cormorant } from "@/lib/fonts";
import { SITE_URL, SITE_NAME, EVENT, VENUE, TICKETS_URL } from "@/lib/site";
import "./globals.css";

const title = "Shift to Abundance | Music & Art Party — Laurel, MD (DC / Baltimore) · July 23";
const description =
  "Shift to Abundance — an elevated night of music, art, and positive energy in the DC / Baltimore area (Laurel, MD) on Thursday, July 23. Wine reception, full bar, DJ set by GeoVoni. Realign your energy.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "Shift to Abundance",
    "Abundance party",
    "music and art party",
    "DC events",
    "Baltimore events",
    "Laurel MD events",
    "Maryland music party",
    "wellness event DC",
    "manifestation event",
    "GeoVoni",
    "affirmation party",
    "DJ set Baltimore",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      {
        url: "/hero-banner.png",
        width: 1500,
        height: 844,
        alt: "Shift to Abundance — Music & Art Party in the DC / Baltimore area",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/hero-banner.png"],
  },
};

/**
 * Event structured data (schema.org MusicEvent) for Google rich results.
 * The full street address lives here only — it is not rendered in the
 * visible UI — so search engines can place the event geographically.
 */
const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicEvent",
  name: EVENT.name,
  description: EVENT.description,
  startDate: EVENT.startDate,
  endDate: EVENT.endDate,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  image: [`${SITE_URL}/hero-banner.png`],
  url: SITE_URL,
  location: {
    "@type": "Place",
    name: "Private venue — Laurel, MD",
    address: {
      "@type": "PostalAddress",
      streetAddress: VENUE.streetAddress,
      addressLocality: VENUE.addressLocality,
      addressRegion: VENUE.addressRegion,
      postalCode: VENUE.postalCode,
      addressCountry: VENUE.addressCountry,
    },
  },
  performer: {
    "@type": "PerformingGroup",
    name: EVENT.performer,
  },
  organizer: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  offers: {
    "@type": "Offer",
    url: TICKETS_URL,
    availability: "https://schema.org/InStock",
    validFrom: "2026-06-01T00:00:00-04:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfair.variable} ${greatVibes.variable} ${cormorant.variable} antialiased min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
