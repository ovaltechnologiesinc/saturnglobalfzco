import React from 'react';
import { cn } from '@/lib/utils';

export interface TabOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

export interface TabsProps {
  options: TabOption[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
  size?: 'sm' | 'md';
}

export function Tabs({
  options,
  activeId,
  onChange,
  className,
  size = 'md',
}: TabsProps) {
  return (
    <div
      className={cn(
        'inline-flex p-1 bg-[#F4F2EC] border border-[#DDD8CC] rounded-full select-none',
        className
      )}
      role="tablist"
    >
      {options.map((option) => {
        const isActive = activeId === option.id;
        return (
          <button
            key={option.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.id)}
            className={cn(
              'flex items-center gap-2 rounded-full font-medium transition-all duration-200',
              size === 'sm' ? 'px-3.5 py-1 text-xs' : 'px-5 py-2 text-sm',
              isActive
                ? 'bg-white text-[#1C1D21] font-bold shadow-sm border border-black/5'
                : 'text-[#66676B] hover:text-[#1C1D21] hover:bg-black/[0.03]'
            )}
          >
            {option.icon}
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
