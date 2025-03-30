import { isClient } from '@/lib/utils';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

const useLanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useMemo(
    () => (isClient() ? window.location.search : ''),
    [],
  );

  const language = locale === 'en' ? 'عربي' : 'English';
  const queryString = searchParams ? searchParams : '';

  const localizedPathname = pathname.startsWith('/ar')
    ? pathname.replace('/ar', '/en')
    : pathname.replace('/en', '/ar');

  return {
    href: localizedPathname + queryString,
    language,
  };
};

export default useLanguageSwitcher;
