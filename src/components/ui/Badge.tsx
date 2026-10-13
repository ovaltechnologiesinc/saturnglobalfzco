import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'gold' | 'outline' | 'dark' | 'success';
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

export function Badge({
  className,
  variant = 'gold',
  size = 'md',
  children,
  ...props
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full tracking-wide select-none';

  const variants = {
    gold: 'bg-[#FAF5E8] text-[#8E6B2F] border border-[#B89047]/35',
    outline: 'border border-[#DDD8CC] text-[#555555] bg-white',
    dark: 'bg-[#1C1D21] text-white border border-transparent',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  };

  const sizes = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3 py-1 gap-1.5',
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </span>
  );
}
