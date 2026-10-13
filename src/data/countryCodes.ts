import { allCountries, RawCountry } from 'country-telephone-data';

export interface CountryCode {
  name: string;
  dialCode: string;
  code: string;
  flag: string;
}

/**
 * Derives the national flag emoji dynamically from any standard ISO-3166-1 alpha-2 code
 */
export function getFlagEmoji(iso2: string): string {
  if (!iso2 || iso2.length !== 2) return '🌐';
  const codePoints = iso2
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

// Clean country display names (e.g. "Afghanistan (‫افغانستان‬‎)" -> "Afghanistan")
function cleanCountryName(name: string): string {
  const clean = name.split('(')[0].trim();
  return clean || name;
}

/**
 * Complete list of all 250 world countries & territories
 * sourced directly from the standardized npm package 'country-telephone-data'
 */
export const ALL_COUNTRIES: CountryCode[] = allCountries
  .map((c: RawCountry) => ({
    name: cleanCountryName(c.name),
    dialCode: `+${c.dialCode}`,
    code: c.iso2.toUpperCase(),
    flag: getFlagEmoji(c.iso2),
  }))
  // Deduplicate by ISO code if country has multiple area codes
  .filter((country, index, self) =>
    index === self.findIndex((t) => t.code === country.code)
  )
  .sort((a, b) => a.name.localeCompare(b.name));

/**
 * Frequently traded countries for fast 1-click select in Dubai precious metals desk
 */
const POPULAR_ISO_CODES = [
  'AE', // UAE
  'SA', // Saudi Arabia
  'GB', // United Kingdom
  'US', // United States
  'CH', // Switzerland
  'IN', // India
  'TR', // Turkey
  'QA', // Qatar
  'KW', // Kuwait
  'OM', // Oman
  'EG', // Egypt
  'GH', // Ghana
  'ZA', // South Africa
];

export const POPULAR_COUNTRIES: CountryCode[] = POPULAR_ISO_CODES
  .map((code) => ALL_COUNTRIES.find((c) => c.code === code))
  .filter((c): c is CountryCode => Boolean(c));
