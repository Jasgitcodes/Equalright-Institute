import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
  { name: 'Waitlist', path: '/waitlist' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-primary/5 py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      {isScrolled && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          className="absolute inset-0 bg-dot-pattern -z-10" 
        />
      )}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div 
              whileHover={{ rotate: 12, scale: 1.1 }}
              className="bg-blend-color-burn p-1 rounded-xl shadow-lg shadow-primary/20 w-10 h-10 flex items-center justify-center overflow-hidden"
            >
              <img src="/favicon.png" alt="EQI Logo" className="w-full h-full object-cover rounded-md" />
            </motion.div>
            <div className="text-xl font-black tracking-tight text-foreground transition-colors group-hover:text-primary">
              Equal<span className="text-primary group-hover:text-foreground transition-colors">Rights</span> Institute
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 overflow-hidden group"
              >
                <motion.span 
                  className={`relative z-10 transition-colors duration-300 ${
                    location.pathname === item.path ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                  }`}
                >
                  {item.name}
                </motion.span>
                {location.pathname === item.path && (
                  <motion.div 
                    layoutId="nav-bg"
                    className="absolute inset-0 bg-primary/5 rounded-full -z-0"
                  />
                )}
                <div className="absolute inset-0 bg-primary/5 rounded-full -z-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="p-2 text-muted-foreground hover:text-primary focus:outline-none bg-muted/50 rounded-full transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="md:hidden border-t overflow-hidden space-y-2 bg-background/95 backdrop-blur-xl rounded-2xl shadow-xl px-4 py-4"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-6 py-3 text-base font-bold rounded-xl transition-all ${
                      location.pathname === item.path ? 'bg-primary/5 text-primary' : 'text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
