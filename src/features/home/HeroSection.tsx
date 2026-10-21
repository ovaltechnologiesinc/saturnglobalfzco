import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

export interface HeroSectionProps {
  onExploreServices: () => void;
  onViewPrices?: () => void;
  onContactUs?: () => void;
}

export function HeroSection({ onExploreServices }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-saturn-cream pt-14 pb-16 lg:pt-20 lg:pb-24 border-b border-[#E8E3D7]">
      <Container>
        <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Heading, Subtitle & About Us Button (horizontally aligned with top of right image) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6 text-left lg:col-span-6 sm:space-y-8"
          >
            <div>
              <h1 className="saturn-h1 mb-6">
                Your Reliable Partner for Gold Trading, Mining Support, and
                Brokerage
              </h1>
            </div>

            <div className="space-y-5 saturn-lead">
              <p>
                Saturn Global FZCO is a modern precious metals company based in
                Dubai. We help clients trade physical gold, buy and sell bullion
                and scrap metals, and fund gold mining projects.
              </p>
              <p>
                While Saturn Global FZCO is a fresh company in the market, our
                team understands every step of physical gold operations—from
                digging the ore out of the ground to testing, melting, and safe
                delivery. We make buying, selling, and moving gold
                straightforward, safe, and transparent.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button onClick={onExploreServices} className="saturn-btn-dark">
                About Us
              </button>
            </div>
          </motion.div>

          {/* Right Column: 6-Tile Geometric Tangram Collage (matches Screenshot 1) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="flex justify-center lg:col-span-6 lg:justify-end"
          >
            <div className="relative w-full max-w-[460px] grid grid-cols-2 gap-2 select-none">
              {/* Row 1 Left: Official Saturn Global Bullion Bars with rounded top-left corner */}
              <div className="h-44 sm:h-52 aspect-[230/208] rounded-tl-[80px] sm:rounded-tl-[100px] overflow-hidden bg-[#AA822A] shadow-md border-2 border-white/50 group">
                <img
                  src="/images/saturn-branded-bullion.jpg"
                  alt="Saturn Global FZCO 999.9 Fine Gold Bullion Bars"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  width="230"
                  height="208"
                />
              </div>

              {/* Row 1 Right: Real physical gold bullion bars uploaded by user with rounded bottom-left corner */}
              <div className="h-44 sm:h-52 aspect-[230/208] rounded-bl-[80px] sm:rounded-bl-[100px] overflow-hidden shadow-md border-2 border-white/50 group bg-[#111]">
                <img
                  src="/images/saturn-real-bullion.webp"
                  alt="Real physical gold bars and bullion stock"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  width="230"
                  height="208"
                />
              </div>

              {/* Row 2: Stretched DMCC Registered & Same-Day Settlement Banner Card */}
              <div className="col-span-2 py-1.5 sm:py-2">
                <div className="flex flex-col items-center justify-between w-full gap-4 px-6 py-5 text-center transition-all saturn-card-dark sm:flex-row sm:px-8 sm:py-6 sm:text-left hover:border-saturn-gold">
                  <div className="space-y-1.5">
                    <p className="text-lg font-light tracking-wider uppercase text-saturn-gold font-heading sm:text-xl">
                      DMCC REGISTERED
                    </p>
                    <p className="text-xs font-normal text-saturn-muted-dark sm:text-sm">
                      Licensed Dubai Commodities &amp; Bullion Trading
                    </p>
                  </div>
                  <div className="w-20 h-px sm:w-px sm:h-12 bg-saturn-gold/30 shrink-0" />
                  <div className="space-y-1.5">
                    <p className="text-lg font-light tracking-wider text-white uppercase font-heading sm:text-xl">
                      SAME-DAY SETTLEMENT
                    </p>
                    <p className="text-xs font-normal text-saturn-muted-dark sm:text-sm">
                      Guaranteed Fast Payments in AED &amp; USD
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 3 Left: Molten Gold Refinery Artisan with rounded bottom-left corner */}
              <div className="h-44 sm:h-52 aspect-[230/208] rounded-bl-[80px] sm:rounded-bl-[100px] overflow-hidden bg-[#141E1A] shadow-md border-2 border-white/50 group">
                <img
                  src="/images/saturn-branded-refining.jpg"
                  alt="Gold refinery smelting and testing in Dubai"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  width="230"
                  height="208"
                />
              </div>

              {/* Row 3 Right: High-security Vault with rounded top-right corner */}
              <div className="h-44 sm:h-52 aspect-[230/208] rounded-tr-[80px] sm:rounded-tr-[100px] overflow-hidden shadow-md border-2 border-white/50 group bg-[#111]">
                <img
                  src="/images/saturn-branded-vault.jpg"
                  alt="High-security gold bullion vault in Dubai"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  width="230"
                  height="208"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
