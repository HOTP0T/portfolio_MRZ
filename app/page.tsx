"use client"

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import SkillsAndAbout from '@/components/skills-and-about';
import ContactAndFooter from '@/components/contact-and-footer';
import ScrollProgress from '@/components/ui/scroll-progress';
import SectionProgress from '@/components/section-progress';
import '@/lib/i18n';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Home() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('en');
  }, [i18n]);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <SectionProgress />
      <Header />
      <main className="flex-grow pt-16">
        <div className="h-[calc(100vh-4rem)] overflow-y-auto snap-y snap-mandatory scroll-smooth">
          <section id="hero" className="h-screen snap-start">
            <Hero />
          </section>
          <section id="projects" className="min-h-screen snap-start">
            <Projects />
          </section>
          <section id="skills-and-about" className="min-h-screen snap-start">
            <SkillsAndAbout />
          </section>
          <section id="contact" className="min-h-screen snap-start">
            <ContactAndFooter />
          </section>
        </div>
      </main>
      <SpeedInsights />
      <Analytics />
    </div>
  );
}