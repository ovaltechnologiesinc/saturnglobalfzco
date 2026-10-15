import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { TradingViewChart } from './TradingViewChart';
import { LiveTradeTicker } from '@/components/common/LiveTradeTicker';

export function MarketDataPage() {
  return (
    <div className="bg-saturn-cream min-h-screen pb-20 overflow-hidden">
      {/* 1. Page Header with Side-by-Side Brand Image */}
      <section className="pt-12 pb-10 lg:pt-16 lg:pb-16 border-b border-[#E8E3D7]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Heading & Lead */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-6 text-left space-y-4 sm:space-y-5"
            >
              <span className="saturn-badge-dark">
                MARKET DATA
              </span>

              <h1 className="saturn-h1 pt-1">
                Live Precious Metals Spot Rates
              </h1>

              <p className="saturn-lead pt-1">
                Real-time bullion market tickers and interactive technical charts streaming live prices for Gold (XAUUSD), Silver, Platinum, and Palladium.
              </p>

              {/* Real-time Ticker Meta Info */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-xs tracking-wider uppercase text-[#121318]/70 font-medium">
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
              initial={{ opacity: 0, x: 30 }}
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

      {/* 2. Slim Rectangular Sliding Live Trading Marquee (Takes the same size, length, and padding as the Header) */}
      <section className="pt-8 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <LiveTradeTicker theme="dark" />
        </motion.div>
      </section>

      {/* 3. Official TradingView Iframe directly embedded */}
      <section className="pt-4 pb-12 lg:pt-6 lg:pb-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="w-full"
          >
            <TradingViewChart />
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
