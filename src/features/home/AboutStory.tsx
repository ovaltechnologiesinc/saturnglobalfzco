import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { COMPANY_STATS } from '@/data/companyData';
import { ShieldCheck, Award, HeartHandshake } from 'lucide-react';

export function AboutStory() {
  const pillars = [
    {
      icon: HeartHandshake,
      title: 'Honest Dealing',
      desc: 'We show real prices, clear terms, and no hidden fees on every trade.',
    },
    {
      icon: Award,
      title: 'Fast Settlements',
      desc: 'Gold trade moves quickly. We offer guaranteed same-day payouts once metals are tested.',
    },
    {
      icon: ShieldCheck,
      title: 'Full Legal Compliance',
      desc: 'We follow all UAE and international trade laws, ensuring safe and legitimate transactions every single time.',
    },
    {
      icon: Award,
      title: 'Deep Technical Know-How',
      desc: 'We know the exact science behind melting, testing, refining, and grading gold.',
    },
  ];

  return (
    <section id="about" className="bg-saturn-obsidian text-white py-20 lg:py-28 border-t border-saturn-gold/20 overflow-hidden">
      <Container>
        {/* Top Section: Side-by-Side Narrative & Realistic Brand Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Who We Are Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6 text-left space-y-6"
          >
            <div>
              <span className="saturn-badge-light mb-4">
                WHO WE ARE
              </span>

              <h2 className="saturn-h2-dark pt-1">
                All about<br />
                SATURN GLOBAL FZCO
              </h2>
            </div>

            <div className="space-y-5 saturn-lead-dark">
              <p>
                Saturn Global FZCO is a registered gold trading and brokerage firm in Dubai, UAE. We specialize in buying and selling gold bars, scrap gold, and other precious metals.
              </p>

              <p>
                As an energetic, newer business in the gold market, we bring a fresh approach backed by complete practical knowledge of how gold is refined, tested, priced, and shipped. We work with local shops, international buyers, scrap dealers, and mine operators.
              </p>
            </div>

            {/* Credential highlights */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs tracking-wider uppercase text-saturn-gold font-medium">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-saturn-gold" />
                DMCC Registered Member
              </span>
              <span>•</span>
              <span>Dubai Physical Bullion Hub</span>
              <span>•</span>
              <span>Same-Day Payout</span>
            </div>
          </motion.div>

          {/* Right Column: Realistic Brand Image in Luxury Frame */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-6 flex justify-center lg:justify-end w-full"
          >
            <div className="relative w-full max-w-[560px] aspect-[16/10] rounded-tl-[64px] rounded-br-[64px] rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-2xl border-2 border-saturn-gold/40 hover:border-saturn-gold transition-all duration-300 group bg-[#111] select-none">
              <img
                src="/images/saturn-about-brand.jpg"
                alt="Saturn Global FZCO 999.9 Fine Gold Bullion Stamping and Assay Verification in Dubai"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="eager"
                width="560"
                height="350"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-white/95 font-normal pointer-events-none">
                <span className="font-heading tracking-wider uppercase text-saturn-gold font-medium">
                  Official 1 Kilo 999.9 Hallmarked Bullion
                </span>
                <span className="text-white/80">DMCC Accredited Desk</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section divider & How We Work Subheading */}
        <div className="pt-16 sm:pt-20 mt-14 sm:mt-16 border-t border-white/10 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="space-y-2 mb-10"
          >
            <span className="text-xs font-semibold tracking-widest text-saturn-gold uppercase block">
              OUR STANDARDS
            </span>
            <h3 className="saturn-h3-dark text-2xl sm:text-3xl">
              How We Work
            </h3>
          </motion.div>

          {/* 4 Core Pillars with Unique Sculpted Luxury Frames */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const shapeClass =
                idx % 2 === 0
                  ? 'rounded-tl-[36px] rounded-br-[36px] rounded-tr-2xl rounded-bl-2xl'
                  : 'rounded-tr-[36px] rounded-bl-[36px] rounded-tl-2xl rounded-br-2xl';
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.12 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`p-7 bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-saturn-gold/60 space-y-4 flex flex-col justify-between shadow-lg transition-all group ${shapeClass}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-saturn-gold/15 border border-saturn-gold/35 flex items-center justify-center text-saturn-gold group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-heading text-2xl text-white/20 group-hover:text-saturn-gold transition-colors">
                        0{idx + 1}
                      </span>
                    </div>
                    <h4 className="text-xl font-heading text-white group-hover:text-saturn-gold transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-white/80 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 4 Key Statistics Counters: Staggered Slide-Up */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 pt-8 border-t border-white/10 text-left">
          {COMPANY_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-saturn-gold/40 transition-colors text-center space-y-1.5"
            >
              <div className="text-3xl sm:text-4xl font-normal text-saturn-gold font-heading">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-white">
                {stat.label}
              </div>
              <div className="text-xs text-white/70">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
