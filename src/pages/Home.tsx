import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/common/SectionHeader';
import { HeroSlider } from '@/components/common/HeroSlider';
import { ArrowRight, GraduationCap, ShieldCheck, Globe, Target, Eye, Rocket, Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import workshopImg from '@/assets/images/workshop.jpg';
import skillsImg from '@/assets/images/skills.jpg';
import conferenceImg from '@/assets/images/conference.jpg';
import ceoImg from '@/assets/team/musa-kabiru-paul-1.jpg';

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
    <div className="space-y-24 pb-20 -mb-28">
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
            title="Our Core Services"
            subtitle="We provide comprehensive educational services to empower individuals and institutions."
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
              title: "Seminars & Workshops",
              description: "Organizing seminars, conferences, and workshops for educators, students, and the general public on educational issues."
            },
            {
              icon: <ShieldCheck className="h-10 w-10 text-primary animate-float [animation-delay:200ms]" />,
              title: "Field Trips & Mentoring",
              description: "Providing field trip services, quality assurance, and comprehensive mentoring (academic, career, occupational, social)."
            },
            {
              icon: <Globe className="h-10 w-10 text-primary animate-float [animation-delay:400ms]" />,
              title: "Skills Acquisition",
              description: "Providing skills acquisition and potential development programs for youths to foster self-reliance."
            }
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
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
      <section className="relative px-8 py-24 nature-gradient overflow-hidden -mx-20 border border-tertiary/5">
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
              className="mb-8 px-12"
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl px-16 md:px-4 mx-auto"
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
              <Card className="h-full bg-card/90 backdrop-blur-xl p-2 rounded-[3rem] border border-tertiary/10 shadow-2xl shadow-tertiary/5 space-y-4 flex flex-col items-center text-center group hover:border-tertiary/30 transition-all duration-500 overflow-hidden">
                <CardHeader className="flex flex-col items-center space-y-2">
                  <div className="w-20 h-20 rounded-[1.5rem] bg-tertiary/10 flex items-center justify-center group-hover:bg-tertiary/20 transition-all group-hover:rotate-6 shadow-inner">
                    <Rocket className="h-10 w-10 text-tertiary animate-float" />
                  </div>
                  <CardTitle className="text-3xl font-black gold-gradient tracking-tight">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed font-medium italic">
                    To improve the quality of education by providing comprehensive educational services at affordable cost.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -12 }}
            >
              <Card className="h-full bg-card/90 backdrop-blur-xl p-2 rounded-[3rem] border border-tertiary/10 shadow-2xl shadow-tertiary/5 space-y-4 flex flex-col items-center text-center group hover:border-tertiary/30 transition-all duration-500 overflow-hidden">
                <CardHeader className="flex flex-col items-center space-y-2">
                  <div className="w-20 h-20 rounded-[1.5rem] bg-tertiary/10 flex items-center justify-center group-hover:bg-tertiary/20 transition-all group-hover:-rotate-6 shadow-inner">
                    <Eye className="h-10 w-10 text-tertiary animate-float [animation-delay:300ms]" />
                  </div>
                  <CardTitle className="text-3xl font-black gold-gradient tracking-tight">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed font-medium italic">
                    To be among the world class Educational services providers in Africa and the world at large by making our beneficiaries have access to high equality education that meets international standard.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative shadow-2xl border-4 border-card">
              {/* Placeholder for CEO Image */}
              <div className="absolute inset-0 bg-muted flex items-center justify-center">
                <img src={ceoImg} alt="Musa Kabiru Paul" className="w-full h-full object-cover overflow-hidden" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-black">Musa Kabiru Paul</h3>
                <p className="text-lg font-medium opacity-90">CEO & Founder</p>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 bg-card p-6 rounded-[2rem] shadow-xl border border-border/50 max-w-xs hidden md:block">
              <p className="text-sm font-bold italic text-muted-foreground">"Education is the passport to the future, for tomorrow belongs to those who prepare for it today."</p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader
              title="Leadership & Vision"
              subtitle="Under the guidance of Musa Kabiru Paul, EqualRights Educational Services has grown from a visionary idea into a transformative force in the Nigerian educational sector."
              className="text-left items-start"
            />
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                With a background as a former HOD and Lecturer at the Institute of Ecumenical Education, Enugu State, our CEO brings a wealth of academic and administrative experience.
              </p>
              <p>
                His vision is to create a world-class educational service provider that not only meets international standards but also remains accessible to all beneficiaries.
              </p>
            </div>
            <Link to="/team/musa-kabiru-paul">
              <button className="group inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 shadow-lg shadow-primary/20 mt-4">
                Read Full Bio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Recent Events Section */}
      <section className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <SectionHeader
            title="Recent Events"
            subtitle="Catch up on our latest seminars, workshops, and community outreach programs."
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* import workshopImg from '@/assets/images/workshop.jpg';
import skillsImg from '@/assets/images/skills.jpg';
import conferenceImg from '@/assets/images/conference.jpg'; */}

          {/* // ... inside the component ... */}

          {[
            {
              id: "educators-workshop-2024",
              title: "Educators Workshop 2024",
              date: "March 15, 2024",
              location: "Gwagwalada, Abuja",
              description: "A comprehensive training session for teachers and school managers focusing on modern pedagogical strategies.",
              image: workshopImg
            },
            {
              id: "youth-skills-summit",
              title: "Youth Skills Summit",
              date: "February 20, 2024",
              location: "Main Hall, Abuja",
              description: "Empowering youths with practical skills for self-reliance and career development.",
              image: skillsImg
            },
            {
              id: "annual-educational-conference",
              title: "Annual Educational Conference",
              date: "January 10, 2024",
              location: "Virtual Event",
              description: "Bringing together stakeholders to discuss the future of education in Nigeria.",
              image: conferenceImg
            }
          ].map((event, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full border border-border/50 overflow-hidden rounded-[2rem] hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="h-48 bg-muted relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-tertiary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                    {/* <Calendar className="h-12 w-12 text-tertiary/40" /> */}
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <CardContent className="p-6 space-y-4 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="truncate max-w-[100px]">{event.location}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">{event.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-grow">{event.description}</p>
                  <Link to={`/events/${event.id}`} className="text-primary font-bold text-sm flex items-center gap-2 group/btn mt-4">
                    Read Recap <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-card/50 backdrop-blur-sm border border-border/60 py-20 rounded-[3rem] mx-4 relative overflow-hidden shadow-inner">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <motion.div
          className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-2 md:px-0 md:divide-x-2 divide-border text-center relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            { label: "Students Impacted", value: "Growing" },
            { label: "Partner Schools", value: "Multiple" },
            { label: "States Reached", value: "Nationwide" },
            { label: "Years Active", value: "1+" },
          ].map((stat, i) => (
            <motion.div key={i} className="space-y-2" variants={fadeInUp}>
              <div className="text-2xl md:text-3xl font-extrabold gold-gradient drop-shadow-sm">{stat.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action */}
      <motion.section
        className="text-center relative px-8 py-24 nature-gradient overflow-hidden -mx-20 border border-tertiary/5"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl -mr-48 -mt-48 animate-pulse" />
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl -ml-48 -mb-48 animate-pulse [animation-delay:1s]" />

        <div className="absolute inset-0 bg-dot-pattern opacity-100 -z-10" />
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Ready to make an impact?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            Join us in our mission to transform the educational sector. Contact us today to learn more about our services and programs.
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
