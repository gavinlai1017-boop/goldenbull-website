import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GoldenBull | Professional XAUUSD Copy Trading Signals",
  description: "Verified XAUUSD trading signals with Myfxbook authentication. Join our Telegram community for professional copy trading on Pepperstone.",
  keywords: "XAUUSD, gold trading, copy trading, forex signals, Pepperstone, Myfxbook",
  authors: [{ name: "GoldenBull" }],
  openGraph: {
    title: "GoldenBull | Professional XAUUSD Copy Trading Signals",
    description: "Verified XAUUSD trading signals with Myfxbook authentication",
    type: "website",
    locale: "en_US",
    alternateLocale: "zh_TW",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}