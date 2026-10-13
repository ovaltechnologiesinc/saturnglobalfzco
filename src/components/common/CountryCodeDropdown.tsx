import { useState, useRef, useEffect, useMemo } from 'react';
import { Globe, ChevronDown, Search, X, Check } from 'lucide-react';
import { ALL_COUNTRIES, POPULAR_COUNTRIES, CountryCode } from '@/data/countryCodes';

export interface CountryCodeDropdownProps {
  selected: CountryCode;
  onSelect: (country: CountryCode) => void;
  variant?: 'light' | 'dark' | 'gold';
}

export function CountryCodeDropdown({
  selected,
  onSelect,
  variant = 'dark',
}: CountryCodeDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      setSearchQuery('');
    }
  }, [isOpen]);

  // Click outside listener
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Escape key listener
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Filter countries based on search
  const filteredCountries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return ALL_COUNTRIES;
    return ALL_COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.dialCode.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const triggerStyles =
    variant === 'gold'
      ? 'text-saturn-obsidian hover:text-black hover:bg-black/10'
      : 'text-white/90 hover:text-white hover:bg-white/10';

  const globeIconClass =
    variant === 'gold'
      ? 'text-saturn-obsidian'
      : 'text-saturn-gold';

  const chevronIconClass =
    variant === 'gold'
      ? 'text-saturn-obsidian'
      : 'text-white/70';

  const panelStyles =
    variant === 'gold'
      ? 'bg-saturn-obsidian text-white border-2 border-saturn-gold shadow-[0_25px_60px_rgba(0,0,0,0.65)] ring-1 ring-black/40'
      : 'bg-[#14151D] text-white border-2 border-saturn-gold/60 shadow-[0_25px_60px_rgba(0,0,0,0.65)] ring-1 ring-black/40';

  return (
    <div className={`relative inline-block text-left ${isOpen ? 'z-50' : 'z-10'}`} ref={dropdownRef}>
      {/* Trigger Button: Globe + Flag + Dial Code + Chevron */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 py-1 px-2 -ml-2 rounded-lg transition-colors cursor-pointer select-none focus:outline-none ${triggerStyles}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select Country Code"
      >
        <Globe className={`w-4 h-4 ${globeIconClass} shrink-0 stroke-[2]`} />
        <span className="text-base leading-none" role="img" aria-label={selected.name}>
          {selected.flag}
        </span>
        <span className="text-sm font-medium tracking-tight">
          {selected.dialCode}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 ${chevronIconClass} transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Popover Menu with Search Bar and List: Displayed downwards */}
      {isOpen && (
        <div
          className={`absolute left-0 top-full mt-2.5 w-72 sm:w-80 rounded-2xl p-3 z-50 animate-in fade-in zoom-in-95 duration-150 ${panelStyles}`}
          style={{ maxHeight: '380px' }}
        >
          {/* Search Bar matching Danat Dubai functionality */}
          <div className="relative mb-2.5">
            <Search className="w-4 h-4 text-saturn-gold absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search country or code..."
              className="w-full bg-[#181920] text-white placeholder-white/40 text-xs sm:text-sm pl-9 pr-8 py-2 rounded-xl border border-white/20 focus:outline-none focus:border-saturn-gold focus:ring-1 focus:ring-saturn-gold transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-0.5 rounded-full hover:bg-white/10"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Select Popular Countries (shown when not searching) */}
          {!searchQuery && (
            <div className="mb-2 pb-2 border-b border-white/10">
              <div className="text-[10px] uppercase tracking-wider text-saturn-gold font-bold px-2 py-1">
                Frequently Traded
              </div>
              <div className="flex flex-wrap gap-1 px-1">
                {POPULAR_COUNTRIES.slice(0, 5).map((pop) => (
                  <button
                    key={pop.code}
                    type="button"
                    onClick={() => {
                      onSelect(pop);
                      setIsOpen(false);
                    }}
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition-colors ${
                      selected.code === pop.code
                        ? 'bg-saturn-gold text-saturn-obsidian'
                        : 'bg-white/10 text-white/90 hover:bg-white/20'
                    }`}
                  >
                    <span>{pop.flag}</span>
                    <span>{pop.dialCode}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Scrollable Country List */}
          <div
            className="overflow-y-auto pr-1 space-y-0.5 scrollbar-thin scrollbar-thumb-white/20"
            style={{ maxHeight: searchQuery ? '280px' : '200px' }}
            role="listbox"
          >
            {filteredCountries.length === 0 ? (
              <div className="text-center py-6 text-xs text-white/60">
                No matching countries found
              </div>
            ) : (
              filteredCountries.map((country) => {
                const isSelected = selected.code === country.code;
                return (
                  <button
                    key={`${country.code}-${country.dialCode}`}
                    type="button"
                    onClick={() => {
                      onSelect(country);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left text-xs sm:text-sm transition-colors ${
                      isSelected
                        ? 'bg-saturn-gold/20 text-saturn-gold font-semibold'
                        : 'text-white/85 hover:bg-white/10 hover:text-white'
                    }`}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <div className="flex items-center gap-2 truncate pr-2">
                      <span className="text-base shrink-0" role="img" aria-label={country.name}>
                        {country.flag}
                      </span>
                      <span className="truncate">{country.name}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-saturn-gold font-mono">
                        {country.dialCode}
                      </span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-saturn-gold" />}
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
