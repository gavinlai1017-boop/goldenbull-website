import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "如何評估 XAUUSD 黃金跟單交易訊號｜GoldenBull",
  description: "評估黃金跟單訊號的檢查清單：第三方交易紀錄、最大回撤、槓桿、交易成本，以及差價合約的風險。",
  alternates: {
    canonical: "/zh/guides/evaluate-gold-copy-trading",
    languages: {
      en: "/guides/evaluate-gold-copy-trading",
      "zh-Hant": "/zh/guides/evaluate-gold-copy-trading",
      "x-default": "/guides/evaluate-gold-copy-trading",
    },
  },
};

export default function GuideZh() {
  return (
    <article lang="zh-Hant" className="pt-28 pb-20 max-w-3xl mx-auto px-5 text-gray-300 space-y-7 leading-relaxed">
      <h1 className="text-3xl sm:text-4xl font-bold text-white">如何評估 XAUUSD 黃金跟單交易訊號</h1>
      <p>跟單交易會複製其他交易者的持倉，但不會消除市場風險。XAUUSD 是以美元計價的黃金價格；黃金差價合約（CFD）波動可能很大，槓桿會同時放大盈利和虧損。考慮任何訊號服務之前，請逐項核對：</p>
      <section><h2 className="text-2xl font-semibold text-white mb-3">一、查閱原始交易紀錄</h2>
        <p>不要只看截圖或標題回報。直接開啟公開的第三方資料頁，核對可用的帳戶及交易權限驗證標示、最後更新日期、紀錄長度、出入金、未平倉交易，以及真實或模擬帳戶類別。GoldenBull 網站連至<a className="text-[#D4AF37] underline" href="https://www.myfxbook.com/members/GoldenBull_net/goldenbull-net/11928842" target="_blank" rel="noopener noreferrer">其 Myfxbook 資料頁</a>；實際狀態應以第三方當時顯示為準。第三方資料不保證未來表現。</p>
      </section>
      <section><h2 className="text-2xl font-semibold text-white mb-3">二、同時比較風險與回報</h2>
        <p>檢查最大回撤、倉位大小、槓桿、連續虧損及單一市場集中程度。想一想：若將來出現至少與歷史最大回撤相同的虧損，你是否承受得起？短期正回報未必涵蓋異常市況，更不能當作可預測的未來收益。</p>
      </section>
      <section><h2 className="text-2xl font-semibold text-white mb-3">三、釐清跟單方式及成本</h2>
        <p>確認交易如何複製、倉位會否按帳戶餘額調整、如何暫停跟單及平倉、連線故障時如何處理。點差、佣金、隔夜利息、滑點及券商執行差異，都可能令你的結果與訊號來源不同。請獨立核對券商的最新條款及所在地的服務供應情況。</p>
      </section>
      <section><h2 className="text-2xl font-semibold text-white mb-3">四、評估能否承受損失</h2>
        <p>CFD 交易有重大虧損風險，未必適合每個人。可以先考慮模擬帳戶，並只使用能承受損失的資金。本文是一般資訊，不是個人財務意見或交易建議。請閱讀<a className="text-[#D4AF37] underline" href="/legal/disclaimer">完整風險披露</a>。</p>
      </section>
      <p className="text-sm text-gray-400">GoldenBull 發布 · 2026 年 10 月 24 日審閱 · <Link className="text-[#D4AF37] underline" href="/guides/evaluate-gold-copy-trading">English version</Link></p>
    </article>
  );
}
