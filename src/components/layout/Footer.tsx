import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { newsletterService } from '@/features/newsletter/newsletter.service';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  viewport: { once: true }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      await newsletterService.subscribe(email);
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Failed to subscribe.');
    }
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full bg-secondary/20 mt-auto border-t border-primary/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] -z-10" />
      <div className="container mx-auto px-4 py-16 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          <motion.div className="space-y-6" variants={fadeInUp}>
            <Link to="/" className="flex items-center space-x-2 group cursor-pointer">
              <motion.div 
                whileHover={{ rotate: 12, scale: 1.1 }}
                className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/20 w-10 h-10 flex items-center justify-center overflow-hidden"
              >
                <img src="/favicon.png" alt="EQI Logo" className="w-full h-full object-cover rounded-md" />
              </motion.div>
              <span className="text-xl font-black tracking-tight text-foreground transition-colors group-hover:text-primary">
                Equal<span className="text-primary group-hover:text-foreground transition-colors">Rights</span> Institute
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed font-medium">
              Empowering individuals through education and advocacy. Dedicated to promoting equality and justice for all.
            </p>
          </motion.div>

          <motion.div className="space-y-6" variants={fadeInUp}>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-tertiary/80">Connect</h3>
            <ul className="space-y-4">
              {[
                { icon: <Mail className="h-4 w-4" />, text: "info@eri-institute.org" },
                { icon: <Phone className="h-4 w-4" />, text: "+1 (555) 123-4567" },
                { icon: <MapPin className="h-4 w-4" />, text: "123 Justice Ave, Equality State" }
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-sm text-foreground/80 hover:text-primary transition-colors cursor-pointer group"
                >
                  <div className="p-2 bg-background rounded-xl group-hover:bg-primary/10 border border-transparent group-hover:border-primary/20 transition-all">
                    {item.icon}
                  </div>
                  <span className="font-bold">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="space-y-6" variants={fadeInUp}>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-tertiary/80">Newsletter</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              Stay updated with our latest missions and educational resources.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex max-w-sm items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  className={`flex-1 h-12 px-5 py-2 text-sm border-2 rounded-2xl bg-background/50 backdrop-blur-sm focus:outline-none transition-all shadow-inner font-bold ${
                    status === 'error' ? 'border-destructive/30 focus:border-destructive' : 'border-primary/10 focus:border-primary/50'
                  }`}
                  disabled={status === 'loading'}
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="inline-flex items-center justify-center p-3.5 text-sm font-black bg-primary text-primary-foreground rounded-2xl transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <ArrowRight className="h-5 w-5" />
                  )}
                </motion.button>
              </div>
              {message && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-[10px] font-black flex items-center gap-1.5 ${
                    status === 'success' ? 'text-green-600' : 'text-destructive'
                  }`}
                >
                  {status === 'success' && <CheckCircle2 className="h-3 w-3" />}
                  {message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/40"
        >
          <p>© 2025 Equal Rights Institute. All rights reserved.</p>
          <div className="flex space-x-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((link) => (
              <motion.a 
                key={link} 
                whileHover={{ y: -2, color: 'hsl(var(--primary))' }}
                href="#" 
                className="transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};
