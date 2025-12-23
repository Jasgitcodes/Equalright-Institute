import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageHero } from '@/components/common/PageHero';
import { ArrowLeft, User, Mail, Phone, MapPin, Award, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import teamHeroImg from '@/assets/heroes/team.png';
import { teamMembers } from '@/data/team';

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
        image={member.image || teamHeroImg}
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
               {member.image ? (
                 <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
               ) : (
                 <div className="absolute inset-0 flex items-center justify-center bg-tertiary/10">
                   <User className="h-32 w-32 text-tertiary/20" />
                 </div>
               )}
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
