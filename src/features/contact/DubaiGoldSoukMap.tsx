import { useState } from 'react';
import { ExternalLink, Navigation, X } from 'lucide-react';

export function DubaiGoldSoukMap() {
  const [showPopup, setShowPopup] = useState(true);
  const [useIframe, setUseIframe] = useState(false);

  const googleMapsDirectionsUrl =
    'https://www.google.com/maps/dir//Jewellery+%26+Gemplex+3+-+DMCC+-+Dubai+-+United+Arab+Emirates/';

  return (
    <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[460px] sm:min-h-[520px] rounded-3xl overflow-hidden shadow-lg border border-[#E0DCCE] bg-[#E8F4F8]">
      {useIframe ? (
        <iframe
          title="SATURN GLOBAL FZCO Google Map"
          src="https://maps.google.com/maps?q=Jewellery+%26+Gemplex+3+DMCC+Dubai&t=&z=14&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        />
      ) : (
        /* Custom High-Definition Google Maps vector visualization reproducing Screenshot 4 */
        <div className="relative w-full h-full select-none overflow-hidden">
          {/* Map Vector Background Canvas */}
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 1200 640"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Base water fill */}
            <rect width="1200" height="640" fill="#BEE3EB" />

            {/* Land masses (Dubai mainland and Deira peninsula) */}
            <path
              d="M0,280 C200,240 380,290 480,360 C540,400 580,480 640,560 C700,640 1200,640 1200,640 L1200,200 C1100,180 1000,190 900,220 C820,240 760,200 700,160 C640,120 540,140 480,180 C400,230 200,260 0,280 Z"
              fill="#FBF7EE"
            />
            {/* North Deira / Al Mamzar shoreline */}
            <path
              d="M360,0 L1200,0 L1200,260 C1050,220 950,200 850,220 C780,240 720,200 660,160 C600,120 520,130 460,170 C400,210 380,140 360,0 Z"
              fill="#F9F5EC"
            />
            {/* Dubai Creek water channel winding between Deira and Bur Dubai */}
            <path
              d="M490,380 C530,370 560,390 590,440 C620,490 660,540 720,560 C780,580 840,550 900,530 C960,510 1050,520 1200,540 L1200,560 C1040,540 950,530 890,550 C830,570 770,600 710,580 C650,560 600,500 570,450 C540,410 520,390 480,400 Z"
              fill="#A2DBE8"
            />

            {/* Major Highways (Orange / Gold Highway #E11, etc.) */}
            <path
              d="M740,640 L880,380 L1020,160 L1200,80"
              stroke="#FFA726"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M620,640 L700,500 L800,320 L900,180"
              stroke="#FFA726"
              strokeWidth="5"
              fill="none"
            />
            <path
              d="M300,640 L450,480 L600,380 L800,300 L1200,200"
              stroke="#FFB74D"
              strokeWidth="4"
              fill="none"
            />

            {/* Local Street Grid Lines */}
            <path
              d="M400,340 L560,320 M420,380 L580,360 M440,420 L600,400 M480,300 L500,440 M540,300 L560,440 M580,300 L600,440"
              stroke="#E2DDD0"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M600,260 L800,240 M620,300 L820,280 M660,340 L860,320 M700,220 L720,360 M760,220 L780,360 M820,220 L840,360"
              stroke="#E2DDD0"
              strokeWidth="2"
              fill="none"
            />

            {/* Neighborhood Labels matching Screenshot 4 */}
            <g fontFamily="system-ui, -apple-system, sans-serif" fontSize="11" fill="#4B5563">
              <text x="380" y="320" fontWeight="500">PORT RASHID</text>
              <text x="390" y="335" fontSize="9" fill="#9CA3AF">ميناء راشد</text>

              <text x="515" y="275" fontWeight="500">Waterfront Market</text>
              <text x="525" y="290" fontSize="9" fill="#9CA3AF">سوق الواجهة البحرية</text>

              <text x="630" y="280" fontWeight="500">Century Mall</text>
              <text x="640" y="295" fontSize="9" fill="#9CA3AF">سنتشري مول</text>

              <text x="540" y="355" fontWeight="500">Souq Naif</text>
              <text x="540" y="370" fontSize="9" fill="#9CA3AF">سوق نايف</text>

              <text x="605" y="360" fontWeight="500">Reef Mall</text>
              <text x="605" y="375" fontSize="9" fill="#9CA3AF">ريف مول</text>

              <text x="620" y="445" fontWeight="500">Deira Clocktower</text>
              <text x="550" y="480" fontWeight="500">City Centre Deira</text>
              <text x="460" y="465" fontWeight="500">BurJuman</text>
              <text x="310" y="520" fontWeight="500">Etihad Museum</text>
              <text x="445" y="565" fontWeight="500">Dubai Frame</text>
              <text x="765" y="480" fontWeight="600" fill="#1F2937">DUBAI INTERNATIONAL AIRPORT</text>
              <text x="830" y="360" fontWeight="500">Madina Mall</text>
            </g>

            {/* DMCC Jewellery & Gemplex 3 Text Label */}
            <text
              x="400"
              y="380"
              fontWeight="bold"
              fontSize="12"
              fill="#C5A059"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              DMCC Jewellery &amp; Gemplex 3
            </text>
            <text
              x="440"
              y="395"
              fontSize="10"
              fill="#C5A059"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              مركز دبي للسلع المتعددة
            </text>
          </svg>

          {/* Red Pin for SATURN GLOBAL FZCO at DMCC Jewellery & Gemplex 3 */}
          <div className="absolute top-[40%] left-[43%] sm:top-[42%] sm:left-[44%] -translate-x-1/2 -translate-y-full z-20 flex flex-col items-center">
            {/* Popup Card matching Screenshot 4 */}
            {showPopup && (
              <div className="mb-2 bg-white rounded-lg px-3.5 py-2 shadow-xl border border-black/10 text-left min-w-[145px] relative animate-in fade-in duration-200">
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute top-1 right-1.5 text-gray-400 hover:text-black p-0.5"
                  aria-label="Close popup"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
                <div className="font-semibold text-xs text-[#121318] pr-3">
                  SATURN GLOBAL FZCO
                </div>
                <div className="text-[10px] text-gray-500 font-normal">
                  DMCC Jewellery &amp; Gemplex 3
                </div>
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-medium text-saturn-gold hover:underline flex items-center gap-1 mt-0.5"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            )}

            {/* Red Google Maps Pin SVG */}
            <div className="relative group cursor-pointer" onClick={() => setShowPopup(true)}>
              <svg
                className="w-9 h-9 text-[#EA4335] drop-shadow-md transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              {/* Pin shadow circle on ground */}
              <div className="w-3 h-1.5 bg-black/30 rounded-full mx-auto blur-[1px] -mt-1" />
            </div>
          </div>

          {/* Interactive Toggle Pill on Top Left */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
            <button
              onClick={() => setUseIframe(!useIframe)}
              className="bg-white/95 hover:bg-white text-xs font-medium text-[#121318] px-3.5 py-1.5 rounded-full shadow-md border border-black/5 flex items-center gap-1.5 transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-saturn-gold" />
              <span>{useIframe ? 'Stylized Map' : 'Satellite / Live Map'}</span>
            </button>
          </div>

          {/* Google Logo at Bottom Left */}
          <div className="absolute bottom-3 left-4 z-10 pointer-events-none">
            <span className="text-[14px] font-bold text-[#5F6368] tracking-tight font-sans">
              Google
            </span>
          </div>

          {/* Controls on Right matching Screenshot 4 */}
          <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
            <button
              onClick={() => window.open(googleMapsDirectionsUrl, '_blank')}
              className="w-8 h-8 rounded-md bg-white shadow-md border border-black/5 flex items-center justify-center text-gray-700 hover:bg-gray-50"
              title="Open Fullscreen in Google Maps"
            >
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          <div className="absolute bottom-6 right-4 z-10 flex flex-col bg-white rounded-md shadow-md border border-black/5 overflow-hidden">
            <button
              onClick={() => setUseIframe(true)}
              className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-100 font-bold text-sm border-b border-gray-100"
              title="Zoom in"
            >
              +
            </button>
            <button
              onClick={() => setUseIframe(true)}
              className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-100 font-bold text-sm"
              title="Zoom out"
            >
              −
            </button>
          </div>

          {/* Scale & Terms at Bottom Right */}
          <div className="absolute bottom-1.5 right-4 z-10 text-[9px] text-gray-500 font-sans flex items-center gap-2 pointer-events-none">
            <span>Map data ©2026 Google</span>
            <span className="border-l border-gray-400 pl-1 font-mono">1 km</span>
            <span>Terms</span>
          </div>
        </div>
      )}
    </div>
  );
}
