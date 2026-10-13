import { useNavigate } from '@tanstack/react-router';
import { FAQSection } from '@/features/home/FAQSection';
import { ContactBanner } from '@/features/home/ContactBanner';

export function FAQRoutePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-0">
      <FAQSection />
      <ContactBanner onOpenContactForm={() => navigate({ to: '/contactus' })} />
    </div>
  );
}
