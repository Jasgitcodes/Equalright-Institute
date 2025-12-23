import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/common/SectionHeader';
import { PageHero } from '@/components/common/PageHero';
import { Zap, BookOpen, MessageSquare, Award, Clock, Star, ArrowRight, Users, Briefcase, GraduationCap, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import servicesHeroImg from '@/assets/heroes/services.png';

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

const Services: React.FC = () => {
  return (
    <div className="space-y-24 pb-20">
      <PageHero 
        title="Our Services"
        subtitle="Empowering individuals and organizations through professional training, strategic advocacy, and global support."
        image={servicesHeroImg}
      />
        
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 container mx-auto px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
          {[
            {
              icon: <Zap className="h-10 w-10" />,
              title: "Seminars & Conferences",
              price: "Educational",
              features: ["For Educators & Students", "Public Workshops", "Educational Issues", "Expert Speakers"]
            },
            {
              icon: <Map className="h-10 w-10" />,
              title: "Field Trips & Mentoring",
              price: "Comprehensive",
              features: ["Quality Assurance", "Academic Mentoring", "Career Guidance", "Social Mentoring"]
            },
            {
              icon: <MessageSquare className="h-10 w-10" />,
              title: "Advisory Roles",
              price: "Strategic",
              features: ["NGO Formation", "Educational Consulting", "Policy Advice", "Organizational Support"]
            },
            {
              icon: <Briefcase className="h-10 w-10" />,
              title: "Skills Acquisition",
              price: "Development",
              features: ["Youth Programs", "Potential Development", "Vocational Training", "Self-Reliance"]
            },
            {
              icon: <GraduationCap className="h-10 w-10" />,
              title: "Tutorial Programs",
              price: "Academic",
              features: ["All Levels", "Exam Preparation", "Subject Mastery", "Personalized Learning"]
            }
          ].map((service, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              whileHover={{ y: -12 }}
              className="p-10 border border-tertiary/10 rounded-[3rem] bg-card/80 backdrop-blur-xl space-y-8 relative overflow-hidden group hover:border-tertiary/30 transition-all duration-500 shadow-xl shadow-tertiary/5"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
              <div className="bg-tertiary/10 w-20 h-20 rounded-2xl flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-tertiary-foreground transition-all duration-500 shadow-inner">
                {service.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black tracking-tight text-foreground">{service.title}</h3>
                <div className="text-lg font-black gold-gradient uppercase tracking-widest">{service.price}</div>
              </div>
              <ul className="space-y-4 text-muted-foreground text-sm font-medium">
                {service.features.map((feature, j) => (
                  <motion.li 
                    key={j} 
                    className="flex items-center space-x-3"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-tertiary/10 flex items-center justify-center">
                       <Star className="h-2.5 w-2.5 text-tertiary fill-tertiary" />
                    </div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 py-4 rounded-full bg-primary text-primary-foreground font-black transition-all shadow-lg shadow-primary/20"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

      <motion.section 
        className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-card border border-tertiary/10 p-12 rounded-[3.5rem] shadow-2xl shadow-tertiary/5 relative overflow-hidden container mx-auto px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.05]" />
        <div className="space-y-8 relative z-10">
          <h2 className="text-4xl font-black italic gold-gradient leading-tight tracking-tight">"The training I received changed the way I interact with everyone in my life, not just those I'm advocating for."</h2>
          <div className="flex items-center space-x-5">
            <div className="w-16 h-16 rounded-3xl bg-tertiary/20 flex items-center justify-center">
              <Users className="h-8 w-8 text-tertiary animate-float" />
            </div>
            <div>
              <div className="font-black text-xl">Jordan Smith</div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Professional Advocate, NYC</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-10 relative z-10">
          <h3 className="text-3xl font-black tracking-tight">Why choose EESA?</h3>
          <motion.div className="grid grid-cols-1 gap-6" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div className="flex items-start space-x-6 p-6 bg-tertiary/5 rounded-3xl border border-tertiary/10" variants={fadeInUp}>
               <div className="bg-primary p-3 rounded-2xl shadow-lg shadow-primary/20">
                <Award className="h-6 w-6 text-primary-foreground" />
               </div>
               <div>
                 <p className="font-black text-lg">Accredited Programs</p>
                 <p className="text-sm text-muted-foreground font-medium">Recognized by major educational bodies.</p>
               </div>
            </motion.div>
            <motion.div className="flex items-start space-x-6 p-6 bg-tertiary/5 rounded-3xl border border-tertiary/10" variants={fadeInUp}>
               <div className="bg-primary p-3 rounded-2xl shadow-lg shadow-primary/20">
                <Clock className="h-6 w-6 text-primary-foreground" />
               </div>
               <div>
                 <p className="font-black text-lg">Flexible Learning</p>
                 <p className="text-sm text-muted-foreground font-medium">Options for every schedule and learning style.</p>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.div 
        className="text-center pt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Link to="/contact" className="group text-primary font-black text-xl hover:gold-gradient transition-all flex items-center justify-center gap-2">
          Have questions about our custom programs? 
          <span className="flex items-center group-hover:translate-x-2 transition-transform">
            Get in touch <ArrowRight className="ml-2 h-6 w-6" />
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Services;
