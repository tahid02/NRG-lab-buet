import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/nrg/Navbar.tsx';
import Footer from '@/components/nrg/Footer.tsx';
import HeroSection from '@/components/nrg/HeroSection.tsx';
import MissionSection from '@/components/nrg/MissionSection.tsx';
import ResearchZigZag from '@/components/nrg/ResearchZigZag.tsx';
import NewsSection from '@/components/nrg/NewsSection.tsx';
import ImpactSection from '@/components/nrg/ImpactSection.tsx';

export default function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <ResearchZigZag />
        <NewsSection />
        <ImpactSection />
      </main>
      <Footer />
    </div>
  );
}
