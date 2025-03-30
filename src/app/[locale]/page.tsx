'use client';
import { Link, usePathname } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';

function Home() {
  const t = useTranslations('HomePage');
  const locale = useLocale();
  const pathname = usePathname();
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href={pathname} locale={locale === 'en' ? 'ar' : 'en'}>
        {locale === 'en' ? 'عربي' : 'English'}
      </Link>
    </div>
  );
}

export default Home;
