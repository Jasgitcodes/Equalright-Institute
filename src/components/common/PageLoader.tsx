import React from 'react';
import { motion } from 'framer-motion';
import { APP_CONFIG } from '@/constants/app';

export const PageLoader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/60 backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.05]" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-tertiary/5" />

      <div className="relative flex flex-col items-center space-y-8">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="bg-primary p-4 rounded-3xl shadow-2xl shadow-primary/20 w-24 h-24 flex items-center justify-center overflow-hidden"
        >
          <img src="/favicon.png" alt="EQI Logo" className="w-full h-full object-cover rounded-xl" />
        </motion.div>

        <div className="space-y-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-xs mx-auto text-2xl font-black tracking-tight"
          >
            {APP_CONFIG.styledName.map((part, index) => (
              <span key={index} className={part.className}>{part.text}</span>
            ))}
            {/* Equal<span className="text-primary">Rights</span> Institute */}
          </motion.h2>

          <div className="w-48 h-1.5 bg-muted rounded-full overflow-hidden mx-auto">
            <motion.div
              className="h-full bg-primary"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.8 }}
            className="text-[8px] font-black uppercase tracking-[0.3em] italic"
          >
            {APP_CONFIG.motto}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};
