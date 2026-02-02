import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '@/components/nrg/HeroSection.tsx';
import MissionSection from '@/components/nrg/MissionSection.tsx';
import ResearchZigZag from '@/components/nrg/ResearchZigZag.tsx';
import NewsSection from '@/components/nrg/NewsSection.tsx';

export default function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <HeroSection />
      <MissionSection />
      <ResearchZigZag />
      <NewsSection />
    </div>
  );
}
