
import React, { useState, useEffect, useRef } from 'react';
import { SKILLS_CONTENT } from '../constants';

// Fix: Make children prop optional to work around a potential type-checking issue.
const SectionTitle = ({ children }: { children?: React.ReactNode }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{children}</h2>
);

const Skills: React.FC = () => {
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
        id="skills" 
        className={`py-20 md:py-32 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
        <SectionTitle>My Tech Stack</SectionTitle>
      <div className="space-y-12">
        {SKILLS_CONTENT.map((category) => (
          <div key={category.name}>
            <h3 className="text-2xl font-semibold text-center mb-8">{category.name}</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-2 group">
                  <div className="p-4 bg-white dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-800 transition-all duration-300 group-hover:bg-accent/10 dark:group-hover:bg-dark-accent/20 group-hover:border-accent dark:group-hover:border-dark-accent group-hover:-translate-y-1">
                    <skill.icon className="h-12 w-12 text-slate-500 dark:text-slate-400 group-hover:text-accent dark:group-hover:text-dark-accent transition-colors duration-300" />
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-50 transition-colors duration-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
