"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from '@/components/language-switcher';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center font-outfit">
        <Link href="/" className="text-2xl font-bold">
          MRZ
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="#projects" className="hover:underline">
            {t('header.projects')}
          </Link>
          <Link href="#skills-and-about" className="hover:underline">
            {t('header.skills')}
          </Link>
          <Link href="#contact" className="hover:underline">
            {t('header.contact')}
          </Link>
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;