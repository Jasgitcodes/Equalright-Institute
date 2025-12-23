import React from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '@/components/common/PageHero';
import { TeamMemberCard } from '@/components/team/TeamMemberCard';
import { SectionHeader } from '@/components/common/SectionHeader';
import teamHeroImg from '@/assets/heroes/team.png';
import { teamMembers } from '@/data/team';

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const Team: React.FC = () => {
  return (
    <div className="space-y-24 pb-20">
      <PageHero 
        title="Our Team"
        subtitle="Meet the dedicated professionals driving our mission forward."
        image={teamHeroImg}
      />

      <section className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <SectionHeader 
            title="The Minds Behind EESA" 
            subtitle="A diverse team of educators, leaders, and advocates committed to excellence."
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <TeamMemberCard {...member} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Team;
