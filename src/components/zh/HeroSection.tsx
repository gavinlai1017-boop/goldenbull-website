export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-2xl shadow-[#D4AF37]/20 hover-lift">
            <div className="w-full h-full bg-gradient-to-br from-[#D4AF37] to-[#FFD700] flex items-center justify-center text-[#1A1A2E] text-6xl">
              🐂
            </div>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          <span className="text-white">專業 </span>
          <span className="text-gradient-gold">XAUUSD</span>
          <br />
          <span className="text-white">跟單交易訊號</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          績效經過驗證，結果公開透明。
          <br />
          立即在 Pepperstone 開始複製 GoldenBull 訊號。
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="glass rounded-xl px-6 py-4 hover-lift">
            <div className="text-3xl font-bold text-gradient-gold">XAUUSD</div>
            <div className="text-gray-400 text-sm">交易品種</div>
          </div>
          <div className="glass rounded-xl px-6 py-4 hover-lift">
            <div className="text-3xl font-bold text-gradient-gold">Myfxbook</div>
            <div className="text-gray-400 text-sm">第三方驗證</div>
          </div>
          <div className="glass rounded-xl px-6 py-4 hover-lift">
            <div className="text-3xl font-bold text-gradient-gold">Pepperstone</div>
            <div className="text-gray-400 text-sm">合作券商</div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://t.me/+O1xxXRNe1e1jMGNl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center space-x-2 text-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            <span>加入 Telegram 頻道</span>
          </a>
          <a
            href="https://x.com/goldenbull_net?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span>關注 X</span>
          </a>
        </div>

        {/* Or divider */}
        <div className="flex items-center justify-center my-6">
          <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
          <span className="px-4 text-gray-500 text-sm">或</span>
          <div className="flex-1 max-w-xs h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
        </div>

        {/* Direct registration */}
        <a
          href="https://t.me/GoldenBull_Official_UK_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-[#D4AF37] hover:text-[#FFD700] transition-colors text-lg font-medium"
        >
          <span>透過 Telegram Bot 直接開始複製 →</span>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}