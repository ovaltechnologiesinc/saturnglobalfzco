import { useNavigate } from '@tanstack/react-router';
import { AboutStory } from '@/features/home/AboutStory';
import { ApproachSection } from '@/features/home/ApproachSection';
import { WhyChooseUs } from '@/features/home/WhyChooseUs';
import { ContactBanner } from '@/features/home/ContactBanner';

export function AboutRoutePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-0">
      <AboutStory />
      <ApproachSection />
      <WhyChooseUs />
      <ContactBanner onOpenContactForm={() => navigate({ to: '/contactus' })} />
    </div>
  );
}
