import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export interface MiningPageProps {
  onPartnerInquiry?: () => void;
}

export function MiningPage({ onPartnerInquiry: _ }: MiningPageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // High-definition gold mining aerial video stream
  const videoSrc =
    'https://video.wixstatic.com/video/596625_5c2ac6dac42f4adda6fca220d557bb8a/720p/mp4/file.mp4';
  const posterSrc = '/images/saturn-branded-bullion.jpg';

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* ============================================================== */}
      {/* 1. Hero Section with Real African Open-Pit Gold Mine Video     */}
      {/* ============================================================== */}
      <section className="bg-saturn-cream pt-16 pb-16 lg:pt-20 lg:pb-24 border-b border-[#E8E3D7]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center text-left">
            {/* Left: Headline & Introduction (Slide in from Left) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-6 space-y-4 sm:space-y-6"
            >
              <span className="saturn-badge-dark mb-3">
                MINING &amp; INVESTMENT
              </span>

              <h1 className="saturn-h1 pt-1">
                Gold Mining and Investment Support
              </h1>

              <div className="saturn-lead pt-1">
                <p>
                  Saturn Global FZCO works directly with gold producers and mine operators, especially across Africa. We know the full journey of gold, from the mine site to the vault.
                </p>
              </div>
            </motion.div>

            {/* Right: The Actual Mining Video Player (Slide in from Right) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-6 flex justify-center"
            >
              <div className="relative w-full max-w-[560px] aspect-video rounded-3xl overflow-hidden shadow-2xl border border-black/10 bg-[#1F2428] group select-none">
                {/* HTML5 Video Element streaming local public file or original template CDN */}
                <video
                  ref={videoRef}
                  poster={posterSrc}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/mining-open-pit-mine.mp4" type="video/mp4" />
                  <source src={videoSrc} type="video/mp4" />
                </video>

                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors flex items-center justify-center pointer-events-none">
                  {/* Center Play/Pause Button matching template */}
                  <button
                    onClick={togglePlay}
                    className="pointer-events-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-saturn-obsidian/90 hover:bg-saturn-obsidian border border-saturn-gold/60 text-saturn-gold flex items-center justify-center shadow-xl transition-transform duration-200 active:scale-95 group-hover:scale-105 backdrop-blur-xs"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
                    ) : (
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-0.5" />
                    )}
                  </button>
                </div>

                {/* Bottom Right Mute/Unmute Toggle */}
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors shadow-md"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* 2. Band 1: FINANCING (Cream Background #F4F0E6)                */}
      {/* ============================================================== */}
      <section className="bg-saturn-cream py-20 lg:py-28 border-b border-[#E8E3D7]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center text-left">
            {/* Left: Text (Slide in from Left) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-4"
            >
              <span className="saturn-badge-dark mb-3">
                MINING PROJECT FINANCE
              </span>

              <h2 className="saturn-h2 text-2xl sm:text-3xl lg:text-[34px] pt-1">
                Mining Project Finance
              </h2>

              <p className="saturn-lead pt-2">
                Starting and expanding a mine takes money and equipment. Saturn Global FZCO helps secure funds for sound mining projects in Africa. We review the numbers, advise mine owners, and ensure the project can deliver pure gold directly to the market.
              </p>
            </motion.div>

            {/* Right: Sculpted Real Gold Bullion Showcase (Slide in from Right) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="w-64 h-64 sm:w-80 sm:h-80 aspect-square rounded-tl-[80px] rounded-br-[80px] rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#121318] shrink-0 hover:scale-105 transition-all duration-300">
                <img
                  src="/images/saturn-branded-bullion.jpg"
                  alt="Saturn Global Gold Bullion Mining Project Finance"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="320"
                  height="320"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* 3. Band 2: WORKING PARTNERSHIPS (Calm Warm Sand #EFE9DC)        */}
      {/* ============================================================== */}
      <section className="bg-[#EFE9DC] text-[#121318] py-20 lg:py-28 border-b border-[#E2D8C7]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center text-left">
            {/* Left: Text (Slide in from Left) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-4"
            >
              <span className="saturn-badge-dark">
                WORKING PARTNERSHIPS
              </span>

              <h2 className="saturn-h2 text-2xl sm:text-3xl lg:text-[34px] pt-1">
                Working Partnerships
              </h2>

              <p className="saturn-lead text-[#121318]/90 pt-2">
                We connect local mine operators who know the ground with investors looking for honest, well-managed projects. We make sure mining projects run with proper equipment, experienced managers, and clear contracts.
              </p>
            </motion.div>

            {/* Right: Sculpted Vault & Security Showcase (Slide in from Right) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="w-64 h-64 sm:w-80 sm:h-80 aspect-square rounded-tr-[80px] rounded-bl-[80px] rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-2xl border-4 border-white/90 bg-[#121318] shrink-0 hover:scale-105 transition-all duration-300">
                <img
                  src="/images/saturn-branded-vault.jpg"
                  alt="Saturn Global Secure Vaulting and Working Partnerships"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="320"
                  height="320"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* 4. Band 3: SUPPLY CONTRACTS & TRANSPORT (Deep Obsidian #0E0F14) */}
      {/* ============================================================== */}
      <section className="bg-saturn-obsidian text-white py-20 lg:py-28 border-t border-saturn-gold/20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center text-left">
            {/* Left: Text (Slide in from Left) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-4"
            >
              <span className="saturn-badge-light">
                SUPPLY CONTRACTS &amp; TRANSPORT
              </span>

              <h2 className="saturn-h2-dark text-2xl sm:text-3xl lg:text-[34px] pt-1">
                Supply Contracts &amp; Transport
              </h2>

              <div className="space-y-4 saturn-lead-dark pt-2">
                <p>
                  We arrange direct contracts to buy pure gold straight from African mining nations.
                </p>
                <p>
                  We oversee on-site checks, melting, packing, and paperwork.
                </p>
                <p>
                  We coordinate safe shipments between our partner networks in Ghana, Dubai, and Turkey.
                </p>
                <p className="text-saturn-gold font-medium pt-2">
                  You get a reliable supply chain that brings gold safely from the ground to your hands.
                </p>
              </div>
            </motion.div>

            {/* Right: Sculpted Luxury Bullion Showcase (Slide in from Right) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 aspect-square rounded-[48px] overflow-hidden shadow-2xl border-2 border-saturn-gold bg-[#111] shrink-0 hover:scale-105 transition-all duration-300 group">
                <img
                  src="/images/saturn-real-bullion.webp"
                  alt="Saturn African Gold Bullion Supply"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  width="320"
                  height="320"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
