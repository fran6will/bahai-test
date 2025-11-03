'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Section({ children, id, backgroundColor, minHeight = true }: { children: React.ReactNode, id?: string, backgroundColor?: string, minHeight?: boolean }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <motion.section
      {...(id && { id })}
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`${minHeight ? 'min-h-screen' : ''} py-20 px-4 md:px-16 lg:px-32`}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      {children}
    </motion.section>
  );
}
