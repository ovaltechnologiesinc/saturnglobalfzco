import { Link } from '@tanstack/react-router';
import { COMPANY_INFO } from '@/data/companyData';

export function Footer() {
  return (
    <footer className="bg-saturn-footer text-white pt-16 pb-20 border-t border-saturn-gold/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Centered MENU Header for Footer Elements */}
        <div className="flex items-center justify-center gap-4 mb-12 sm:mb-16">
          <div className="h-px w-10 sm:w-16 bg-saturn-gold/30" />
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-saturn-gold">
            MENU
          </span>
          <div className="h-px w-10 sm:w-16 bg-saturn-gold/30" />
        </div>

        {/* 5 Symmetrical Columns on Same Baseline Height with Consistent Caps Lock */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 sm:gap-10 lg:gap-8 xl:gap-10 items-start text-left">
          {/* ABOUT */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-saturn-gold">
              ABOUT
            </h4>
            <div className="space-y-2.5 text-sm text-white/80 font-normal">
              <p>
                <Link
                  to="/about"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-saturn-gold transition-colors"
                >
                  About Us
                </Link>
              </p>
              <p>
                <Link
                  to="/markets"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-saturn-gold transition-colors"
                >
                  Markets
                </Link>
              </p>
              <p>
                <Link
                  to="/mining"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-saturn-gold transition-colors"
                >
                  Mining
                </Link>
              </p>
            </div>
          </div>

          {/* SERVICES */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-saturn-gold">
              SERVICES
            </h4>
            <div className="space-y-2.5 text-sm text-white/80 font-normal">
              <p>
                <Link
                  to="/services"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-saturn-gold transition-colors"
                >
                  Services
                </Link>
              </p>
              <p>
                <Link
                  to="/marketdata"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-saturn-gold transition-colors"
                >
                  Market Data
                </Link>
              </p>
              <p>
                <Link
                  to="/faq"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-saturn-gold transition-colors"
                >
                  FAQ
                </Link>
              </p>
            </div>
          </div>

          {/* CONTACT */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-saturn-gold">
              CONTACT
            </h4>
            <div className="space-y-2.5 text-sm text-white/80 font-normal">
              <p>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-saturn-gold transition-colors"
                >
                  {COMPANY_INFO.displayPhone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-saturn-gold transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* ADDRESS */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-saturn-gold">
              ADDRESS
            </h4>
            <div className="space-y-2.5 text-sm text-white/80 font-normal leading-relaxed">
              <p>{COMPANY_INFO.address.building}</p>
              <p className="text-white/70">{COMPANY_INFO.address.office}, {COMPANY_INFO.address.area}, {COMPANY_INFO.address.city}</p>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-saturn-gold">
              SOCIAL
            </h4>
            <div className="space-y-2.5 text-sm text-white/80 font-normal">
              <p>
                <a
                  href={COMPANY_INFO.socials.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-saturn-gold underline underline-offset-4 transition-colors"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                <a
                  href={COMPANY_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-saturn-gold underline underline-offset-4 transition-colors"
                >
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} SATURN GLOBAL FZCO. All rights reserved.</p>
          <p>Unit No: 3O-01-5071, DMCC Business Centre, Level No 1, Jewellery &amp; Gemplex 3, Dubai, UAE.</p>
        </div>
      </div>
    </footer>
  );
}
