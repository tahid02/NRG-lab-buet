import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/nrg/Navbar.tsx';
import Footer from '@/components/nrg/Footer.tsx';
import Home from '@/pages/Home';
import Research from '@/pages/Research';
import AboutUs from '@/pages/AboutUs';
import Publications from '@/pages/Publications';
import News from '@/pages/News';
import Join from '@/pages/Join';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/news" element={<News />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
        <Sonner />
      </div>
    </Router>
  );
}

export default App;
