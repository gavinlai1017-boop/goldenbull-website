import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.goldenbullnet.com";

// Route-specific canonical, language and social metadata live on each page.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "GoldenBull | XAUUSD Gold Copy Trading",
  description: "Explore GoldenBull's XAUUSD copy-trading service, how it works, its risk disclosures and independently hosted performance information.",
  authors: [{ name: "GoldenBull" }],
  icons: {
    icon: [{ url: "/favicon-v3.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "GoldenBull",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.jpg`,
  sameAs: ["https://t.me/+O1xxXRNe1e1jMGNl", "https://x.com/goldenbull_net"],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "GoldenBull",
  url: `${SITE_URL}/`,
  inLanguage: ["en", "zh-Hant"],
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1TY77HHW76" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1TY77HHW76');
        ` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website).replace(/</g, "\\u003c") }} />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
