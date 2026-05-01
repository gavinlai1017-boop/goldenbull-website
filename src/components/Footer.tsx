import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1A1A2E]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#D4AF37] to-[#FFD700] flex items-center justify-center text-[#1A1A2E] font-bold text-xl">
                  🐂
                </div>
              </div>
              <span className="text-xl font-bold text-gradient-gold">GoldenBull</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Professional XAUUSD copy trading signals verified by Myfxbook.
              Join our community and start your journey to financial freedom.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://t.me/+O1xxXRNe1e1jMGNl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a
                href="https://x.com/goldenbull_net?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#performance" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Performance
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/disclaimer" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Risk Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} GoldenBull. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Trading involves substantial risk of loss. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
}