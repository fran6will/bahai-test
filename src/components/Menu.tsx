'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Link } from '../navigation';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '../navigation';
import { useState, useTransition } from 'react';

export default function Menu() {
  const t = useTranslations('Menu');
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const menuItems = [
    { name: t('home'), href: '/' },
    { name: t('vision'), href: '/vision' },
    { name: t('action'), href: '/champs-action' },
    { name: t('news'), href: '/news' },
    { name: t('sanctuary'), href: '/sanctuary' },
    { name: t('faq'), href: '/faq' },
  ];

  const toggleLanguage = () => {
    const nextLocale = locale === 'fr' ? 'en' : 'fr';
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#F9F7F2] shadow-sm"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
              <Image src="/Star.svg" alt="Bahai Star" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#333333] font-bold text-lg leading-tight font-serif">
                Communauté bahá&apos;íe
              </span>
              <span className="text-[#333333] text-base leading-tight font-serif">
                de Montréal
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-[#333333] hover:text-[#865B5B] transition-colors text-base font-serif">
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={toggleLanguage}
                disabled={isPending}
                className="text-[#333333] hover:text-[#865B5B] transition-colors text-sm font-medium uppercase border border-[#333333] rounded px-2 py-1 ml-4"
              >
                {locale === 'fr' ? 'EN' : 'FR'}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#333333] hover:text-[#865B5B] p-2"
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
            className="md:hidden bg-[#F9F7F2] border-t border-gray-200"
          >
            <div className="px-6 py-6 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="block text-[#333333] hover:text-[#865B5B] transition-colors text-lg font-serif"
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  toggleLanguage();
                  closeMenu();
                }}
                disabled={isPending}
                className="block w-full text-left text-[#333333] hover:text-[#865B5B] transition-colors text-lg font-serif uppercase pt-4"
              >
                {locale === 'fr' ? 'English' : 'Français'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
