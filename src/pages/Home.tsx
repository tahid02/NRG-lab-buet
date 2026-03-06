import React, { useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';

// Load HeroSection immediately (above the fold)
import HeroSection from '@/components/nrg/HeroSection.tsx';

// Lazy load sections below the fold for better performance
const MissionSection = lazy(() => import('@/components/nrg/MissionSection.tsx').then(module => ({ default: module.default })));
const ResearchZigZag = lazy(() => import('@/components/nrg/ResearchZigZag.tsx').then(module => ({ default: module.default })));
const NewsSection = lazy(() => import('@/components/nrg/NewsSection.tsx').then(module => ({ default: module.default })));

// Loading fallback for lazy loaded sections
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#00897b]" />
  </div>
);

export default function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <HeroSection />
      <Suspense fallback={<SectionLoader />}>
        <MissionSection />
        <ResearchZigZag />
        <NewsSection />
      </Suspense>
    </div>
  );
}
