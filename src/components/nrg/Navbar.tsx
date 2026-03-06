import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Prefetch function for lazy-loaded routes
  const prefetchRoute = useMemo(() => {
    const prefetchers: Record<string, () => void> = {
      'Research': () => import('@/pages/Research'),
      'About Us': () => import('@/pages/AboutUs'),
      'Publications': () => import('@/pages/Publications'),
      'News': () => import('@/pages/News'),
      'Facilities': () => import('@/pages/Facilities'),
    };
    return prefetchers;
  }, []);

  const handleMouseEnter = (path: string) => {
    // Prefetch the route when hovering over the link
    if (prefetchRoute[path]) {
      prefetchRoute[path]();
    }
  };

  const navLinks = [
    { name: 'Research', path: 'Research' },
    { name: 'About Us', path: 'About Us' },
    { name: 'Publications', path: 'Publications' },
    { name: 'News', path: 'News' },
    { name: 'Facilities', path: 'Facilities' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg py-3 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to={createPageUrl('Home')}
            className="flex items-center gap-2 group"
          >
            <span
              className="text-2xl font-bold tracking-tight text-[#630e1d] transition-colors"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              NRG
            </span>
            <span className="text-sm font-medium text-gray-600">| BUET</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={createPageUrl(link.path)}
                onMouseEnter={() => handleMouseEnter(link.path)}
                className="text-sm font-medium text-gray-700 transition-all hover:text-[#00897b] relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00897b] transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#630e1d] hover:bg-[#fff5f5] rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={createPageUrl(link.path)}
                    onTouchStart={() => handleMouseEnter(link.path)}
                    className="block py-3 text-lg font-medium text-gray-800 hover:text-[#00897b] transition-colors border-b border-gray-100"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
