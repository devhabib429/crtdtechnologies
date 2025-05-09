import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/ui/Hero';
import StrugglingSection from '@/components/ui/StrugglingSection';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#f7faff]">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <StrugglingSection />
      </div>
    </div>
  );
}
