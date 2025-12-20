import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { WaitlistForm } from '@/features/waitlist/WaitlistForm';
import { Sparkles, Zap, ShieldCheck } from 'lucide-react';

const Waitlist: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-12 space-y-12">
      <section className="max-w-3xl text-center space-y-6">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
          <Sparkles className="h-6 w-6" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
           Something <span className="text-primary italic">Big</span> is Coming
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          We're building an entirely new digital experience for our students and partners. Join our waitlist to be the first invited to the beta launch.
        </p>
      </section>

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
                 <div className="bg-accent p-3 rounded-2xl text-primary group-hover:scale-110 transition-transform">{benefit.icon}</div>
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
  );
};

export default Waitlist;
