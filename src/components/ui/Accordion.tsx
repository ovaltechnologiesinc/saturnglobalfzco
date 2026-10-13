import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AccordionItemData {
  id: string;
  title: string;
  content: string | React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string;
  className?: string;
}

export function Accordion({ items, defaultOpenId, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={cn(
              'rounded-xl border transition-all duration-200 overflow-hidden',
              isOpen
                ? 'bg-[#FBF9F4] border-[#B89047]/50 shadow-sm'
                : 'bg-white border-[#EAE7DF] hover:border-[#DDD8CC]'
            )}
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-[#1C1D21] select-none"
              aria-expanded={isOpen}
            >
              <span className="pr-4">{item.title}</span>
              <div
                className={cn(
                  'rounded-full p-1.5 transition-transform duration-300 text-[#B89047]',
                  isOpen ? 'rotate-180 bg-[#B89047]/15' : 'bg-black/[0.04]'
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-sm text-[#555558] leading-relaxed border-t border-[#EAE7DF]/60 animate-in fade-in duration-200">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
