import { useNavigate } from '@tanstack/react-router';
import { HeroSection } from '@/features/home/HeroSection';
import { ServicesOverview } from '@/features/home/ServicesOverview';
import { AboutStory } from '@/features/home/AboutStory';
import { ApproachSection } from '@/features/home/ApproachSection';
import { WhyChooseUs } from '@/features/home/WhyChooseUs';
import { FAQSection } from '@/features/home/FAQSection';
import { ContactBanner } from '@/features/home/ContactBanner';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-0">
      <HeroSection
        onExploreServices={() => navigate({ to: '/about' })}
        onViewPrices={() => navigate({ to: '/marketdata' })}
        onContactUs={() => navigate({ to: '/contactus' })}
      />
      <ServicesOverview onContactForService={() => navigate({ to: '/services' })} />
      <AboutStory />
      <ApproachSection />
      <WhyChooseUs />
      <FAQSection />
      <ContactBanner onOpenContactForm={() => navigate({ to: '/contactus' })} />
    </div>
  );
}
