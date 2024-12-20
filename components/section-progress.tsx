"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const sections = ['hero', 'projects', 'skills-and-about', 'contact'];

const SectionProgress = () => {
  const [activeSection, setActiveSection] = useState('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768; // Check if the screen width is mobile-sized
    const thresholdValue = isMobile ? 0.3 : 0.5; // Use a lower threshold on mobile screens

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: thresholdValue } // Adjust the threshold based on screen size
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="fixed md:right-8 right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center">
      {sections.map((section) => (
        <motion.a
          key={section}
          href={`#${section}`}
          className={`w-3 h-3 my-2 rounded-full transition-colors duration-300 ${
            activeSection === section
              ? 'bg-primary'
              : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500'
          }`}
          aria-label={`Scroll to ${section} section`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        />
      ))}
    </div>
  );
};

export default SectionProgress;