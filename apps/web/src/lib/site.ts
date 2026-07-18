/**
 * Central site + event configuration.
 *
 * Everything SEO-related (metadata, Open Graph, sitemap, robots, JSON-LD
 * structured data) reads from here so there is a single source of truth.
 *
 * ▶ IMPORTANT: update `SITE_URL` to the real production domain once it is
 *   live. Canonical URLs, Open Graph tags, the sitemap and the event
 *   structured data all depend on it — Google needs a real, absolute URL to
 *   index the page and attach the event rich result.
 */
export const SITE_URL = "https://abundancesoundart.com";

export const SITE_NAME = "Shift to Abundance";

/** Eventbrite ticket page — where all "get tickets" actions point. */
export const TICKETS_URL =
  "https://www.eventbrite.com/e/abundance-music-art-party-tickets-1991413589654";

/**
 * Full street address.
 *
 * The house number is intentionally NOT shown anywhere in the visible UI —
 * it lives only in the JSON-LD structured data below so search engines can
 * place the event geographically (Google Maps, "events near me", local
 * results) without publishing the exact door to casual visitors.
 */
export const VENUE = {
  streetAddress: "13929 Baltimore Ave",
  addressLocality: "Laurel",
  addressRegion: "MD",
  postalCode: "20707",
  addressCountry: "US",
  /** Safe to display publicly — street name only, no house number. */
  publicLabel: "Baltimore Avenue · Laurel, MD",
} as const;

export const EVENT = {
  name: "Shift to Abundance — Networking & Social",
  /** July 23, 2026, 6:30pm ET (EDT, UTC−4). */
  startDate: "2026-07-23T18:30:00-04:00",
  endDate: "2026-07-23T21:30:00-04:00",
  performer: "Geovoni",
  /** Admission price in USD. */
  price: "15",
  priceCurrency: "USD",
  description:
    "Shift to Abundance is a networking & social evening in the DC / Baltimore " +
    "area — Laurel, MD. Come as you are, leave inspired. Open bar with punch " +
    "and light bites, a DJ set by Geovoni, and a room full of new connections. " +
    "$15 admission.",
} as const;
