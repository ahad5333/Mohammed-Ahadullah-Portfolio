
import React, { useState, useEffect, useRef } from 'react';
import { ABOUT_CONTENT, PROFILE_IMAGE_URL } from '../constants';

// Fix: Make children prop optional to work around a potential type-checking issue.
const SectionTitle = ({ children }: { children?: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{children}</h2>
);

const About: React.FC = () => {
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
        id="about" 
        className={`py-20 md:py-32 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
       <SectionTitle>About Me</SectionTitle>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex justify-center">
            <img 
                src={PROFILE_IMAGE_URL}
                alt="Profile"
                className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-accent shadow-lg"
            />
        </div>
        <div className="md:w-2/3 text-lg text-slate-500 dark:text-slate-400 space-y-6 text-center md:text-left">
          <p>{ABOUT_CONTENT.p1}</p>
          <p>{ABOUT_CONTENT.p2}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
