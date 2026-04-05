import type { Metadata } from "next";
import { playfair, greatVibes, cormorant } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "ABUNDANCE - Music & Art Party",
  description:
    "An elevated night of music, connection, and positive energy. Thursday, May 14th. Realign your energy.",
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
        className={`${playfair.variable} ${greatVibes.variable} ${cormorant.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
