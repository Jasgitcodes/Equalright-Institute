import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ContactForm } from '@/features/contact/ContactForm';
import { ContactMap } from '@/features/contact/ContactMap';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="space-y-20 pb-20 ">
      <section className="w-full px-4 py-20">
        <SectionHeader 
          title="Get in Touch" 
          subtitle="Have a question or want to partner with us? We'd love to hear from you."
        />
      </section>
      {/* Hero Map Section */}
      {/* <section className="w-full px-4 pt-8">
        <ContactMap />
      </section> */}


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-4 align-middle container mx-auto">
        <div className="space-y-8 min-h-max">
          <div className="prose dark:prose-invert">
            <h2 className="text-3xl font-bold tracking-tight">We're here to support you.</h2>
            <p className="text-muted-foreground lg:text-lg">
              Our team typically responds within 24-48 business hours. For urgent partnership inquiries, please include "URGENT" in your subject line.
            </p>
          </div>

          <div className="space-y-3">
            {[
              { icon: <Mail className="h-4 w-4" />, title: "Email", value: "equalrightseducationalservices@gmail.com" },
              { icon: <Phone className="h-4 w-4" />, title: "Phone", value: "07034723374, 08050832281" },
              { icon: <MapPin className="h-4 w-4" />, title: "Headquarters", value: "Oduntayo close. Opposite, G.S.S Gwagwalada, Abuja, Nig." }
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-5 p-3 rounded-[2rem] border border-border/50 bg-card shadow-sm hover:border-primary/20 transition-all">
                <div className="bg-accent-foreground shadow-xl shadow-primary/40 p-3 rounded-2xl text-primary">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-xs tracking-widest uppercase text-muted-foreground mb-1">{item.title}</h3>
                  <p className="font-semibold text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <ContactMap />

          
        </div>

        <div className="space-y-16"> 
          <ContactForm />

          <div className="p-10 rounded-[2.5rem] bg-primary/5 border border-primary/10 space-y-4 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-16 translate-x-16" />
             <h3 className="text-xl font-bold text-primary">In-person visits</h3>
             <p className="text-sm text-muted-foreground leading-relaxed">Please note that our headquarters are only open to the public for scheduled workshops and by appointment only.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
