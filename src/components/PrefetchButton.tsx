import React from 'react';
import { useNavigate } from 'react-router-dom';

// Prefetch function map for all routes (defined outside component to avoid recreation)
const prefetchRoute: Record<string, () => void> = {
  'Research': () => import('@/pages/Research'),
  'About Us': () => import('@/pages/AboutUs'),
  'Publications': () => import('@/pages/Publications'),
  'News': () => import('@/pages/News'),
  'Facilities': () => import('@/pages/Facilities'),
  'Home': () => import('@/pages/Home'),
};

// Extract route name from path
const getRouteName = (path: string): string => {
  const routeMap: Record<string, string> = {
    '/research': 'Research',
    '/about-us': 'About Us',
    '/publications': 'Publications',
    '/news': 'News',
    '/facilities': 'Facilities',
    '/': 'Home',
  };
  return routeMap[path] || '';
};

interface PrefetchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to: string;
  children: React.ReactNode;
  prefetch?: boolean;
  prefetchOnHover?: boolean;
  prefetchOnTouch?: boolean;
}

/**
 * PrefetchButton - A Button component with intelligent prefetching and navigation
 * 
 * @param to - The route path to navigate to
 * @param prefetch - Enable/disable prefetching (default: true)
 * @param prefetchOnHover - Prefetch on hover (default: true for desktop)
 * @param prefetchOnTouch - Prefetch on touch (default: true for mobile)
 * 
 * @example
 * <PrefetchButton 
 *   to="/research" 
 *   className="px-4 py-2 bg-blue-500 text-white rounded"
 * >
 *   Learn More
 * </PrefetchButton>
 * 
 * @example
 * <PrefetchButton 
 *   to="/about-us" 
 *   prefetch={false}
 *   className="..."
 * >
 *   About Us (no prefetch)
 * </PrefetchButton>
 */
export default function PrefetchButton({
  to,
  children,
  prefetch = true,
  prefetchOnHover = true,
  prefetchOnTouch = true,
  onClick,
  ...props
}: PrefetchButtonProps) {
  const navigate = useNavigate();
  const routeName = getRouteName(to);

  const handleMouseEnter = () => {
    if (prefetch && prefetchOnHover && routeName && prefetchRoute[routeName]) {
      prefetchRoute[routeName]();
    }
  };

  const handleTouchStart = () => {
    if (prefetch && prefetchOnTouch && routeName && prefetchRoute[routeName]) {
      prefetchRoute[routeName]();
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
    if (!e.defaultPrevented) {
      navigate(to);
    }
  };

  return (
    <button
      type="button"
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}
