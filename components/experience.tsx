"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovators Inc.',
    period: 'Jan 2020 - Present',
    description: 'Leading development of scalable web applications using React, Node.js, and AWS.',
    achievements: [
      'Implemented microservices architecture, improving system scalability by 40%',
      'Mentored junior developers, increasing team productivity by 25%',
      'Introduced automated testing, reducing bug reports by 60%',
    ],
    skills: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Full-Stack Developer',
    company: 'WebSolutions Co.',
    period: 'Mar 2017 - Dec 2019',
    description: 'Developed and maintained various web applications for clients across different industries.',
    achievements: [
      'Reduced page load time by 50% through optimization techniques',
      'Implemented responsive design, increasing mobile traffic by 35%',
      'Integrated payment gateways, boosting online sales by 45%',
    ],
    skills: ['JavaScript', 'Python', 'Django', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'Junior Web Developer',
    company: 'StartUp Dynamics',
    period: 'Jun 2015 - Feb 2017',
    description: 'Assisted in the development of a SaaS platform for project management.',
    achievements: [
      'Contributed to the front-end development using Angular',
      'Implemented RESTful APIs using Express.js',
      'Participated in code reviews and improved coding standards',
    ],
    skills: ['Angular', 'Express.js', 'MongoDB', 'Git', 'Agile'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-10"
      >
        Professional Experience
      </motion.h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription>{exp.company} | {exp.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{exp.description}</p>
                <h4 className="font-semibold mb-2">Key Achievements:</h4>
                <ul className="list-disc pl-5 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;