"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FaReact, FaNodeJs, FaDocker, FaAws, FaHeart } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiGraphql, SiVercel, SiGit, SiJest } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { url } from 'inspector';

const skills = [
  {
    id: 'frontend',
    name: 'skills.frontend',
    children: [
      { id: 'html', name: 'HTML' },
      { id: 'css', name: 'CSS' },
      { id: 'javascript', name: 'JavaScript' },
      { id: 'react', name: 'React' },
      { id: 'nextjs', name: 'Next.js' },
      { id: 'tailwind', name: 'Tailwind CSS' },
      { id: 'typescript', name: 'TypeScript' },
    ],
  },
  {
    id: 'backend',
    name: 'skills.backend',
    children: [
      { id: 'nodejs', name: 'Node.js' },
      { id: 'supabase', name: 'Supabase' },
      { id: 'PostgreSQL', name: 'PostgreSQL' },
    ],
  },
  {
    id: 'tools',
    name: 'skills.tools',
    children: [
      { id: 'github', name: 'Github' },
      { id: 'vscode', name: 'VS Code' },
      { id: 'docker', name: 'Docker' },
      { id: 'npm', name: 'npm' },
      { id: 'warp', name: 'Warp' },
      { id: 'figma', name: 'Figma' },
      { id: 'arc', name: 'Arc' },
      { id: 'accessibility', name: 'Web Accessibility' },
      { id: 'Discord', name: 'Discord' },
      { id: 'Setapp', name: 'Setapp' },
    ],
  },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const { t } = useTranslation();

  // Client-side only logic to load external script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-6">{t('skills.title')}</h2>
      <div className="grid gap-6">
        {skills.map((category) => (
          <Card key={category.id}>
            <CardHeader>
              <CardTitle>{t(category.name)}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.children.map((skill) => (
                  <motion.div
                    key={skill.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge
                      className="cursor-pointer"
                      variant={selectedSkill === skill.id ? "default" : "secondary"}
                      onClick={() => setSelectedSkill(skill.id)}
                    >
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Elfsight Widget as a Card */}
        <Card>
          <CardHeader>
            <CardTitle>{t('')}</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Widget from Elfsight */}
            <div className="elfsight-app-3365aae1-c600-4f1a-acbe-1f12c266da35" data-elfsight-app-lazy />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const About = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('about.title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          {t('about.content')}
        </p>
      </CardContent>
    </Card>
  );
};

const TechStack = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('techStack.title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <FaReact className="text-4xl mb-2" />
            <span>React</span>
          </div>
          <div className="flex flex-col items-center">
            <SiNextdotjs className="text-4xl mb-2" />
            <span>Next.js</span>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-4xl mb-2" />
            <span>Node.js</span>
          </div>
          {/* <div className="flex flex-col items-center">
            <SiExpress className="text-4xl mb-2" />
            <span>Express</span>
          </div> */}
          <div className="flex flex-col items-center">
            <SiJest className="text-4xl mb-2" />
            <span>Jest</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="images/posthog-icon-seeklogo.svg"
              alt="PostHog"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto", objectFit: "cover" }}
              className="mb-2"
            />
            <span>PostHog</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="images/supabase-logo-icon.png"
              alt="Supabase"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto", objectFit: "cover" }}
              className="mb-2"
            />
            <span>Supabase</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="images/tailwind-svgrepo-com.svg"
              alt="Tailwind CSS"
              width={32}
              height={32}
              className="mb-2"
            />
            <span>Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center">
          <FaHeart className="text-4xl mb-2" />
          <span className="passionmsg" >Most important tech used: <br/> Passion for building awesome stuff!!</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const SkillsAndAbout = () => {
  return (
    <section id="skills-and-about" className="min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Skills />
          <div className="space-y-8">
            <About />
            <TechStack />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndAbout;