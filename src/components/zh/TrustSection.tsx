export default function TrustSection() {
  const trustPoints = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Myfxbook 驗證",
      description: "所有交易結果均由 Myfxbook 獨立驗證，確保完全透明。"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Pepperstone 合作夥伴",
      description: "我們使用受監管且值得信賴的 CFD 券商 Pepperstone。"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "即時訊號",
      description: "當我們進場或出場時，透過 Telegram 即時通知您。"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "成長中的社群",
      description: "加入我們 Telegram 社群，與數千名交易者分享見解和成果。"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            為何選擇 <span className="text-gradient-gold">GoldenBull</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            我們相信完全透明。這就是交易者選擇我們的原因。
          </p>
        </div>

        {/* Trust points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <div key={index} className="glass rounded-xl p-6 hover-lift">
              <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-4">
                {point.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
              <p className="text-gray-400 text-sm">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Myfxbook Badge */}
        <div className="mt-12 text-center">
          <div className="inline-block glass rounded-xl px-8 py-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">Myfxbook 驗證</div>
                <div className="text-gray-400 text-sm">獨立第三方驗證</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}