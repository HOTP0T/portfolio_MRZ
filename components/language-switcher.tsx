"use client"

import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  return (
    <Button onClick={toggleLanguage} variant="ghost" size="sm">
      {i18n.language === 'en' ? 'FR' : 'EN'}
    </Button>
  );
};

export default LanguageSwitcher;