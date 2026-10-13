export type Currency = 'AED' | 'USD';

export type MetalType = 'gold' | 'silver' | 'platinum' | 'palladium';

export interface MetalPrice {
  id: string;
  name: string;
  purity: string;
  metal: MetalType;
  buyPriceAED: number;
  sellPriceAED: number;
  buyPriceUSD: number;
  sellPriceUSD: number;
  changePercent24h: number;
  lastUpdated: string;
}

export interface PriceHistoryPoint {
  time: string;
  priceAED: number;
  priceUSD: number;
}
