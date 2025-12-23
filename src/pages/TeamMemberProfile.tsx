import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageHero } from '@/components/common/PageHero';
import { ArrowLeft, User, Mail, Phone, MapPin, Award, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

// This would ideally come from a shared data source or API
const teamMembers = [
  {
    id: 'musa-kabiru-paul',
    name: "Musa Kabiru Paul",
    role: "CEO/Founder",
    institution: "EqualRights Educational Services, Gwagwalada Abuja",
    bio: "Former HOD/Lecturer, Institute of Ecumenical Education, Enugu State. A visionary leader dedicated to transforming the educational landscape in Nigeria.",
    details: [
      "Experienced Educational Administrator",
      "Expert in Curriculum Development",
      "Advocate for Educational Equality"
    ],
    contact: {
      email: "equalrightseducationalservices@gmail.com",
      phone: "07034723374"
    }
  },
  {
    id: 'dr-omachi-daniel',
    name: "Dr. Omachi Daniel",
    role: "Provost",
    institution: "Elyland Prestigious Citadel of Learning, Ankpa Kogi State",
    bio: "Faculty of Education, Godfrey Okoye University, Enugu State. A distinguished academic with a passion for teacher training and educational research.",
    details: [
      "PhD in Education",
      "Published Researcher",
      "Teacher Training Specialist"
    ]
  },
  {
    id: 'dr-martha-steven-kadiri',
    name: "Dr. Martha Steven-Kadiri",
    role: "Team Leader",
    institution: "University of Port-Harcourt, Rivers State",
    bio: "An experienced educator and administrator contributing to the strategic direction of EqualRights Educational Services.",
    details: [
      "University Lecturer",
      "Educational Consultant"
    ]
  },
  {
    id: 'hon-timothy-adidi',
    name: "Hon. Timothy Adidi D.",
    role: "Team Leader",
    institution: "Veritas University Abuja",
    bio: "Bringing academic rigor and administrative expertise to the team.",
    details: [
      "Academic Leader",
      "Policy Advisor"
    ]
  },
   {
    id: 'dr-gabriel-itumar',
    name: "Dr. Gabriel Itumar",
    role: "Team Leader",
    institution: "Salem University Lokoja, Kogi State",
    bio: "Contributing expertise in higher education management and quality assurance.",
    details: [
      "Higher Education Expert",
      "Quality Assurance Specialist"
    ]
  },
  {
    id: 'hon-patrick-silver',
    name: "Hon. Patrick Silver",
    role: "Former Lecturer",
    institution: "University of Calabar, Cross Rivers State. Currently Based in USA",
    bio: "Bringing international perspective and experience to the organization.",
    details: [
      "International Education",
      "Cross-cultural Communication"
    ]
  },
  {
    id: 'hon-yakubu-ismila',
    name: "Hon. Yakubu Ismila",
    role: "Doctoral Student",
    institution: "London UK",
    bio: "Currently pursuing advanced studies in education, bringing fresh insights and global best practices.",
    details: [
      "Educational Research",
      "Global Education Trends"
    ]
  },
  {
    id: 'hon-alex-ohikere',
    name: "Hon. Alex Ohikere",
    role: "Former Lecturer",
    institution: "Federal Polytechnic Keffi Nasarawa State",
    bio: "Former Supervising Councilor for Education, Adavi Local Government Area Kogi State. Experienced in both academic and government educational sectors.",
    details: [
      "Public Administration",
      "Educational Policy"
    ]
  },
  {
    id: 'hon-nsemeke-vincent',
    name: "Hon. Nsemeke Vincent",
    role: "Security Personnel",
    institution: "Gwagwalada Abuja",
    bio: "Ensuring the safety and security of our educational environment.",
    details: [
      "Security Management",
      "Safety Protocols"
    ]
  },
  {
    id: 'mr-simeon-araga',
    name: "Mr. Simeon Araga",
    role: "Lecturer",
    institution: "Federal University Of Technology, Minna Niger State",
    bio: "An academic committed to student success and research excellence.",
    details: [
      "University Teaching",
      "Student Mentorship"
    ]
  },
  {
    id: 'engr-mark-araga',
    name: "Engr. Mark Araga",
    role: "Operational Manager",
    institution: "AMSO Hotel Abuja",
    bio: "Managing operations and logistics to ensure smooth service delivery.",
    details: [
      "Operations Management",
      "Logistics"
    ]
  },
  {
    id: 'mr-james-lawal-enesi',
    name: "Mr. James Lawal Enesi",
    role: "Managing Director",
    institution: "EqualRight Computer Institute, Gwagwalada Abuja",
    bio: "Leading the technology and computer literacy initiatives.",
    details: [
      "IT Management",
      "Computer Education"
    ]
  }
];

const TeamMemberProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const member = teamMembers.find(m => m.id === id);

  if (!member) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-bold">Team Member Not Found</h2>
        <Button onClick={() => navigate('/team')}>Back to Team</Button>
      </div>
    );
  }

  return (
    <div className="space-y-20 pb-20">
      <PageHero 
        title={member.name}
        subtitle={member.role || "Team Member"}
        image="/assets/heroes/team.png"
      />

      <div className="container mx-auto px-4">
        <Link to="/team" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Team
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Sidebar / Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1 space-y-6"
          >
            <div className="aspect-square bg-muted rounded-[2rem] overflow-hidden relative shadow-xl border border-border/50">
               {/* Placeholder for actual image */}
               <div className="absolute inset-0 flex items-center justify-center bg-tertiary/10">
                 <User className="h-32 w-32 text-tertiary/20" />
               </div>
            </div>
            
            <div className="p-6 bg-card border border-border/50 rounded-2xl space-y-4 shadow-sm">
              <h3 className="font-bold text-lg">Contact Info</h3>
              {member.contact ? (
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>{member.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>{member.contact.phone}</span>
                  </div>
                </div>
              ) : (
                <p className="text-muted-foreground text-sm italic">Contact details available upon request.</p>
              )}
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-3xl font-black mb-2">{member.name}</h2>
              <p className="text-xl text-primary font-bold uppercase tracking-wider">{member.role}</p>
              <p className="text-lg text-muted-foreground mt-2 italic">{member.institution}</p>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-tertiary" /> Biography
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {member.bio}
              </p>
            </div>

            {member.details && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Award className="h-5 w-5 text-tertiary" /> Expertise & Focus
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {member.details.map((detail, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl border border-border/50">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberProfile;
