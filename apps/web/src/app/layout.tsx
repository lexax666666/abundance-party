import type { Metadata } from "next";
import { playfair, greatVibes, cormorant } from "@/lib/fonts";
import { SITE_URL, SITE_NAME, EVENT, VENUE, TICKETS_URL, PRICE } from "@/lib/site";
import "./globals.css";

const title = "Abundance | Networking & Social — Laurel, MD (DC / Baltimore) · July 23";
const description =
  "Abundance — a networking and social event in the DC / Baltimore area (Laurel, MD) on Thursday, July 23, 6:30–9:30 PM. Open bar, light bites, sounds by DJ Geovoni — R&B, Soca & feel-good favorites. $15 admission.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "Abundance networking event",
    "Abundance social",
    "networking event Laurel MD",
    "DC networking events",
    "Baltimore networking events",
    "Laurel MD events",
    "DJ Geovoni",
    "R&B Soca party Maryland",
    "social mixer DC",
    "open bar event Maryland",
    "DJ set Baltimore",
    "Shift to Abundance",
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
        width: 1600,
        height: 900,
        alt: "Abundance — Networking & Social in Laurel, MD",
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
 * Event structured data (schema.org Event) for Google rich results.
 * The full street address lives here only — it is not rendered in the
 * visible UI — so search engines can place the event geographically.
 */
const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
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
    price: PRICE.amount,
    priceCurrency: PRICE.currency,
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
    <html lang="en">
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
