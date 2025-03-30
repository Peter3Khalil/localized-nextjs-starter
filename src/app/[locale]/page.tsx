'use client';

import useLanguageSwitcher from '@/hooks/use-language-switcher';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

function Home() {
  const t = useTranslations('HomePage');
  const { href, language } = useLanguageSwitcher();
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href={href}>{language}</Link>
    </div>
  );
}

export default Home;
