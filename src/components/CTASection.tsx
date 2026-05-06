"use client";

import { trackTelegramBot, trackTelegramChannel } from '@/lib/analytics';

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-[#FFD700]/5" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#D4AF37]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Start <span className="text-gradient-gold">Copy Trading</span>?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Join our community of traders and start copying verified XAUUSD signals today.
          No experience required.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://t.me/GoldenBull_Official_UK_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
            onClick={() => trackTelegramBot()}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            <span>Start Copying Now</span>
          </a>
          <a
            href="https://t.me/+O1xxXRNe1e1jMGNl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center space-x-2"
            onClick={() => trackTelegramChannel()}
          >
            <span>Join Telegram Channel</span>
          </a>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center space-x-8 text-gray-400 text-sm">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>Myfxbook Verified</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Transparent Results</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>Professional Signals</span>
          </div>
        </div>
      </div>
    </section>
  );
}