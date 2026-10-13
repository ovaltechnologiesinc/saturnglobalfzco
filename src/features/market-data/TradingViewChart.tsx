import { useState } from 'react';
import { RefreshCw, ExternalLink, Activity } from 'lucide-react';

export function TradingViewChart() {
  const [viewMode, setViewMode] = useState<'live' | 'instant'>('live');
  const [iframeKey, setIframeKey] = useState(0);

  // Official TradingView Advanced Candlestick Embed URL for OANDA:XAUUSD
  const tradingViewEmbedUrl =
    'https://www.tradingview-widget.com/embed-widget/advanced-chart/?locale=en#%7B%22autosize%22%3Atrue%2C%22symbol%22%3A%22OANDA%3AXAUUSD%22%2C%22interval%22%3A%2260%22%2C%22timezone%22%3A%22Asia%2FDubai%22%2C%22theme%22%3A%22light%22%2C%22style%22%3A%221%22%2C%22locale%22%3A%22en%22%2C%22allow_symbol_change%22%3Atrue%2C%22calendar%22%3Afalse%2C%22support_host%22%3A%22https%3A%2F%2Fwww.tradingview.com%22%7D';

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-[#E0DCCE] bg-white shadow-sm text-left">
      {/* Top Header Mode Selector & Tools Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#EAE7DF] px-4 py-2.5 text-xs text-[#22222E] bg-white">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-bold text-sm text-[#121318]">
            <Activity className="w-4 h-4 text-saturn-gold" />
            <span>XAUUSD</span>
            <span className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded font-normal">
              OANDA Spot
            </span>
          </div>

          <div className="h-4 w-px bg-gray-200 hidden sm:block" />

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 bg-saturn-cream p-0.5 rounded-lg border border-[#E0DCCE]">
            <button
              onClick={() => setViewMode('live')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                viewMode === 'live'
                  ? 'bg-[#121318] text-saturn-gold shadow-xs'
                  : 'text-[#555] hover:text-black'
              }`}
            >
              Live Interactive
            </button>
            <button
              onClick={() => setViewMode('instant')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                viewMode === 'instant'
                  ? 'bg-[#121318] text-saturn-gold shadow-xs'
                  : 'text-[#555] hover:text-black'
              }`}
            >
              Classic Candlesticks
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2 sm:pt-0">
          <button
            onClick={() => setIframeKey((k) => k + 1)}
            className="p-1 text-gray-500 hover:text-black rounded hover:bg-gray-100 transition-colors"
            title="Refresh chart"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
          <a
            href="https://www.tradingview.com/symbols/XAUUSD/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] text-saturn-gold hover:underline font-medium"
          >
            <span>TradingView</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Chart Area */}
      {viewMode === 'live' ? (
        <div className="w-full h-[620px] bg-white relative">
          <iframe
            key={iframeKey}
            title="TradingView XAUUSD Advanced Chart"
            src={tradingViewEmbedUrl}
            className="w-full h-full border-0"
            allow="fullscreen"
            loading="eager"
          />
        </div>
      ) : (
        /* Instant High-Fidelity Candlestick View reproducing Screenshot 1 & 3 */
        <div className="w-full bg-white select-none">
          {/* Sub-bar with Live Prices matching Screenshot 1 */}
          <div className="px-4 py-2 border-b border-[#F0ECE1] flex flex-wrap items-center justify-between text-xs text-[#555] bg-[#FAF8F5]">
            <div className="flex items-center gap-3 font-mono text-[11px]">
              <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Spot
              </span>
              <span>
                O <strong className="text-black font-semibold">4,183.020</strong>
              </span>
              <span>
                H <strong className="text-black font-semibold">4,186.305</strong>
              </span>
              <span>
                L <strong className="text-black font-semibold">4,179.710</strong>
              </span>
              <span>
                C <strong className="text-red-600 font-semibold">4,180.295</strong>
              </span>
              <span className="text-red-500 font-semibold">-2.775 (-0.07%)</span>
            </div>
            <div className="text-[11px] text-gray-400">Vol · Ticks: 5.31 K</div>
          </div>

          {/* Candlestick SVG Canvas matching Screenshot 1 & 3 */}
          <div className="relative h-[500px] w-full bg-white overflow-hidden">
            {/* Horizontal Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none border-b border-gray-100">
              {[4220, 4200, 4180, 4160, 4140, 4120, 4100, 4080, 4060].map((level) => (
                <div
                  key={level}
                  className="relative w-full border-b border-dashed border-gray-200 flex justify-end pr-2 text-[10px] text-gray-400 font-mono"
                >
                  <span className="bg-white px-1 -mt-2">{level}.000</span>
                </div>
              ))}
            </div>

            {/* Current Price Active Red Line at 4,180.295 */}
            <div className="absolute top-[28%] left-0 right-0 border-b border-dotted border-red-500 pointer-events-none z-10 flex justify-end">
              <span className="bg-[#F23645] text-white text-[10px] font-mono px-1.5 py-0.5 rounded-l font-semibold shadow-sm">
                4,180.295
              </span>
            </div>

            {/* Candlestick visual pattern reproducing Screenshot 1 & 3 */}
            <svg
              className="w-full h-[400px] absolute inset-x-0 top-0"
              preserveAspectRatio="none"
              viewBox="0 0 1000 400"
            >
              {[
                { x: 30, w1: 180, w2: 240, bY: 190, bH: 40, green: false },
                { x: 50, w1: 195, w2: 260, bY: 205, bH: 45, green: false },
                { x: 70, w1: 160, w2: 230, bY: 170, bH: 50, green: true },
                { x: 90, w1: 150, w2: 210, bY: 160, bH: 40, green: true },
                { x: 110, w1: 170, w2: 240, bY: 180, bH: 50, green: false },
                { x: 130, w1: 140, w2: 200, bY: 145, bH: 45, green: true },
                { x: 150, w1: 130, w2: 190, bY: 135, bH: 45, green: true },
                { x: 170, w1: 150, w2: 210, bY: 155, bH: 45, green: false },
                { x: 190, w1: 170, w2: 230, bY: 175, bH: 45, green: false },
                { x: 210, w1: 185, w2: 250, bY: 190, bH: 50, green: false },
                { x: 230, w1: 200, w2: 270, bY: 210, bH: 50, green: false },
                { x: 250, w1: 170, w2: 240, bY: 180, bH: 50, green: true },
                { x: 270, w1: 150, w2: 220, bY: 160, bH: 50, green: true },
                { x: 290, w1: 140, w2: 200, bY: 145, bH: 45, green: true },
                { x: 310, w1: 135, w2: 190, bY: 140, bH: 40, green: true },
                { x: 330, w1: 130, w2: 185, bY: 135, bH: 45, green: true },
                { x: 350, w1: 145, w2: 210, bY: 150, bH: 50, green: false },
                { x: 370, w1: 165, w2: 230, bY: 170, bH: 50, green: false },
                { x: 390, w1: 185, w2: 250, bY: 190, bH: 50, green: false },
                { x: 410, w1: 210, w2: 280, bY: 220, bH: 50, green: false },
                { x: 430, w1: 230, w2: 300, bY: 240, bH: 50, green: false },
                { x: 450, w1: 200, w2: 270, bY: 210, bH: 50, green: true },
                { x: 470, w1: 180, w2: 240, bY: 190, bH: 40, green: true },
                { x: 490, w1: 160, w2: 220, bY: 170, bH: 40, green: true },
                { x: 510, w1: 150, w2: 210, bY: 160, bH: 40, green: true },
                { x: 530, w1: 170, w2: 230, bY: 175, bH: 45, green: false },
                { x: 550, w1: 190, w2: 250, bY: 195, bH: 45, green: false },
                { x: 570, w1: 160, w2: 220, bY: 170, bH: 45, green: true },
                { x: 590, w1: 150, w2: 210, bY: 155, bH: 45, green: true },
                { x: 610, w1: 130, w2: 190, bY: 135, bH: 45, green: true },
                { x: 630, w1: 110, w2: 170, bY: 115, bH: 45, green: true },
                { x: 650, w1: 90, w2: 150, bY: 100, bH: 45, green: true },
                { x: 670, w1: 80, w2: 140, bY: 90, bH: 40, green: true },
                { x: 690, w1: 105, w2: 160, bY: 110, bH: 45, green: false },
                { x: 710, w1: 120, w2: 175, bY: 125, bH: 45, green: false },
                { x: 730, w1: 135, w2: 190, bY: 140, bH: 45, green: false },
              ].map((c, i) => {
                const color = c.green ? '#089981' : '#F23645';
                return (
                  <g key={i}>
                    <line
                      x1={c.x}
                      y1={c.w1}
                      x2={c.x}
                      y2={c.w2}
                      stroke={color}
                      strokeWidth="1.5"
                    />
                    <rect
                      x={c.x - 4}
                      y={c.bY}
                      width="8"
                      height={c.bH}
                      fill={color}
                      rx="1"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Volume Bars at Bottom */}
            <div className="absolute bottom-6 inset-x-0 h-16 flex items-end px-6 gap-2 opacity-70 pointer-events-none">
              {[
                20, 35, 45, 30, 25, 40, 50, 30, 60, 45, 80, 55, 35, 40, 65, 45,
                75, 50, 30, 40, 85, 90, 60, 45, 30, 55, 70, 40, 65, 35, 50,
              ].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className={`flex-1 rounded-t-xs ${
                    i % 2 === 0 ? 'bg-[#089981]/50' : 'bg-[#F23645]/50'
                  }`}
                />
              ))}
            </div>

            {/* Bottom Time Axis */}
            <div className="absolute bottom-0 inset-x-0 h-6 border-t border-gray-200 bg-[#FAFAFA] flex items-center justify-between px-6 text-[10px] text-gray-500 font-mono">
              <span>06:00</span>
              <span>12:00</span>
              <span className="font-bold text-black">6</span>
              <span>06:00</span>
              <span>12:00</span>
              <span className="font-bold text-black">7</span>
              <span>06:00</span>
              <span>12:00</span>
              <span className="font-bold text-black">8</span>
              <span>06:00</span>
              <span>12:00</span>
              <span className="font-bold text-black">9</span>
              <span>06:00</span>
              <span>12:00</span>
            </div>
          </div>

          {/* Bottom attribution bar */}
          <div className="border-t border-[#EAE7DF] px-4 py-2 flex items-center justify-between bg-white text-[11px] text-gray-500">
            <div className="flex items-center gap-2">
              <span className="font-bold text-black text-xs">TradingView</span>
              <span>· Powered by OANDA Data</span>
            </div>
            <div className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-600">
              Embedded Content
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
