'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const t = useTranslations('Hero');

  return (
    <motion.section
      id="accueil"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="relative h-[66vh] min-h-[500px] w-full grid grid-cols-2 overflow-hidden"
    >
      {/* Static Hero Image */}
      <Image
        src="/images/hero/slide-1.png"
        className="object-cover"
        alt="Hero background"
        fill
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Left Column (Empty) */}
      <div className="relative z-10"></div>

      {/* Right Column (Content) */}
      <div className="relative z-10 w-full h-full flex items-end justify-start px-4 pb-24 md:px-16 lg:px-24">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: inView ? 0 : 30, opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-left"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[#F5F0E1] leading-tight font-serif drop-shadow-md">
            {t('welcomeTitle')}
          </h1>
        </motion.div>
      </div>
    </motion.section>
  );
}