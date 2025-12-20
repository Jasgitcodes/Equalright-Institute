import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image?: string;
  className?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, image, className = "" }) => {
  return (
    // <section className={`relative h-[60vh] min-h-[500px] w-screen overflow-hidden flex items-center justify-center -mx-4 md:-mx-20 lg:-mx-8 ${className}`}>
    <section className={`relative h-[60vh] min-h-[500px] w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] overflow-hidden flex items-center justify-center -mt-8 ${className}`}>

      {/* Background Image/Overlay */}
      {image ? (
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />
          <div className="absolute inset-0 right-0 bottom-0 bg-gradient-to-t from-accent/10 via-background/20 to-transparent" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0 bg-secondary/20 nature-gradient">
          <div className="absolute inset-0 bg-dot-pattern opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      )}

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl -mr-48 -mt-48 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -ml-48 -mb-48 animate-pulse [animation-delay:1s]" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block px-4 py-1.5 rounded-full bg-tertiary/10 border border-tertiary/20 backdrop-blur-md mb-4"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] gold-gradient">
            Equal Rights Institute
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-8xl font-black tracking-tight text-foreground leading-[1.1]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed italic"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {subtitle}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-8"
        >
          <div className="w-12 h-1.5 bg-tertiary/30 mx-auto rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-tertiary"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
