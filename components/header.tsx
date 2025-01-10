"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from '@/components/language-switcher';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center font-outfit">
        <Link href="/" className="text-2xl font-bold">
          MRZ
        </Link>
        <div className="hidden md:flex items-center space-x-4">
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
            id='toggle-theme'
            aria-label="Toggle theme"
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 p-4 space-y-4 absolute top-16 left-0 right-0 z-40">
          <Link href="#projects" className="block text-lg hover:underline" onClick={toggleMenu}>
            {t('header.projects')}
          </Link>
          <Link href="#skills-and-about" className="block text-lg hover:underline" onClick={toggleMenu}>
            {t('header.skills')}
          </Link>
          <Link href="#contact" className="block text-lg hover:underline" onClick={toggleMenu}>
            {t('header.contact')}
          </Link>
          <div className="flex justify-between items-center">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;