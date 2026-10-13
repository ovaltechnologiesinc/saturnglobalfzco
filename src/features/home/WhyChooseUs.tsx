import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Award, Zap, Scale } from 'lucide-react';

export function WhyChooseUs() {
  return (
    <section id="benefits" className="py-20 lg:py-28 bg-saturn-cream border-b border-[#E8E3D7] overflow-hidden">
      <Container>
        {/* Top Header matching Screenshot 1 & 2 */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="saturn-header-block mb-12 sm:mb-16"
        >
          <span className="saturn-badge-dark">
            BENEFITS
          </span>

          <h2 className="saturn-h2 pt-1">
            Strength that speaks for itself
          </h2>
        </motion.div>

        {/* 3 Bespoke Symmetrical & Asymmetric Sculpted Luxury Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-2">
          {/* Card 1: Gold Know-How (Asymmetric Sculpted Shape) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0, ease: 'easeOut' }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="bg-gradient-to-br from-[#121319] to-[#1A1B24] text-white p-8 sm:p-10 lg:p-12 min-h-[420px] rounded-tl-[64px] rounded-br-[64px] rounded-tr-3xl rounded-bl-3xl flex flex-col justify-between text-left shadow-xl border border-saturn-gold/30 hover:border-saturn-gold transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-saturn-gold/15 border border-saturn-gold/35 flex items-center justify-center text-saturn-gold group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 stroke-[1.5]" />
                </div>
                <span className="text-4xl font-heading text-white/30 group-hover:text-saturn-gold transition-colors">
                  01
                </span>
              </div>
              <h3 className="saturn-h3-dark mb-4">
                Gold Know-How
              </h3>
              <p className="saturn-lead-dark">
                We are thoroughly trained and fully abreast with every step of gold processing, from DMCC Good Delivery standards to modern assaying and high-purity refining.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 text-xs text-saturn-gold/80 tracking-wider uppercase font-medium">
              ISO 11426 • DMCC Standards
            </div>
          </motion.div>

          {/* Card 2: Fast & Reliable (Center Elevated Monument Card) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            whileHover={{ y: -12, transition: { duration: 0.25 } }}
            className="bg-gradient-to-b from-[#161720] via-[#202230] to-[#13141B] text-white p-8 sm:p-10 lg:p-12 min-h-[460px] md:-translate-y-4 rounded-[48px] flex flex-col justify-between text-left shadow-2xl border-2 border-saturn-gold hover:border-saturn-gold-light transition-all relative overflow-hidden group"
          >
            {/* Subtle luxury glow accent in top right */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-saturn-gold/20 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-saturn-gold flex items-center justify-center text-saturn-obsidian shadow-md group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 stroke-[2]" />
                </div>
                <span className="text-4xl font-heading text-saturn-gold/70 group-hover:text-saturn-gold transition-colors">
                  02
                </span>
              </div>
              <h3 className="saturn-h3-dark mb-4">
                Fast &amp; Reliable
              </h3>
              <p className="saturn-lead-dark text-white/95">
                We make every gold trade simple and fast. We provide guaranteed same-day payments in AED or USD with zero delays and secure handling.
              </p>
            </div>
            <div className="pt-6 border-t border-white/15 flex items-center justify-between text-xs text-saturn-gold tracking-wider uppercase font-semibold">
              <span>Guaranteed Same-Day Payout</span>
              <span>AED / USD</span>
            </div>
          </motion.div>

          {/* Card 3: Honest Pricing (Asymmetric Inverted Sculpted Shape) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="bg-gradient-to-br from-[#121319] to-[#1A1B24] text-white p-8 sm:p-10 lg:p-12 min-h-[420px] rounded-tr-[64px] rounded-bl-[64px] rounded-tl-3xl rounded-br-3xl flex flex-col justify-between text-left shadow-xl border border-saturn-gold/30 hover:border-saturn-gold transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-saturn-gold/15 border border-saturn-gold/35 flex items-center justify-center text-saturn-gold group-hover:scale-110 transition-transform">
                  <Scale className="w-6 h-6 stroke-[1.5]" />
                </div>
                <span className="text-4xl font-heading text-white/30 group-hover:text-saturn-gold transition-colors">
                  03
                </span>
              </div>
              <h3 className="saturn-h3-dark mb-4">
                Honest Pricing
              </h3>
              <p className="saturn-lead-dark text-white/95">
                Our live market prices are open and transparent. We never charge hidden fees, giving you total clarity for every gram, kilo, and bullion bar.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 text-xs text-saturn-gold/80 tracking-wider uppercase font-medium">
              Zero Hidden Fees • Transparent Spot Rate
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
