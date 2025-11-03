'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const sections = [
  'accueil',
  'communaute',
  'activites',
  'croyances',
  'sanctuaire',
  'nouvelles',
  'faq',
  'ressources'
];

export default function ScrollNavigator() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Find which section we're currently in
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setCurrentSection(i);
          // Hide navigator if we're at the last section
          setIsVisible(i < sections.length - 1);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const nextIndex = currentSection + 1;
    if (nextIndex < sections.length) {
      const nextSection = document.getElementById(sections[nextIndex]);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 cursor-pointer"
      onClick={scrollToNext}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-gray-800 text-sm font-medium drop-shadow-lg">Suivant</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 rounded-full border-2 flex items-center justify-center hover:bg-opacity-20 transition-colors shadow-lg"
          style={{
            borderColor: '#865B5B',
            backgroundColor: 'rgba(251, 250, 246, 0.9)'
          }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="#865B5B"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
