import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/common/SectionHeader';
import { PageHero } from '@/components/common/PageHero';
import { Users, Target, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const About: React.FC = () => {
  return (
    <div className="space-y-24 pb-20">
      <PageHero 
        title="Our Story & Vision"
        subtitle="Dedicated to promoting equality and justice through education, advocacy, and global collaboration."
        image="/assets/heroes/about.png"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center container mx-auto px-4">
        <motion.div 
          className="space-y-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-black gold-gradient tracking-tight">Who We Are</h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-medium">
            EqualRights Educational Services is an indigenous educational services provider in multi-disciplined areas of education. We are an uprising educational services provider with just a year as a private business system, committed to contributing to the transformation of the Nigerian Educational sector to an enviable height.
          </p>
          <motion.div className="space-y-4" variants={staggerContainer}>
            {[
              { icon: <Target className="h-5 w-5" />, text: "Professionalism & Integrity" },
              { icon: <Heart className="h-5 w-5" />, text: "Passion & Team Spirit" },
              { icon: <Users className="h-5 w-5" />, text: "Innovation & Excellent Service Delivery" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 rounded-2xl bg-card border border-tertiary/10 shadow-sm"
              >
                <span className="text-tertiary">{item.icon}</span>
                <span className="font-bold text-sm">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div 
          className="aspect-square bg-muted rounded-[3rem] overflow-hidden relative shadow-2xl border-4 border-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="/assets/images/hero_mission.png" 
            alt="Team collaboration at the institute" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </motion.div>
      </div>

      <section className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <SectionHeader 
            title="Meet Our Leaders" 
            subtitle="Our team brings together decades of experience in education, administration, and grassroots activism."
          />
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            {
              id: 'musa-kabiru-paul',
              name: "Musa Kabiru Paul",
              role: "CEO/Founder",
              institution: "EqualRights Educational Services"
            },
            {
              id: 'dr-omachi-daniel',
              name: "Dr. Omachi Daniel",
              role: "Provost",
              institution: "Elyland Prestigious Citadel of Learning"
            },
            {
              id: 'dr-martha-steven-kadiri',
              name: "Dr. Martha Steven-Kadiri",
              role: "Team Leader",
              institution: "University of Port-Harcourt"
            },
            {
              id: 'hon-timothy-adidi',
              name: "Hon. Timothy Adidi D.",
              role: "Team Leader",
              institution: "Veritas University Abuja"
            }
          ].map((leader, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full border border-border/50 overflow-hidden rounded-[2rem] hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="h-64 bg-muted relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-tertiary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                    <Users className="h-24 w-24 text-tertiary/20" />
                  </div>
                </div>
                <CardContent className="p-6 space-y-2 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{leader.name}</h3>
                  <p className="text-sm font-bold uppercase tracking-wider text-primary">{leader.role}</p>
                  <p className="text-sm text-muted-foreground italic line-clamp-2">{leader.institution}</p>
                  
                  <Link to={`/team/${leader.id}`} className="inline-flex items-center text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors mt-4">
                    View Profile <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/team">
            <button className="group inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-sm font-bold text-secondary-foreground transition-all hover:bg-secondary/90 shadow-lg">
              View Full Team
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
