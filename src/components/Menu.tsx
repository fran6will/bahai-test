'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const menuItems = [
  { name: 'Communauté', href: '#communaute' },
  { name: 'Activités', href: '#activites' },
  { name: 'Croyances', href: '#croyances' },
  { name: 'Sanctuaire', href: '#sanctuaire' },
  { name: 'Nouvelles', href: '#nouvelles' },
  { name: 'Questions', href: '#faq' },
  { name: 'Ressources', href: '#ressources' },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 shadow-md"
      style={{ backgroundColor: '#FBFAF6' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo à gauche */}
          <div className="flex items-center space-x-3">
            <Image src="/Star.svg" alt="Bahai Star" width={32} height={32} />
            <div className="flex flex-col">
              <span className="text-gray-900 font-bold text-base leading-tight">
                Communauté bahá&apos;í
              </span>
              <span className="text-gray-600 text-xs leading-tight">
                de Montréal
              </span>
            </div>
          </div>

          {/* Menu de navigation à droite - Desktop */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="text-gray-600 hover:text-gray-900 transition-colors text-xs lg:text-sm">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Menu burger pour mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
            style={{ backgroundColor: '#FBFAF6' }}
          >
            <div className="px-4 py-4 space-y-2 border-t border-gray-200">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    closeMenu();
                    // Small delay to allow menu to close before scrolling
                    setTimeout(() => {
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                    e.preventDefault();
                  }}
                  className="block text-gray-600 hover:text-gray-900 transition-colors text-base py-3 px-2 rounded hover:bg-gray-100"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
