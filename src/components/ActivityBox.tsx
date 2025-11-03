'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  reverse = false
}: ActivityBoxProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, delay }}
      className={`flex flex-col md:flex-row gap-8 w-full max-w-6xl mx-auto bg-white ${reverse ? 'md:flex-row-reverse' : ''}`}
      style={{
        boxShadow: '0 1px 1px rgba(0,0,0,.03), 0 8px 24px rgba(0,0,0,.06)',
        borderRadius: '8px',
        overflow: 'hidden'
      }}
    >
      {/* Image avec titre - 60% */}
      <div className="relative w-full md:w-3/5 md:flex-shrink-0 flex flex-col">
        <div className="relative flex-1 min-h-[300px]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
          {/* Rectangle pour le titre en bas */}
          <div
            className="absolute bottom-0 left-0 right-0 p-6"
            style={{ backgroundColor: 'rgba(134, 91, 91, 0.9)' }}
          >
            <h3 className="text-white text-xl font-bold leading-tight">
              {title}
            </h3>
          </div>
        </div>
      </div>

      {/* Description - 40% */}
      <div className="p-6 w-full md:w-2/5 flex items-center">
        <p className="text-gray-700 leading-relaxed text-lg">
          {description}
        </p>
      </div>
    </motion.div>
  );
}