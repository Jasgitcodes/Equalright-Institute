import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageHero } from '@/components/common/PageHero';
import { ArrowLeft, Calendar, MapPin, Clock, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

// This would ideally come from a shared data source or API
const events = [
  {
    id: 'educators-workshop-2024',
    title: "Educators Workshop 2024",
    date: "March 15, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "Gwagwalada, Abuja",
    description: "A comprehensive training session for teachers and school managers focusing on modern pedagogical strategies.",
    content: `
      <p>Our recent Educators Workshop brought together over 50 teachers and school administrators from across the Gwagwalada region. The focus of this intensive one-day session was to explore modern pedagogical strategies that can be implemented in classrooms with limited resources.</p>
      
      <h3>Key Topics Covered:</h3>
      <ul>
        <li>Student-centered learning techniques</li>
        <li>Integrating technology in the classroom</li>
        <li>Classroom management and discipline</li>
        <li>Inclusive education practices</li>
      </ul>

      <p>The feedback from participants was overwhelmingly positive, with many citing the practical breakout sessions as the highlight of the day. We are committed to continuing these workshops to support the professional development of our local educators.</p>
    `,
    image: "/assets/images/workshop.jpg"
  },
  {
    id: 'youth-skills-summit',
    title: "Youth Skills Summit",
    date: "February 20, 2024",
    time: "10:00 AM - 2:00 PM",
    location: "Main Hall, Abuja",
    description: "Empowering youths with practical skills for self-reliance and career development.",
    content: `
      <p>The Youth Skills Summit was a landmark event for EqualRights Educational Services. We hosted over 200 young people for a day of inspiration, learning, and networking.</p>
      <p>Industry experts shared insights on the future of work, entrepreneurship, and the importance of digital literacy. Participants also had the opportunity to sign up for our upcoming skills acquisition programs.</p>
    `,
    image: "/assets/images/skills.jpg"
  },
  {
    id: 'annual-educational-conference',
    title: "Annual Educational Conference",
    date: "January 10, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Virtual Event",
    description: "Bringing together stakeholders to discuss the future of education in Nigeria.",
    content: `
      <p>Our inaugural Annual Educational Conference was held virtually, allowing us to reach a global audience. The theme was "Transforming Education for a Digital Age".</p>
      <p>Speakers included renowned educationalists, policymakers, and tech innovators. The discussions centered on the challenges and opportunities facing the Nigerian educational sector and the role of private providers in bridging the gap.</p>
    `,
    image: "/assets/images/conference.jpg"
  }
];

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = events.find(e => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-bold">Event Not Found</h2>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </div>
    );
  }

  return (
    <div className="space-y-20 pb-20">
      <PageHero 
        title={event.title}
        subtitle="Event Recap & Highlights"
        image="/assets/heroes/events.png"
      />

      <div className="container mx-auto px-4 max-w-5xl">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="aspect-video bg-muted rounded-[2rem] overflow-hidden relative shadow-xl">
               <div className="absolute inset-0 flex items-center justify-center bg-tertiary/10">
                 <Calendar className="h-24 w-24 text-tertiary/20" />
               </div>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: event.content }} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="p-8 bg-card border border-border/50 rounded-[2rem] shadow-lg space-y-6 sticky top-24">
              <h3 className="font-bold text-xl mb-4">Event Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-muted-foreground">Date</p>
                    <p className="font-medium">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-muted-foreground">Time</p>
                    <p className="font-medium">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-muted-foreground">Location</p>
                    <p className="font-medium">{event.location}</p>
                  </div>
                </div>
              </div>

              <hr className="border-border/50" />

              <Button className="w-full gap-2" variant="outline">
                <Share2 className="h-4 w-4" /> Share Event
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventDetails;
