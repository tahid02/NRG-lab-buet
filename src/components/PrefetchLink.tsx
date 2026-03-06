import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

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

interface PrefetchLinkProps extends LinkProps {
  children: React.ReactNode;
  prefetch?: boolean;
  prefetchOnHover?: boolean;
  prefetchOnTouch?: boolean;
}

/**
 * PrefetchLink - A Link component with intelligent prefetching
 * 
 * @param prefetch - Enable/disable prefetching (default: true)
 * @param prefetchOnHover - Prefetch on hover (default: true for desktop)
 * @param prefetchOnTouch - Prefetch on touch (default: true for mobile)
 * 
 * @example
 * <PrefetchLink to="/research" className="...">
 *   Learn More
 * </PrefetchLink>
 * 
 * @example
 * <PrefetchLink 
 *   to="/about-us" 
 *   prefetch={false}
 *   className="..."
 * >
 *   About Us (no prefetch)
 * </PrefetchLink>
 */
export default function PrefetchLink({
  children,
  prefetch = true,
  prefetchOnHover = true,
  prefetchOnTouch = true,
  to,
  ...props
}: PrefetchLinkProps) {
  const routeName = getRouteName(to as string);

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

  return (
    <RouterLink
      to={to}
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleTouchStart}
      {...props}
    >
      {children}
    </RouterLink>
  );
}
