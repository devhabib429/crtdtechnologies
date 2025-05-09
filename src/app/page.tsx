import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/ui/Hero';
import StrugglingSection from '@/components/ui/StrugglingSection';
import WhoWeAreSection from '@/components/ui/WhoWeAreSection';
import WhyChooseSection from '@/components/ui/WhyChooseSection';
import AwardsRecognitionSection from '@/components/ui/AwardsRecognitionSection';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#f7faff]">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <StrugglingSection />
        <WhoWeAreSection />
        <WhyChooseSection />
        <AwardsRecognitionSection />
      </div>
    </div>
  );
}
