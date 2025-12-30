'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface ActivityBoxProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  delay?: number;
  reverse?: boolean;
}

export default function ActivityBox({
  title,
  description,
  imageSrc,
  imageAlt,
  delay = 0,
}: ActivityBoxProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      {/* Image Container with Hover Zoom */}
      <div className="relative h-64 md:h-72 overflow-hidden mb-6 rounded-sm">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700"
          />
        ) : null}
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300" />
      </div>

      {/* Title */}
      <h4 className="font-serif text-xl md:text-2xl mb-3 text-gray-900 transition-colors duration-300">
        {title}
      </h4>

      {/* Description */}
      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 font-serif">
        {description}
      </p>

      {/* Animated underline */}
      <div className="w-8 h-px bg-[#865B5B] transition-all duration-500" />
    </motion.div>
  );
}