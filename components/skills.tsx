"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = [
  {
    id: 'frontend',
    name: 'Frontend',
    children: [
      { id: 'react', name: 'React' },
      { id: 'nextjs', name: 'Next.js' },
      { id: 'tailwind', name: 'Tailwind CSS' },
      { id: 'typescript', name: 'TypeScript' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    children: [
      { id: 'nodejs', name: 'Node.js' },
      { id: 'express', name: 'Express' },
      { id: 'supabase', name: 'Supabase' },
      { id: 'graphql', name: 'GraphQL' },
    ],
  },
  {
    id: 'tools',
    name: 'Tools',
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

  return (
    <section id="skills" className="w-full max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid gap-6">
        {skills.map((category) => (
          <Card key={category.id}>
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
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
    </section>
  );
};

export default Skills;