import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Loader2, CheckCircle2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { newsletterService } from '@/features/newsletter/newsletter.service';

import { APP_CONFIG } from '@/constants/app';

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          {/* Brand & Socials */}
          <motion.div className="space-y-8 md:col-span-2" variants={fadeInUp}>
            <Link to="/" className="flex items-center space-x-2 group cursor-pointer">
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                className="bg-blend-color-burn p-1 rounded-xl shadow-lg shadow-primary/20 w-10 h-10 flex items-center justify-center overflow-hidden"
              >
                <img src={APP_CONFIG.logo} alt={`${APP_CONFIG.abbr} Logo`} className="w-full h-full object-cover rounded-md" />
              </motion.div>
              <span className="text-xl font-black tracking-tight transition-colors group-hover:text-primary">
                {APP_CONFIG.styledName.map((part, index) => (
                  <span key={index} className={part.className}>{part.text}</span>
                ))}
              </span>
            </Link>
            <div className='flex flex-col max-w-xs text-muted-foreground items-center gap-6 font-medium'>
              <p className='text-base leading-relaxed'>
                Empowering individuals through education and advocacy. Dedicated to promoting equality and justice for all.
              </p>
              <p className="text-xs italic leading-relaxed">
                Motto: "{APP_CONFIG.motto}"
              </p>
            </div>
            <div className="flex space-x-4 pt-2">
              {[
                { icon: <Facebook className="h-5 w-5" />, href: "#" },
                { icon: <Twitter className="h-5 w-5" />, href: "#" },
                { icon: <Instagram className="h-5 w-5" />, href: "#" },
                { icon: <Linkedin className="h-5 w-5" />, href: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -3, color: 'hsl(var(--primary))' }}
                  className="text-muted-foreground transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Useful Links */}
          <motion.div className="space-y-6 pt-2" variants={fadeInUp}>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-tertiary/80">Useful Links</h3>
            <ul className="space-y-4">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Our Services", path: "/services" },
                { label: "Our Team", path: "/team" },
                { label: "Contact", path: "/contact" },
                { label: "Join Waitlist", path: "/waitlist" }
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors font-medium inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 transition-all duration-300 h-0.5 bg-primary mr-0 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info & Newsletter */}
          <motion.div className="space-y-6 pt-2" variants={fadeInUp}>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-tertiary/80">Connect</h3>
            <ul className="space-y-4">
              {[
                { icon: <Mail className="h-4 w-4" />, text: APP_CONFIG.contact.email },
                { icon: <Phone className="h-4 w-4" />, text: APP_CONFIG.contact.phone.join(', ') },
                { icon: <MapPin className="h-4 w-4" />, text: APP_CONFIG.contact.address }
              ].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3 text-sm text-foreground/80 hover:text-primary transition-colors cursor-pointer group"
                >
                  <div className="p-2 bg-background rounded-xl group-hover:bg-primary/10 border border-transparent group-hover:border-primary/20 transition-all shrink-0 mt-[-4px]">
                    {item.icon}
                  </div>
                  <span className="font-bold leading-tight">{item.text}</span>
                </motion.li>
              ))}
            </ul>

            {/* Newsletter */}
            <motion.div className="space-y-1.5 pt-2" variants={fadeInUp}>
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
                    className={`flex-1 h-12 px-5 py-2 text-sm border-2 rounded-2xl bg-background/50 backdrop-blur-sm focus:outline-none transition-all shadow-inner font-bold ${status === 'error' ? 'border-destructive/30 focus:border-destructive' : 'border-primary/10 focus:border-primary/50'
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
                    className={`text-[10px] font-black flex items-center gap-1.5 ${status === 'success' ? 'text-green-600' : 'text-destructive'
                      }`}
                  >
                    {status === 'success' && <CheckCircle2 className="h-3 w-3" />}
                    {message}
                  </motion.div>
                )}
              </form>
            </motion.div>

          </motion.div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/40"
        >
          <p>© 2025 {APP_CONFIG.name}. All rights reserved.</p>
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
