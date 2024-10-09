"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const projects = [
  {
    id: 'project1',
    name: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    status: 'Completed',
    preview: 'https://source.unsplash.com/random/800x600?ecommerce',
    link: 'https://github.com/yourusername/ecommerce-platform'
  },
  {
    id: 'project2',
    name: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    technologies: ['React', 'Firebase', 'Material-UI'],
    status: 'In Progress',
    preview: 'https://source.unsplash.com/random/800x600?task-management',
    link: 'https://github.com/yourusername/task-management-app'
  },
  {
    id: 'project3',
    name: 'Weather Forecast Dashboard',
    description: 'An interactive weather forecast dashboard with data visualization and location-based services.',
    technologies: ['Vue.js', 'D3.js', 'OpenWeatherMap API'],
    status: 'Completed',
    preview: 'https://source.unsplash.com/random/800x600?weather',
    link: 'https://github.com/yourusername/weather-forecast-dashboard'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isMounted, setIsMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or return a loading placeholder
  }

  return (
    <motion.section 
      id="projects" 
      className="w-full max-w-5xl mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 font-heading">{t('projects.title')}</h2>
      <div className="w-full">
        <Card className="w-full">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 border-r border-border">
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={cn(
                    "w-full py-2 px-4 text-left transition-colors",
                    selectedProject.id === project.id
                      ? "bg-primary/10 font-bold"
                      : "hover:bg-primary/5",
                    index !== projects.length - 1 ? "border-b border-border" : ""
                  )}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t(`projects.${project.id}.name`)}
                </motion.button>
              ))}
            </div>
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full md:w-3/4 p-6"
            >
              <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                <Image 
                  src={selectedProject.preview} 
                  alt={t(`projects.${selectedProject.id}.name`)}
                  width={800} 
                  height={600} 
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 font-heading">{t(`projects.${selectedProject.id}.name`)}</h3>
              <p className="mb-4">{t(`projects.${selectedProject.id}.description`)}</p>
              <p className="mb-4">
                <strong>{t('projects.technologies')}:</strong> {selectedProject.technologies.join(", ")}
              </p>
              <p className="mb-4">
                <strong>{t('projects.status')}:</strong> {t(`projects.${selectedProject.id}.status`)}
              </p>
              <Button asChild variant="default">
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">{t('projects.viewProject')}</a>
              </Button>
            </motion.div>
          </div>
        </Card>
      </div>
    </motion.section>
  );
};

export default Projects;