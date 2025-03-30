import '@/app/globals.css';
import { routing } from '@/i18n/routing';
import { getDirection } from '@/lib/utils';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import React from 'react';

type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} dir={getDirection(locale)}>
      <body className="overflow-auto antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
