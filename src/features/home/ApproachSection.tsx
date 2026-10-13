import { motion } from 'framer-motion';

export function ApproachSection() {
  return (
    <section id="approach" className="bg-[#EFE9DC] pt-20 pb-0 text-[#121318] overflow-hidden border-t border-[#E2D8C7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Header matching Screenshot 5 */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="saturn-header-block mb-12 sm:mb-16 pb-4"
        >
          <span className="saturn-badge-dark">
            APPROACH
          </span>

          <h2 className="saturn-h2 max-w-5xl pt-1">
            Our goal is to give honest <span className="font-normal text-[#9E7730]">Value</span> and direct <span className="font-normal text-[#9E7730]">Support</span> to our clients through <span className="font-normal text-[#9E7730]">Fair Prices</span>, <span className="font-normal text-[#9E7730]">Fast Settlement</span>, and <span className="font-normal text-[#9E7730]">Trusted Partnerships</span>.
          </h2>
        </motion.div>

        {/* Large Deep Obsidian Container with Curved Top-Right Corner & Gold Border */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-saturn-obsidian text-white p-8 sm:p-14 lg:p-20 rounded-tr-[100px] sm:rounded-tr-[160px] shadow-2xl border-t-2 border-r-2 border-saturn-gold/30 relative overflow-hidden"
        >
          {/* Subtle gold glow in background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-saturn-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl space-y-6 text-left saturn-lead-dark lg:text-xl font-normal relative z-10">
            <p>
              We make gold trading simple and safe for traders, jewelers, and investors.
            </p>

            <p>
              Our way of working is built on honest pricing, fast same-day payments, and personal care for every client.
            </p>

            <p>
              Our team is fully abreast with all gold processings — including laboratory testing, pure bar refining, vault storage, and insured international shipping.
            </p>

            <p className="text-saturn-gold text-sm sm:text-base pt-2 font-medium">
              We follow all UAE and DMCC free zone trade rules strictly, giving you a completely secure place to do gold business.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
