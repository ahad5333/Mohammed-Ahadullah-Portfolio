
import React from 'react';
import { HERO_CONTENT, SOCIAL_LINKS, NAV_LINKS } from '../constants';

const Hero: React.FC = () => {
  const resumeLink = NAV_LINKS.find(link => link.name === 'Resume')?.href;

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col justify-center py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-800 to-slate-500 dark:from-slate-50 dark:to-slate-400 py-2 animate-fade-in-up"
         style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
          {HERO_CONTENT.name}
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold text-slate-500 dark:text-slate-400 mt-4 animate-fade-in-up"
         style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
          {HERO_CONTENT.title}
        </h2>
        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mt-6 max-w-2xl mx-auto animate-fade-in-up"
         style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
          {HERO_CONTENT.subtitle}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 mt-10 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
            <a 
              href="#contact"
              onClick={handleContactClick}
              className="inline-block bg-accent text-white font-semibold py-3 px-8 rounded-lg hover:brightness-90 transition-all duration-300 shadow-lg shadow-rose-500/30 dark:shadow-rose-400/30"
            >
              Contact Me
            </a>
            <a 
              href={resumeLink || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-accent text-accent dark:border-dark-accent dark:text-dark-accent font-semibold py-[10px] px-8 rounded-lg hover:bg-accent/10 dark:hover:bg-dark-accent/10 transition-all duration-300"
            >
              View Resume
            </a>
        </div>
        <div className="flex justify-center items-center gap-6 mt-12 animate-fade-in-up"
         style={{ animationDelay: '0.5s', animationFillMode: 'backwards' }}>
          {SOCIAL_LINKS.map((social) => (
            <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}
              className="text-slate-500 dark:text-slate-400 hover:text-accent dark:hover:text-dark-accent transition-transform duration-300 hover:scale-110">
              <social.icon className="h-7 w-7" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
