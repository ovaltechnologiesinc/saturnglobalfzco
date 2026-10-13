import { useNavigate } from '@tanstack/react-router';
import { MarketsPage } from '@/features/markets/MarketsPage';
import { ContactBanner } from '@/features/home/ContactBanner';

export function MarketsRoutePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-0">
      <MarketsPage onContact={() => navigate({ to: '/contactus' })} />
      <ContactBanner onOpenContactForm={() => navigate({ to: '/contactus' })} />
    </div>
  );
}
