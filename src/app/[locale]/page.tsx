'use client';
import LanguageSwitcher from '@/components/language-switcher';
import { useTranslations } from 'next-intl';

function Home() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <LanguageSwitcher />
    </div>
  );
}

export default Home;
