import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createPageUrl(pageName: string): string {
  const map: Record<string, string> = {
    Home: '/',
    Research: '/research',
    'About Us': '/about-us',
    Publications: '/publications',
    News: '/news',
    Gallery: '/gallery',
    Facilities: '/facilities',
  };

  return map[pageName] || `/${pageName.toLowerCase()}`;
}
