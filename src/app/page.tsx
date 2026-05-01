import HeroSection from "@/components/HeroSection";
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