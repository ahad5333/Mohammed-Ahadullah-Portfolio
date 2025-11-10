
import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS_CONTENT } from '../constants';
import type { TestimonialItem } from '../types';

const SectionTitle = ({ children }: { children?: React.ReactNode }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{children}</h2>
);

const QuoteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/>
  </svg>
);

const TestimonialCard: React.FC<{ testimonial: TestimonialItem; index: number }> = ({ testimonial, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentCardRef = cardRef.current;
        if (currentCardRef) {
            observer.observe(currentCardRef);
        }

        return () => {
            if (currentCardRef) {
                observer.unobserve(currentCardRef);
            }
        };
    }, []);
    
    const animationStyle: React.CSSProperties = {
        animationDelay: `${index * 150}ms`,
        animationFillMode: 'backwards',
    };

    return (
        <div
            ref={cardRef}
            className={`flex flex-col justify-between p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-rose-500/20 dark:hover:shadow-rose-400/20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={animationStyle}
        >
            <div>
                <QuoteIcon className="h-8 w-8 text-accent/50 dark:text-dark-accent/50 mb-4" />
                <p className="text-slate-500 dark:text-slate-400 italic mb-6">"{testimonial.quote}"</p>
            </div>
            <div className="flex items-center gap-4 mt-auto">
                {testimonial.avatarUrl && (
                     <img 
                        src={testimonial.avatarUrl} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-accent/50"
                     />
                )}
                <div>
                    <p className="font-bold text-slate-800 dark:text-slate-50">{testimonial.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.title}</p>
                </div>
            </div>
        </div>
    );
};


const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
      const observer = new IntersectionObserver(
          ([entry]) => {
              if (entry.isIntersecting) {
                  setIsVisible(true);
                  observer.unobserve(entry.target);
              }
          },
          { threshold: 0.1 }
      );

      const currentRef = sectionRef.current;
      if (currentRef) {
          observer.observe(currentRef);
      }

      return () => {
          if (currentRef) {
              observer.unobserve(currentRef);
          }
      };
  }, []);

  return (
    <section 
        ref={sectionRef}
        id="testimonials" 
        className={`py-20 md:py-32 -mx-6 md:-mx-12 px-6 md:px-12 bg-slate-100/50 dark:bg-slate-900/50 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
        <SectionTitle>What People Say</SectionTitle>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS_CONTENT.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
        </div>
    </section>
  );
};

export default Testimonials;
