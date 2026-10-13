import { useNavigate } from '@tanstack/react-router';
import { ServicesPage } from '@/features/services/ServicesPage';
import { ContactBanner } from '@/features/home/ContactBanner';

export function ServicesRoutePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-0">
      <ServicesPage onInquire={() => navigate({ to: '/contactus' })} />
      <ContactBanner onOpenContactForm={() => navigate({ to: '/contactus' })} />
    </div>
  );
}
