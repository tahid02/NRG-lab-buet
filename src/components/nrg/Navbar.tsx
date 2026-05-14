import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type NavLink = {
  name: string;
  path: string;
};

type NavItem =
  | { type: 'link'; name: string; path: string }
  | { type: 'dropdown'; name: string; items: NavLink[] };

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setMobileDropdownOpen(null);
    window.scrollTo(0, 0);
  }, [location]);

  // Prefetch function for lazy-loaded routes
  const prefetchRoute = useMemo(() => {
    const prefetchers: Record<string, () => void> = {
      'Research': () => import('@/pages/Research'),
      'About Us': () => import('@/pages/AboutUs'),
      'Publications': () => import('@/pages/Publications'),
      'News': () => import('@/pages/News'),
      'Gallery': () => import('@/pages/Gallery'),
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

  const navItems: NavItem[] = [
    { type: 'link', name: 'Research', path: 'Research' },
    { type: 'link', name: 'About Us', path: 'About Us' },
    { type: 'link', name: 'Publications', path: 'Publications' },
    {
      type: 'dropdown',
      name: 'Media',
      items: [
        { name: 'News', path: 'News' },
        { name: 'Gallery', path: 'Gallery' },
      ],
    },
    { type: 'link', name: 'Facilities', path: 'Facilities' },
  ];

  const isActive = (path: string) => {
    return location.pathname === createPageUrl(path);
  };

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdownOpen((prev) => (prev === name ? null : name));
  };

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
            {navItems.map((item) => {
              if (item.type === 'dropdown') {
                const anyActive = item.items.some((sub) => isActive(sub.path));
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`text-sm font-medium transition-all relative group inline-flex items-center gap-1 outline-none ${
                          anyActive ? 'text-[#00897b]' : 'text-gray-700 hover:text-[#00897b]'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="w-3.5 h-3.5 transition-transform group-data-[state=open]:rotate-180" />
                        <span
                          className={`absolute -bottom-1 left-0 h-0.5 bg-[#00897b] transition-all ${
                            anyActive ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                        />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="min-w-[10rem]">
                      {item.items.map((sub) => (
                        <DropdownMenuItem key={sub.name} asChild>
                          <Link
                            to={createPageUrl(sub.path)}
                            onMouseEnter={() => handleMouseEnter(sub.path)}
                            className={`cursor-pointer text-sm font-medium ${
                              isActive(sub.path)
                                ? 'text-[#00897b] bg-[#00897b]/5'
                                : 'text-gray-700'
                            }`}
                          >
                            {sub.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={createPageUrl(item.path)}
                  onMouseEnter={() => handleMouseEnter(item.path)}
                  className={`text-sm font-medium transition-all relative group ${
                    isActive(item.path)
                      ? 'text-[#00897b]'
                      : 'text-gray-700 hover:text-[#00897b]'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#00897b] transition-all ${
                      isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
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
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-2">
              {navItems.map((item, index) => {
                if (item.type === 'dropdown') {
                  const isDropdownOpen = mobileDropdownOpen === item.name;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className="flex items-center justify-between w-full py-3 text-lg font-medium text-gray-800 hover:text-[#00897b] transition-colors border-b border-gray-100"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            isDropdownOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            {item.items.map((sub) => (
                              <Link
                                key={sub.name}
                                to={createPageUrl(sub.path)}
                                onTouchStart={() => handleMouseEnter(sub.path)}
                                className={`block py-2 text-base font-medium transition-colors ${
                                  isActive(sub.path)
                                    ? 'text-[#00897b]'
                                    : 'text-gray-600 hover:text-[#00897b]'
                                }`}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={createPageUrl(item.path)}
                      onTouchStart={() => handleMouseEnter(item.path)}
                      className={`block py-3 text-lg font-medium transition-colors border-b border-gray-100 ${
                        isActive(item.path)
                          ? 'text-[#00897b]'
                          : 'text-gray-800 hover:text-[#00897b]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
