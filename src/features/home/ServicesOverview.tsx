import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';

export interface ServicesOverviewProps {
  onContactForService: (serviceName: string) => void;
}

export function ServicesOverview({ onContactForService }: ServicesOverviewProps) {
  return (
    <section id="services" className="bg-saturn-obsidian text-white py-20 lg:py-28 border-t border-saturn-gold/20 overflow-hidden">
      <Container>
        {/* Top Header Section matching Screenshot 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="saturn-header-block mb-12 sm:mb-16"
        >
          <span className="saturn-badge-light mb-3">
            SERVICES
          </span>

          <h2 className="saturn-h2-dark max-w-4xl pt-1">
            Bespoke Solutions that<br />
            are Tailored to Your Needs
          </h2>
        </motion.div>

        {/* Bespoke Sculpted Luxury Service Cards */}
        <div className="space-y-8 mb-12 sm:mb-16">
        {/* Card 1: Gold Brokerage & Trading Advice */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="bg-gradient-to-r from-[#14151D] via-[#1B1D28] to-[#12131A] rounded-[36px] sm:rounded-[48px] p-8 sm:p-12 lg:p-14 shadow-2xl border-2 border-saturn-gold/40 hover:border-saturn-gold text-left overflow-hidden relative group transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Branded Image in Custom Asymmetric Frame */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="w-full max-w-[420px] aspect-[16/11] rounded-tl-[48px] rounded-br-[48px] rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-2xl border-2 border-saturn-gold/50 bg-black/40">
                <img
                  src="/images/saturn-branded-bullion.jpg"
                  alt="Saturn Global FZCO 999.9 Fine Gold Bullion Bars"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="420"
                  height="288"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <h3 className="saturn-h3-dark">
                Gold Brokerage &amp; Trading Advice
              </h3>
              <p className="saturn-lead-dark">
                We connect sellers and buyers across the precious metals market. We help you choose the right time to buy or sell, manage price changes, and find trustworthy trade partners.
              </p>
              <div className="pt-2 text-xs tracking-wider uppercase text-saturn-gold/80 font-medium">
                • DMCC Registered Network • Strategic Market Timing •
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Bullion and Scrap Gold Trading (Deep Noir + Gold Trim) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="bg-gradient-to-r from-[#171924] via-[#202230] to-[#14151D] rounded-[36px] sm:rounded-[48px] p-8 sm:p-12 lg:p-14 shadow-2xl border-2 border-saturn-gold hover:border-saturn-gold-light text-left overflow-hidden relative group transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Content Left */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="saturn-h3-dark">
                Bullion and Scrap Gold Trading
              </h3>
              <p className="saturn-lead-dark">
                Trade physical gold bars, coins, and scrap gold easily. We buy and sell scrap gold and semi-refined metals at fair market prices, with customs support and guaranteed same-day payments.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs tracking-wider uppercase text-saturn-gold font-semibold">
                <span>Guaranteed Same-Day Payout</span>
                <span>•</span>
                <span>AED / USD Direct</span>
              </div>
            </div>

            {/* Real Gold Bullion Image Right */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[420px] aspect-[16/11] rounded-tr-[48px] rounded-bl-[48px] rounded-tl-2xl rounded-br-2xl overflow-hidden shadow-2xl border-2 border-saturn-gold/60 bg-black/50">
                <img
                  src="/images/saturn-real-bullion.webp"
                  alt="Real Physical Gold Bullion Stock"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="420"
                  height="288"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Assaying, Testing & Refining */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="bg-gradient-to-r from-[#14151D] via-[#1B1D28] to-[#12131A] rounded-[36px] sm:rounded-[48px] p-8 sm:p-12 lg:p-14 shadow-2xl border-2 border-saturn-gold/40 hover:border-saturn-gold text-left overflow-hidden relative group transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Refinery Image Left */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="w-full max-w-[420px] aspect-[16/11] rounded-tl-[48px] rounded-br-[48px] rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-2xl border-2 border-saturn-gold/50 bg-black/40">
                <img
                  src="/images/saturn-branded-refining.jpg"
                  alt="Gold Assaying and Smelting in Dubai"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="420"
                  height="288"
                />
              </div>
            </div>

            {/* Content Right */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <h3 className="saturn-h3-dark">
                Assaying, Testing &amp; Refining
              </h3>
              <p className="saturn-lead-dark">
                Know the exact purity of your gold before you buy or sell. We use certified ISO 11426 laboratories and accredited refiners to melt and purify your gold into 995 or 999.9 pure kilobars.
              </p>
              <div className="pt-2 text-xs tracking-wider uppercase text-saturn-gold/80 font-medium">
                • ISO 11426:2021 Standard • Dubai Municipality Certified •
              </div>
            </div>
          </div>
        </motion.div>
        </div>

        {/* Gold Services Button CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-left pt-2"
        >
          <button
            onClick={() => onContactForService('all-services')}
            className="saturn-btn-gold"
          >
            Services
          </button>
        </motion.div>
      </Container>
    </section>
  );
}
