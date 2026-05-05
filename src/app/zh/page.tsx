import type { Metadata } from "next";
import HeroSection from "@/components/zh/HeroSection";
import PerformanceSection from "@/components/zh/PerformanceSection";
import HowItWorks from "@/components/zh/HowItWorks";
import TrustSection from "@/components/zh/TrustSection";
import FAQSection from "@/components/zh/FAQSection";
import CTASection from "@/components/zh/CTASection";

export const metadata: Metadata = {
  title: "GoldenBull | 專業XAUUSD黃金交易信號與跟單交易",
  description: "加入GoldenBull獲取經過驗證的XAUUSD黃金交易信號。透過Pepperstone進行專業黃金跟單交易，Myfxbook實績認證。立即開始智能交易！",
  keywords: "XAUUSD, 黃金交易信號, 黃金跟單交易, Pepperstone交易, Myfxbook認證, 自動化黃金信號, copy trading",
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