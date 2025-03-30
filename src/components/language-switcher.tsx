'use client';
import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import React, { FC, useMemo } from 'react';
import { isClient } from '@/lib/utils';
type Props = Omit<React.ComponentProps<typeof Link>, 'href' | 'locale'>;
const LanguageSwitcher: FC<Props> = ({ className, children, ...props }) => {
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useMemo(
    () => (isClient() ? window.location.search.toString() : ''),
    [],
  );

  return (
    <Link
      href={pathname + searchParams}
      locale={locale === 'en' ? 'ar' : 'en'}
      className={className}
      {...props}
    >
      {children || `${locale === 'en' ? 'Ar' : 'En'}`}
    </Link>
  );
};

export default LanguageSwitcher;
