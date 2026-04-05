import React from 'react';
import { motion } from 'motion/react';
import { HERO_CONTENT, SOCIAL_LINKS, PROFILE_IMAGE_URL, RESUME_URL } from '../constants';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300/30 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300/30 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <img 
              src={PROFILE_IMAGE_URL}
              alt={HERO_CONTENT.name}
              referrerPolicy="no-referrer"
              className="relative w-32 h-32 md:w-48 md:h-48 rounded-2xl object-cover border-2 border-white/50 dark:border-slate-800/50 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-accent font-display font-medium tracking-widest uppercase text-sm mb-4">
              Available for new projects
            </h2>
            <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              {HERO_CONTENT.name}
            </h1>
            <p className="text-xl md:text-3xl font-display text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              {HERO_CONTENT.title}
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-500 mb-10 max-w-xl mx-auto">
              {HERO_CONTENT.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a 
              href="#contact"
              onClick={handleContactClick}
              className="group flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-lg"
            >
              Resume
              <Download className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16 flex gap-6"
          >
            {SOCIAL_LINKS.map((social) => (
              <a 
                key={social.name} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-accent transition-colors duration-300"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;