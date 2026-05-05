import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | GoldenBull",
  description: "GoldenBull privacy policy. Learn how we collect, use, and protect your personal information when using our XAUUSD trading signal services.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0E1A] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          Privacy <span className="text-gradient-gold">Policy</span>
        </h1>
        
        <div className="glass rounded-xl p-6 sm:p-8 space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Introduction</h2>
            <p>
              GoldenBull (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you use our website and trading signal services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-white">Personal Information:</strong> Telegram username, email address 
                (if provided), and any other information you choose to share with us.
              </li>
              <li>
                <strong className="text-white">Trading Data:</strong> Information related to your trading account 
                if you connect to our copy trading services through Pepperstone or other platforms.
              </li>
              <li>
                <strong className="text-white">Usage Data:</strong> Information about how you interact with our 
                website, including pages visited, time spent, and referring sources.
              </li>
              <li>
                <strong className="text-white">Device Information:</strong> Browser type, device type, operating 
                system, and IP address.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">How We Use Your Information</h2>
            <p className="mb-3">We use the collected information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To provide and maintain our trading signal services</li>
              <li>To communicate with you about our services, updates, and trading signals</li>
              <li>To improve our website and services</li>
              <li>To analyze usage patterns and optimize user experience</li>
              <li>To detect, prevent, and address technical issues or fraud</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Third-Party Services</h2>
            <p className="mb-3">
              Our services may involve third-party platforms:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-white">Telegram:</strong> Used for community communication and signal delivery. 
                Telegram&apos;s privacy policy applies to data collected through their platform.
              </li>
              <li>
                <strong className="text-white">Pepperstone:</strong> Broker used for copy trading. Their privacy policy 
                governs your trading account and transactions.
              </li>
              <li>
                <strong className="text-white">Myfxbook:</strong> Used for performance verification. Their privacy policy 
                applies to your analytics data.
              </li>
            </ul>
            <p className="mt-4">
              We encourage you to review the privacy policies of these third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee 
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to provide our services and 
              comply with legal obligations. When your information is no longer needed, we will securely 
              delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Your Rights</h2>
            <p className="mb-3">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access to your personal data</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of your personal data</li>
              <li>Objection to processing of your data</li>
              <li>Data portability</li>
              <li>Withdrawal of consent</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us through our Telegram channel.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Cookies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. 
              You can control cookie settings through your browser preferences. For more information, 
              refer to our cookie policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Children&apos;s Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect 
              personal information from children. If you believe we have collected information from a child, 
              please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of 
              residence. By using our services, you consent to such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us through our 
              <a 
                href="https://t.me/+O1xxXRNe1e1jMGNl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:underline ml-1"
              >
                Telegram channel
              </a>.
            </p>
          </section>

          <div className="border-t border-gray-700 pt-6 mt-8">
            <p className="text-sm text-gray-400">
              Last updated: May 2024. This privacy policy is subject to change without notice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}