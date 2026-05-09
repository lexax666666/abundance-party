import type { Metadata } from "next";
import { playfair, greatVibes, cormorant } from "@/lib/fonts";
import { MusicPlayerProvider } from "@/components/MusicPlayerContext";
import GlobalPlayer from "@/components/GlobalPlayer";
import "./globals.css";

export const metadata: Metadata = {
  title: "ABUNDANCE - Music & Art Party",
  description:
    "An elevated night of music, connection, and positive energy. Thursday, May 14th. Realign your energy.",
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
    title: "ABUNDANCE - Music & Art Party",
    description:
      "An elevated night of music, connection, and positive energy. Thursday, May 14th.",
    type: "website",
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
        <MusicPlayerProvider>
          {children}
          <GlobalPlayer />
        </MusicPlayerProvider>
      </body>
    </html>
  );
}
