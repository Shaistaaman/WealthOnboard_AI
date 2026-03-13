import React from 'react';
import { motion } from 'framer-motion';

type PageTransitionProps = {
  children: React.ReactNode;
};

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-wave flex items-center justify-center p-4"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;