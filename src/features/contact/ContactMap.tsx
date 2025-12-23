import React, { useState, useEffect } from 'react';
import { MapPin, WifiOff, RefreshCw } from 'lucide-react';

export const ContactMap: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleRetry = () => {
    setIsOnline(navigator.onLine);
    if (navigator.onLine) {
      setIsLoading(true);
    }
  };

  if (!isOnline) {
    return (
      <section className="relative h-[400px] lg:h-[500px] w-full rounded-[3rem] overflow-hidden border border-border/50 bg-muted/30 flex flex-col items-center justify-center space-y-6 p-8 text-center animate-in fade-in duration-500">
        <div className="bg-background shadow-2xl p-6 rounded-full text-muted-foreground animate-bounce">
          <WifiOff className="h-12 w-12" />
        </div>
        <div className="space-y-2 max-w-md">
          <h3 className="text-xl font-bold">Internet Connection Required</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We couldn't load the map because you're currently offline. Please check your internet connection and try again.
          </p>
        </div>
        <button
          onClick={handleRetry}
          className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Retry Connection</span>
        </button>
      </section>
    );
  }

  return (
    <section className="relative h-[400px] lg:h-[500px] w-full rounded-[3rem] overflow-hidden border border-border/50 shadow-2xl group">
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse z-10 flex items-center justify-center">
           <div className="flex flex-col items-center space-y-4">
             <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
             <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Loading Map...</p>
           </div>
        </div>
      )}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.847738226!2d7.3820429!3d9.0764785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48971%3A0x1bb3f1a045747050!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1703238000000!5m2!1sen!2sng"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        referrerPolicy="no-referrer-when-downgrade"
        className="grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
        title="ERI Headquarters Location - Abuja"
      />
      <div className="absolute bottom-6 left-6 right-6 lg:left-10 lg:bottom-10 pointer-events-none z-20">
        <div className="inline-flex items-center space-x-3 bg-background/80 backdrop-blur-md border border-border/50 p-4 rounded-2xl shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="bg-primary p-2 rounded-lg text-primary-foreground">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Our Location</p>
            <p className="font-bold text-sm">Abuja, Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  );
};
