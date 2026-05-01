import HeroSection from "@/components/zh/HeroSection";
import PerformanceSection from "@/components/zh/PerformanceSection";
import HowItWorks from "@/components/zh/HowItWorks";
import TrustSection from "@/components/zh/TrustSection";
import FAQSection from "@/components/zh/FAQSection";
import CTASection from "@/components/zh/CTASection";

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