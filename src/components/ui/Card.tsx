import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'gold' | 'glass' | 'interactive';
  children: React.ReactNode;
}

export function Card({
  className,
  variant = 'default',
  children,
  ...props
}: CardProps) {
  const baseStyles = 'rounded-2xl transition-all duration-300';

  const variants = {
    default: 'bg-white border border-[#EAE7DF] shadow-corporate-card text-[#222326]',
    gold: 'bg-gradient-to-b from-[#FFFDF9] to-[#FBF8F0] border border-[#B89047]/30 shadow-corporate-card text-[#222326]',
    glass: 'bg-white/95 backdrop-blur-xl border border-[#EAE7DF] shadow-sm',
    interactive:
      'bg-white border border-[#EAE7DF] hover:border-[#B89047]/70 hover:shadow-corporate-hover hover:-translate-y-1 cursor-pointer transition-all duration-300',
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6 sm:p-7 pb-3', className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        'font-serif text-xl sm:text-2xl font-bold text-[#1C1D21] tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-sm text-[#66676B] mt-1.5 leading-relaxed', className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6 sm:p-7 pt-3', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6 sm:p-7 pt-0 flex items-center', className)} {...props}>
      {children}
    </div>
  );
}
