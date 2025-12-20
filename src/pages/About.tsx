import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/common/SectionHeader';
import { PageHero } from '@/components/common/PageHero';
import { Users, Target, Heart } from 'lucide-react';

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div 
          className="space-y-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-black gold-gradient tracking-tight">Why We Do What We Do</h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-medium">
            We believe that education is the most powerful tool for dismantling systemic inequality. By equipping people with logic, empathy, and proven advocacy techniques, we create lasting change.
          </p>
          <motion.div className="space-y-4" variants={staggerContainer}>
            {[
              { icon: <Target className="h-5 w-5" />, text: "Data-driven advocacy strategies" },
              { icon: <Heart className="h-5 w-5" />, text: "Empathy-first communication models" },
              { icon: <Users className="h-5 w-5" />, text: "Community-centric program development" }
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

      <section>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <SectionHeader 
            title="Meet Our Leaders" 
            subtitle="Our team brings together decades of experience in law, education, and grassroots activism."
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
            { name: "Sarah Jenkins", role: "Executive Director", bio: "Former human rights lawyer with 20 years of experience." },
            { name: "Dr. Marcus Chen", role: "Head of Education", bio: "Sociologist and curriculum designer." },
            { name: "Elena Rodriguez", role: "Advocacy Lead", bio: "Expert in community organizing and public policy." },
            { name: "James Wilson", role: "General Counsel", bio: "Dedicated to protecting legal rights." }
          ].map((leader, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="text-center space-y-4 group p-8 rounded-[2.5rem] bg-card border border-tertiary/10 shadow-lg hover:shadow-2xl hover:border-tertiary/30 transition-all duration-500"
            >
              <div className="w-24 h-24 bg-tertiary/10 rounded-full mx-auto mb-6 border-2 border-tertiary/10 overflow-hidden p-1 shadow-inner group-hover:bg-tertiary/20 transition-all duration-500">
                <div className="w-full h-full bg-card rounded-full flex items-center justify-center text-tertiary">
                   <Users className="h-8 w-8 animate-float" />
                </div>
              </div>
              <h3 className="font-extrabold text-xl text-foreground group-hover:gold-gradient transition-all">{leader.name}</h3>
              <p className="text-tertiary text-xs font-black uppercase tracking-[0.2em]">{leader.role}</p>
              <p className="text-xs text-muted-foreground leading-relaxed font-medium">{leader.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default About;
