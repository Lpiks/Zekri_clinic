import React from 'react';
import { motion } from 'framer-motion';

const SplashScreen = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[1000] bg-obsidian flex flex-col items-center justify-center p-6 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full"></div>
      
      <div className="relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          {/* Animated Logo */}
          <div className="w-24 h-24 border border-gold/40 flex items-center justify-center rounded-sm mb-8 relative">
            <span className="text-gold font-heading text-5xl">Z</span>
            {/* Pulsing border */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-4 border border-gold/20"
            ></motion.div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-center"
          >
            <h1 className="text-2xl md:text-3xl font-heading font-bold tracking-[0.4em] text-white">ZEKRI</h1>
            <p className="text-[10px] tracking-[0.6em] text-gold uppercase mt-4">L'Art de l'Excellence</p>
          </motion.div>
        </motion.div>

        {/* Loading Bar */}
        <div className="mt-16 w-48 h-[1px] bg-white/5 relative mx-auto">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.5, ease: 'linear' }}
            className="h-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
