'use client';
import { useLocale } from 'next-intl';
import { usePathname, useSearchParams } from 'next/navigation';

const useLanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const language = locale === 'en' ? 'عربي' : 'English';
  const queryString = searchParams.toString()
    ? '?' + searchParams.toString()
    : '';

  const localizedPathname = pathname.startsWith('/ar')
    ? pathname.replace('/ar', '/en')
    : pathname.replace('/en', '/ar');

  return {
    href: localizedPathname + queryString,
    language,
  };
};

export default useLanguageSwitcher;
