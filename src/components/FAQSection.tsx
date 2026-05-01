"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is copy trading?",
    answer: "Copy trading allows you to automatically copy the trades of experienced traders. When we open or close a trade, your account does the same proportionally, without you having to monitor the markets 24/7."
  },
  {
    question: "How do I start copying GoldenBull signals?",
    answer: "First, join our Telegram channel to stay updated. Then, create an account with Pepperstone (our partner broker) and register through our Telegram bot. The bot will guide you through connecting your account and setting up copy trading."
  },
  {
    question: "What is XAUUSD?",
    answer: "XAUUSD is the trading pair for Gold (XAU) against the US Dollar (USD). It's one of the most traded commodities in the world, offering high liquidity and volatility for trading opportunities."
  },
  {
    question: "Why Pepperstone?",
    answer: "Pepperstone is a regulated, trusted CFD broker with competitive spreads and fast execution. They offer copy trading functionality that integrates seamlessly with our signals."
  },
  {
    question: "How much capital do I need?",
    answer: "The minimum capital depends on Pepperstone's requirements and your risk tolerance. We recommend starting with an amount you can afford to lose while still allowing for proper risk management."
  },
  {
    question: "What are the risks?",
    answer: "Trading CFDs involves significant risk of loss. Past performance is not indicative of future results. You should only trade with capital you can afford to lose. Please read our risk disclaimer carefully before starting."
  },
  {
    question: "How do I verify your performance?",
    answer: "All our trading results are independently verified by Myfxbook, a third-party analytics platform. You can view our complete trading history, statistics, and performance metrics there."
  },
  {
    question: "Can I stop copying at any time?",
    answer: "Yes, you have full control over your account. You can stop copying our signals at any time through Pepperstone's platform or by using our Telegram bot commands."
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
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-gray-400">
            Got questions? We&apos;ve got answers. If you don&apos;t find what you&apos;re looking for,
            feel free to reach out on Telegram.
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
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="https://t.me/+O1xxXRNe1e1jMGNl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            <span>Ask on Telegram</span>
          </a>
        </div>
      </div>
    </section>
  );
}