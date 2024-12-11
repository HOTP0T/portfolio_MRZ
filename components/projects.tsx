"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const projects = [
  {
    id: "project1",
    name: "Bingosrs - OSRS Bingo Card",
    description:
      "A Bingo Card tool for OSRS events, designed to track progress, color-code tiles, mark completions, add notes, and stay organized and motivated throughout the event.",
    technologies: ["html", "css", "js"],
    status: "Remake In Progress",
    preview: "/images/bingosrs_screenshot.png",
    link: "https://bingosrs.online/",
    githubLink: "https://github.com/HOTP0T/JTI-BingoPlatform"
  },
  {
    id: "project2",
    name: "Recipe Search Engine",
    description:
      "An optimized search engine for a recipe page with detailed documentation",
    technologies: ["html", "scss", "React"],
    status: "Completed",
    preview: "/images/OCRP7_screenshot.png",
    link: "https://hotp0t.github.io/OCR-P7-AlogrithmeRechercheJs/",
    githubLink: "https://github.com/HOTP0T/ocr-p7-alogrithmerecherchejs"
  },
  {
    id: "project3",
    name: "Marieke's Online Workshop",
    description:
      "Marieke's online workshop is a web application that allows users to book workshops, view the workshop schedule, and get in touch with Marieke.",
    technologies: ["Nextjs", "Shadcn", "Tailwind CSS"],
    status: "Completed",
    preview: "/images/Mariekeapp_screenshot.png",
    link: "https://marieke-web-app.vercel.app",
    githubLink: "https://github.com/HOTP0T/MariekeWebApp"
  },
  {
    id: "project4",
    name: "FAQ AI ChatBot",
    description:
      "Preview of a AI Chatbot, possiblity to feed the bot information of your company/group/services for customers to communicate with a ~digital FAQ/support agent~ ",
    technologies: ["AI", "Coze"],
    status: "In review",
    preview: "/images/essca_bot.png",
    link: "hotp0t.github.io/ESSCA-chatbot/",
    githubLink: "https://github.com/HOTP0T/ESSCA-chatbot"
  },
  {
    id: "project5",
    name: "Simple pop-up Form",
    description:
      "Showcase of a form component for a react app",
    technologies: ["html", "css", "js"],
    status: "Completed",
    preview: "/images/gameon_form.png",
    link: "https://hotp0t.github.io/OCR_P4-GameOn_website-FR/",
    githubLink: "https://github.com/HOTP0T/OCR_P4-GameOn_website-FR"
  },
  {
    id: "project6",
    name: "Sports App Dashboard including charts and stats",
    description:
      "Showcase a sports dashboard using react and recharts library | jsdoc included",
    technologies: ["React", "Recharts", "jsdoc", "jest"],
    status: "Completed",
    preview: "/images/SportSee.png",
    link: "https://hotp0t.github.io/OCR_P4-GameOn_website-FR/",
    githubLink: "https://github.com/HOTP0T/OCR_P4-GameOn_website-FR"
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
      <h2 className="text-3xl font-bold mb-6 font-heading">
        {t("projects.title")}
      </h2>
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
                    index !== projects.length - 1
                      ? "border-b border-border"
                      : ""
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
              <h3 className="text-2xl font-bold mb-2 font-heading">
                {t(`projects.${selectedProject.id}.name`)}
              </h3>
              <p className="mb-4">
                {t(`projects.${selectedProject.id}.description`)}
              </p>
              <p className="mb-4">
                <strong>{t("projects.technologies")}:</strong>{" "}
                {selectedProject.technologies.join(", ")}
              </p>
              <p className="mb-4">
                <strong>{t("projects.status")}:</strong>{" "}
                {t(`projects.${selectedProject.id}.status`)}
              </p>
              <Button asChild variant="default" className="mr-2">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("projects.viewProject")}
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Repo
                </a>
              </Button>
            </motion.div>
          </div>
        </Card>
      </div>
    </motion.section>
  );
};

export default Projects;