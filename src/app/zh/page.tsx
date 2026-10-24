import type { Metadata } from "next";
import HeroSection from "@/components/zh/HeroSection";
import PerformanceSection from "@/components/zh/PerformanceSection";
import HowItWorks from "@/components/zh/HowItWorks";
import TrustSection from "@/components/zh/TrustSection";
import FAQSection from "@/components/zh/FAQSection";
import CTASection from "@/components/zh/CTASection";

export const metadata: Metadata = {
  title: "GoldenBull｜XAUUSD 黃金跟單交易與風險資訊",
  description: "了解 GoldenBull 的 XAUUSD 黃金跟單交易流程、Myfxbook 公開資料連結，以及差價合約的風險披露。交易前請自行評估風險。",
  alternates: {
    canonical: "/zh",
    languages: { "en": "/", "zh-Hant": "/zh", "x-default": "/" },
  },
  openGraph: {
    title: "GoldenBull｜XAUUSD 黃金跟單交易與風險資訊",
    description: "了解黃金跟單交易流程、公開績效資料連結及 CFD 交易風險。",
    url: "https://www.goldenbullnet.com/zh",
    siteName: "GoldenBull",
    locale: "zh_TW",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GoldenBull 黃金跟單交易" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
};

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