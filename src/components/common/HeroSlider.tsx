import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    title: "Advancing Equality Through Education",
    subtitle: "Mission-Driven",
    description: "Empowering communities with the intellectual tools and advocacy training needed to build a more just and inclusive society for everyone.",
    image: "/assets/images/hero_mission.png",
    cta: "Our Mission",
    link: "/about"
  },
  {
    title: "Comprehensive Educational Resources",
    subtitle: "Our Services",
    description: "From intensive workshops to digital learning platforms, we provide authoritative resources designed to maximize your social impact.",
    image: "/assets/images/hero_services.png",
    cta: "Explore Services",
    link: "/services"
  },
  {
    title: "A Decade of Systemic Social Impact",
    subtitle: "Proven Results",
    description: "Partnering with global organizations to implement evidence-based equity frameworks that transform institutional cultures and policies.",
    image: "/assets/images/hero_impact.png",
    cta: "See Our Impact",
    link: "/services"
  }
];

export const HeroSlider: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [progress, setProgress] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
      setProgress(0); // Reset progress on manual change
    };

    api.on("select", onSelect);

    // Simple progress interval (rough approximation of autoplay delay)
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50); // 50ms * 100 = 5000ms

    return () => {
      api.off("select", onSelect);
      clearInterval(interval);
    };
  }, [api]);

  return (
    <section className="relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] overflow-hidden -mt-8 group">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={() => {
          plugin.current.stop();
        }}
        onMouseLeave={() => {
          plugin.current.reset();
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[600px] md:h-[800px] w-full overflow-hidden">
                {/* Background Image with Overlay */}
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-[5000ms] ease-linear scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent flex items-center">
                  <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
                  <div className="container mx-auto px-6 md:px-24 max-w-7xl">
                    <div className="max-w-2xl space-y-4 md:space-y-8">
                      <div className="inline-flex items-center space-x-2 animate-soft-reveal">
                        <span className="h-0.5 w-6 md:w-8 bg-primary rounded-full" />
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary/80">
                          {slide.subtitle}
                        </span>
                      </div>
                      
                      <h1 className="text-4xl md:text-8xl font-extrabold tracking-tight text-foreground leading-[1.1] md:leading-[1.05] animate-soft-reveal [animation-delay:100ms]">
                        {slide.title}
                      </h1>
                      
                      <p className="text-base md:text-2xl text-muted-foreground leading-relaxed max-w-xl line-clamp-3 md:line-clamp-none animate-soft-reveal [animation-delay:200ms]">
                        {slide.description}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 pt-4 md:pt-6 animate-soft-reveal [animation-delay:300ms]">
                        <Button asChild size="lg" className="group w-full sm:w-auto rounded-full px-8 md:px-10 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 h-14 md:h-16 text-base md:text-lg font-bold transition-all hover:scale-105 active:scale-95">
                          <Link to={slide.link}>
                            {slide.cta}
                            <ArrowRight className="ml-2 md:ml-3 h-5 md:h-6 w-5 md:w-6 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                        <Button variant="ghost" asChild size="lg" className="w-full sm:w-auto text-primary hover:text-primary hover:bg-primary/5 rounded-full font-bold text-base md:text-lg h-14 md:h-16 group">
                          <Link to="/contact">
                            Discuss a Partnership
                            <span className="block h-0.5 w-0 bg-primary transition-all group-hover:w-full mt-0.5" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Progress Indicators */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-background/20 z-30">
          <div 
            className="h-full bg-primary transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Navigation Overlays - Hidden on mobile, shown on md+ */}
        {/* Previous Button - Left Side */}
        <div className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0">
          <CarouselPrevious className="relative left-0 translate-x-0 h-16 w-16 bg-background/80 border-none hover:bg-primary hover:text-primary-foreground shadow-2xl backdrop-blur-md transition-all hover:scale-110 active:scale-95" />
        </div>

        {/* Next Button - Right Side */}
        <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
          <CarouselNext className="relative right-0 translate-x-0 h-16 w-16 bg-background/80 border-none hover:bg-primary hover:text-primary-foreground shadow-2xl backdrop-blur-md transition-all hover:scale-110 active:scale-95" />
        </div>

        {/* Status Indicator - Bottom Center */}
        <div className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 z-30 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
          <div className="flex items-center space-x-3 px-6 md:px-8 py-2 md:py-3 bg-background/80 backdrop-blur-md rounded-full text-xs md:text-sm font-bold tracking-[0.2em] text-muted-foreground shadow-xl border border-primary/10">
            <span className="text-primary">{current + 1}</span>
            <span className="opacity-20 text-foreground">|</span>
            <span>{slides.length}</span>
          </div>
        </div>
      </Carousel>
    </section>
  );
};
