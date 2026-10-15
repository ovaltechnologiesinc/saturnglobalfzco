import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';

export interface LiveTradeTickerProps {
  className?: string;
  theme?: 'dark' | 'light';
}

export const TICKER_ITEMS = [
  {
    id: 'gold',
    name: 'Gold',
    symbol: 'XAUUSD',
    price: '4,180.210',
    change: '+46.52 (+1.13%)',
    isUp: true,
  },
  {
    id: 'silver',
    name: 'Silver',
    symbol: 'XAGUSD',
    price: '60.264',
    change: '+1.08 (+1.83%)',
    isUp: true,
  },
  {
    id: 'platinum',
    name: 'Platinum',
    symbol: 'XPTUSD',
    price: '1,668.402',
    change: '+42.94 (+2.64%)',
    isUp: true,
  },
  {
    id: 'palladium',
    name: 'Palladium',
    symbol: 'XPDUSD',
    price: '1,144.696',
    change: '+28.05 (+2.51%)',
    isUp: true,
  },
  {
    id: 'dubai-24k',
    name: 'Dubai Gold 24K',
    symbol: 'AED/g',
    price: '324.50',
    change: '+2.30 (+0.71%)',
    isUp: true,
  },
  {
    id: 'dubai-22k',
    name: 'Dubai Gold 22K',
    symbol: 'AED/g',
    price: '300.50',
    change: '+2.10 (+0.70%)',
    isUp: true,
  },
  {
    id: 'dubai-21k',
    name: 'Dubai Gold 21K',
    symbol: 'AED/g',
    price: '291.00',
    change: '+2.00 (+0.69%)',
    isUp: true,
  },
  {
    id: 'dubai-18k',
    name: 'Dubai Gold 18K',
    symbol: 'AED/g',
    price: '249.50',
    change: '+1.70 (+0.69%)',
    isUp: true,
  },
  {
    id: 'kilo-bar',
    name: '1kg Gold Bar',
    symbol: 'AED',
    price: '324,500',
    change: '+2,300 (+0.71%)',
    isUp: true,
  },
  {
    id: 'tt-bar',
    name: 'Ten Tola Bar',
    symbol: 'AED',
    price: '37,850',
    change: '+265 (+0.70%)',
    isUp: true,
  },
];

export function LiveTradeTicker({
  className,
  theme = 'dark',
}: LiveTradeTickerProps) {
  // Duplicate for seamless infinite marquee loop
  const duplicated = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className={cn(
        'w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none',
        className
      )}
    >
      <div
        className={cn(
          'w-full rounded-full py-1.5 sm:py-2 px-3 sm:px-5 flex items-center overflow-hidden border shadow-xs transition-all relative',
          theme === 'dark'
            ? 'bg-[#0E0F14] text-white border-saturn-gold/35'
            : 'bg-white text-saturn-obsidian border-[#DDD8CA]'
        )}
      >
        {/* Left Live Badge */}
        <Link
          to="/market-data"
          className="flex items-center gap-1.5 shrink-0 pr-3 mr-3 border-r border-white/15 dark:border-black/10 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-saturn-gold whitespace-nowrap hover:underline cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span>LIVE TRADE</span>
        </Link>

        {/* Marquee sliding track from Right to Left */}
        <div className="flex-1 overflow-hidden relative">
          {/* Subtle fade edges */}
          <div
            className={cn(
              'absolute left-0 inset-y-0 w-6 z-10 pointer-events-none',
              theme === 'dark'
                ? 'bg-gradient-to-r from-[#0E0F14] to-transparent'
                : 'bg-gradient-to-r from-white to-transparent'
            )}
          />
          <div
            className={cn(
              'absolute right-0 inset-y-0 w-6 z-10 pointer-events-none',
              theme === 'dark'
                ? 'bg-gradient-to-l from-[#0E0F14] to-transparent'
                : 'bg-gradient-to-l from-white to-transparent'
            )}
          />

          <div className="animate-ticker-slide flex items-center gap-6 sm:gap-8 no-scrollbar text-xs">
            {duplicated.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="flex items-center gap-2 shrink-0 whitespace-nowrap font-sans"
              >
                {/* Circular dot */}
                <div
                  className={cn(
                    'w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-bold shrink-0',
                    theme === 'dark'
                      ? 'bg-saturn-gold/20 text-saturn-gold'
                      : 'bg-[#D8D3C5] text-[#555]'
                  )}
                >
                  ●
                </div>

                {/* Name */}
                <span
                  className={cn(
                    'font-medium',
                    theme === 'dark' ? 'text-white/80' : 'text-[#555]'
                  )}
                >
                  {item.name}
                </span>

                {/* Price */}
                <span
                  className={cn(
                    'font-semibold font-mono',
                    theme === 'dark' ? 'text-saturn-gold' : 'text-[#121318]'
                  )}
                >
                  {item.price}
                </span>

                {/* Change */}
                <span
                  className={cn(
                    'font-medium text-[11px] sm:text-xs',
                    item.isUp ? 'text-emerald-500' : 'text-red-500'
                  )}
                >
                  {item.change}
                </span>

                {/* Vertical separator */}
                <div
                  className={cn(
                    'h-3.5 w-px ml-2',
                    theme === 'dark' ? 'bg-white/15' : 'bg-[#D6D0C2]'
                  )}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right TradingView mark matching previous design */}
        <Link
          to="/market-data"
          className="ml-auto hidden md:flex items-center pl-3 shrink-0"
          title="View TradingView chart"
        >
          <span className="bg-[#2D2E30] hover:bg-[#3D3E42] text-white text-[10px] font-bold px-1.5 py-0.5 rounded tracking-tighter transition-colors cursor-pointer">
            TV
          </span>
        </Link>
      </div>
    </div>
  );
}
