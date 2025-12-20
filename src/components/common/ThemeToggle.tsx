import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  const themes = [
    { id: 'light', icon: <Sun className="h-4 w-4" />, label: 'Light' },
    { id: 'dark', icon: <Moon className="h-4 w-4" />, label: 'Dark' },
    { id: 'system', icon: <Monitor className="h-4 w-4" />, label: 'System' },
  ] as const;

  const activeTheme = themes.find(t => t.id === theme) || themes[2];

  return (
    <div className="relative">
      {/* Desktop View */}
      <div className="hidden md:flex items-center bg-muted/50 p-1 rounded-full border border-border/50 backdrop-blur-sm">
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className="relative p-2 rounded-full transition-colors group"
            title={`Switch to ${t.label} mode`}
          >
            <span className={`relative z-10 ${theme === t.id ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'}`}>
              {t.icon}
            </span>
            {theme === t.id && (
              <motion.div
                layoutId="active-theme-desktop"
                className="absolute inset-0 bg-background rounded-full shadow-sm border border-border/50"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2.5 rounded-full bg-muted/80 border border-border/50 backdrop-blur-sm text-primary shadow-sm"
          aria-label="Toggle theme options"
        >
          {activeTheme.icon}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              className="absolute right-0 top-full mt-4 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl p-2 min-w-[140px] z-[60]"
            >
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`flex items-center space-x-3 w-full px-4 py-2.5 rounded-xl transition-all ${
                    theme === t.id ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted active:scale-95'
                  }`}
                >
                  {t.icon}
                  <span className="text-sm font-bold">{t.label}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Overlay to close mobile menu when clicking outside */}
        {isOpen && (
          <div 
            className="fixed inset-0 top-0 z-50 pointer-events-auto" 
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </div>
  );
};
