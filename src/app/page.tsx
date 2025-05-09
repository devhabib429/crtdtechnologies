import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/ui/Hero';
import StrugglingSection from '@/components/ui/StrugglingSection';
import WhoWeAreSection from '@/components/ui/WhoWeAreSection';
import WhyChooseSection from '@/components/ui/WhyChooseSection';
import AwardsRecognitionSection from '@/components/ui/AwardsRecognitionSection';
import HowItWorksSection from '@/components/ui/HowItWorksSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#f7faff] flex flex-col">
      <Navbar />
      <div className="pt-16 flex-1">
        <Hero />
        <StrugglingSection />
        <WhoWeAreSection />
        <WhyChooseSection />
        <AwardsRecognitionSection />
        <HowItWorksSection />
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
}
