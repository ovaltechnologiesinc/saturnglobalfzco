import { useNavigate } from '@tanstack/react-router';
import { MiningPage } from '@/features/mining/MiningPage';
import { ContactBanner } from '@/features/home/ContactBanner';

export function MiningRoutePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-0">
      <MiningPage onPartnerInquiry={() => navigate({ to: '/contactus' })} />
      <ContactBanner onOpenContactForm={() => navigate({ to: '/contactus' })} />
    </div>
  );
}
