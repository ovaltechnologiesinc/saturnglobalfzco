import {
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import { RootLayout } from "./routes/__root";
import { HomePage } from "./routes/index";
import { AboutRoutePage } from "./routes/about";
import { ServicesRoutePage } from "./routes/services";
import { MarketsRoutePage } from "./routes/markets";
import { MiningRoutePage } from "./routes/mining";
/* cspell:ignore marketdata contactus */
import { MarketDataRoutePage } from "./routes/marketdata";
import { FAQRoutePage } from "./routes/faq";
import { ContactUsRoutePage } from "./routes/contact";

// 1. Root Route with graceful fallback
export const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: () => (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-saturn-cream text-center">
      <span className="bg-[#2D2E30] text-white uppercase font-bold tracking-widest text-[11px] px-3.5 py-1.5 rounded-sm inline-block mb-4">
        PAGE NOT FOUND
      </span>
      <h1 className="text-3xl sm:text-4xl font-normal text-[#121318] mb-3 font-heading">
        Page Not Found
      </h1>
      <p className="text-base text-[#4A4B59] mb-6 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        className="bg-[#121318] hover:bg-[#1E1F28] text-white hover:text-saturn-gold border border-saturn-gold/40 hover:border-saturn-gold px-8 py-3 rounded-full text-sm font-medium transition-colors"
      >
        Return to Home
      </a>
    </div>
  ),
});

// 2. Individual Route Definitions mapped to Section components
export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutRoutePage,
});

export const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesRoutePage,
});

export const marketsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/markets",
  component: MarketsRoutePage,
});

export const miningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/mining",
  component: MiningRoutePage,
});

// Both /marketdata and /market-data supported
export const marketDataRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/marketdata",
  component: MarketDataRoutePage,
});

export const marketDataHyphenRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/market-data",
  component: MarketDataRoutePage,
});

export const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faq",
  component: FAQRoutePage,
});

// Both /contactus and /contact supported
export const contactUsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contactus",
  component: ContactUsRoutePage,
});

export const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactUsRoutePage,
});

// 3. Complete Route Tree
export const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  servicesRoute,
  marketsRoute,
  miningRoute,
  marketDataRoute,
  marketDataHyphenRoute,
  faqRoute,
  contactUsRoute,
  contactRoute,
]);
