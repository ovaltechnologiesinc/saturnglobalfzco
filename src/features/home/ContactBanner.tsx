import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { submitContactInquiry, getWhatsAppTradingDeskUrl } from '@/lib/contactService';
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon';
import { CountryCodeDropdown } from '@/components/common/CountryCodeDropdown';
import { POPULAR_COUNTRIES, CountryCode } from '@/data/countryCodes';
import { COMPANY_INFO } from '@/data/companyData';

export interface ContactBannerProps {
  onOpenContactForm?: () => void;
}

export function ContactBanner({ onOpenContactForm: _ }: ContactBannerProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(POPULAR_COUNTRIES[0]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    helpMessage: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) return;
    setIsSubmitting(true);
    try {
      const fullPhone = formData.phone
        ? `${selectedCountry.dialCode} ${formData.phone}`
        : '';
      await submitContactInquiry({ ...formData, phone: fullPhone });
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-banner" className="bg-saturn-obsidian pt-16 sm:pt-20 lg:pt-24 pb-0 relative border-t border-saturn-gold/20">
      {/* Sculpted Luxury Gold Card with Symmetrical Architectural Curves */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-gradient-to-br from-saturn-gold-light via-saturn-gold to-saturn-gold-dark rounded-tl-[80px] sm:rounded-tl-[120px] lg:rounded-tl-[160px] rounded-tr-[80px] sm:rounded-tr-[120px] lg:rounded-tr-[160px] rounded-bl-[80px] sm:rounded-bl-[120px] lg:rounded-bl-[160px] rounded-br-[28px] sm:rounded-br-[36px] p-8 sm:p-14 lg:p-20 text-left shadow-2xl border-2 border-saturn-gold-bright/60 relative mb-[-1px]"
        >
          {/* Subtle warm ambient highlight clipped to card curvature */}
          <div className="absolute inset-0 rounded-tl-[80px] sm:rounded-tl-[120px] lg:rounded-tl-[160px] rounded-tr-[80px] sm:rounded-tr-[120px] lg:rounded-tr-[160px] rounded-bl-[80px] sm:rounded-bl-[120px] lg:rounded-bl-[160px] rounded-br-[28px] sm:rounded-br-[36px] overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-80 h-80 bg-white/20 rounded-full blur-3xl" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
            {/* Left Column: Get in Touch Title (Slide in from Left) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-5 space-y-4"
            >
              <h2 className="text-5xl sm:text-6xl lg:text-[76px] font-normal leading-[1.08] text-saturn-obsidian tracking-tight font-heading">
                Get<br />
                in Touch
              </h2>
              <p className="text-saturn-obsidian/90 text-base sm:text-lg font-normal leading-relaxed max-w-sm pt-3">
                Whether you want to sell scrap gold, buy bullion bars, store your metals, or partner on a mining project, we are here to assist you.
              </p>
            </motion.div>

            {/* Right Column: Underline Form (Slide in from Right) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="lg:col-span-7"
            >
              {submitted ? (
                <div className="bg-black/15 p-8 sm:p-10 rounded-3xl border border-saturn-obsidian/25 text-center space-y-5 shadow-inner">
                  <CheckCircle2 className="w-12 h-12 text-saturn-obsidian mx-auto" />
                  <h3 className="text-2xl sm:text-3xl font-semibold text-saturn-obsidian font-heading">
                    Inquiry Sent to Saturn Global Desk
                  </h3>
                  <p className="text-saturn-obsidian/90 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold">{formData.firstName}</span>. Your inquiry has been routed directly to our DMCC bullion desk (<span className="font-semibold">{COMPANY_INFO.email}</span>).
                  </p>

                  {/* 1-Click WhatsApp Quick-Chat Action */}
                  <div className="pt-2">
                    <a
                      href={getWhatsAppTradingDeskUrl(formData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 bg-saturn-obsidian hover:bg-[#1E2029] text-saturn-gold-light hover:text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl active:scale-95 border border-saturn-obsidian/40 w-full sm:w-auto"
                    >
                      <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
                      <span>Need Instant Payout/Quote? Chat on WhatsApp</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          firstName: '',
                          lastName: '',
                          email: '',
                          phone: '',
                          company: '',
                          helpMessage: '',
                        });
                      }}
                      className="text-xs text-saturn-obsidian/75 hover:text-saturn-obsidian hover:underline underline-offset-2 transition-colors font-medium"
                    >
                      ← Send another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Row 1: First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm text-saturn-obsidian mb-2 font-medium">
                        First name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="w-full bg-transparent border-b border-saturn-obsidian/35 pb-2 text-base text-saturn-obsidian focus:outline-none focus:border-saturn-obsidian transition-colors placeholder-saturn-obsidian/40"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-saturn-obsidian mb-2 font-medium">
                        Last name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full bg-transparent border-b border-saturn-obsidian/35 pb-2 text-base text-saturn-obsidian focus:outline-none focus:border-saturn-obsidian transition-colors placeholder-saturn-obsidian/40"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm text-saturn-obsidian mb-2 font-medium">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-transparent border-b border-saturn-obsidian/35 pb-2 text-base text-saturn-obsidian focus:outline-none focus:border-saturn-obsidian transition-colors placeholder-saturn-obsidian/40"
                      />
                    </div>

                    <div className="relative z-20">
                      <label className="block text-sm text-saturn-obsidian mb-2 font-medium">
                        Phone
                      </label>
                      <div className="relative flex items-center border-b border-saturn-obsidian/35 pb-2 gap-2">
                        <CountryCodeDropdown
                          selected={selectedCountry}
                          onSelect={setSelectedCountry}
                          variant="gold"
                        />
                        <div className="h-4 w-px bg-saturn-obsidian/30 shrink-0" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="50 123 4567"
                          className="w-full bg-transparent text-base text-saturn-obsidian focus:outline-none placeholder-saturn-obsidian/40"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Company / Organization Name */}
                  <div>
                    <label className="block text-sm text-saturn-obsidian mb-2 font-medium">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-saturn-obsidian/35 pb-2 text-base text-saturn-obsidian focus:outline-none focus:border-saturn-obsidian transition-colors placeholder-saturn-obsidian/40"
                    />
                  </div>

                  {/* Row 4: How can we help? - Spacing consistent with other inputs */}
                  <div>
                    <label className="block text-sm text-saturn-obsidian mb-2 font-medium">
                      How can we help?
                    </label>
                    <input
                      type="text"
                      value={formData.helpMessage}
                      onChange={(e) =>
                        setFormData({ ...formData, helpMessage: e.target.value })
                      }
                      placeholder="e.g. Enquiry on Gold prices, scrap gold, or bullion purchase"
                      className="w-full bg-transparent border-b border-saturn-obsidian/35 pb-2 text-base text-saturn-obsidian focus:outline-none focus:border-saturn-obsidian transition-colors placeholder-saturn-obsidian/40"
                    />
                  </div>

                  {/* Submit Button & Direct WhatsApp Quick-Chat Link */}
                  <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-saturn-obsidian hover:bg-[#1E2029] text-saturn-gold-light hover:text-white rounded-full px-12 py-3.5 text-base font-semibold transition-all duration-200 shadow-xl active:scale-95 w-full sm:w-auto border border-saturn-obsidian/40 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-saturn-gold-light border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        'Submit'
                      )}
                    </button>

                    <a
                      href={getWhatsAppTradingDeskUrl(formData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-sm text-saturn-obsidian hover:text-black font-medium hover:underline underline-offset-4 py-2"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-saturn-obsidian" />
                      <span>Or chat with our Dubai desk on WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
