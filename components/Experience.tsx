
import React, { useState, useEffect, useRef } from 'react';
import { EXPERIENCE_CONTENT } from '../constants';

// Fix: Make children prop optional to work around a potential type-checking issue.
const SectionTitle = ({ children }: { children?: React.ReactNode }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{children}</h2>
);

const Experience: React.FC = () => {
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
          {
              threshold: 0.1,
          }
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
        id="experience" 
        className={`py-20 md:py-32 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
        <SectionTitle>Work Experience</SectionTitle>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-slate-300 dark:bg-slate-700"></div>
        {EXPERIENCE_CONTENT.map((item, index) => (
          <div key={index} className="relative mb-12">
            <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className={`p-6 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-rose-500/20 dark:hover:shadow-rose-400/20 ${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-50">{item.role}</h3>
                  <p className="text-md font-semibold text-accent dark:text-dark-accent mb-1">{item.company}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{item.duration}</p>
                  <ul className="list-disc list-inside text-slate-500 dark:text-slate-400 space-y-2 mb-4 text-left">
                    {item.description.map((point, i) => <li key={i}>{point}</li>)}
                  </ul>
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'}`}>
                    {item.technologies.map((tech) => (
                      <span key={tech} className="bg-accent/10 text-accent dark:bg-dark-accent/20 dark:text-dark-accent text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
             <div className="absolute left-1/2 -translate-x-1/2 top-1/2 w-4 h-4 bg-accent rounded-full border-4 border-slate-50 dark:border-slate-900"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
