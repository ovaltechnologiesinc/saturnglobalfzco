import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';

export interface MarketsPageProps {
  onContact?: () => void;
}

export function MarketsPage({ onContact: _ }: MarketsPageProps) {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Dedicated Page Header with Side-by-Side Brand Image */}
      <section className="bg-saturn-cream pt-16 pb-16 lg:pt-20 lg:pb-24 border-b border-[#E8E3D7]">
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
                WHERE WE OPERATE
              </span>

              <h1 className="saturn-h1 pt-1">
                Our Global Markets &amp; Trade Footprint
              </h1>

              <p className="saturn-lead pt-1">
                Connecting African gold mines directly with Dubai for reliable assaying, refining, and safe, transparent trading.
              </p>

              {/* Trade Corridor Highlights */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs tracking-wider uppercase text-[#121318]/70 font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-saturn-gold" />
                  Dubai Trading Hub
                </span>
                <span>•</span>
                <span>Direct Mine Supply</span>
                <span>•</span>
                <span>Fast &amp; Safe Payouts</span>
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
                  src="/images/saturn-markets-brand.jpg"
                  alt="Saturn Global Cross-Border Bullion Logistics and Global Trading Desk in Dubai"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  width="560"
                  height="350"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-white/95 font-normal pointer-events-none">
                  <span className="font-heading tracking-wider uppercase text-saturn-gold font-medium">
                    Secure Gold Transport
                  </span>
                  <span className="text-white/80">Direct Mine to Dubai Hub</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* African Market Section */}
      <section className="bg-[#FAF7EE] py-20 lg:py-28 border-b border-[#E8E3D7]">
        <Container>

          {/* 2-Column: Africa Map on Left + Text on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left">
            {/* Africa Map (Slide in from Left) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-6 flex justify-center"
            >
              <div className="w-full max-w-[540px]">
                <img
                  src="/images/market-africa-map.jpg"
                  alt="African Gold Trading Partners Map"
                  className="w-full h-auto object-contain"
                  loading="eager"
                />
              </div>
            </motion.div>

            {/* African Market Text (Slide in from Right) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-6 space-y-6"
            >
              <h2 className="saturn-h2">
                The African Market
              </h2>

              <div className="saturn-lead space-y-4">
                <p>
                  Africa has some of the world's richest gold reserves and is growing rapidly in international trade. Saturn Global FZCO works on the ground with miners, traders, and suppliers across key African countries to make trade smooth, safe, and mutually beneficial.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Middle East Section matching Screenshot 4 */}
      <section className="bg-saturn-obsidian text-white py-20 lg:py-28 border-t border-saturn-gold/20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left">
            {/* Middle East Text on Left (Slide in from Left) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-6 space-y-6"
            >
              <h2 className="saturn-h2-dark">
                The Dubai &amp; Middle East Hub
              </h2>

              <div className="saturn-lead-dark space-y-4 max-w-xl">
                <p>
                  Dubai is widely known as the "City of Gold" and is the global capital for physical bullion trade. Saturn Global FZCO is based in the heart of this market. From our Dubai office, we serve buyers, traders, and jewelers across the Middle East with quick trade execution, secure storage, and clear pricing.
                </p>
              </div>
            </motion.div>

            {/* Middle East & Turkey Map on Right (Slide in from Right) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-6 flex justify-center"
            >
              <div className="w-full max-w-[540px]">
                <img
                  src="/images/market-middle-east-map.jpg"
                  alt="Middle East and Turkey Gold Trading Map"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
