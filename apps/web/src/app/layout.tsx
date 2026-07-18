import type { Metadata } from "next";
import { playfair, greatVibes, cormorant } from "@/lib/fonts";
import { MusicPlayerProvider } from "@/components/MusicPlayerContext";
import GlobalPlayer from "@/components/GlobalPlayer";
import { SITE_URL, SITE_NAME, EVENT, VENUE, TICKETS_URL } from "@/lib/site";
import "./globals.css";

const title = "Shift to Abundance | Networking & Social — Laurel, MD (DC / Baltimore) · July 23";
const description =
  "Shift to Abundance — a networking & social evening in the DC / Baltimore area (Laurel, MD) on Thursday, July 23. Come as you are, leave inspired. Open bar, DJ set by Geovoni, build new connections. $15 admission.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "Shift to Abundance",
    "Abundance networking",
    "networking event DC",
    "networking event Baltimore",
    "social mixer Laurel MD",
    "DC events",
    "Baltimore events",
    "Laurel MD events",
    "Maryland social event",
    "happy hour networking",
    "meet new people DC Baltimore",
    "Geovoni",
    "DJ social Baltimore",
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
        url: "/event-flyer.png",
        width: 1320,
        height: 2868,
        alt: "Shift to Abundance — Networking & Social · Thursday July 23, Laurel MD (DC / Baltimore) · $15 admission",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/event-flyer.png"],
  },
};

/**
 * Event structured data (schema.org SocialEvent) for Google rich results.
 * The full street address lives here only — it is not rendered in the
 * visible UI — so search engines can place the event geographically.
 */
const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "SocialEvent",
  name: EVENT.name,
  description: EVENT.description,
  startDate: EVENT.startDate,
  endDate: EVENT.endDate,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  image: [`${SITE_URL}/event-flyer.png`],
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
    price: EVENT.price,
    priceCurrency: EVENT.priceCurrency,
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
        className={`${playfair.variable} ${greatVibes.variable} ${cormorant.variable} antialiased min-h-screen pb-20`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
        <MusicPlayerProvider>
          {children}
          <GlobalPlayer />
        </MusicPlayerProvider>
      </body>
    </html>
  );
}
