import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { NAV_LINKS, COMPANY_INFO } from "@/data/companyData";
import { LiveTradeTicker } from "@/components/common/LiveTradeTicker";
import { cn } from "@/lib/utils";

export interface NavbarProps {
  currentPath: string;
}

export function Navbar({ currentPath }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scrolling when mobile hamburger menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full pt-2 sm:pt-2.5 pb-2 bg-saturn-cream transition-all space-y-2">
        {/* Slim Rectangular Sliding Live Trading Marquee (takes exact same size, length, and padding as Header) */}
        <LiveTradeTicker theme="dark" />

        {/* Floating Architectural Container expanded sideways to max-w-7xl matching Saturn Global's brand geometry */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full bg-white/95 backdrop-blur-md rounded-tl-[24px] sm:rounded-tl-[36px] rounded-br-[24px] sm:rounded-br-[36px] rounded-tr-xl sm:rounded-tr-2xl rounded-bl-xl sm:rounded-bl-2xl px-5 sm:px-8 lg:px-10 py-2.5 sm:py-3 shadow-[0_6px_25px_rgba(14,15,20,0.07)] border border-saturn-gold/30 hover:border-saturn-gold/60 transition-all duration-300 flex items-center justify-between relative">
            {/* Brand Logo matching template (SATURN GLOBAL FZCO) */}
            <Link
              to="/"
              className="flex items-center gap-2 focus:outline-none shrink-0"
              aria-label="SATURN GLOBAL FZCO Home"
              onClick={closeMenu}
            >
              <img
                src="/logos/saturn-brand-logo.png"
                alt="SATURN GLOBAL FZCO ساترن غلوبال ش.م.ح"
                className="h-8 sm:h-9 md:h-10 w-auto max-w-[210px] sm:max-w-[260px] md:max-w-none object-contain"
                width="742"
                height="114"
              />
            </Link>

            {/* Desktop Navigation Links matching template */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-normal text-[#2A2A2A]">
              {NAV_LINKS.filter((l) => l.path !== "/contactus").map((link) => {
                const isActive =
                  currentPath === link.path ||
                  (link.path === "/marketdata" && currentPath === "/market-data");
                return (
                  <Link
                    key={link.path}
                    to={link.path as any}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className={cn(
                      "transition-colors duration-150 select-none py-1",
                      isActive
                        ? "text-[#121318] font-semibold border-b-2 border-saturn-gold"
                        : "text-[#333333] hover:text-saturn-gold",
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right CTA Button: Deep black & gold pill "Contact Us" (Desktop only) */}
            <div className="items-center hidden lg:flex">
              <Link
                to="/contactus"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="bg-[#121318] hover:bg-[#1E1F28] text-white hover:text-saturn-gold border border-saturn-gold/40 hover:border-saturn-gold text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm active:scale-95"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-full text-[#121318] hover:bg-black/5 transition-colors focus:outline-none"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-6 h-6 stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================================== */}
      {/* Full-Screen Mobile Hamburger Menu Drawer                      */}
      {/* ============================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Slide-Down Mobile Drawer Container */}
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="relative w-full h-full max-h-screen bg-saturn-cream flex flex-col justify-between shadow-2xl overflow-y-auto text-left"
            >
              {/* 1. Mobile Menu Top Header Bar */}
              <div className="px-6 py-5 flex items-center justify-between border-b border-[#E8E3D7] bg-white shrink-0">
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="shrink-0"
                  aria-label="SATURN GLOBAL FZCO Home"
                >
                  <img
                    src="/logos/saturn-brand-logo.png"
                    alt="SATURN GLOBAL FZCO ساترن غلوبال ش.م.ح"
                    className="h-8 sm:h-9 w-auto max-w-[220px] object-contain"
                    width="742"
                    height="114"
                  />
                </Link>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-[#121318] text-saturn-gold flex items-center justify-center hover:bg-[#1E1F28] transition-colors shadow-sm focus:outline-none"
                  aria-label="Close mobile menu"
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              {/* 2. Navigation Links List */}
              <div className="flex flex-col justify-center flex-1 px-6 py-8 space-y-4">
                <div className="space-y-1">
                  {NAV_LINKS.filter((l) => l.path !== "/contactus").map(
                    (link, idx) => {
                      const isActive =
                        currentPath === link.path ||
                        (link.path === "/marketdata" &&
                          currentPath === "/market-data");
                      return (
                        <motion.div
                          key={link.path}
                          initial={{ opacity: 0, x: -25 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.1 + idx * 0.05,
                            duration: 0.3,
                          }}
                        >
                          <Link
                            to={link.path as any}
                            onClick={closeMenu}
                            className={cn(
                              "block py-3 px-4 rounded-2xl text-2xl font-normal transition-all duration-150",
                              isActive
                                ? "bg-[#121318] text-saturn-gold font-medium shadow-sm"
                                : "text-[#121318] hover:bg-white/60",
                            )}
                          >
                            <div className="flex items-center justify-between">
                              <span>{link.name}</span>
                              {isActive && (
                                <span className="w-2 h-2 rounded-full bg-saturn-gold" />
                              )}
                            </div>
                          </Link>
                        </motion.div>
                      );
                    },
                  )}
                </div>

                {/* Primary Contact Us Button */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.3 }}
                  className="pt-4"
                >
                  <Link
                    to="/contactus"
                    onClick={closeMenu}
                    className="block w-full py-4 px-6 rounded-full bg-saturn-gold hover:bg-[#B89047] text-saturn-obsidian text-center text-lg font-semibold shadow-md transition-all active:scale-98"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>

              {/* 3. Mobile Footer Information Card matching template */}
              <div className="px-6 py-6 bg-white border-t border-[#E8E3D7] space-y-3 shrink-0 text-xs text-[#555]">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-saturn-gold shrink-0" />
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-sm font-semibold text-[#121318] hover:text-saturn-gold"
                  >
                    {COMPANY_INFO.displayPhone}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-saturn-gold shrink-0" />
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-xs text-[#121318] hover:text-saturn-gold"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-saturn-gold shrink-0" />
                  <span className="text-xs text-gray-600">
                    {COMPANY_INFO.address.building}, {COMPANY_INFO.address.city}
                  </span>
                </div>

                <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-saturn-gold">
                  <a
                    href={COMPANY_INFO.socials.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                  <span>•</span>
                  <a
                    href={COMPANY_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
