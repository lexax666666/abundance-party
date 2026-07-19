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

export const SITE_NAME = "Abundance";

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
  name: "Abundance — Networking & Social",
  /** July 23, 2026, 6:30pm ET (EDT, UTC−4). */
  startDate: "2026-07-23T18:30:00-04:00",
  endDate: "2026-07-23T21:30:00-04:00",
  performer: "Geovoni",
  description:
    "Abundance is a networking and social event in the DC / Baltimore " +
    "area — Laurel, MD. Open bar with wine, punch & liquor, light bites, " +
    "and sounds by DJ Geovoni — R&B, Soca & feel-good favorites. Build new " +
    "connections with good people and positive vibes. $15 admission.",
} as const;

/** Admission price shown in the UI and in structured data offers. */
export const PRICE = {
  amount: "15",
  currency: "USD",
} as const;

/** Public contact for details and info. */
export const CONTACT = {
  phone: "(443) 577-8643",
  tel: "+14435778643",
} as const;
