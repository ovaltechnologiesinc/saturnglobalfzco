import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// cspell:ignore Transguard Emirati
const FAQ_LIST: FAQItem[] = [
  {
    id: 'metals-handled',
    question: 'What metals does Saturn Global FZCO trade?',
    answer:
      'We trade four main metals: Gold, Silver, Platinum, and Palladium. We handle minted bars, coins, raw gold, and scrap jewelry.',
  },
  {
    id: 'delivery-service',
    question: 'Does Saturn Global FZCO deliver purchased gold?',
    answer:
      'Yes. We organize secure, insured shipping inside the UAE and around the world using licensed armored carriers.',
  },
  {
    id: 'verify-purity',
    question: 'How do I check the purity of my scrap gold?',
    answer:
      'Your gold is melted and tested in an approved testing laboratory in Dubai using certified methods. You receive an official report stating the exact weight and purity before any payment or trade happens.',
  },
  {
    id: 'currencies-transact',
    question: 'What currencies can I use to trade?',
    answer:
      'We trade mainly in UAE Dirhams (AED) and US Dollars (USD). We can also arrange other major currencies for international clients upon request.',
  },
  {
    id: 'secure-storage',
    question: 'Does Saturn Global FZCO offer storage for gold?',
    answer:
      'Yes. We provide safe, fully insured vault storage in Dubai to keep your physical gold protected for as long as you need.',
  },
  {
    id: 'experienced-company',
    question: 'Is Saturn Global FZCO an experienced company?',
    answer:
      'Saturn Global FZCO is a newer company with fresh leadership, built from the ground up by professionals who thoroughly understand the technical, legal, and operational aspects of gold refining, mining, and trading.',
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<string>('metals-handled');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-saturn-cream border-b border-[#E8E3D7] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column: Dark Badge + Title (Slide in from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-4 text-left space-y-4 sm:space-y-6"
          >
            <span className="saturn-badge-dark">
              FAQ
            </span>

            <h2 className="saturn-h2 pt-1">
              You’re<br />
              probably<br />
              wondering...
            </h2>
          </motion.div>

          {/* Middle Column: Accordion Questions (Slide Up from Bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-5 text-left divide-y divide-[#22222E]/20 border-t border-[#22222E]/20"
          >
            {FAQ_LIST.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="py-5 sm:py-6">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-start justify-between gap-4 text-left group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-medium text-[#22222E] group-hover:text-saturn-gold transition-colors leading-snug">
                      {item.question}
                    </span>
                    <span className="shrink-0 text-[#22222E] mt-0.5">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 stroke-[1.5]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 stroke-[1.5]" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pr-6 text-sm sm:text-base text-[#282A34] font-normal leading-relaxed">
                          <p>{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

          {/* Right Column: Redesigned Master Assayer Vault Inspection Image (Slide in from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-3 flex justify-center lg:justify-end w-full"
          >
            <div className="relative w-full max-w-[340px] aspect-[3/4] rounded-tl-[80px] sm:rounded-tl-[100px] rounded-br-[64px] sm:rounded-br-[80px] rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-2xl border-2 border-saturn-gold/40 hover:border-saturn-gold transition-all duration-500 group bg-[#111] select-none">
              <img
                src="/images/saturn-faq-brand.jpg"
                alt="Saturn Global FZCO 999.9 Fine Gold Vault Inspection & Assaying in Dubai"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                width="340"
                height="453"
              />

              {/* Ambient Sheen & Dark Bottom Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
              <div className="absolute top-0 left-0 w-36 h-36 bg-white/15 rounded-full blur-2xl pointer-events-none" />

              {/* Sleek Brand Caption Overlay */}
              <div className="absolute bottom-5 left-5 right-5 space-y-1 text-left pointer-events-none">
                <span className="inline-block text-[10px] tracking-widest uppercase font-semibold text-saturn-gold font-heading">
                  SECURE DUBAI VAULT
                </span>
                <p className="text-xs sm:text-sm text-white/95 font-medium leading-snug">
                  999.9 Pure Gold Testing Desk
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
