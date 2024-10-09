"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FaReact, FaNodeJs, FaDocker, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiGraphql, SiVercel, SiGit } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';

const skills = [
  {
    id: 'frontend',
    name: 'skills.frontend',
    children: [
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
      { id: 'express', name: 'Express' },
      { id: 'supabase', name: 'Supabase' },
      { id: 'graphql', name: 'GraphQL' },
    ],
  },
  {
    id: 'tools',
    name: 'skills.tools',
    children: [
      { id: 'git', name: 'Git' },
      { id: 'vscode', name: 'VS Code' },
      { id: 'docker', name: 'Docker' },
      { id: 'webpack', name: 'Webpack' },
    ],
  },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const { t } = useTranslation();

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
          <div className="flex flex-col items-center">
            <SiExpress className="text-4xl mb-2" />
            <span>Express</span>
          </div>
          <div className="flex flex-col items-center">
            <SiMongodb className="text-4xl mb-2" />
            <span>MongoDB</span>
          </div>
          <div className="flex flex-col items-center">
            <SiPostgresql className="text-4xl mb-2" />
            <span>PostgreSQL</span>
          </div>
          <div className="flex flex-col items-center">
            <SiGraphql className="text-4xl mb-2" />
            <span>GraphQL</span>
          </div>
          <div className="flex flex-col items-center">
            <FaDocker className="text-4xl mb-2" />
            <span>Docker</span>
          </div>
          <div className="flex flex-col items-center">
            <FaAws className="text-4xl mb-2" />
            <span>AWS</span>
          </div>
          <div className="flex flex-col items-center">
            <SiVercel className="text-4xl mb-2" />
            <span>Vercel</span>
          </div>
          <div className="flex flex-col items-center">
            <SiGit className="text-4xl mb-2" />
            <span>Git</span>
          </div>
          <div className="flex flex-col items-center">
            <TbApi className="text-4xl mb-2" />
            <span>RESTful APIs</span>
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