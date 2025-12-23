import React from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '@/components/common/PageHero';
import { TeamMemberCard } from '@/components/team/TeamMemberCard';
import { SectionHeader } from '@/components/common/SectionHeader';

const teamMembers = [
  {
    id: 'musa-kabiru-paul',
    name: "Musa Kabiru Paul",
    role: "CEO/Founder",
    institution: "EqualRights Educational Services, Gwagwalada Abuja. Former HOD/Lecturer, Institute of Ecumenical Education, Enugu State."
  },
  {
    id: 'dr-omachi-daniel',
    name: "Dr. Omachi Daniel",
    role: "Provost",
    institution: "Elyland Prestigious Citadel of Learning, Ankpa Kogi State. Faculty of Education, Godfrey Okoye University, Enugu State."
  },
  {
    id: 'dr-martha-steven-kadiri',
    name: "Dr. Martha Steven-Kadiri",
    institution: "University of Port-Harcourt, Rivers State."
  },
  {
    id: 'hon-timothy-adidi',
    name: "Hon. Timothy Adidi D.",
    institution: "Veritas University Abuja."
  },
  {
    id: 'dr-gabriel-itumar',
    name: "Dr. Gabriel Itumar",
    institution: "Salem University Lokoja, Kogi State."
  },
  {
    id: 'hon-patrick-silver',
    name: "Hon. Patrick Silver",
    role: "Former Lecturer",
    institution: "University of Calabar, Cross Rivers State. Currently Based in USA."
  },
  {
    id: 'hon-yakubu-ismila',
    name: "Hon. Yakubu Ismila",
    role: "Doctoral Student",
    institution: "London UK"
  },
  {
    id: 'hon-alex-ohikere',
    name: "Hon. Alex Ohikere",
    role: "Former Lecturer",
    institution: "Federal Polytechnic Keffi Nasarawa State. Former Supervising Councilor for Education, Adavi Local Government Area Kogi State."
  },
  {
    id: 'hon-nsemeke-vincent',
    name: "Hon. Nsemeke Vincent",
    role: "Security Personnel",
    institution: "Gwagwalada Abuja."
  },
  {
    id: 'mr-simeon-araga',
    name: "Mr. Simeon Araga",
    role: "Lecturer",
    institution: "Federal University Of Technology, Minna Niger State."
  },
  {
    id: 'engr-mark-araga',
    name: "Engr. Mark Araga",
    role: "Operational Manager",
    institution: "AMSO Hotel Abuja."
  },
  {
    id: 'mr-james-lawal-enesi',
    name: "Mr. James Lawal Enesi",
    role: "Managing Director",
    institution: "EqualRight Computer Institute, Gwagwalada Abuja."
  }
];

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
        image="/assets/heroes/team.png"
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
