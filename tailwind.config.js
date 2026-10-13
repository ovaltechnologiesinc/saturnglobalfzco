/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Direct named tokens for rapid global theme adjustments
        "saturn-gold": "#C5A059",
        "saturn-obsidian": "#0E0F14",
        "saturn-cream": "#F4F0E6",
        "saturn-gold-light": "#E2C37E",
        "saturn-gold-bright": "#FFE8A3",
        "saturn-gold-dark": "#9C782E",
        "saturn-gold-hover": "#B89047",
        "saturn-surface": "#121318",
        "saturn-surface-dark": "#161720",
        "saturn-footer": "#0A0B0E",
        "saturn-sand": "#EFE9DC",
        "saturn-ink": "#14151A",
        saturn: {
          cream: "#F4F0E6", // Signature warm desert cream background
          sand: "#EFE9DC", // Intermediate warm sand section tone
          obsidian: "#0E0F14", // Deep luxury obsidian noir background
          surface: "#121318", // Premium dark card/panel surface
          "surface-dark": "#161720", // Elevated dark card surface
          footer: "#0A0B0E", // Ultra-deep footer obsidian
          gold: "#C5A059", // Signature brushed gold
          "gold-hover": "#B89047", // Deep gold hover state
          "gold-light": "#E2C37E", // Radiant warm gold accent
          "gold-subtle": "#FFE8A3", // Soft golden highlight
          ink: "#14151A", // Obsidian text color on cream
          muted: "#4A4B59", // Body paragraph text on cream
          "muted-dark": "#A19D94", // Subtitle text on dark surfaces
        },
        gold: {
          400: "#E2C37E",
          500: "#C5A059",
          600: "#B89047",
        },
      },
      fontFamily: {
        sans: [
          '"Jost"',
          '"JostRegular"',
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "Segoe UI",
          "sans-serif",
        ],
        heading: ['"Jost"', '"JostLight"', 'sans-serif'],
        serif: ['"Jost"', '"JostLight"', 'sans-serif'],
      },
      fontWeight: {
        light: "300",
        normal: "450",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      borderRadius: {
        pill: "9999px",
        "tile-curved": "60px",
      },
      letterSpacing: {
        tighter: "-0.03em",
        tight: "-0.015em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.06em",
        widest: "0.14em",
      },
      lineHeight: {
        "heading-display": "1.18",
        "heading-section": "1.24",
        "heading-card": "1.3",
        "body-lead": "1.75",
      },
    },
  },
  plugins: [],
};
