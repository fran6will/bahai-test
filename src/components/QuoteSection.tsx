'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

import { useTranslations } from 'next-intl';

const images = [
  '/images/carrousel/01.webp',
  '/images/carrousel/02.webp',
  '/images/carrousel/03.webp'
];

export default function QuoteSection() {
  const t = useTranslations('Hero');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-visible" style={{ backgroundColor: '#E0DACC' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Text Box (Floating on left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:col-start-1 relative z-20 order-2 lg:order-1"
          >
            <div
              className="p-10 md:p-14 shadow-lg relative"
              style={{ borderRadius: '4px', backgroundColor: '#F5F1E8' }}
            >
              <p className="text-base md:text-lg leading-relaxed text-gray-700 font-serif">
                {t('welcomeDescription')}
              </p>
            </div>
          </motion.div>

          {/* Image Area (Right, with decorative square) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 lg:col-start-7 relative order-1 lg:order-2 -mb-24 md:-mb-48"
          >
            {/* Decorative Square (top-right of image) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-6 -right-6 w-20 h-20 md:w-24 md:h-24 z-30 shadow-sm hidden md:block"
              style={{ backgroundColor: '#F5F1E8' }}
            />

            {/* Slider Container */}
            <div className="relative overflow-hidden shadow-2xl bg-gray-200" style={{ aspectRatio: '4/3' }}>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt="Communauté"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }} // Slow, minimalist fade
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Decorative border behind image */}
            <div
              className="absolute -bottom-4 -left-4 w-full h-full -z-10 hidden lg:block"
              style={{ border: '1px solid rgba(141, 163, 153, 0.3)' }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}