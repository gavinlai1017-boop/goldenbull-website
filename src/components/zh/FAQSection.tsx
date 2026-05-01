"use client";

import { useState } from "react";

const faqs = [
  {
    question: "什麼是跟單交易？",
    answer: "跟單交易讓您自動複製經驗豐富交易者的交易。當我們開倉或平倉時，您的帳戶會按比例執行相同操作，無需您全天候監控市場。"
  },
  {
    question: "如何開始複製 GoldenBull 訊號？",
    answer: "首先，加入我們的 Telegram 頻道以獲取最新資訊。然後，在 Pepperstone（我們的合作券商）開設帳戶，並透過我們的 Telegram Bot 註冊。Bot 會引導您連接帳戶並設定跟單。"
  },
  {
    question: "什麼是 XAUUSD？",
    answer: "XAUUSD 是黃金（XAU）兌美元（USD）的交易對。它是全球交易量最大的商品之一，提供高流動性和波動性，是交易者的熱門選擇。"
  },
  {
    question: "為什麼選擇 Pepperstone？",
    answer: "Pepperstone 是一家受監管、值得信賴的 CFD 券商，提供具競爭力的點差和快速執行。其跟單交易功能與我們的訊號完美整合。"
  },
  {
    question: "我需要多少資金？",
    answer: "最低資金取決於 Pepperstone 的要求和您的風險承受能力。我們建議從您可以承受損失的金額開始，同時確保能夠進行適當的風險管理。"
  },
  {
    question: "有什麼風險？",
    answer: "CFD 交易涉及重大虧損風險。過往績效不代表未來表現。您應只使用能承受損失的資金進行交易。開始前請仔細閱讀我們的風險免責聲明。"
  },
  {
    question: "如何驗證你們的績效？",
    answer: "我們的所有交易結果均由 Myfxbook（第三方分析平台）獨立驗證。您可以在那裡查看我們完整的交易歷史、統計數據和績效指標。"
  },
  {
    question: "我可以隨時停止跟單嗎？",
    answer: "是的，您對自己的帳戶擁有完全控制權。您可以透過 Pepperstone 平台或使用我們的 Telegram Bot 指令隨時停止跟單。"
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-[#16213E]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            常見<span className="text-gradient-gold">問題</span>
          </h2>
          <p className="text-gray-400">
            有問題？我們有答案。如果找不到您想要的資訊，歡迎在 Telegram 上聯繫我們。
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="text-white font-medium">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-[#D4AF37] transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-400 text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">還有其他問題？</p>
          <a
            href="https://t.me/+O1xxXRNe1e1jMGNl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            <span>在 Telegram 提問</span>
          </a>
        </div>
      </div>
    </section>
  );
}