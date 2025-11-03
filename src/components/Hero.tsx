'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToCommunity = () => {
    const communitySection = document.getElementById('communaute');
    if (communitySection) {
      communitySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      id="accueil"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hero/hero-bg.jpg')"
      }}
    >
      {/* Overlay pour assombrir l'image de fond */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Contenu du hero */}
      <div className="relative z-10 w-full px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white bg-opacity-90 backdrop-blur-sm p-6 md:p-8 lg:p-12 max-w-2xl mx-auto md:ml-[50%] md:-translate-x-1/2 md:mr-0"
          style={{
            boxShadow: '0 1px 1px rgba(0,0,0,.03), 0 8px 24px rgba(0,0,0,.06)',
            borderRadius: '8px'
          }}
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-800 leading-tight">
            Bienvenue à la communauté bahá&apos;íe de Montréal
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
            Nous nous inspirons des enseignements de la foi bahá&apos;íe, dont le but fondamental est de promouvoir l&apos;unité de l&apos;humanité et de cultiver un esprit d&apos;amour et de fraternité universelle.
          </p>

          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: inView ? 1 : 0.9, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToCommunity}
            className="font-bold py-4 px-8 text-lg md:text-xl transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            style={{
              backgroundColor: '#865B5B',
              color: '#FBFAF6'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#744D4D';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#865B5B';
            }}
          >
            Découvrir notre communauté
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}