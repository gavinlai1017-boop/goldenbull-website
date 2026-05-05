import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Disclaimer | GoldenBull — XAUUSD Trading Signal Risk Disclosure",
  description: "Read the risk disclaimer for GoldenBull XAUUSD trading signals. Understand the risks of forex, CFD, and gold copy trading before using our Pepperstone-verified services.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#0A0E1A] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          Risk <span className="text-gradient-gold">Disclaimer</span>
        </h1>
        
        <div className="glass rounded-xl p-6 sm:p-8 space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Trading Risk Warning</h2>
            <p className="mb-4">
              Trading foreign exchange (forex), contracts for difference (CFDs), and commodities including gold (XAUUSD) 
              carries a high level of risk and may not be suitable for all investors. The leverage used in trading 
              can work both for and against you. Before deciding to trade, you should carefully consider your 
              investment objectives, level of experience, and risk appetite.
            </p>
            <p>
              Past performance is not indicative of future results. The information provided by GoldenBull, 
              including trading signals and market analysis, is for educational and informational purposes only 
              and should not be construed as financial advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">No Guarantee of Profits</h2>
            <p>
              There is no guarantee that you will profit from using our trading signals. Trading involves 
              substantial risk of loss and is not suitable for every investor. You could lose all or more 
              than your initial investment. Only trade with capital you can afford to lose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Third-Party Platforms</h2>
            <p>
              GoldenBull provides signals for copy trading through third-party platforms such as Pepperstone 
              and Myfxbook. We are not responsible for any issues, losses, or disputes arising from your 
              use of these platforms. Please review the terms and conditions of each platform before using 
              their services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">No Financial Advice</h2>
            <p>
              The content provided by GoldenBull does not constitute financial, investment, or trading advice. 
              You should consult with a qualified financial advisor before making any investment decisions. 
              We do not provide personalized investment recommendations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Regulatory Notice</h2>
            <p>
              The trading signals and services provided by GoldenBull may not be regulated by the financial 
              authorities in your jurisdiction. You are responsible for ensuring that your use of our services 
              complies with all applicable laws and regulations in your country of residence.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, GoldenBull shall not be liable for any direct, indirect, 
              incidental, special, consequential, or punitive damages arising out of or related to your use 
              of our trading signals, services, or the content provided on this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Risk Disclosure</h2>
            <p>
              By using GoldenBull services, you acknowledge that you have read, understood, and agree to 
              this risk disclaimer. You accept full responsibility for your trading decisions and the 
              associated risks.
            </p>
          </section>

          <div className="border-t border-gray-700 pt-6 mt-8">
            <p className="text-sm text-gray-400">
              Last updated: May 2024. This disclaimer is subject to change without notice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}