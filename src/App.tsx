import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/nrg/Navbar';
import Footer from '@/components/nrg/Footer.tsx';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';

// Lazy load all routes for better performance
const Home = lazy(() => import('@/pages/Home').then(module => ({ default: module.default })));
const Research = lazy(() => import('@/pages/Research').then(module => ({ default: module.default })));
const AboutUs = lazy(() => import('@/pages/AboutUs').then(module => ({ default: module.default })));
const Publications = lazy(() => import('@/pages/Publications').then(module => ({ default: module.default })));
const News = lazy(() => import('@/pages/News').then(module => ({ default: module.default })));
const Facilities = lazy(() => import('@/pages/Facilities').then(module => ({ default: module.default })));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00897b]" />
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/research" element={<Research />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/news" element={<News />} />
              <Route path="/facilities" element={<Facilities />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <Toaster />
        <Sonner />
      </div>
    </Router>
  );
}

export default App;
