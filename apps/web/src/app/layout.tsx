import type { Metadata, Viewport } from "next";
import { playfair, greatVibes, cormorant } from "@/lib/fonts";
import { MusicPlayerProvider } from "@/components/MusicPlayerContext";
import GlobalPlayer from "@/components/GlobalPlayer";
import "./globals.css";

const SITE_URL = "https://abundancesoundart.com";
const TITLE = "ABUNDANCE - Music & Art Party | Thursday, July 23";
const DESCRIPTION =
  "An elevated night of music, connection, and positive energy. Thursday, July 23 — a DJ set, wine reception, and manifestation art. Realign your energy.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Abundance party",
    "music and art party",
    "manifestation event",
    "abundance sound and art",
    "DJ set",
    "affirmation music",
    "positive energy event",
  ],
  alternates: {
    canonical: "/",
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
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: "Abundance Sound & Art",
    locale: "en_US",
    images: [
      {
        url: "/hero-banner.png",
        width: 1500,
        height: 844,
        alt: "Abundance Sound & Art Experience — Realign your energy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/hero-banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
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
        <MusicPlayerProvider>
          {children}
          <GlobalPlayer />
        </MusicPlayerProvider>
      </body>
    </html>
  );
}
