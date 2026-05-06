// Google Analytics 4 event tracking utility
export const GA_ID = 'G-1TY77HHW76';

// Track page views (for client-side navigation)
export function trackPageView(url: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_ID, { page_path: url });
  }
}

// Track custom events
export function trackEvent(action: string, category: string, label: string, value?: number) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Pre-defined events for GoldenBull
export function trackTelegramChannel() {
  trackEvent('click', 'engagement', 'telegram_channel');
}

export function trackTelegramBot() {
  trackEvent('click', 'engagement', 'telegram_bot');
}

export function trackMyfxbook() {
  trackEvent('click', 'engagement', 'myfxbook');
}

export function trackTwitter() {
  trackEvent('click', 'social', 'twitter_x');
}