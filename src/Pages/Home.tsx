import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/nrg/Navbar';
import Footer from '@/components/nrg/Footer';
import HeroSection from '@/components/nrg/HeroSection';
import MissionSection from '@/components/nrg/MissionSection';
import ResearchZigZag from '@/components/nrg/ResearchZigZag';
import NewsSection from '@/components/nrg/NewsSection';
import ImpactSection from '@/components/nrg/ImpactSection';

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
