import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'outline' | 'ghost' | 'dark' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'gold',
      size = 'md',
      fullWidth = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#B89047]/40 disabled:opacity-50 disabled:pointer-events-none select-none';

    const variants = {
      gold: 'bg-gradient-to-r from-saturn-gold via-[#B89047] to-[#A47D35] text-white font-semibold hover:shadow-gold-subtle hover:brightness-105 rounded-full',
      outline:
        'border border-[#B89047]/60 text-[#8E6B2F] hover:bg-[#B89047]/10 hover:border-[#B89047] rounded-full',
      ghost:
        'text-[#555555] hover:text-[#111111] hover:bg-black/[0.04] rounded-full',
      dark: 'bg-[#1C1D21] text-white hover:bg-[#2D2E35] rounded-full shadow-sm',
      secondary:
        'bg-[#F4F2EC] text-[#222222] hover:bg-[#EAE7DC] border border-[#E0DCCE] rounded-full',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-1.5 min-h-[32px] gap-1.5',
      md: 'text-sm px-5 py-2.5 min-h-[42px] gap-2',
      lg: 'text-base px-7 py-3.5 min-h-[50px] gap-2.5',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
