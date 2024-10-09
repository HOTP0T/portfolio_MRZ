"use client";

import { useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '@/locales/en.json';
import frTranslations from '@/locales/fr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      fr: { translation: frTranslations },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Any additional setup if needed
  }, []);

  return <>{children}</>;
}