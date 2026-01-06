import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createPageUrl(pageName: string): string {
  const map: Record<string, string> = {
    'Home': '/',
    'Research': '/research',
    'Team': '/team',
    'Publications': '/publications',
    'News': '/news',
    'Join': '/join',
    'Join Us': '/join'
  };

  return map[pageName] || `/${pageName.toLowerCase()}`;
}
