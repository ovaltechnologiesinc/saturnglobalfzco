import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { TradingViewChart } from './TradingViewChart';
import { Coins } from 'lucide-react';

export function MarketDataPage() {
  const tickerItems = [
    {
      id: 'silver',
      name: 'Silver',
      price: '60.2642',
      change: '+1.08 (+1.83%)',
      isUp: true,
      iconType: 'silver',
    },
    {
      id: 'platinum',
      name: 'Platinum',
      price: '1,668.402',
      change: '+42.94 (+2.64%)',
      isUp: true,
      iconType: 'platinum',
    },
    {
      id: 'palladium',
      name: 'Palladium',
      price: '1,144.696',
      change: '+28.05 (+2.51%)',
      isUp: true,
      iconType: 'palladium',
    },
  ];

  return (
    <div className="bg-saturn-cream min-h-screen pb-20 overflow-hidden">
      {/* Page Header with Side-by-Side Brand Image */}
      <section className="pt-16 pb-14 lg:pt-20 lg:pb-20 border-b border-[#E8E3D7]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading & Lead */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-6 text-left space-y-4 sm:space-y-6"
            >
              <span className="saturn-badge-dark">
                MARKET DATA
              </span>

              <h1 className="saturn-h1 pt-1">
                Live Precious Metals Spot Rates
              </h1>

              <p className="saturn-lead pt-1">
                Live bullion market rates and charts showing current prices for Gold, Silver, Platinum, and Palladium.
              </p>

              {/* Real-time Ticker Meta Info */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs tracking-wider uppercase text-[#121318]/70 font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Market Rates
                </span>
                <span>•</span>
                <span>Updated 24/7</span>
                <span>•</span>
                <span>Direct Dubai Pricing</span>
              </div>
            </motion.div>

            {/* Right Column: Realistic Brand Image in Luxury Frame */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              className="lg:col-span-6 flex justify-center lg:justify-end w-full"
            >
              <div className="relative w-full max-w-[560px] aspect-[16/10] rounded-tl-[64px] rounded-br-[64px] rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-2xl border-2 border-saturn-gold/40 hover:border-saturn-gold transition-all duration-300 group bg-[#111] select-none">
                <img
                  src="/images/saturn-marketdata-brand.jpg"
                  alt="Saturn Global Live Precious Metals Trading Terminal & Physical Bullion in Dubai"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  width="560"
                  height="350"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-white/95 font-normal pointer-events-none">
                  <span className="font-heading tracking-wider uppercase text-saturn-gold font-medium">
                    Live Gold Trading Desk
                  </span>
                  <span className="text-white/80">XAU / USD Live Prices</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="pt-10 pb-12 lg:pt-12 lg:pb-16">
        <Container>
          {/* 2. Gold Ticker Bar matching Screenshot 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-wrap items-center gap-6 sm:gap-8 pb-8 border-b border-[#E8E3D7] text-sm text-[#444]"
          >
          {/* Gold cut-off indicator on left as shown in screenshot */}
          <div className="flex items-center gap-1.5 text-emerald-600 font-medium">
            <span>+1.13%)</span>
          </div>

          <div className="h-5 w-px bg-[#D6D0C2]" />

          {tickerItems.map((item, idx) => (
            <div key={item.id} className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                {/* Silver/Platinum/Palladium Icon Badge */}
                <div className="w-5 h-5 rounded-full bg-[#D8D3C5] flex items-center justify-center text-[10px] font-bold text-[#555]">
                  ●
                </div>
                <span className="text-[#666] font-normal">{item.name}</span>
                <span className="text-[#D32F2F] font-semibold">{item.price}</span>
                <span className="text-emerald-600 font-medium text-xs sm:text-sm">
                  {item.change}
                </span>
              </div>
              {idx < tickerItems.length - 1 && (
                <div className="h-5 w-px bg-[#D6D0C2]" />
              )}
            </div>
          ))}

          {/* TradingView Icon Mark on right */}
          <div className="ml-auto hidden md:flex items-center">
            <span className="bg-[#2D2E30] text-white text-[10px] font-bold px-1.5 py-0.5 rounded tracking-tighter">
              TV
            </span>
          </div>
        </motion.div>

        {/* 3. Quick Symbol Card: XAUUSD matching Screenshot 1 */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="pt-8 pb-8 text-left"
        >
          <div className="inline-flex items-center gap-6 bg-white px-6 py-3.5 rounded-xl border border-[#E0DCCE] shadow-sm relative pr-10">
            {/* Gold coin stack circle */}
            <div className="w-12 h-12 rounded-full bg-saturn-gold flex items-center justify-center shadow-inner shrink-0">
              <Coins className="w-6 h-6 text-saturn-obsidian stroke-[1.8]" />
            </div>

            {/* Symbol Details */}
            <div className="space-y-0.5">
              <div className="font-bold text-base text-[#111111]">XAUUSD</div>
              <div className="text-xs text-[#777777]">Gold</div>
            </div>

            {/* Price & Change */}
            <div className="pl-6 border-l border-gray-100 space-y-0.5">
              <div className="text-base font-bold text-[#111111]">
                4,180<span className="text-[#D32F2F]">.210</span>{' '}
                <span className="text-xs font-normal text-[#888]">USD</span>
              </div>
              <div className="text-xs font-semibold text-emerald-600">
                +46.520 +1.13%
              </div>
            </div>

            {/* TradingView Icon on top right */}
            <span className="absolute top-2.5 right-3 text-[9px] font-bold text-black/70">
              TV
            </span>
          </div>
        </motion.div>

        {/* 4. Full Width Interactive Candlestick Chart matching Screenshot 1 & 3 */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="w-full"
        >
          <TradingViewChart />
        </motion.div>
        </Container>
      </section>
    </div>
  );
}
