'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function QuoteSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative py-20 overflow-visible" style={{ backgroundColor: '#E0DACC' }}>
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          {/* Citation à gauche */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 order-1 lg:order-1"
            style={{
              boxShadow: '0 1px 1px rgba(0,0,0,.03), 0 8px 24px rgba(0,0,0,.06)',
              borderRadius: '8px'
            }}
          >
            <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-800 mb-6">
              &quot;Vous êtes les fruits d&apos;un même arbre, les feuilles d&apos;une même branche. Que vos relations avec vos semblables soient toujours empreintes d&apos;amour et d&apos;harmonie, d&apos;amitié et de camaraderie.&quot;
            </blockquote>
            <cite className="text-lg font-semibold text-gray-900">
              —Bahá&apos;u&apos;lláh
            </cite>
          </motion.div>

          {/* Image à droite avec carré overlay */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-20 order-2 lg:order-2 mt-8 lg:mt-0"
          >
            {/* Image de fond */}
            <div className="w-full h-96 md:h-[500px] relative overflow-visible">
              <img
                src="/images/quote/quote.jpg"
                alt="Quote"
                className="w-full h-full object-cover"
                style={{
                  aspectRatio: '9/16' // Force le format portrait 9:16 (rectangle long vertical)
                }}
              />
              {/* Carré artistique beige pâle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute z-10"
                style={{
                  backgroundColor: '#F5F1E8', // Beige pâle
                  left: '45%',
                  top: '-30%',
                  width: '200px',
                  height: '200px',
                  transform: 'rotate(12deg)' // Forme artistique avec rotation
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}