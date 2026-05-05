export default function PerformanceSection() {
  return (
    <section id="performance" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="text-gradient-gold">績效驗證</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            所有交易結果均由 Myfxbook 獨立驗證，確保完全透明。
            過往績效不代表未來表現。
          </p>
        </div>

        {/* Myfxbook Widget Placeholder */}
        <div className="glass rounded-2xl p-8 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D4AF37]/20 mb-4">
              <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Myfxbook 驗證數據</h3>
            <p className="text-gray-400 mb-6">
              GoldenBull XAUUSD 訊號即時績效數據
            </p>

            {/* Myfxbook Widget Embed - Replace with actual widget code */}
            <div className="bg-[#1A1A2E] rounded-xl p-6 border border-gray-700">
              <p className="text-gray-500 text-sm mb-4">
                Myfxbook Widget 整合區域
              </p>
              <a
                href="https://www.myfxbook.com/members/GoldenBull_net/goldenbull-net/11928842"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-[#D4AF37] hover:text-[#FFD700] transition-colors"
              >
                <span>前往 Myfxbook 查看完整數據 →</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass rounded-xl p-6 text-center hover-lift">
            <div className="text-2xl font-bold text-gradient-gold mb-1">XAUUSD</div>
            <div className="text-gray-400 text-sm">交易品種</div>
          </div>
          <div className="glass rounded-xl p-6 text-center hover-lift">
            <div className="text-2xl font-bold text-gradient-gold mb-1">黃金</div>
            <div className="text-gray-400 text-sm">資產類別</div>
          </div>
          <div className="glass rounded-xl p-6 text-center hover-lift">
            <div className="text-2xl font-bold text-gradient-gold mb-1">24/5</div>
            <div className="text-gray-400 text-sm">交易時間</div>
          </div>
          <div className="glass rounded-xl p-6 text-center hover-lift">
            <div className="text-2xl font-bold text-gradient-gold mb-1">已驗證</div>
            <div className="text-gray-400 text-sm">Myfxbook</div>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="mt-8 p-4 border border-[#D4AF37]/20 rounded-lg bg-[#D4AF37]/5">
          <p className="text-xs text-gray-400 text-center">
            ⚠️ <strong>風險警告：</strong>CFD 交易涉及重大虧損風險。
            過往績效不代表未來表現。請只使用您能承擔損失的資金進行交易。
          </p>
        </div>
      </div>
    </section>
  );
}