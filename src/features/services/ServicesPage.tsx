import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';

export interface ServicesPageProps {
  onInquire?: (serviceName: string) => void;
}

export function ServicesPage({ onInquire: _ }: ServicesPageProps) {
  return (
    <div className="bg-saturn-cream min-h-screen overflow-hidden">
      {/* Top Header with Side-by-Side Brand Image */}
      <section className="pt-16 pb-16 lg:pt-20 lg:pb-24 border-b border-[#E8E3D7]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Badge & Lead */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-6 text-left space-y-4 sm:space-y-6"
            >
              <span className="saturn-badge-dark mb-3">
                WHAT WE DO
              </span>

              <h1 className="saturn-h1 pt-1">
                What We Do
              </h1>
              <p className="saturn-lead text-lg sm:text-xl pt-1">
                Saturn Global FZCO provides clear, dependable services to help you trade and manage gold without headaches.
              </p>

              {/* Service Highlights Quick Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs tracking-wider uppercase text-[#121318]/70 font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-saturn-gold" />
                  Buying &amp; Selling
                </span>
                <span>•</span>
                <span>Testing &amp; Refining</span>
                <span>•</span>
                <span>Safe Vault Storage</span>
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
                  src="/images/saturn-services-brand.jpg"
                  alt="Saturn Global FZCO Physical Gold Trading & Assaying Desk in Dubai"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  width="560"
                  height="350"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-white/95 font-normal pointer-events-none">
                  <span className="font-heading tracking-wider uppercase text-saturn-gold font-medium">
                    Gold Trading Desk
                  </span>
                  <span className="text-white/80">Fair Prices &amp; Fast Payouts</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Top 3 Alternating Rows on Cream (#F4F0E6) matching Screenshot 5 */}
      <section className="py-20 lg:py-28 space-y-20 lg:space-y-28">
        <Container>
          <div className="space-y-20 lg:space-y-28">
            {/* Row 1: Gold Brokerage & Trading Advice */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center text-left">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="lg:col-span-6 space-y-5"
              >
                <h2 className="saturn-h2 uppercase text-2xl sm:text-3xl lg:text-[34px]">
                  GOLD BROKERAGE &amp; TRADING ADVICE
                </h2>
                <p className="saturn-lead">
                  We connect sellers and buyers across the precious metals market. We help you choose the right time to buy or sell, manage price changes, and find trustworthy trade partners.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="lg:col-span-6 flex justify-center"
              >
                <div className="w-full max-w-[560px] aspect-[16/10] rounded-tl-[56px] rounded-br-[56px] rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-2xl border-2 border-saturn-gold/30 bg-[#181A20] group">
                  <img
                    src="/images/saturn-services-brokerage.jpg"
                    alt="Saturn Global Gold Brokerage & Trading Consultation Desk"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                    width="560"
                    height="350"
                  />
                </div>
              </motion.div>
            </div>

            {/* Row 2: Bullion & Scrap Gold Trading (Image Left, Text Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center text-left">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="lg:col-span-6 flex justify-center order-1"
              >
                <div className="w-full max-w-[560px] aspect-[16/10] rounded-tr-[56px] rounded-bl-[56px] rounded-tl-2xl rounded-br-2xl overflow-hidden shadow-2xl border-2 border-white/60 bg-[#181A20] group">
                  <img
                    src="/images/saturn-services-scrap.jpg"
                    alt="Real Physical Gold Bullion and Scrap Stock"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="560"
                    height="350"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="lg:col-span-6 space-y-5 order-2"
              >
                <h2 className="saturn-h2 uppercase text-2xl sm:text-3xl lg:text-[34px]">
                  BULLION AND SCRAP GOLD TRADING
                </h2>
                <div className="saturn-lead space-y-3">
                  <p>
                    Trade physical gold bars, coins, and scrap gold easily.
                  </p>
                  <p>
                    We buy and sell scrap gold and semi-refined metals at fair market prices.
                  </p>
                  <p>
                    If you bring gold to Dubai from other countries, we assist with customs procedures.
                  </p>
                  <p className="font-medium text-[#111111]">
                    We provide guaranteed same-day payments directly to your account.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Row 3: Assaying & Laboratory Testing */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center text-left">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="lg:col-span-6 space-y-5"
              >
                <h2 className="saturn-h2 uppercase text-2xl sm:text-3xl lg:text-[34px]">
                  ASSAYING &amp; LABORATORY TESTING
                </h2>
                <div className="saturn-lead space-y-3">
                  <p>
                    Know the exact purity of your gold before you buy or sell.
                  </p>
                  <p>
                    We use certified laboratories that follow strict testing standards (<strong className="font-semibold text-[#111111]">ISO 11426:2021</strong>).
                  </p>
                  <p>
                    Our testing accurately confirms how pure your gold is through proven melting and assay methods.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="lg:col-span-6 flex justify-center"
              >
                <div className="relative w-full max-w-[560px] aspect-[16/10] rounded-[48px] overflow-hidden shadow-2xl border-2 border-saturn-gold/40 bg-[#181A20] group">
                  <img
                    src="/images/saturn-services-assay.jpg"
                    alt="Gold Assaying and Laboratory Testing in Dubai"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="560"
                    height="350"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Lower Section: Distinctly Sculpted 3-Card Showcase on Deep Obsidian (#0E0F14) */}
      <section className="bg-saturn-obsidian text-white py-20 lg:py-28 relative border-t border-saturn-gold/20">
        {/* Subtle ambient luxury glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-saturn-gold/10 rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 text-left items-stretch relative z-10">
            {/* Card 1: Gold Refining (Sculpted Top-Left Arch) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="bg-white/[0.04] backdrop-blur-md p-6 sm:p-8 rounded-tl-[64px] rounded-br-[64px] rounded-tr-2xl rounded-bl-2xl border border-white/10 hover:border-saturn-gold/60 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-6">
                <div className="w-full aspect-[4/3] rounded-tl-[48px] rounded-br-[48px] rounded-tr-xl rounded-bl-xl overflow-hidden shadow-lg border border-saturn-gold/40 bg-black/40">
                  <img
                    src="/images/saturn-services-smelting.jpg"
                    alt="Saturn Gold Refining & Smelting Process"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                </div>

                <div>
                  <h3 className="saturn-h3-dark uppercase mb-4">
                    GOLD REFINING
                  </h3>
                  <div className="space-y-3 saturn-lead-dark">
                    <p>
                      Turn raw or scrap gold into pure gold bars.
                    </p>
                    <p>
                      Through licensed, certified refiners, we melt and purify your gold into <strong className="font-semibold text-white">995</strong> or <strong className="font-semibold text-white">999.9</strong> pure kilobars.
                    </p>
                    <p>
                      If your raw gold contains silver, the refining process separates and returns that silver value to you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6">
                <p className="text-white/85 text-xs sm:text-sm font-normal">
                  Compliant with Dubai Good Delivery and London Good Delivery standards.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Secure Storage & Vaulting (Elevated Monument Card) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              className="bg-gradient-to-b from-white/[0.09] to-white/[0.03] backdrop-blur-md p-6 sm:p-8 rounded-[48px] border-2 border-saturn-gold/60 hover:border-saturn-gold transition-all duration-300 md:-translate-y-4 hover:md:-translate-y-6 flex flex-col justify-between group shadow-2xl relative"
            >
              <div className="space-y-6">
                <div className="w-full aspect-[4/3] rounded-[36px] overflow-hidden shadow-xl border border-saturn-gold/40 bg-black/40">
                  <img
                    src="/images/saturn-services-vaulting.jpg"
                    alt="Saturn DMCC Secure Vault Storage in Dubai"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                </div>

                <div>
                  <h3 className="saturn-h3-dark uppercase mb-4">
                    SECURE STORAGE &amp; VAULTING
                  </h3>
                  <p className="saturn-lead-dark">
                    Keep your gold safe. We offer protected, fully insured vault storage in Dubai so your bars and scrap metal remain safe at all times.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6">
                <p className="text-saturn-gold text-xs sm:text-sm font-medium">
                  24/7 Monitored &bull; Fully Allocated &bull; Insured Underwriting
                </p>
              </div>
            </motion.div>

            {/* Card 3: Safe Global Shipping (Sculpted Top-Right Arch) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              className="bg-white/[0.04] backdrop-blur-md p-6 sm:p-8 rounded-tr-[64px] rounded-bl-[64px] rounded-tl-2xl rounded-br-2xl border border-white/10 hover:border-saturn-gold/60 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-6">
                <div className="w-full aspect-[4/3] rounded-tr-[48px] rounded-bl-[48px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-lg border border-saturn-gold/40 bg-black/40">
                  <img
                    src="/images/saturn-branded-shipping.jpg"
                    alt="Saturn Armored Gold Air Transport & Logistics"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                </div>

                <div>
                  <h3 className="saturn-h3-dark uppercase mb-4">
                    SAFE GLOBAL SHIPPING
                  </h3>
                  <p className="saturn-lead-dark">
                    Send gold anywhere in the world without worry. We work with licensed, insured international transport companies to handle armored transport, customs papers, and direct delivery.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6">
                <p className="text-white/85 text-xs sm:text-sm font-normal">
                  Door-to-door armored transport with real-time tracking and customs clearance.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
