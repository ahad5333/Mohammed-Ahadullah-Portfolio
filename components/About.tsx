import React from 'react';
import { ABOUT_CONTENT } from '../constants';

// Fix: Make children prop optional to work around a potential type-checking issue.
const SectionTitle = ({ children }: { children?: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{children}</h2>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32">
       <SectionTitle>About Me</SectionTitle>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex justify-center">
            <img 
                src="https://github.com/ahad5333.png" 
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