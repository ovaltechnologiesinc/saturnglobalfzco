import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { DubaiGoldSoukMap } from "./DubaiGoldSoukMap";
import { COMPANY_INFO } from "@/data/companyData";
import { Building2, Mail, Phone, Globe, CheckCircle2 } from "lucide-react";
import {
  submitContactInquiry,
  getWhatsAppTradingDeskUrl,
} from "@/lib/contactService";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { CountryCodeDropdown } from "@/components/common/CountryCodeDropdown";
import { POPULAR_COUNTRIES, CountryCode } from "@/data/countryCodes";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(
    POPULAR_COUNTRIES[0],
  );
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    helpMessage: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) return;
    setIsSubmitting(true);
    try {
      const fullPhone = formData.phone
        ? `${selectedCountry.dialCode} ${formData.phone}`
        : "";
      await submitContactInquiry({ ...formData, phone: fullPhone });
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-saturn-cream min-h-screen text-[#121318] overflow-hidden">
      {/* ============================================================== */}
      {/* SECTION 1: CONTACT US + GIANT OBSIDIAN CONTAINER              */}
      {/* ============================================================== */}
      <section className="pt-16 pb-20 lg:pt-20 lg:pb-28 border-b border-[#E8E3D7]">
        <Container>
          {/* Badge & Headline matching Screenshot 2 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 saturn-header-block sm:mb-16"
          >
            <span className="saturn-badge-dark">CONTACT US</span>

            <h1 className="pt-1 saturn-h1">
              Get in Touch with Saturn Global FZCO
            </h1>

            <p className="pt-1 saturn-lead">
              Whether you want to sell scrap gold, buy bullion bars, store your
              metals, or partner on a mining project, we are here to assist you.
            </p>
          </motion.div>

          {/* Sculpted Luxury Gold Card with Symmetrical Architectural Curves */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-br from-saturn-gold-light via-saturn-gold to-saturn-gold-dark rounded-tl-[80px] sm:rounded-tl-[120px] lg:rounded-tl-[160px] rounded-tr-[80px] sm:rounded-tr-[120px] lg:rounded-tr-[160px] rounded-bl-[80px] sm:rounded-bl-[120px] lg:rounded-bl-[160px] rounded-br-[28px] sm:rounded-br-[36px] p-8 sm:p-14 lg:p-20 text-left shadow-2xl border-2 border-saturn-gold-bright/60 relative"
          >
            {/* Subtle warm ambient highlight clipped to card curvature */}
            <div className="absolute inset-0 rounded-tl-[80px] sm:rounded-tl-[120px] lg:rounded-tl-[160px] rounded-tr-[80px] sm:rounded-tr-[120px] lg:rounded-tr-[160px] rounded-bl-[80px] sm:rounded-bl-[120px] lg:rounded-bl-[160px] rounded-br-[28px] sm:rounded-br-[36px] overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-0 rounded-full w-80 h-80 bg-white/20 blur-3xl" />
            </div>

            <div className="relative z-10 grid items-start grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Get in Touch Title (Slide in from Left) */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-4 lg:col-span-5"
              >
                <h2 className="text-5xl sm:text-6xl lg:text-[76px] font-normal leading-[1.08] text-saturn-obsidian tracking-tight font-heading">
                  Get
                  <br />
                  in Touch
                </h2>
                <p className="max-w-sm pt-2 text-base font-normal leading-relaxed text-saturn-obsidian/90 sm:text-lg">
                  Whether you want to sell scrap gold, buy bullion bars, store
                  your metals, or partner on a mining project, we are here to
                  assist you.
                </p>

                {/* Direct DMCC Trading Desk Channels */}
                <div className="pt-6 space-y-3.5 border-t border-saturn-obsidian/20 text-saturn-obsidian">
                  <div className="flex items-start gap-3 text-sm font-normal sm:text-base">
                    <Building2 className="w-5 h-5 mt-0.5 shrink-0 text-saturn-obsidian" />
                    <span>
                      {COMPANY_INFO.address.office},{" "}
                      {COMPANY_INFO.address.building},{" "}
                      {COMPANY_INFO.address.area}, {COMPANY_INFO.address.city}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-normal sm:text-base">
                    <Mail className="w-5 h-5 shrink-0 text-saturn-obsidian" />
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="hover:underline underline-offset-2"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-normal sm:text-base">
                    <Phone className="w-5 h-5 shrink-0 text-saturn-obsidian" />
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="hover:underline underline-offset-2"
                    >
                      {COMPANY_INFO.displayPhone} (Dubai Desk)
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-normal sm:text-base">
                    <Globe className="w-5 h-5 shrink-0 text-saturn-obsidian" />
                    <a
                      href={COMPANY_INFO.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-2"
                    >
                      {COMPANY_INFO.domain}
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Underline Form on Brushed Gold Surface (Slide in from Right) */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="lg:col-span-7"
              >
                {submitted ? (
                  <div className="p-8 space-y-5 text-center border shadow-inner bg-black/15 sm:p-10 rounded-3xl border-saturn-obsidian/25">
                    <CheckCircle2 className="w-12 h-12 mx-auto text-saturn-obsidian" />
                    <h3 className="text-2xl font-semibold sm:text-3xl text-saturn-obsidian font-heading">
                      Inquiry Sent to Saturn Global Desk
                    </h3>
                    <p className="max-w-md mx-auto text-sm leading-relaxed text-saturn-obsidian/90 sm:text-base">
                      Thank you,{" "}
                      <span className="font-semibold">
                        {formData.firstName}
                      </span>
                      . Your inquiry has been routed directly to our DMCC
                      bullion desk (
                      <span className="font-semibold">
                        {COMPANY_INFO.email}
                      </span>
                      ).
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
                            firstName: "",
                            lastName: "",
                            email: "",
                            phone: "",
                            company: "",
                            helpMessage: "",
                          });
                        }}
                        className="text-xs font-medium transition-colors text-saturn-obsidian/75 hover:text-saturn-obsidian hover:underline underline-offset-2"
                      >
                        ← Send another inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Row 1: First Name & Last Name */}
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-saturn-obsidian">
                          First name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              firstName: e.target.value,
                            })
                          }
                          className="w-full pb-2 text-base transition-colors bg-transparent border-b border-saturn-obsidian/35 text-saturn-obsidian focus:outline-none focus:border-saturn-obsidian placeholder-saturn-obsidian/40"
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-saturn-obsidian">
                          Last name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              lastName: e.target.value,
                            })
                          }
                          className="w-full pb-2 text-base transition-colors bg-transparent border-b border-saturn-obsidian/35 text-saturn-obsidian focus:outline-none focus:border-saturn-obsidian placeholder-saturn-obsidian/40"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Phone */}
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-saturn-obsidian">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full pb-2 text-base transition-colors bg-transparent border-b border-saturn-obsidian/35 text-saturn-obsidian focus:outline-none focus:border-saturn-obsidian placeholder-saturn-obsidian/40"
                        />
                      </div>

                      <div className="relative z-20">
                        <label className="block mb-2 text-sm font-medium text-saturn-obsidian">
                          Phone
                        </label>
                        <div className="relative flex items-center gap-2 pb-2 border-b border-saturn-obsidian/35">
                          <CountryCodeDropdown
                            selected={selectedCountry}
                            onSelect={setSelectedCountry}
                            variant="gold"
                          />
                          <div className="w-px h-4 bg-saturn-obsidian/30 shrink-0" />
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            placeholder="50 123 4567"
                            className="w-full text-base bg-transparent text-saturn-obsidian focus:outline-none placeholder-saturn-obsidian/40"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Company / Organization Name */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-saturn-obsidian">
                        Company / Organization Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full pb-2 text-base transition-colors bg-transparent border-b border-saturn-obsidian/35 text-saturn-obsidian focus:outline-none focus:border-saturn-obsidian placeholder-saturn-obsidian/40"
                      />
                    </div>

                    {/* Row 4: How can we help? */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-saturn-obsidian">
                        How can we help?
                      </label>
                      <input
                        type="text"
                        value={formData.helpMessage}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            helpMessage: e.target.value,
                          })
                        }
                        placeholder="e.g. Enquiry on Gold prices, scrap gold, or bullion purchase"
                        className="w-full pb-2 text-base transition-colors bg-transparent border-b border-saturn-obsidian/35 text-saturn-obsidian focus:outline-none focus:border-saturn-obsidian placeholder-saturn-obsidian/40"
                      />
                    </div>

                    {/* Submit Button & Direct WhatsApp Quick-Chat Link */}
                    <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-saturn-obsidian hover:bg-[#1E2029] text-saturn-gold-light hover:text-white rounded-tl-[18px] sm:rounded-tl-[24px] rounded-br-[18px] sm:rounded-br-[24px] rounded-tr-[6px] sm:rounded-tr-[8px] rounded-bl-[6px] sm:rounded-bl-[8px] px-12 py-3.5 text-base font-semibold transition-all duration-200 shadow-xl active:scale-95 w-full sm:w-auto border border-saturn-obsidian/40 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 rounded-full border-saturn-gold-light border-t-transparent animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          "Submit"
                        )}
                      </button>

                      <a
                        href={getWhatsAppTradingDeskUrl(formData)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 py-2 text-sm font-medium text-saturn-obsidian hover:text-black hover:underline underline-offset-4"
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
        </Container>
      </section>

      {/* ============================================================== */}
      {/* SECTION 2: HEAD OFFICE + GOOGLE MAP (Screenshot 4)             */}
      {/* ============================================================== */}
      <section className="py-20 lg:py-28">
        <Container>
          {/* Badge & Headline matching Screenshot 4 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 saturn-header-block sm:mb-16"
          >
            <span className="saturn-badge-dark">HEAD OFFICE</span>

            <h2 className="pt-1 saturn-h2">
              Located in Dubai, The City of Gold.
            </h2>
          </motion.div>

          {/* Interactive Google Map matching Screenshot 4: Slide Up */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full"
          >
            <DubaiGoldSoukMap />
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
