import React from 'react';
import { motion } from 'framer-motion';
import { User, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface TeamMemberProps {
  id?: string;
  name: string;
  role?: string;
  institution?: string;
  image?: string;
}

export const TeamMemberCard: React.FC<TeamMemberProps> = ({ id, name, role, institution, image }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Card className="h-full bg-card border border-border/50 overflow-hidden group hover:border-primary/30 transition-all duration-300 rounded-[2rem] shadow-sm hover:shadow-xl flex flex-col">
        <CardHeader className="p-0 relative h-64 bg-muted/30 overflow-hidden shrink-0">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-tertiary/5 group-hover:bg-tertiary/10 transition-colors">
              <User className="h-24 w-24 text-tertiary/20" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60" />
        </CardHeader>
        <CardContent className="p-6 space-y-4 relative flex flex-col flex-grow">
          <div className="space-y-1 flex-grow">
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{name}</h3>
            {role && <p className="text-sm font-bold uppercase tracking-wider text-primary">{role}</p>}
            {institution && <p className="text-sm text-muted-foreground italic line-clamp-3">{institution}</p>}
          </div>
          
          {id && (
            <Link to={`/team/${id}`} className="inline-flex items-center text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors mt-4">
              View Profile <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};
