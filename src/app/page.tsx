import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";

const SITE_URL = "https://www.goldenbullnet.com";

export const metadata: Metadata = {
  title: "GoldenBull | XAUUSD Gold Copy Trading Signals & Risks",
  description: "Learn how GoldenBull's XAUUSD gold copy trading works, review the linked Myfxbook profile and understand CFD risks before joining.",
  alternates: {
    canonical: "/",
    languages: { "en": "/", "zh-Hant": "/zh", "x-default": "/" },
  },
  openGraph: {
    title: "GoldenBull | XAUUSD Gold Copy Trading Signals & Risks",
    description: "Explore XAUUSD copy trading, performance information and CFD risk disclosures.",
    url: `${SITE_URL}/`,
    siteName: "GoldenBull",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GoldenBull XAUUSD gold copy trading" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
};
import PerformanceSection from "@/components/PerformanceSection";
import HowItWorks from "@/components/HowItWorks";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <PerformanceSection />
      <HowItWorks />
      <TrustSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}