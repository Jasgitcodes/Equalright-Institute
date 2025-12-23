import React from 'react';
import { PageHero } from '@/components/common/PageHero';
import { WaitlistForm } from '@/features/waitlist/WaitlistForm';
import { Sparkles, Zap, ShieldCheck } from 'lucide-react';
import waitlistHeroImg from '@/assets/heroes/waitlist.png';

const Waitlist: React.FC = () => {
  return (
    <div className="space-y-24 pb-20">
      <PageHero 
        title="Be Part of the Future"
        subtitle="Something big is coming. Join our exclusive waitlist for early beta access and founding member benefits."
        image={waitlistHeroImg}
      />
      
      <div className="container mx-auto px-4 flex justify-center">
        <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
             <h2 className="text-3xl font-bold text-foreground">Why join early?</h2>
             <ul className="space-y-6">
               {[
                 { icon: <Zap className="h-5 w-5" />, title: "Beta Access", desc: "Test new features before anyone else." },
                 { icon: <ShieldCheck className="h-5 w-5" />, title: "Exclusive Webinars", desc: "Private sessions with our leadership." },
                 { icon: <Sparkles className="h-5 w-5" />, title: "Launch Discounts", desc: "Get up to 50% off your first workshop seat." }
               ].map((benefit, i) => (
                 <li key={i} className="flex items-start space-x-5 group">
                   <div className="bg-accent-foreground  shadow-xl shadow-primary/40 p-3 rounded-2xl text-primary group-hover:border-primary/70 group-hover:border group-hover:scale-110 transition-transform">{benefit.icon}</div>
                   <div className="space-y-1">
                     <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">{benefit.title}</h3>
                     <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                   </div>
                 </li>
               ))}
             </ul>
          </div>
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
