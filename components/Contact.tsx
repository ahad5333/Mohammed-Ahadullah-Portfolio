import React from 'react';
import { SOCIAL_LINKS, HERO_CONTENT } from '../constants';

// Fix: Make children prop optional to work around a potential type-checking issue.
const SectionTitle = ({ children }: { children?: React.ReactNode }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{children}</h2>
);

const Contact: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-20 md:py-32 border-t border-slate-200 dark:border-slate-800">
      <div className="text-center">
        <SectionTitle>Get In Touch</SectionTitle>
        <p className="max-w-xl mx-auto text-lg text-slate-500 dark:text-slate-400 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.
        </p>
        <a 
          href="mailto:ahad53344@gmail.com"
          className="inline-block bg-accent text-white font-semibold py-3 px-8 rounded-lg hover:brightness-90 transition-all duration-300 shadow-lg shadow-rose-500/30 dark:shadow-rose-400/30"
        >
          Say Hello
        </a>
        <div className="flex justify-center items-center gap-6 mt-12 mb-8">
          {SOCIAL_LINKS.map((social) => (
            <a 
              key={social.name} 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={social.name}
              className="text-slate-500 dark:text-slate-400 hover:text-accent dark:hover:text-dark-accent transition-transform duration-300 hover:scale-110"
            >
              <social.icon className="h-7 w-7" />
            </a>
          ))}
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          &copy; {currentYear} {HERO_CONTENT.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;