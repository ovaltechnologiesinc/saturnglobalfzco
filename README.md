# SATURN GLOBAL FZCO (ساترن غلوبال ش.م.ح) — Corporate Bullion, Mining & Gold Brokerage Web App

A modern, responsive React corporate web application built to represent the official brand identity of **SATURN GLOBAL FZCO** (`ساترن غلوبال ش.م.ح`), replicating the light corporate theme, luxury gold accents, layout symmetries, and sliding animations of the corporate gold brokerage template. Built in strict accordance with **[React.dev](https://react.dev/)** industry standards, Apple Human Interface Guidelines (clean symmetry, consistent margins, and balanced padding), and simple, primary-pupil readable English.

---

## 🏛 Corporate Brand Identity & Palette

Positioned strictly as a **Corporate Gold Brokerage & Mining Website**:

* **Brand Emblem**: 3D tilted gold bullion bar encircled by metallic golden Saturn planetary rings with diamond sparkle accents.
* **Arabic Typography**: `ساترن غلوبال ش.م.ح` in bold corporate Arabic typography.
* **English Typography**: `SATURN GLOBAL FZCO` in radiant metallic gold serif gradient font (`#FFEFA8` to `#996515`).
* **Signature Cream Canvas (`#F4F0E6`)**: The primary backdrop across all pages matching the corporate template.
* **Deep Navy (`#1D205E`)**: Primary color for headers, cards, footers, and contrasting blocks.
* **Vibrant Cyan (`#00A3C4`)**: Brand accent for CTAs, active highlights, and contact cards.
* **Sky Ice Blue (`#C0D7E8`)**: Transition band for partnerships and corporate approach.
* **Dark Contrast Badges (`#2D2E30` & `#DDD6C7`)**: Uppercase section badges across all pages.

---

## 🛠 Tech Stack

* **Framework**: [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
* **Routing**: [@tanstack/react-router](https://tanstack.com/router) with strict TypeScript types, route aliases, and fallback error boundaries
* **Animations**: [Framer Motion](https://www.framer.com/motion/) for fluid scroll-triggered sliding animations (`x: -50/50`, `y: 30/50`, spring physics)
* **Data Layer**: [@tanstack/react-query](https://tanstack.com/query)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

---

## 📁 Public Assets Organization

All public media files are strictly organized and optimized for fast loading with zero layout shift:

public/
├── fonts/
│   └── AbrilFatface-Regular.ttf      # Authentic Abril Fatface luxury serif font for all headers
├── videos/
│   ├── README.md                     # Video directory documentation
│   └── mining-open-pit-mine.mp4      # Local MP4 video placeholder / storage
├── images/                           # High-definition branded photography & vector assets
│   ├── saturn-branded-bullion.jpg    # 999.9 Fine Gold kilobars with engraved Saturn logo (16:9)
│   ├── saturn-real-bullion.webp      # Real poured gold bars and bullion stock from user (WebP)
│   ├── saturn-real-bullion.png       # Real poured gold bars and bullion stock (PNG)
│   ├── saturn-branded-vault.jpg      # High-security DMCC gold vault with circular steel door
│   ├── saturn-branded-refining.jpg   # Dubai gold refinery crucible casting molten liquid gold
│   ├── saturn-branded-shipping.jpg   # Emirates SkyCargo armored tarmac transport & bullion cases
│   ├── market-africa-map.svg         # African gold trading partners vector map
│   ├── market-middle-east-map.svg    # Middle East & Turkey gold trade map
│   ├── mining-nugget-chart.svg       # Raw gold nugget on financial chart
│   └── mining-stocks-screens.svg     # Stock trading screens circular badge
└── logos/
    ├── saturn-brand-logo.png         # Authentic brand logo: 3D bar + rings + Arabic + gold English
    ├── saturn-emblem.png             # Standalone 3D gold bar with Saturn planetary rings
    └── saturn-icon.svg               # Browser favicon & tab emblem with 3D bar & Saturn rings
```

---

## ✒️ Typography & Aesthetic Differentiation
* **Headings & Titles**: Styled with **Abril Fatface** (`AbrilFatface-Regular.ttf`), giving Saturn Global FZCO a distinctive, high-end editorial identity while preserving clean, accessible body sans-serif reading.
* **Sculpted Asymmetric Cards**: Unlike the plain identical rectangular cards of legacy websites, Saturn Global features unique architectural shapes:
  - Asymmetric corner curves (`rounded-tl-[64px] rounded-br-[64px]`)
  - Elevated central monument cards (`-translate-y-4` with glowing gold borders)
  - Arched showcase frames (`rounded-[48px]`, `rounded-t-[60px]`)
  - Ambient gold backlights and DMCC compliance badges

---

## 🎥 Where the Mining Video is Kept & How It Works

The video player is managed in [`src/features/mining/MiningPage.tsx`](file:///Users/vivaldifoodsltd/Desktop/ClientApp/src/features/mining/MiningPage.tsx).

It supports a **dual-source architecture**:
1. **Local File**: Checks `public/videos/mining-open-pit-mine.mp4`.
2. **Template CDN Stream**: Automatically streams the official 720p HD aerial open-pit quarry video:
   ```
   https://video.wixstatic.com/video/596625_5c2ac6dac42f4adda6fca220d557bb8a/720p/mp4/file.mp4
   ```
3. **Poster Fallback**: Falls back to `public/images/mining-open-pit-mine.svg` during buffering.
4. **Interactive Controls**: Includes an overlay Play/Pause circular button and Mute/Unmute audio toggle.

---

## 📱 Mobile Hamburger Menu

Built specifically for mobile screens:
* **Floating Header**: Sleek pill-shaped header with logo and hamburger toggle button.
* **Animated Full-Screen Drawer**: Spring-animated slide-down drawer with backdrop blur.
* **Top Bar**: SATURN GLOBAL FZCO brand logo and circular dark close button (`✕`).
* **Navigation Links**: Large typography links (`About`, `FAQ`, `Markets`, `Services`, `Mining`, `Market Data`) with active indicators.
* **Primary Action**: Full-width cyan **Contact Us** button.
* **Bottom Information Card**: Quick-dial phone (`+971 50 687 4646`), official email (`Saturnglobalfzco@gmail.com`), DMCC Business Centre office address, and social links.
* **Mobile UX**: Automatically locks background scrolling while open and scrolls to top on link selection.

---

## 🗺 Application Routes

| Route | Title | Key Features & Sections |
| :--- | :--- | :--- |
| `/` | **Home** | Hero Mosaic, Tailored Services Bands, About SATURN GLOBAL FZCO Story, Approach Box, Benefits Blocks, FAQ, Contact Banner |
| `/about` | **About Us** | All about SATURN GLOBAL FZCO narrative, Approach curved container, 3 Core Modern Pillars, Contact Banner |
| `/services` | **Services** | Alternating Rows (Brokerage, Bullion, Assaying) + Bottom Cards (Refining, Vaults, Deliveries) |
| `/markets` | **Markets** | SATURN GLOBAL FZCO Global Presence: African Market (cream with map) + Middle East Market (navy with trade map) |
| `/mining` | **Mining** | African Open-Pit Mine Video Player + 3 Colored Bands (Financing, Partnerships, Logistics) |
| `/marketdata` | **Market Data** | Ticker Strip, XAUUSD Quote Card, Live TradingView Advanced Candlestick Chart |
| `/contactus` | **Contact Us** | "Come Visit Us!" Navy Card with Underline Form + Head Office DMCC Jewellery & Gemplex 3 Map |
| `/faq` | **FAQ** | SATURN GLOBAL FZCO Question Accordion, Molten Gold Cascade Image, Contact Banner |

*Note: Aliases `/market-data` and `/contact` are also routed automatically.*

---

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open `http://localhost:3000` (or `http://localhost:3001` if port 3000 is occupied).

### Production Build
```bash
npm run build
```
Executes TypeScript checking (`tsc -b`) and Vite production bundling with vendor chunk splitting.

### Preview Production Build
```bash
npm run preview
```
