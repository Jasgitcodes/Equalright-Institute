import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/common/SectionHeader';
import { HeroSlider } from '@/components/common/HeroSlider';
import { ArrowRight, GraduationCap, ShieldCheck, Globe, Target, Eye, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

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

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSlider />
      </motion.div>

      {/* Features Section */}
      <section className="container mx-auto relative px-4">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 -z-10" />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <SectionHeader 
            title="Our Core Pillars" 
            subtitle="We focus on three main areas to drive systemic change and individual empowerment."
          />
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {[
            {
              icon: <GraduationCap className="h-10 w-10 text-primary animate-float" />,
              title: "Educational Resources",
              description: "High-quality courses and workshops designed to deepen understanding of civil rights and social justice."
            },
            {
              icon: <ShieldCheck className="h-10 w-10 text-primary animate-float [animation-delay:200ms]" />,
              title: "Advocacy Support",
              description: "Proven strategies and mentorship for individuals and groups looking to make a difference in their communities."
            },
            {
              icon: <Globe className="h-10 w-10 text-primary animate-float [animation-delay:400ms]" />,
              title: "Global Reach",
              description: "A worldwide network of activists and educators collaborating to promote equality on a global scale."
            }
          ].map((feature, i) => (
            <motion.div 
              key={ feature.title }
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="h-full border border-border/60 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 rounded-[2rem] overflow-hidden group">
                <CardHeader className="p-8">
                  <div className="mb-6 bg-tertiary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-tertiary/20 transition-all duration-500 shadow-inner">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8 pt-0">
                  <p className="text-muted-foreground leading-relaxed italic font-medium">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Purpose & Direction Section */}
      <section className="relative py-24 nature-gradient overflow-hidden -mx-24 border border-tertiary/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl -mr-48 -mt-48 animate-pulse" />
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl -ml-48 -mb-48 animate-pulse [animation-delay:1s]" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionHeader 
              title="Our Purpose & Direction" 
              subtitle="Guided by a clear mission and an ambitious vision, we work towards specific, measurable goals for global equality."
              className="mb-8 px-24 "
            />
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl px-24 mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Mission Card */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -12 }}
            >
              <Card className="h-full bg-card/90 backdrop-blur-xl p-6 rounded-[3rem] border border-tertiary/10 shadow-2xl shadow-tertiary/5 space-y-6 flex flex-col items-center text-center group hover:border-tertiary/30 transition-all duration-500 overflow-hidden">
                <CardHeader className="flex flex-col items-center space-y-6">
                  <div className="w-20 h-20 rounded-[1.5rem] bg-tertiary/10 flex items-center justify-center group-hover:bg-tertiary/20 transition-all group-hover:rotate-6 shadow-inner">
                    <Rocket className="h-10 w-10 text-tertiary animate-float" />
                  </div>
                  <CardTitle className="text-3xl font-black gold-gradient tracking-tight">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed font-medium italic">
                    To provide accessible, high-quality educational resources and advocacy tools that empower individuals to champion civil rights and promote systemic equality globally.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -12 }}
            >
              <Card className="h-full bg-card/90 backdrop-blur-xl p-6 rounded-[3rem] border border-tertiary/10 shadow-2xl shadow-tertiary/5 space-y-6 flex flex-col items-center text-center group hover:border-tertiary/30 transition-all duration-500 overflow-hidden">
                <CardHeader className="flex flex-col items-center space-y-6">
                  <div className="w-20 h-20 rounded-[1.5rem] bg-tertiary/10 flex items-center justify-center group-hover:bg-tertiary/20 transition-all group-hover:-rotate-6 shadow-inner">
                    <Eye className="h-10 w-10 text-tertiary animate-float [animation-delay:300ms]" />
                  </div>
                  <CardTitle className="text-3xl font-black gold-gradient tracking-tight">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed font-medium italic">
                    A world where every individual enjoys true equality, justice, and dignity, supported by a global community of informed and active advocates.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Goals Card */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -12 }}
            >
              <Card className="h-full bg-card/90 backdrop-blur-xl p-6 rounded-[3rem] border border-tertiary/10 shadow-2xl shadow-tertiary/5 space-y-6 flex flex-col items-center text-center group hover:border-tertiary/30 transition-all duration-500 overflow-hidden">
                <CardHeader className="flex flex-col items-center space-y-6">
                  <div className="w-20 h-20 rounded-[1.5rem] bg-tertiary/10 flex items-center justify-center group-hover:bg-tertiary/20 transition-all group-hover:rotate-6 shadow-inner">
                    <Target className="h-10 w-10 text-tertiary animate-float [animation-delay:600ms]" />
                  </div>
                  <CardTitle className="text-3xl font-black gold-gradient tracking-tight">Our Goals</CardTitle>
                </CardHeader>
                <CardContent className="w-full">
                  <ul className="text-left space-y-4 text-muted-foreground font-medium">
                    {[
                      "Expand educational reach to 100+ countries.",
                      "Support 500+ grassroots advocacy projects.",
                      "Influence policy change through evidence research."
                    ].map((goal, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start gap-3 transition-transform hover:translate-x-1 duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <span className="h-2 w-2 rounded-full bg-tertiary mt-2 flex-shrink-0" />
                        <span className="italic">{goal}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card/50 backdrop-blur-sm border border-border/60 py-20 rounded-[3rem] mx-4 relative overflow-hidden shadow-inner">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <motion.div 
          className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            { label: "Students Trained", value: "10k+" },
            { label: "Partner Organizations", value: "250+" },
            { label: "Countries Reached", value: "45" },
            { label: "Years of Impact", value: "15" },
          ].map((stat, i) => (
            <motion.div key={i} className="space-y-2" variants={fadeInUp}>
              <div className="text-4xl md:text-5xl font-extrabold gold-gradient drop-shadow-sm">{stat.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action */}
      <motion.section 
        className="text-center space-y-10 py-12 relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-dot-pattern opacity-100 -z-10" />
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Ready to make an impact?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            Sign up for our newsletter or contact us directly to learn how you can get involved today. 
            Join a community of 10,000+ advocates worldwide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/contact" 
                className="group inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-lg font-bold text-primary-foreground transition-all hover:bg-primary/90 shadow-xl shadow-primary/20"
              >
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
