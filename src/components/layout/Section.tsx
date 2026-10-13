import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

export type SectionVariant = 'cream' | 'sand' | 'obsidian' | 'surface' | 'footer';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The background tone variant for the section
   * - 'cream': #F4F0E6 (Default warm desert cream background)
   * - 'sand': #EFE9DC (Intermediate warm sand tone)
   * - 'obsidian': #0E0F14 (Deep luxury noir background)
   * - 'surface': #121318 (Dark surface background)
   * - 'footer': #0A0B0E (Ultra-deep footer obsidian)
   */
  variant?: SectionVariant;
  /**
   * Width restriction of the internal Container
   */
  containerSize?: 'default' | 'narrow' | 'wide' | 'none';
  /**
   * Whether to wrap children in a responsive Container
   */
  hasContainer?: boolean;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

const variantStyles: Record<SectionVariant, string> = {
  cream: 'bg-saturn-cream text-saturn-ink border-b border-[#E8E3D7]',
  sand: 'bg-saturn-sand text-saturn-surface border-b border-[#E2D8C7]',
  obsidian: 'bg-saturn-obsidian text-white border-t border-saturn-gold/20',
  surface: 'bg-saturn-surface text-white',
  footer: 'bg-saturn-footer text-white border-t border-saturn-gold/20',
};

export function Section({
  variant = 'cream',
  containerSize = 'default',
  hasContainer = true,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  const content =
    hasContainer && containerSize !== 'none' ? (
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    ) : (
      children
    );

  return (
    <section
      className={cn('relative overflow-hidden transition-colors', variantStyles[variant], className)}
      {...props}
    >
      {content}
    </section>
  );
}
