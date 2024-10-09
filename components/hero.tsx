"use client"

import { ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="h-full flex flex-col justify-center items-center text-center px-4 relative">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        {t('hero.title')}
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground mb-8 font-outfit">
        {t('hero.subtitle')}
      </h2>
      <p className="max-w-2xl text-lg mb-12">
        {t('hero.description')}
      </p>
      <a
        href="#projects"
        className="absolute bottom-8 z-10"
        aria-label={t('hero.scrollToProjects')}
      >
        <ArrowDown className="h-8 w-8 animate-bounce" />
      </a>
    </div>
  );
};

export default Hero;