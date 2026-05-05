import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.goldenbullnet.com";

export const metadata: Metadata = {
  title: "GoldenBull | Professional XAUUSD Copy Trading Signals",
  description: "Verified XAUUSD trading signals with Myfxbook authentication. Join our Telegram community for professional copy trading on Pepperstone.",
  keywords: "XAUUSD, gold trading, copy trading, forex signals, Pepperstone, Myfxbook",
  authors: [{ name: "GoldenBull" }],
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "GoldenBull | Professional XAUUSD Copy Trading Signals",
    description: "Get verified XAUUSD gold trading signals with Myfxbook authentication. Start copy trading on Pepperstone today.",
    type: "website",
    url: SITE_URL,
    siteName: "GoldenBull",
    locale: "en_US",
    alternateLocale: ["zh_TW"],
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "GoldenBull - Professional XAUUSD Copy Trading Signals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@goldenbull_net",
    title: "GoldenBull | Professional XAUUSD Copy Trading Signals",
    description: "Get verified XAUUSD gold trading signals. Start copy trading on Pepperstone today.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "GoldenBull",
  description: "Professional XAUUSD Copy Trading Signals verified by Myfxbook",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.jpg`,
  sameAs: [
    "https://t.me/+O1xxXRNe1e1jMGNl",
    "https://x.com/goldenbull_net"
  ],
  serviceType: "Trading Signals",
  areaServed: "Worldwide",
  provider: {
    "@type": "Organization",
    name: "GoldenBull",
    url: SITE_URL
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Trading Signal Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "XAUUSD Copy Trading Signals",
          description: "Professional gold trading signals with Myfxbook verification"
        }
      }
    ]
  }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is copy trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Copy trading allows you to automatically copy the trades of experienced traders. When we open or close a trade, your account does the same proportionally, without you having to monitor the markets 24/7."
      }
    },
    {
      "@type": "Question",
      name: "How do I start copying GoldenBull signals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "First, join our Telegram channel to stay updated. Then, create an account with Pepperstone (our partner broker) and register through our Telegram bot. The bot will guide you through connecting your account and setting up copy trading."
      }
    },
    {
      "@type": "Question",
      name: "What is XAUUSD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "XAUUSD is the trading pair for Gold (XAU) against the US Dollar (USD). It's one of the most traded commodities in the world, offering high liquidity and volatility for trading opportunities."
      }
    },
    {
      "@type": "Question",
      name: "Why Pepperstone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pepperstone is a regulated, trusted CFD broker with competitive spreads and fast execution. They offer copy trading functionality that integrates seamlessly with our signals."
      }
    },
    {
      "@type": "Question",
      name: "How much capital do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The minimum capital depends on Pepperstone's requirements and your risk tolerance. We recommend starting with an amount you can afford to lose while still allowing for proper risk management."
      }
    },
    {
      "@type": "Question",
      name: "What are the risks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trading CFDs involves significant risk of loss. Past performance is not indicative of future results. You should only trade with capital you can afford to lose. Please read our risk disclaimer carefully before starting."
      }
    },
    {
      "@type": "Question",
      name: "How do I verify your performance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All our trading results are independently verified by Myfxbook, a third-party analytics platform. You can view our complete trading history, statistics, and performance metrics there."
      }
    },
    {
      "@type": "Question",
      name: "Can I stop copying at any time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you have full control over your account. You can stop copying our signals at any time through Pepperstone's platform or by using our Telegram bot commands."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}