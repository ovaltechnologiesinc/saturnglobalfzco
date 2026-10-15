import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface TradingViewChartProps {
  className?: string;
  symbol?: string;
}

export function TradingViewChart({
  className,
  symbol = 'OANDA:XAUUSD',
}: TradingViewChartProps) {
  // Official TradingView Advanced Candlestick Embed URL with full built-in tools & symbol change
  const config = {
    autosize: true,
    symbol: symbol,
    interval: '60',
    timezone: 'Asia/Dubai',
    theme: 'light',
    style: '1',
    locale: 'en',
    enable_publishing: false,
    allow_symbol_change: true,
    calendar: false,
    support_host: 'https://www.tradingview.com',
  };

  const tradingViewEmbedUrl = `https://www.tradingview-widget.com/embed-widget/advanced-chart/?locale=en#${encodeURIComponent(
    JSON.stringify(config)
  )}`;

  return (
    <div
      className={cn(
        'relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E0DCCE] bg-white shadow-lg',
        className
      )}
    >
      {/* Official TradingView Iframe directly embedding the live interactive chart */}
      <div className="w-full h-[620px] sm:h-[680px] lg:h-[720px] bg-white relative">
        <iframe
          title="TradingView Live Precious Metals Chart"
          src={tradingViewEmbedUrl}
          className="w-full h-full border-0"
          allow="fullscreen; clipboard-write"
          loading="eager"
        />
      </div>

      {/* Footer bar with direct link to user's specified TradingView chart display */}
      <div className="border-t border-[#EAE7DF] px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between text-xs text-gray-500 bg-[#FAF8F5] gap-2">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-saturn-obsidian">
            TradingView Live Terminal
          </span>
          <span>•</span>
          <span>OANDA:XAUUSD · Real-time Dubai Spot Feeds</span>
        </div>

        <a
          href="https://www.tradingview.com/chart/GzLU9Nfd/?symbol=OANDA%3AXAUUSD"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-saturn-gold hover:text-saturn-gold-hover font-semibold transition-colors"
        >
          <span>Open Chart on TradingView</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
