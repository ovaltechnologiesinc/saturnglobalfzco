import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
  dark?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12 sm:mb-16 space-y-4',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <div>
          <Badge variant={dark ? 'gold' : 'dark'} size="sm">
            {eyebrow}
          </Badge>
        </div>
      )}
      <h2 className={cn('saturn-h2', dark ? 'text-white' : 'text-saturn-ink')}>
        {title}
      </h2>
      {description && (
        <p className={cn(dark ? 'saturn-lead-dark' : 'saturn-lead')}>
          {description}
        </p>
      )}
    </div>
  );
}
