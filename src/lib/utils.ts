import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDirection = (language: string): 'rtl' | 'ltr' => {
  return language === 'ar' ? 'rtl' : 'ltr';
};

export function isClient() {
  return typeof window !== 'undefined';
}
